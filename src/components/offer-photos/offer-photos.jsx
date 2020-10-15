import React from "react";

const Photos = (props) => {
  const {images} = props;
  return (
    images.map((photo, i) => {
      return (
        <div className="property__image-wrapper" key={`${i}-${photo}`}>
          <img className="property__image" src={photo} alt="Photo studio"/>
        </div>);
    })
  );
};

export default Photos;
