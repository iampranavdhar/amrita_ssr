import React from "react";
import { Container, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Col md="4" className="footer-copywright">
        <h3>Designed and Developed by SSR team</h3>
        <h3>Copyright © {year} SB</h3>
      </Col>
    </Container>
  );
}

export default Footer;
