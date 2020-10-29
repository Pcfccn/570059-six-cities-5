import React from "react";

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

export default Inside;
