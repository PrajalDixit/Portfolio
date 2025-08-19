import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mobile from "../../Assets/Projects/mobile.jpeg";
import zip from "../../Assets/Projects/zip.jpeg";
import shopping from "../../Assets/Projects/shopping.jpeg";
import photo from "../../Assets/Projects/photo.jpeg";

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
              imgPath={shopping}
              isBlog={false}
              title="Nero-Vega"
              description="A user-friendly E-commerce app designed
with React Native, enabling users to seamlessly browse
products, add items to their cart, and make secure purchases."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="UEP-Viewer"
              description="The photography app that allows you to
view and purchase UEP action photos, team portraits, and videos
during your event."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zip}
              isBlog={false}
              title="ZipGrid"
              description="ZipSecure is an app security solution to
enhance the safety of gated society.."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobile}
              isBlog={false}
              title="Ananda Wellbeing"
              description="Ananda Wellbeing app is holistic solutions to
manage Healthy body and mind as it provides wellness
assessments, cunsultations and wellness programs, lifestyle
guidance.."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
