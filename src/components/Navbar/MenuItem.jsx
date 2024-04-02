import { motion } from "framer-motion";
import classes from "./MenuItem.module.scss";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MenuItem({
  name,
  link,
  onActive,
  isActive,
  classItem,
}) {
  let itemClass = classes["menu-item"];

  if (isActive === name.toLocaleLowerCase()) {
    itemClass += " " + classes.active;
  }

  return (
    <motion.li
      className={`${itemClass} ${classItem}`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={link} onClick={() => onActive(name)}>
        {name}
      </a>
      {isActive === name.toLocaleLowerCase() && (
        <motion.div
          layoutId="menu-indicator"
          className="active-menu-indicator"
        />
      )}
    </motion.li>
  );
}
