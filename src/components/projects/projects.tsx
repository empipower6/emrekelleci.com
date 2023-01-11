import {
  RenderRichTextData,
  ContentfulRichTextGatsbyReference,
} from "gatsby-source-contentful/rich-text";
import React, { useState } from "react";
import * as styles from "../../styles/projects.module.scss";
import WebProjectItem from "./webProjectItem";
import Artwork from "./artwork";
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
  artworks: [
    {
      caption: string;
      media_type: string;
      media_url: string;
      permalink: string;
      thumbnail_url: string;
      localImage: any;
    }
  ];
  scrollRef: any;
};
function Projects({ projects, scrollRef, artworks }: Props) {
  const [artProjectsState, setArtProjects] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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
      <div className={`${styles.projectsSection} ${styles.secondSection}`}>
        <h3 className={styles.projectsTitle}>Art Work</h3>
        <div className={styles.allProjects}>
          {artworks.map((item: any, index: number) => (
            <Artwork
              data={item}
              index={index}
              key={`artwork-${index}`}
              artProjectState={artProjectsState}
              toggleProjects={setArtProjects}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
