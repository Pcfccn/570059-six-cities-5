const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`,
  CHANGE_SORT_TYPE: `OPEN_SORT_TYPE`,
  CHANGE_ENTERED_OFFER: `CHANGE_ENTERED_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },
  openSortOptions: (toggle) => {
    return ({
      type: ActionType.OPEN_SORT_OPTIONS,
      payload: !toggle,
    });
  },
  changeSortType: (offers, city, type) => {
    console.log(offers, city, type);
    return ({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: {offers, city, type},
    });
  },
  changeEnteredOffer: (offer) => {
    return ({
      type: ActionType.CHANGE_ENTERED_OFFER,
      payload: {offer},
    });
  },
};

export {ActionType, ActionCreator};
