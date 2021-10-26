import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {
  const data = useStaticQuery(graphql`
  query {
    photoMain: file(relativePath: { eq: "photo-main.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photoLeft: file(relativePath: { eq: "photo-left.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photoRight: file(relativePath: { eq: "photo-right.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.photoLeft.childImageSharp.fluid} />
          </div>
          <div className="main-text">Rodrigo Monés</div>
          <div className="main-image">
            <Img fluid={data.photoMain.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.photoRight.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Visual Artist and Photographer</div>
    </div>
  )
};

export default Banner;
