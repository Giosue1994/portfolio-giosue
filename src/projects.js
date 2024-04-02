import andersenImg from "./assets/custom-theme/andersen.png";
import nativusImg from "./assets/custom-theme/nativus.png";
import maddalenaImg from "./assets/custom-theme/maddalena.png";
import leonardoImg from "./assets/custom-theme/leonardo-tranciati.png";
import bizawayImg from "./assets/custom-theme/bizaway.png";
import pilosioImg from "./assets/custom-theme/pilosio.png";
import teatroVerdiImg from "./assets/custom-theme/teatro-verdi.png";

import coslovichImg from "./assets/wordpress-theme/coslovich.png";
import diniImg from "./assets/wordpress-theme/dini-dental.png";
import giorgiuttiImg from "./assets/wordpress-theme/giorgiutti.png";
import ristorante1905Img from "./assets/wordpress-theme/ristorante1905.png";
import shuraImg from "./assets/wordpress-theme/shura.png";
import unionwoodImg from "./assets/wordpress-theme/unionwood.png";

import portfolioImg from "./assets/react-app/portfolio.png";

export const PROJECTS = [
  {
    type: "custom",
    title: "Custom Theme",
    projects: [
      {
        name: "Andersen",
        image: andersenImg,
        link: "https://andersen.media/",
      },
      {
        name: "Nativus",
        image: nativusImg,
        link: "https://www.resinenativus.it/",
      },
      {
        name: "Maddalena",
        image: maddalenaImg,
        link: "https://www.maddalena.it/",
      },
      {
        name: "Pilosio",
        image: pilosioImg,
        link: "https://pilosio.com/",
      },
      {
        name: "Leonardo tranciati",
        image: leonardoImg,
        link: "https://www.leonardotranciati.it/",
      },
      {
        name: "Bizaway",
        image: bizawayImg,
        link: "https://bizaway.com/",
      },
      {
        name: "Teatro Verdi Pordenone",
        image: teatroVerdiImg,
        link: "https://teatroverdipordenone.it/",
      },
    ],
  },
  {
    type: "wordpress",
    title: "Wordpress Theme",
    projects: [
      {
        name: "Dini Dental",
        image: diniImg,
        link: "https://www.dinidentalteam.com/",
      },
      {
        name: "Shura",
        image: shuraImg,
        link: "https://shura.apartments/",
      },
      {
        name: "Ristorante 1905",
        image: ristorante1905Img,
        link: "https://www.ristorante1905.com/",
      },
      {
        name: "Unionwood",
        image: unionwoodImg,
        link: "https://www.unionwood.it/",
      },
      {
        name: "Giorgiutti",
        image: giorgiuttiImg,
        link: "https://www.giorgiutti.it/",
      },
      {
        name: "Revisioni Coslovich",
        image: coslovichImg,
        link: "https://revisionicoslovich.com/",
      },
    ],
  },
  {
    title: "React App",
    projects: [
      {
        name: "Personal Portfolio",
        image: portfolioImg,
        link: "/",
      },
    ],
  },
];
