import * as React from "react";
import * as styles from "../styles/layout.module.scss";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";
import Layout from "../components/layout";
import { graphql } from "gatsby";
const HomePage = ({ data }: { data: any }) => {
  console.log(data.allContentfulAboutSection.nodes[0]);
  return (
    <Layout>
      <Intro />
      <About
        jobTitle={data.allContentfulAboutSection.nodes[0].jobTitle}
        bigDesc={data.allContentfulAboutSection.nodes[0].bigDescription}
        leftDesc={data.allContentfulAboutSection.nodes[0].descriptionOnTheLeft}
        rightDesc={
          data.allContentfulAboutSection.nodes[0].descriptionOnTheRightSide
        }
      />
      <Experience
        leftDesc={data.allContentfulAboutSection.nodes[0].descriptionOnTheLeft}
        rightDesc={data.allContentfulAboutSection.nodes[0].descriptionOnTheRightSide} jobTitle={""} bigDesc={undefined}      />
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query MyQuery {
    allContentfulAboutSection {
      nodes {
        bigDescription {
          raw
        }
        descriptionOnTheLeft {
          raw
        }
        descriptionOnTheRightSide {
          raw
        }
        jobTitle
      }
    }
  }
`;
