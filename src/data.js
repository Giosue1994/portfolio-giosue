import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import reactImg from "./assets/skills/react.svg";
import nextJsImg from "./assets/skills/next-js.svg";
import reduxImg from "./assets/skills/redux.svg";
import javascriptImg from "./assets/skills/js.svg";
import wordpressImg from "./assets/skills/wordpress.svg";
import phpImg from "./assets/skills/php.svg";
import htmlImg from "./assets/skills/html.svg";
import cssImg from "./assets/skills/css.svg";
import bootstrapImg from "./assets/skills/bootstrap.svg";
import tailwindImg from "./assets/skills/tailwind.svg";
import jqueryImg from "./assets/skills/jquery.svg";

export const MENU = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

export const SOCIAL = [
  {
    link: "https://www.linkedin.com/in/giosu%C3%A8-lentini-9228801aa/",
    icon: faLinkedinIn,
  },
  {
    link: "https://github.com/Giosue1994/",
    icon: faGithub,
  },
  // {
  //   link: "https://www.instagram.com/giosue94/",
  //   icon: faInstagram,
  // },
];

export const SKILLS = [
  { name: "Next.js", image: nextJsImg },
  { name: "React", image: reactImg },
  { name: "Redux", image: reduxImg },
  { name: "Tailwind", image: tailwindImg },
  { name: "Javascript", image: javascriptImg },
  { name: "jQuery", image: jqueryImg },
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: cssImg },
  { name: "Bootstrap", image: bootstrapImg },
  { name: "Wordpress", image: wordpressImg },
  { name: "PHP", image: phpImg },
];
