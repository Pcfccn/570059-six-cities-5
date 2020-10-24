import React from "react";
import {PropTypes} from "prop-types";

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

MainSortingOption.propTypes = {
  changeType: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MainSortingOption;
