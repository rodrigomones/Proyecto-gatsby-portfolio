import { graphql } from "gatsby";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Layout from "../components/layout";
import CloseIcon from "@mui/icons-material/Close";
import useNearScreen from "../hooks/useNearScreen";
import debounce from "just-debounce-it";
import Photos from "../components/Photos";

function Contact({ data }) {
  const [id, setId] = useState([]);
  const [model, setModel] = useState(false);
  const [show, setShow] = useState(10);
  const [tempingSrc, setTempingSrc] = useState("000031530003.jpg");
  const externalRef = useRef();

  const items = data.photos.edges;
  useEffect(() => {
    let aux = itemsToShow.map((element) => {
      return {
        id: element.node.id,
      };
    });
    setId(aux);
  }, [items]);

  const { isNearScreen } = useNearScreen({
    externalRef: "" ? null : externalRef,
    once: false,
  });

  const getImg = ({ image }) => {
    setTempingSrc(image.node.base);
    setModel(true);
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => setShow((show) => show + 10), 200),
    []
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  let itemsToShow = items.slice(0, show);

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
          <div className="inner-page-photography">
            <div className="content-photography">
              <h3>Film Photography</h3>
              <Photos itemsToShow={itemsToShow} getImg={getImg} id={id} />
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
