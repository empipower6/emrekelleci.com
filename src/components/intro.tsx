import * as React from "react";
import * as styles from "../styles/intro.module.scss";
import Menu from "./menu";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
type Props = {
  aboutLoc: any;
  expLoc: any;
  contactLoc: any;
  projectsLoc: any;
};
const Intro = ({ aboutLoc, expLoc, contactLoc, projectsLoc }: Props) => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  useLayoutEffect(() => {
    if (!isMobile) {
      ScrollTrigger.create({
        trigger: introRef.current,
        pin: true,
        start: "top top",
        end: "+=200%",
      });
      gsap.to(titleRef.current, {
        scrollTrigger: {
          scrub: true,
          start: "top top",
          end: "+=200%",
        },
        top: `67%`,
      });
    }
  }, []);
  return (
    <div className={styles.introSection} ref={introRef}>
      <h1 className={styles.title} style={{ top: `0%` }} ref={titleRef}>
        <span className={styles.titleItem}>
          <span className={styles.name}>E</span>
        </span>
        <span className={styles.titleItem}>
          <span className={styles.name}>M</span>
        </span>
        <span className={styles.titleItem}>
          <span className={styles.name}>R</span>
        </span>
        <span className={styles.titleItem}>
          <span className={styles.name}>E</span>
        </span>
        <span className={styles.titleItem}>
          <span className={styles.name}>&nbsp;</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>K</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>E</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>L</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>L</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>E</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>C</span>
        </span>
        <span className={`${styles.titleItem} ${styles.rightAlign}`}>
          <span className={styles.lastName}>I</span>
        </span>
      </h1>
      {/* <div className={styles.animations}></div> */}
      <div className={styles.introBottom}>
        <Menu aboutRef={aboutLoc} expRef={expLoc} contactRef={contactLoc} projectsRef={projectsLoc} />
      </div>
    </div>
  );
};

export default Intro;
