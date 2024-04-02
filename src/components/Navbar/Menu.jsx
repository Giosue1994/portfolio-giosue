import { useState } from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { MENU } from "../../data";

import classes from "./Menu.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Menu() {
  const [activeLink, setActiveLink] = useState("home");

  function handleClickMenu(value) {
    setActiveLink(value.toLocaleLowerCase());
  }

  return (
    <motion.div className={classes.menu} variants={variants}>
      <ul className={classes["list-menu"]}>
        {MENU.map((item) => (
          <MenuItem
            name={item.name}
            link={item.link}
            key={item.link}
            onActive={handleClickMenu}
            isActive={activeLink}
          />
        ))}
      </ul>
    </motion.div>
  );
}
