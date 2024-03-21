import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU, SOCIAL } from "../data";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  function handleClickMenu(value) {
    setActiveLink(value.toLocaleLowerCase());
  }

  return (
    <header className={classes.header}>
      <div className={classes["left-col"]}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 100 }}
          className={classes.logo}
        >
          <a href="#home">GL</a>
        </motion.div>

        <nav className={classes.navbar}>
          <ul>
            {MENU.map((item) => (
              <li
                key={item.link}
                className={
                  activeLink === item.name.toLocaleLowerCase()
                    ? classes.active
                    : undefined
                }
              >
                <a href={item.link} onClick={() => handleClickMenu(item.name)}>
                  {item.name}
                </a>
                {activeLink === item.name.toLocaleLowerCase() && (
                  <motion.div
                    layoutId="menu-indicator"
                    className="active-menu-indicator"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={classes["right-col"]}>
        <ul className={classes["social-icons"]}>
          {SOCIAL.map((item) => (
            <li key={item.link}>
              <a href={item.link} target="_blank">
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>

        <button className={classes["contact-button"]}>Contact me</button>
      </div>
    </header>
  );
}
