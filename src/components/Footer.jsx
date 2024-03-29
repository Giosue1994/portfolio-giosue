import { Container, Row, Col } from "react-bootstrap";
import classes from "./Footer.module.scss";
import SocialIcons from "./UI/SocialIcons";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col size={12} sm={4}>
            <div className={classes.logo}>GL</div>
          </Col>
          <Col size={12} sm={8} className="text-center text-sm-end">
            <SocialIcons />
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
