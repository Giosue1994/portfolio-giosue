import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";

import { PROJECTS } from "../../projects.js";

import classes from "./Projects.module.scss";
import ProjectsTabs from "./ProjectsTabs.jsx";
import ProjectItem from "./ProjectItem.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [projectsTypeSelected, setProjectsTypeSelected] = useState("custom");

  useEffect(() => {
    AOS.init();
  }, []);

  function handleClickProjectsType(value) {
    setProjectsTypeSelected(value);
  }

  const filteredProjects = {
    [projectsTypeSelected]: PROJECTS.filter(
      (projectsType) => projectsType.type === projectsTypeSelected
    ),
  };

  const displayProjects = filteredProjects[projectsTypeSelected];

  return (
    <section id="projects" className={classes.projects}>
      <Container>
        <Row>
          <Col>
            <h2 data-aos="zoom-out-up">Projects</h2>
            <p data-aos="zoom-out-up">
              Here some projects I&apos;ve worked on.
            </p>
          </Col>
        </Row>

        <div>
          <ProjectsTabs
            projects={PROJECTS}
            onSelectType={handleClickProjectsType}
            selectedType={projectsTypeSelected}
          />

          <AnimatePresence mode="wait">
            <Row className={classes["projects-grid"]}>
              {displayProjects[0].projects.map((project) => (
                <ProjectItem key={project.name} project={project} />
              ))}
            </Row>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
