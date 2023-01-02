import React from "react";
import * as styles from "../styles/intro.module.scss";
type Props = {
  aboutRef: any;
  expRef: any;
  contactRef: any;
  projectsRef: any;
};
const Menu = ({ aboutRef, expRef, contactRef, projectsRef }: Props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.leftSide}>
        <button
          onClick={() => {
            aboutRef && aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.menuItem}
        >
          About
        </button>
        <button
          onClick={() => {
            expRef && expRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.menuItem}
        >
          Experience
        </button>
      </div>
      <div className={styles.rightSide}>
        <button
          onClick={() => {
            contactRef &&
              contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.menuItem}
        >
          Contact Me
        </button>
        <button
          onClick={() => {
            projectsRef &&
              projectsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.menuItem}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Menu;
