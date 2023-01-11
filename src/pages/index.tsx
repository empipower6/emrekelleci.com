import * as React from "react";
import * as styles from "../styles/layout.module.scss";
import Intro from "../components/intro";
import About from "../components/about";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Projects from "../components/projects/projects";

import { graphql } from "gatsby";
import { useRef } from "react";
export const Head = () => (
  <>
    <title>Emre Kelleci</title>
    <meta name="description" content="Emre Kelleci's Website" />
    <meta name="keywords" content="Web Developer, Emre Kelleci, Full Stack" />
    <meta property="og:title" content="Emre Kelleci" />
    <meta property="og:description" content="Emre Kelleci's Website" />
    {/* <meta
      property="og:image"
      content="https://assets.rabbitsreviews.com/images/rr-logo/00-default/OGLogo.png"
    /> */}
    <meta property="og:url" name="title" content="https://emrekelleci.com/" />
    <link rel="canonical" href="https://emrekelleci.com/" />
  </>
);
const HomePage = ({ data }: { data: any }) => {
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <>
      <Layout>
        <Intro aboutLoc={aboutRef} expLoc={expRef} contactLoc={contactRef} projectsLoc={projectsRef} />
        <About
          jobTitle={data.allContentfulAboutSection.nodes[0].jobTitle}
          bigDesc={data.allContentfulAboutSection.nodes[0].bigDescription}
          leftDesc={
            data.allContentfulAboutSection.nodes[0].descriptionOnTheLeft
          }
          rightDesc={
            data.allContentfulAboutSection.nodes[0].descriptionOnTheRightSide
          }
          scrollRef={aboutRef}
        />
        <Experience
          education={data.allContentfulEducation.nodes}
          work={data.allContentfulWorkExperience.nodes}
          skills={data.allContentfulAllSkills.nodes[0].skillReference}
          scrollRef={expRef}
        />
        <Contact
          contactData={data.allContentfulContactUsSection.nodes}
          scrollRef={contactRef}
        />
        <Projects
          projects={data.allContentfulWebsiteProject.nodes}
          artworks={data.allInstagramContent.nodes}
          scrollRef={projectsRef}
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
    allContentfulWorkExperience(sort: { orderInTheWebsite: DESC }) {
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
    allContentfulEducation(sort: { websiteOrder: DESC }) {
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
    allContentfulContactUsSection {
      nodes {
        instagram
        email
        github
        linkedin
      }
    }
    allContentfulWebsiteProject(sort: { order: ASC }) {
      nodes {
        description {
          raw
        }
        projectName
        url
        technologies
        websiteSnippet {
          gatsbyImageData(
            aspectRatio: 1.5
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
    allInstagramContent(filter: {media_type: {eq: "VIDEO"}}, limit: 10)  {
      nodes {
        media_url
        media_type
        permalink
        caption
        thumbnail_url
        localImage {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
