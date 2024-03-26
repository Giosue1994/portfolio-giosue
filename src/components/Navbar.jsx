import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU, SOCIAL } from "../data";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    });
  }, []);

  function handleClickMenu(value) {
    setActiveLink(value.toLocaleLowerCase());
  }

  let headerBlur;

  if (blur) {
    headerBlur = {
      backdropFilter: "blur(30px)",
      backgroundColor: "rgba(69, 104, 179, 0.5)",
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
      borderRadius: "50px",
      top: "10px",
      padding: "10px 30px",
    };
  } else {
    headerBlur = {
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(69, 104, 179, 0)",
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      borderRadius: "0px",
      top: "0px",
      padding: "10px 20px",
    };
  }

  return (
    <AnimatePresence>
      <motion.header animate={headerBlur} className={classes.header}>
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
                  <a
                    href={item.link}
                    onClick={() => handleClickMenu(item.name)}
                  >
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
          <ul className="social-icons">
            {SOCIAL.map((item) => (
              <li key={item.link}>
                <motion.a
                  whileHover={{ backgroundColor: "#4567b3" }}
                  href={item.link}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.a>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,.5)",
              scale: 1.05,
            }}
            className={classes["contact-button"]}
          >
            Contact me
          </motion.button>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
