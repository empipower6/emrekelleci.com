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
  jobTitle: string;
  bigDesc: any;
  leftDesc: any;
  rightDesc: any;
};
const Experience = ({ leftDesc, rightDesc }: Props) => {
  return (
    <div className={styles.experienceSection}>
      
    </div>
  );
};

export default Experience;
