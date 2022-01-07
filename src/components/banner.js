import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Particles from "react-tsparticles";
import lightning from "../images/lightning.svg";

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      photoMain: file(relativePath: { eq: "photo-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photoLeft: file(relativePath: { eq: "photo-left.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photoRight: file(relativePath: { eq: "photo-right.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

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
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            style: {
              position: "absolute",
            },
            particles: {
              number: {
                value: 0,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 180,
                  sync: true,
                },
              },
              shape: {
                type: "image",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/lightning-icon.png",
                  width: 200,
                  height: 200,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 400,
                random: {
                  enable: true,
                  minimumValue: 120,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 120,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                outMode: "split",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "trail",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 100,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
                trail: {
                  delay: 0.05,
                  quantity: 5,
                },
              },
            },
            retina_detect: true,
            backgroundMask: {
              enable: true,
              cover: {
                color: "#000000",
              },
            },
          }}
        />
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Visual Artist and Photographer</div>
    </div>
  );
};

export default Banner;
