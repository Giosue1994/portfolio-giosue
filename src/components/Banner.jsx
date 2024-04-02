import { Container, Row, Col } from "react-bootstrap";
import classes from "./Banner.module.scss";
import astronauta from "../assets/astronauta.png";

export default function Banner() {
  return (
    <section id="home" className={classes.banner}>
      <div className={classes.filter}></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} className={classes.content}>
            <h5 className={classes["top-title"]}>Welcome to my portfolio</h5>
            <h2 className={classes.title}>Hi, I&apos;m Giosuè.</h2>
            <p>
              Web Developer with 3 years of experience in creating and managing
              websites. I&apos;ve a clear and logical mind with a practical
              approach to problem-solving to tackle challenges, and a strong
              desire to bring each project to completion.
            </p>
          </Col>

          <Col xs={12} md={4} className={classes["banner-image"]}>
            <img src={astronauta} alt="astronauta" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
