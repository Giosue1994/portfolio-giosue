import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimatePresence } from "framer-motion";

import { PROJECTS } from "../../projects.js";

import classes from "./Projects.module.scss";
import ProjectsTabs from "./ProjectsTabs.jsx";
import ProjectItem from "./ProjectItem.jsx";

export default function Projects() {
  const [projectsTypeSelected, setProjectsTypeSelected] = useState("custom");

  function handleClickProjectsType(value) {
    setProjectsTypeSelected(value);
  }

  const filteredProjects = {
    custom: PROJECTS.filter((projectsType) => projectsType.type === "custom"),
    wordpress: PROJECTS.filter(
      (projectsType) => projectsType.type === "wordpress"
    ),
  };

  const displayProjects = filteredProjects[projectsTypeSelected];

  return (
    <section id="projects" className={classes.projects}>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>
        </Row>

        <div>
          <ProjectsTabs
            projects={PROJECTS}
            onSelectType={handleClickProjectsType}
            selectedType={projectsTypeSelected}
          />

          <AnimatePresence mode="wait">
            {displayProjects.length === 0 && (
              <p key="fallback">Nessuno progetto disponibile</p>
            )}
            {displayProjects.length > 0 && (
              <Row className={classes["projects-grid"]}>
                {displayProjects[0].projects.map((project) => (
                  <ProjectItem key={project.name} project={project} />
                ))}
              </Row>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
