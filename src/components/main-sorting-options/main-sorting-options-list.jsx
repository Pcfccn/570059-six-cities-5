import React from "react";
import {SortType} from "../../constants";
import MainSortingOption from "../main-sorting-option/main-sorting-option";

const MainSortingOptionsList = (props) => {
  const {activeSortType} = props;
  const changeType = (a) => {
    console.log(a);
  };
  const options = Object.values(SortType);
  return (options.map((currentType) => (
    <MainSortingOption key={currentType} type={currentType} activeSortType={activeSortType} changeType={changeType}/>
  )));
};

export default MainSortingOptionsList;
