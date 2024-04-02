import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slide as MobileMenu } from "react-burger-menu";
import { MENU } from "../../data";
import MenuItem from "../Navbar/MenuItem";
import SocialIcons from "../UI/SocialIcons";

import classes from "./Sidebar.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Sidebar() {
  const [blur, setBlur] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  function handleClickMenu(value) {
    setActiveLink(value.toLocaleLowerCase());
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    });
  }, []);

  let logoBlur;

  if (blur) {
    logoBlur = {
      backdropFilter: "blur(30px)",
      backgroundColor: "rgba(69, 104, 179, 0.5)",
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
      borderRadius: "50px",
    };
  } else {
    logoBlur = {
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(69, 104, 179, 0)",
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      borderRadius: "0px",
    };
  }

  return (
    <>
      <motion.div
        animate={logoBlur}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={classes.logo}
      >
        <a href="#home">GL</a>
      </motion.div>

      <div className={classes.nav}>
        <MobileMenu right>
          <motion.ul variants={variants}>
            {MENU.map((item) => (
              <MenuItem
                classItem="item"
                name={item.name}
                link={item.link}
                key={item.link}
                onActive={handleClickMenu}
                isActive={activeLink}
              />
            ))}
            <MenuItem
              classItem="item"
              name="Contact me"
              link="mailto:giosuelentini94@outlook.com"
              onActive={handleClickMenu}
              isActive={activeLink}
            />
          </motion.ul>

          <motion.div className={classes["social-icons-mobile"]}>
            <SocialIcons />
          </motion.div>
        </MobileMenu>
      </div>
    </>
  );
}
