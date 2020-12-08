import React from "react";

type TCityProps = {
  thisCity: string
  active: boolean
  changeCity: (city: string) => void
}

const City: React.FC<TCityProps> = ({thisCity, active, changeCity}) => {
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

export default City;
