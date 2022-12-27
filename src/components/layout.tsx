import React from 'react'
import * as styles from "../styles/layout.module.scss";

function Layout({children}:{children:any}) {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.middleLine}></div>
        {children}
    </div>
  )
}

export default Layout