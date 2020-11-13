import {ActionType} from "../constants";

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeSortType: (offers, city, type) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: {offers, city, type},
  }),
  changeEnteredOffer: (offer) => ({
    type: ActionType.CHANGE_ENTERED_OFFER,
    payload: {offer},
  }),

  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadOneOffer: (offer) => ({
    type: ActionType.LOAD_ONE_OFFER,
    payload: offer,
  }),

  loadComments: (comment) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comment,
  }),

  loadNearbyOffers: (nearbyOffers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers,
  }),

  openSortOptions: (toggle) => ({
    type: ActionType.OPEN_SORT_OPTIONS,
    payload: !toggle,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

export {ActionCreator};
