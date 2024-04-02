import { useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./ProjectsTabs.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";

function Tab({ onSelect, children, isSelected }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <li
      className={isSelected ? classes.selected : undefined}
      onClick={onSelect}
    >
      {children}
      {isSelected && (
        <motion.div
          layoutId="tab-indicator"
          className="active-menu-indicator"
        />
      )}
    </li>
  );
}

export default function ProjectsTabs({ projects, onSelectType, selectedType }) {
  return (
    <menu>
      <ul className={classes.tabs}>
        {projects.map((projectsType) => (
          <Tab
            key={projectsType.title}
            onSelect={() => onSelectType(projectsType.type)}
            isSelected={selectedType === projectsType.type}
          >
            {projectsType.title}
          </Tab>
        ))}
      </ul>
    </menu>
  );
}
