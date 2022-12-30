import * as React from "react";
import * as styles from "../styles/experience.module.scss";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Bold = ({ children }: { children: any }) => (
  <span className="bold">{children}</span>
);
const Text = ({ children }: { children: any }) => (
  <p className="align-center">{children}</p>
);
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      );
    },
  },
};
type Props = {
  education: any;
  work: any;
  skills: any;
};
const Experience = ({ education, work, skills }: Props) => {
  return (
    <>
      <div className={styles.sectionInfo}>
        <p className={styles.sectionName}>Experience</p>
      </div>
      <div className={styles.experienceSection}>
        <div className={styles.leftSide}>
          <h2 className={styles.currentJob}> {work[0].jobTitle}</h2>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.workExperience}>
            <h3 className={styles.experienceTitle}> Work Experience </h3>
            {work.map((item: any, index: number) => (
              <div
                className={styles.workExperienceItem}
                key={`workexperience-${index}`}
              >
                <p className={styles.firstRow}>
                  <span>
                    <strong>{item.jobTitle}</strong>
                  </span>
                  <span className={styles.dates}>
                    {item.fromDate} - {item.toDate}
                  </span>
                </p>
                <div className={styles.secondRow}>
                  {item.companyUrl ? (
                    <>
                      <a
                        className={styles.companyLink}
                        href={item.companyUrl}
                        title={`Visit ${item.companyName}`}
                      >
                        {item.companyName}
                      </a>
                    </>
                  ) : (
                    <p className={styles.secondRowText}> {item.companyName}</p>
                  )}
                  <p className={styles.secondRowText}>{item.location}</p>
                </div>
                <div className={styles.thirdRow}>
                  {item.listOfResponsabilities &&
                    renderRichText(item.listOfResponsabilities, options)}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.education}>
            <h3 className={styles.experienceTitle}> Education </h3>
            {education.map((item: any, index: number) => (
              <div className={styles.educationItem} key={`education-${index}`}>
                <p className={`${styles.row} ${styles.educationFirstRow}`}>
                  <span>
                    <strong>{item.nameOfEducation}</strong>
                  </span>
                  <span className={styles.dates}>
                    {item.fromDate}- {item.toDate}
                  </span>
                </p>
                <p className={`${styles.row} ${styles.middleRow}`}>
                  {item.nameOfUniversity}
                </p>
                <p className={styles.row}>{item.location}</p>
              </div>
            ))}
          </div>
          <div className={styles.skills}>
            <h3 className={styles.experienceTitle}> Skills </h3>
            <div className={styles.skillsDisplay}>
              {skills.map((skill:any, index:number) => (
                <p className={styles.skill}>- {skill.skillsName}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
