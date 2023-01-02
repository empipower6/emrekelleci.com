import React, { useEffect, useRef, useState } from "react";
import * as styles from "../../styles/projects.module.scss";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  title: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  tech: string;
  link: string;
  image: any;
  index: number;
};
function WebProjectItem({
  title,
  description,
  tech,
  link,
  image,
  index
}: Props) {
  const projectImg = getImage(image);
  const [open, toggle] = useState(false);

  const linkRef = useRef(null);
  const Bold = ({ children }: { children: any }) => (
    <span className="bold">{children}</span>
  );
  const Text = ({ children }: { children: any }) => {
    return (
      <p className="align-center">
        {open ? String(children[0]) : shortenText(String(children[0]))}
      </p>
    );
  };
  const shortenText = (text: string) => {
    let count = 65;
    while (text[count] != " ") {
      count++;
    }
    const newText = text.slice(0, count) + "...";
    return newText;
  };
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <>
          </>
        );
      },
    },
  };
  console.log(index);
  return (
    <button
      onClick={(e) => {
        if (e.target !== linkRef.current) {
          toggle(!open);
        }
      }}
      className={`${index === 0? styles.firstItem:''} ${open ? styles.openWebProjectItem : styles.webProjectItem}`}
    >
      <div className={styles.left}>
        <p className={styles.text}>
          <span className={styles.mobileSign}>{open ? " -" : " +"}</span>&nbsp;
          {title}
        </p>
        <a
          className={styles.visit}
          ref={linkRef}
          href={link}
          title={`Visit ${title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Project
        </a>
      </div>
      <div className={styles.right}>
        <div className={styles.siteContent}>
          <div className={open ? styles.desc : styles.closedDesc}>
            {renderRichText(description, options)}
          </div>
          {open ? (
            <p className={styles.techs}>
              <strong>Technologies: </strong>
              {tech}
            </p>
          ) : (
            ""
          )}

          {image && projectImg && open ? (
            <div className={styles.projectImage}>
              <GatsbyImage
                image={projectImg}
                alt={`A snippet image for the ${title} project`}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <p className={open ? styles.minusSign : styles.plusSign}>
          {open ? "-" : "+"}
        </p>
      </div>
    </button>
  );
}

export default WebProjectItem;
