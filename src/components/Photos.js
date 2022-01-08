import React from "react";
import Masonry from "react-masonry-css";
import Img from "gatsby-image";

function Photos({ itemsToShow, getImg, id }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    800: 2,
    500: 1,
  };

  var childElements = itemsToShow.map((image) => (
    <div
      key={image.node.id}
      className="images"
      onClick={() => getImg({ image })}
    >
      <Img fluid={image.node.childImageSharp.fluid} alt={image.node.base} />
    </div>
  ));

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {childElements}
      </Masonry>
    </>
  );
}

export default React.memo(Photos, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
