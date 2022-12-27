import * as React from "react";
import * as styles from "../styles/intro.module.scss";
import Menu from "./menu";
const Intro = () => {
  return (
    <div className={styles.introSection}>
      <h1 className={styles.title} style={{ top: `20vw` }}>
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
        <Menu />
      </div>
    </div>
  );
};

export default Intro;
