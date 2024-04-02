import { useRef, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { register } from "swiper/element/bundle";
import AOS from "aos";
import "aos/dist/aos.css";

import { SKILLS } from "../data";
import classes from "./Skills.module.scss";

const draw = (level) => {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: level,
        opacity: 1,
        transition: {
          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };
};

export default function Skills() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    register();

    const swiperParams = {
      slidesPerView: 3,
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: #4567b3;
            svg {
              width: 30px;
              height: 30px;
            }
          }
          .swiper-pagination-bullet{
            background-color: #4567b3;
          }
      `,
      ],
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <section id="skills" className={classes.skills}>
      <Container>
        <div className={classes["skills-box"]}>
          <Row>
            <Col>
              <div className={classes["text-content"]}>
                <h2>Skills</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={classes["skills-slider"]}>
                <swiper-container init="false" ref={swiperElRef}>
                  {SKILLS.map((skill) => (
                    <swiper-slide key={skill.name}>
                      <div className={classes["skill-item"]}>
                        <img src={skill.image} alt={skill.name} />
                        <p>{skill.name}</p>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
