import React, {FC} from "react";
import {SortType} from "../../constants";
import MainSortingOption from "../main-sorting-option/main-sorting-option";

type TMainSortingOptionsListProps = {
  activeSortType: string
  changeType: (type: string) => void
}

const MainSortingOptionsList: FC<TMainSortingOptionsListProps> = ({activeSortType, changeType}) => {
  const options = Object.values(SortType);
  return (
    <>
    {options.map((currentType) => (
      <MainSortingOption key={currentType} type={currentType} activeSortType={activeSortType} changeType={changeType}/>
      ))}
    </>
  );
};

export default MainSortingOptionsList;
