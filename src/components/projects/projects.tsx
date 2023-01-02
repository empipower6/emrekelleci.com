import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text";
import React from "react";
import * as styles from "../../styles/projects.module.scss";
import WebProjectItem from "./webProjectItem";

type Props = {
  projects: [
    {
      description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      projectName: string;
      technologies: string;
      url: string;
      websiteSnippet: any;
    }
  ];
  scrollRef: any;
};
function Projects({ projects, scrollRef }: Props) {
  return (
    <>
      <div className={styles.sectionInfo} ref={scrollRef}>
        <p className={styles.sectionName}>Projects</p>
      </div>
      <div className={styles.projectsSection}>
        <h3 className={styles.projectsTitle}>Web Development</h3>
        <div className={styles.allProjects}>
          {projects.map((item, index) => (
            <WebProjectItem
              title={item.projectName}
              description={item.description}
              tech={item.technologies}
              link={item.url}
              image={item.websiteSnippet}
              key={`webproject-${index}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
