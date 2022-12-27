import React from "react";
import * as styles from "../styles/intro.module.scss";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.leftSide}>
        <a className={styles.menuItem}>About </a>
        <a className={styles.menuItem}>Work Experience </a>
      </div>
      <div className={styles.rightSide}>
        <a className={styles.menuItem}>Contact Me </a>
        <a className={styles.menuItem}>Projects</a>
      </div>
    </div>
  );
}

export default Menu;
