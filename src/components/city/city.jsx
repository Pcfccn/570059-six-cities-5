import React from "react";
import PropTypes from "prop-types";

const City = (props) => {
  const {thisCity, active, changeCity} = props;
  const isActive = active ? ` tabs__item--active` : ``;
  const handleItemLinkClick = () => {
    changeCity(thisCity);
  };
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive}`}
        onClick={handleItemLinkClick}
      >
        <span>{thisCity}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  thisCity: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default City;
