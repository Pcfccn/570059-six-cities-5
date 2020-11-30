import React from "react";
import {SortType} from "../../constants";
import MainSortingOption from "../main-sorting-option/main-sorting-option";
import PropTypes from "prop-types";

const MainSortingOptionsList = ({activeSortType, changeType}) => {
  const options = Object.values(SortType);
  return (options.map((currentType) => (
    <MainSortingOption key={currentType} type={currentType} activeSortType={activeSortType} changeType={changeType}/>
  )));
};

MainSortingOptionsList.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
};

export default MainSortingOptionsList;
