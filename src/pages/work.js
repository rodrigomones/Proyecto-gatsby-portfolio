import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default function Work({ data }) {
  const projects = data.projects.nodes;
  return (
    <Layout>
      <div className="work-page">
        <div className="container">
          <div className="inner-page">
            <h2>Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <Link
                  to={"/work/" + project.frontmatter.slug}
                  key={project.id}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <Img
                      fluid={project.frontmatter.thumb.childImageSharp.fluid}
                    />
                    <h3>{project.frontmatter.title}</h3>
                    <p> {project.frontmatter.stack} </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;
