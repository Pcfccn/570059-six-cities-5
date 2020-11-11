import {ActionType} from "../constants";

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

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  },
};

export {ActionCreator};
