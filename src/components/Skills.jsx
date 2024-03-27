import { useRef, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";

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
    register();

    const swiperParams = {
      slidesPerView: 3,
      navigation: true,
      pagination: true,
      breakpoints: {
        420: {
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi deserunt excepturi velit. Error quidem sequi sapiente
                  ipsum officia aspernatur excepturi quod nostrum ex dignissimos
                  doloremque, aut aliquid! Officiis, nobis. Unde!
                </p>
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
                        <motion.svg
                          width="150"
                          height="150"
                          viewBox="0 0 150 150"
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.circle
                            cx="75"
                            cy="75"
                            r="60"
                            stroke="#4567b3"
                            variants={draw(skill.level)}
                            custom={1}
                          />
                          <text
                            x="55px"
                            y="120px"
                            fill="#b8c9ef"
                            fontSize="32px"
                            fontWeight="bold"
                          >
                            {skill.level * 100}%
                          </text>
                        </motion.svg>
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
