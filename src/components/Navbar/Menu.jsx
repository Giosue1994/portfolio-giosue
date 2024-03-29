import { useState } from "react";
import { MobileView, isMobile } from "react-device-detect";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { MENU } from "../../data";
import SocialIcons from "../UI/SocialIcons";

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
        <MobileView>
          <MenuItem
            name="Contact me"
            link="#contacts"
            onActive={handleClickMenu}
            isActive={activeLink}
          />
        </MobileView>
      </ul>

      <MobileView>
        <motion.div
          className={classes["social-icons-mobile"]}
          variants={variants}
        >
          <SocialIcons />
        </motion.div>
      </MobileView>
    </motion.div>
  );
}
