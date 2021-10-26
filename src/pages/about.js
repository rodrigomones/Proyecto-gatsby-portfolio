import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="about-page">
        <div className="container">
          <div className="inner-page">
            <div className="content">
              <h3>Sobre mi</h3>
              <h2>Artista visual, Diseñador UX/UI y Desarrollador Front-end</h2>
              <p>
                Web, mobile apps y diseños digitales. Actualmente en Buenos
                Aires, Argentina. Trabajando de manera remota. Colaborador,
                entusiasta. Valoro investigar, aprender, y el pensamiento
                crítico, para generar soluciones. Tengo experiencia trabajando
                como creativo tanto en productos digitales, como en artes
                escénicas. Viajé, viví en otros paises, aprendí otras culturas y
                me empapé de experiencias, que me hicieron una persona
                open-minded.
              </p>
              {/* <div className="btn-row">
                <Link to="/work">View Series</Link>
              </div> */}
            </div>
            <div className="images-page">
              <div className="portrait">
                <Img fluid={data.portrait.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="black-box-page"></div>
        <div className="black-box-page overlay"></div> */}
      </div>
    </Layout>
  );
};

export default About;
