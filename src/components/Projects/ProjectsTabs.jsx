import { motion } from "framer-motion";
import classes from "./ProjectsTabs.module.scss";

function Tab({ onSelect, children, isSelected }) {
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
      <ul>
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
