import * as React from "react";
import * as styles from "../styles/layout.module.scss";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";
import Layout from "../components/layout";
import { graphql } from "gatsby";
export const Head = () => (
  <>
    <title>Emre Kelleci</title>
    <meta name="description" content="Emre Kelleci's Website" />
    <meta name="keywords" content="Web Developer, Emre Kelleci, Full Stack" />
    <meta property="og:title" content="Emre Kelleci" />
    <meta
      property="og:description"
      content="Emre Kelleci's Website"
    />
    {/* <meta
      property="og:image"
      content="https://assets.rabbitsreviews.com/images/rr-logo/00-default/OGLogo.png"
    /> */}
    <meta
      property="og:url"
      name="title"
      content="www.emrekelleci.com"
    />
    <link rel="canonical" href="www.emrekelleci.com" />
  </>
);
const HomePage = ({ data }: { data: any }) => {
  return (
    <>
      <Layout>
        <Intro />
        <About
          jobTitle={data.allContentfulAboutSection.nodes[0].jobTitle}
          bigDesc={data.allContentfulAboutSection.nodes[0].bigDescription}
          leftDesc={
            data.allContentfulAboutSection.nodes[0].descriptionOnTheLeft
          }
          rightDesc={
            data.allContentfulAboutSection.nodes[0].descriptionOnTheRightSide
          }
        />
        <Experience
          education={
            data.allContentfulEducation.nodes
          }
          work={
            data.allContentfulWorkExperience.nodes
          }
          skills={
            data.allContentfulAllSkills.nodes[0].skillReference
          }
        />
      </Layout>
    </>
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
    allContentfulWorkExperience(sort: {orderInTheWebsite: DESC}) {
      nodes {
        companyName
        companyUrl
        fromDate
        jobTitle
        location
        orderInTheWebsite
        toDate
        listOfResponsabilities {
          raw
        }
      }
    }
    allContentfulEducation(sort: {websiteOrder: DESC}) {
      nodes {
        fromDate
        location
        nameOfEducation
        nameOfUniversity
        toDate
        websiteOrder
      }
    }
    allContentfulAllSkills {
      nodes {
        skillReference {
          skillsName
        }
      }
    }
  }
`;
