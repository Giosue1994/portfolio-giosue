import { useState } from "react";
// import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import useWindowResize from "../../hooks/useWindowsResize";
import MenuItem from "./MenuItem";
import { MENU } from "../../data";
import SocialIcons from "../UI/SocialIcons";

import classes from "./Menu.module.scss";

const MAX_MOBILE_WIDTH = 767;

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
  const isMobile = useWindowResize(MAX_MOBILE_WIDTH);

  function handleClickMenu(value) {
    setActiveLink(value.toLocaleLowerCase());
  }

  return (
    <motion.div
      className={isMobile ? classes["mobile-menu"] : classes.menu}
      variants={variants}
    >
      <ul
        className={
          isMobile ? classes["list-menu-mobile"] : classes["list-menu"]
        }
      >
        {MENU.map((item) => (
          <MenuItem
            name={item.name}
            link={item.link}
            key={item.link}
            onActive={handleClickMenu}
            isActive={activeLink}
          />
        ))}
        {isMobile && (
          <MenuItem
            name="Contact me"
            link="#contacts"
            onActive={handleClickMenu}
            isActive={activeLink}
          />
        )}
      </ul>

      {isMobile && (
        <motion.div
          className={classes["social-icons-mobile"]}
          variants={variants}
        >
          <SocialIcons />
        </motion.div>
      )}
    </motion.div>
  );
}
