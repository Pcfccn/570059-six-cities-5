import React from "react";

const Inside = (props) => {
  const {inside} = props;
  return (
    inside.map((item, i) => {
      return (
        <li className="property__inside-item" key={`${i}-${item}`}>
          {item}
        </li>);
    })
  );
};

export default Inside;
