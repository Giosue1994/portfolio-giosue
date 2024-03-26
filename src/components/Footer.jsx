import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL } from "../data";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col size={12} sm={6}>
            <div className={classes.logo}>GL</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <ul className="social-icons">
              {SOCIAL.map((item) => (
                <li key={item.link}>
                  <motion.a
                    whileHover={{ backgroundColor: "#4567b3" }}
                    href={item.link}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </motion.a>
                </li>
              ))}
            </ul>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
