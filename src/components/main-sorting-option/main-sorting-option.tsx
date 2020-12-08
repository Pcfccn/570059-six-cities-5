import React, { FC } from "react";

type TMainSortingOptionProps = {
  type: string
  activeSortType: string
  changeType: (type: string) => void
}

const MainSortingOption: FC<TMainSortingOptionProps> = ({type, activeSortType, changeType}) => {
  const handleChangeType = () => {
    changeType(type);
  };
  return (<li
    className={`places__option ${type === activeSortType ? `places__option--active` : ``}`}
    tabIndex={0}
    onClick={handleChangeType}
  >
    {type}
  </li>);
};

export default MainSortingOption;
