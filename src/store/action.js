const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`,
  CHANGE_SORT_TYPE: `OPEN_SORT_TYPE`,
  CHANGE_ENTERED_OFFER: `CHANGE_ENTERED_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },
  changeSortType: (offers, city, type) => {
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
  loadOffers: (offers) => {
    return ({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  },
  openSortOptions: (toggle) => {
    return ({
      type: ActionType.OPEN_SORT_OPTIONS,
      payload: !toggle,
    });
  },
  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  },
};

export {ActionType, ActionCreator};
