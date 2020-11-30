import React from "react";
import PropTypes from "prop-types";

const Inside = ({inside}) => {
  return (
    inside.map((item, i) => {
      return (
        <li className="property__inside-item" key={`${i}-${item}`}>
          {item}
        </li>);
    })
  );
};

Inside.propTypes = {
  inside: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Inside;
