import React from "react";

const MainSortingOption = (props) => {
  const {type, activeSortType, changeType} = props;
  const handleChangeType = () => {
    changeType(type);
  };
  return (<li
    className={`places__option ${type === activeSortType ? `places__option--active` : ``}`}
    tabIndex="0"
    onClick={handleChangeType}
  >
    {type}
  </li>);
};

export default MainSortingOption;
