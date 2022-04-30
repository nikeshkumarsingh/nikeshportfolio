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
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
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
              description="MYGLAMM is an ecommerce shopping web application which provides international beauty products - skin care, makeup kit, cosmetics. We had to clone this website. This was a collaborative project built by a team of 4 executed in just 5 days. Tech stack used: HTML, JavaSript, Bootstrap, CSS, AWS and netlify"
              link1="https://github.com/nikeshkumarsingh/Myglamm_with_backend.git"
              link2="https://nikeshandgroup.netlify.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube.com Clone"
              description="It is platform where user can serach releted videos. I make this website by fetching Google youtube API and map to the html element and do some CSS  style grid to achive the UI and I used light and dark mode to it . TECH  STACK  i used : HTML,Google API, CSS and JavaScript .It was a great experience of handling data in frontend "
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nikeshkumarsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nikeshKumar1947"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nikesh-kumar-singh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <Popup trigger={<li className="social-icons"><a rel="noreferrer" className="icon-colour  home-social-icons">< AiFillPhone/></a></li>}><div>+91 6205021314</div></Popup>
              <li  className="social-icons"><a rel="noreferrer" href="mailto:nikeshmasai@gmail.com" className="icon-colour  home-social-icons"><AiOutlineMail/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
