import React from "react";
import * as styles from "../styles/contact.module.scss";

type Props = {
  contactData: [
    { email: string; github: string; instagram: string; linkedin: string }
  ];
};
function Contact({ contactData }: Props) {
  return (
    <>
      <div className={styles.sectionInfo}>
        <p className={styles.sectionName}>Contact Me</p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.emailSection}>
          <a
            href={`mailto:${contactData[0].email}`}
            title="Email Me"
            className={styles.emailAnchor}
            rel="noopener noreferrer"
            target="_blank"
          >
            {String(contactData[0].email).split("@")[0]}
            <span className={styles.grey}>
              @{String(contactData[0].email).split("@")[1]}
            </span>
          </a>
        </div>
      </div>
      <div className={styles.otherLinks}>
        <div className={styles.column}>
          <a
            className={styles.anchorLink}
            href={contactData[0].github}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className={styles.anchorLink}
            href={contactData[0].linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className={styles.anchorLink}
            href={contactData[0].instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
