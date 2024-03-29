import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import Menu from "../Navbar/Menu";

import classes from "./Sidebar.module.scss";

const sidebar = {
  open: (height = 2000) => ({
    clipPath: `circle(${height * 2 + 200}px at 259px 41px)`,
    backgroundColor: "rgba(69, 104, 179, 0.5)",
    transition: {
      // type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 259px 41px)",
    backgroundColor: "rgba(184, 201, 239, 0.5)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={classes.nav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={classes.background} variants={sidebar} />
      <Menu />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
