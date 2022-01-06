import React from "react";
import { Masonry } from "@mui/lab";
import Img from "gatsby-image";

function Photos({ itemsToShow, getImg, id }) {
  return (
    <>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
        {itemsToShow.map((image) => (
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
      </Masonry>
    </>
  );
}

export default React.memo(Photos, (prevPhotos, nextPhotos) => {
  return prevPhotos === nextPhotos;
});
