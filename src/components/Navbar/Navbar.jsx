import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Navbar.module.scss";
import Menu from "./Menu";
import SocialIcons from "../UI/SocialIcons";

export default function Navbar() {
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
            <Menu />
          </nav>
        </div>
        <div className={classes["right-col"]}>
          <SocialIcons />
          <motion.a
            href="#contacts"
            whileHover={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,.5)",
              scale: 1.05,
            }}
            className={classes["contact-button"]}
          >
            Contact me
          </motion.a>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
