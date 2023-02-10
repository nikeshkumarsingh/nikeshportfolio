import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCard";
import Particle from "../Particle";
import JsBasic from "../../Assets/Certific/JavaScriptBasic.png";
import JsIntermed from "../../Assets/Certific/JavaScriptIntermed.png";
import NodeBasic from "../../Assets/Certific/NodeBasic.png";
import ReactBasic from "../../Assets/Certific/ReactBasic.png";
import 'reactjs-popup/dist/index.css';
function Certificate() {
  return (
    <Container fluid id="kyajeeta" className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my few Certification.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <CertificateCards
              imgPath={JsBasic}
              isBlog={false}
              title="HackerRank-JavaScript(Basic)"
              link1="https://www.hackerrank.com/certificates/cd1105cb3fd9"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={JsIntermed}
              isBlog={false}
              title="HackerRank-JavaScript(Intermediate)"
              link1="https://www.hackerrank.com/certificates/83c719920b1c"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={NodeBasic}
              isBlog={false}
              title="HackerRank-Node(Basic)"
              link1="https://www.hackerrank.com/certificates/b0d013444667"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={ReactBasic}
              isBlog={false}
              title="HackerRank-React(Basic)"
              link1="https://www.hackerrank.com/certificates/5899a59cbebc"
             
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Certificate;