import * as React from "react";
import * as styles from "../styles/about.module.scss";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ContentfulRichTextGatsbyReference, renderRichText, RenderRichTextData } from "gatsby-source-contentful/rich-text";

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
  jobTitle: string;
  bigDesc: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  leftDesc: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  scrollRef: any;
};
const About = ({ jobTitle, bigDesc, leftDesc,scrollRef }: Props) => {
  return (
    <>
      <div className={styles.aboutSection} ref={scrollRef}>
        <div className={styles.sectionInfo}>
          <div className={styles.leftSide}>
            <p className={styles.sectionName}>About</p>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.sectionName}>{jobTitle}</p>
          </div>
        </div>
        <div className={styles.bigDescription}>
          {bigDesc && renderRichText(bigDesc, options)}
        </div>
      </div>
      <div className={styles.dividedDesciptions}>
        <div className={styles.leftSide}>
          {bigDesc && renderRichText(leftDesc, options)}
        </div>
      </div>
    </>
  );
};

export default About;
