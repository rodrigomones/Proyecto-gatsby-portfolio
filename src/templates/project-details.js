import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className="container">
        <div className="details">
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <div className="featured">
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </div>
          <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Details($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
