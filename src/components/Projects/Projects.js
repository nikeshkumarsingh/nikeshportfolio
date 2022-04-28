import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import Myglamm from "../../Assets/Projects/Chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import youtube from "../../Assets/Projects/youtube.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Myglamm}
              isBlog={false}
              title="MyGlamm.com Clone "
              description="An online Cosmetics e-commerce website frontend build with using JavaScript, Bootstrap, HTML5, and Css3 and backend build with Express and MongoDb. frontend is deployed on netlify and backend on AWS."
              link1="https://github.com/nikeshkumarsingh/Myglamm_with_backend.git"
              link2="https://nikeshandgroup.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube.com Clone"
              description="it is platform where user can serach releted videos I make this website by fetching Google youtube API. I used JavaScript, HTML and CSS3 ."
              link1="https://github.com/nikeshkumarsingh/youtube_clone.git"
              link2="https://youtubeclonebynikesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/max/700/1*h8aaNjy1gahdrRt367nrMg.jpeg"}
              isBlog={false}
              title="PharmEasy.com Clone"
              description="Pharmeasy is an online medical store where people can buy medicine and book doctors’ appointments .health check-ups. this is my first team project.  we build this using HTML, CSS and JavaScript. for storing user detail we used localstorage. initially I faced some issues because it was my first team project but it was great experience"
              link1="https://github.com/nikeshkumarsingh/pharmeasy.git"
              link2="https://pharmeasyclonenik.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
