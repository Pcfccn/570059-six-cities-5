import React from "react";
import PropTypes from "prop-types";

const Photos = ({images}) => {
  return (
    images.map((photo, i) => {
      return (
        <div className="property__image-wrapper" key={`${i}-${photo}`}>
          <img className="property__image" src={photo} alt="Photo studio"/>
        </div>);
    })
  );
};

Photos.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Photos;
