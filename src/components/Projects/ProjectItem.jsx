import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import classes from "./ProjectItem.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectItem({ project }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col xs={12} sm={6} md={4} className={classes["project-box"]}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -50, opacity: 0 }}
        className={classes["project-image"]}
      >
        <div>
          <a href={project.link} target="_blank">
            <motion.img
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px 0px rgba(0,0,0,1)",
              }}
              transition={{ type: "spring", duration: 0.6 }}
              src={project.image}
              alt={project.name}
            />
          </a>
        </div>
      </motion.div>
    </Col>
  );
}
