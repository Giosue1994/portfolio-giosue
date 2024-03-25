import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import classes from "./ProjectItem.module.scss";

export default function ProjectItem({ project }) {
  return (
    <Col xs={12} md={4} className={classes["project-box"]}>
      <motion.div
        key="list"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -50, opacity: 0 }}
        className={classes["project-image"]}
      >
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
      </motion.div>
    </Col>
  );
}
