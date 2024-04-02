import { Container, Row, Col } from "react-bootstrap";
import classes from "./Footer.module.scss";
import SocialIcons from "./UI/SocialIcons";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col xs={4} sm={4}>
            <div className={classes.logo}>GL</div>
          </Col>
          <Col xs={8} sm={8} className="text-end">
            <SocialIcons />
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
