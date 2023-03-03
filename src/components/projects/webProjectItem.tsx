import React, { useEffect, useRef, useState } from "react";
import * as styles from "../../styles/projects.module.scss";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Sign from "../svgs/sign";
import { gsap } from "gsap";
import HoverImage from "./hoverImage";

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
  index,
}: Props) {
  const projectImg = getImage(image);
  const [open, toggle] = useState(false);
  const [hoverImage, setHoverImage] = useState(false);
  const projectRef = useRef<null | HTMLButtonElement>(null);
  const imageRef = useRef<null | HTMLDivElement>(null);
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
        return <></>;
      },
    },
  };
  useEffect(() => {
    if (open) {
      gsap.fromTo(projectRef.current, { height: "40px" }, { height: "auto" });
    } else {
      gsap.to(projectRef.current, { height: "40px" });
      setHoverImage(false);
    }
  }, [open]);
  return (
    <div className={styles.projectWrapper}>
      <button
        ref={projectRef}
        onClick={(e) => {
          if (e.target !== linkRef.current) {
            toggle(!open);
          }
        }}
        onMouseOver={(e) => {
          setHoverImage(true);
        }}
        onMouseOut={() => {
          setHoverImage(false);
        }}
        className={`${index === 0 ? styles.firstItem : ""} ${
          styles.webProjectItem
        }`}
      >
        <div className={styles.left}>
          <p className={styles.text}>ssssssss{title.toLowerCase()}</p>
          <a
            className={styles.visit}
            ref={linkRef}
            href={link}
            title={`Visit ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.siteContent}>
            <div className={styles.desc}>
              {renderRichText(description, options)}
            </div>
            <p className={styles.techs}>
              <strong>Technologies: </strong>
              {tech}
            </p>

            {image && projectImg ? (
              <div className={styles.projectImage} ref={imageRef}>
                <GatsbyImage
                  image={projectImg}
                  loading="eager"
                  alt={`A snippet image for the ${title} project`}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.sign}>
            <Sign isPlus={open ? true : false} height="20px" />
          </div>
        </div>
      </button>
      {/* {image && projectImg && !open ? (
        <div className={hoverImage ? styles.hovered : styles.nonHovered}>
          <HoverImage title={title} image={projectImg} index={index} />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default WebProjectItem;
