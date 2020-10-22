const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`
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
};

export {ActionType, ActionCreator};
