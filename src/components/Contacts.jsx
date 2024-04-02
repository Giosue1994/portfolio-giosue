import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import Input from "./UI/Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import contactImg from "../assets/contact-img.svg";
import classes from "./Contacts.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contacts() {
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  useEffect(() => {
    AOS.init();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    setButtonText("Submitting...");

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    setFirstNameIsValid(isNotEmpty(data.firstName));
    setLastNameIsValid(isNotEmpty(data.lastName));
    setEmailIsValid(isEmail(data.email) && isNotEmpty(data.email));
    setPhoneIsValid(isNotEmpty(data.phone) && hasMinLength(data.phone, 8));

    if (
      !firstNameIsValid ||
      !lastNameIsValid ||
      !emailIsValid ||
      !phoneIsValid
    ) {
      return;
    }

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setButtonText("Send");

    const result = await response.json();

    if (result.code == 200) {
      setStatus({ success: true, message: "Message sent successfully" });
      event.target.reset();
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  }

  return (
    <section id="contacts" className={classes.contacts}>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6} className={classes["image-col"]}>
            <img src={contactImg} alt="immagine contatti" />
          </Col>
          <Col sm={12} md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} md={6}>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    error={!firstNameIsValid && "The field cannot be empty"}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    error={!lastNameIsValid && "The field cannot be empty"}
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    error={
                      !emailIsValid && "Please enter a valid email address."
                    }
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Telephone"
                    error={
                      !phoneIsValid && "Please enter a valid phone number."
                    }
                  />
                </Col>
                <Col>
                  <Input
                    textarea
                    rows="4"
                    name="message"
                    placeholder="Message"
                  />
                </Col>
              </Row>
              <div className={classes.control}>
                <label htmlFor="terms-and-conditions">
                  <div className={classes["check-container"]}>
                    <input
                      type="checkbox"
                      id="terms-and-conditions"
                      name="terms"
                      required
                    />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className={classes["check-bg"]}
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className={classes["check-stroke"]}
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className={classes.check}
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <span>I agree to the terms and conditions</span>
                </label>
              </div>

              <div className={classes.submit}>
                <motion.button
                  className={classes.button}
                  whileHover={{
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,.5)",
                    scale: 1.05,
                  }}
                  type="submit"
                >
                  {buttonText}
                </motion.button>
              </div>

              {status.message && (
                <Col>
                  <div className={classes.status}>
                    <p
                      className={
                        status.success === false
                          ? classes.error
                          : classes.success
                      }
                    >
                      {status.message}
                    </p>
                  </div>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
