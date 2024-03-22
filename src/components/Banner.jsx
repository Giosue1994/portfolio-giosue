import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Banner.module.scss";
import astronauta from "../assets/astronauta.png";

export default function Banner() {
  return (
    <section id="home" className={classes.banner}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} className={classes.content}>
            <h4>Welcome to my portfolio</h4>
            <h2>Hi, I&apos;m Giosuè, Web Developer </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              laborum sapiente quod. Earum ipsam sequi iste inventore id
              voluptatibus, quod tempore sed est veniam aut at quis nobis natus
              tempora.
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
