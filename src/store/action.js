const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`,
  CHANGE_SORT_TYPE: `OPEN_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },
  openSortOptions: (isSortOpen) => {
    return ({
      type: ActionType.OPEN_SORT_OPTIONS,
      payload: !isSortOpen,
    });
  },
  changeSortType: (type) => {
    return ({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: type,
    });
  }
};

export {ActionType, ActionCreator};
