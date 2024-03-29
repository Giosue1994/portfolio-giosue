import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL } from "../../data";
import classes from "./SocialIcons.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsIcon = {
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

export default function SocialIcons() {
  return (
    <motion.ul className={classes["social-icons"]} variants={variants}>
      {SOCIAL.map((item) => (
        <motion.li key={item.link} variants={variantsIcon}>
          <motion.a
            whileHover={{ backgroundColor: "#4567b3" }}
            href={item.link}
            target="_blank"
          >
            <FontAwesomeIcon icon={item.icon} />
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
