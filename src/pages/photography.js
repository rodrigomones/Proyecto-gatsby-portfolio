import { graphql } from "gatsby";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import CloseIcon from "@mui/icons-material/Close";
import useNearScreen from "../hooks/useNearScreen";
import debounce from "just-debounce-it";

function Contact({ data }) {
  const photos = data.photos.edges;

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("000031530003.jpg");
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: "" ? null : externalRef,
    once: false,
  });
  const [hasta, setHasta] = useState(10);
  const getImg = ({ image }) => {
    setTempingSrc(image.node.base);
    setModel(true);
  };
  // const path = `./images/photos/${tempingSrc}`;

  const debounceHandleNextPage = useCallback(
    debounce(() => setHasta((hasta) => hasta + 10), 200),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModel(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <Layout>
      <div className={model ? "model open" : "model"}>
        <img
          src={require(`../images/photos/${tempingSrc}`).default}
          alt={tempingSrc}
        />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="photos-page">
        <div className="container">
          <div className="inner-page2">
            <div className="content2">
              <h3>Hola soy el contacto de Monés.</h3>
              <div className="gallery">
                {photos.slice(0, hasta).map((image) => (
                  <div
                    key={image.node.id}
                    className="images"
                    onClick={() => getImg({ image })}
                  >
                    <Img
                      fluid={image.node.childImageSharp.fluid}
                      alt={image.node.base}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="visor" ref={externalRef}></div>
    </Layout>
  );
}

export default React.memo(Contact);

export const query = graphql`
  query PhotosGallery {
    photos: allFile(filter: { relativeDirectory: { eq: "photos" } }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
