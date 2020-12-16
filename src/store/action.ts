import { TComment } from "../components/types/comment";
import { TEmptyOffer, TOffer } from "../components/types/offer";
import {ActionType} from "../constants";

const ActionCreator = {
  changeCity: (city: string) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  changeSortType: (offers: TOffer[], city: string, type: string) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: {offers, city, type},
  }),
  changeEnteredOffer: (offer: TOffer | TEmptyOffer) => ({
    type: ActionType.CHANGE_ENTERED_OFFER,
    payload: {offer},
  }),
  enterText: (text: string) => ({
    type: ActionType.ENTER_TEXT,
    payload: text,
  }),

  changeCommentSendingStatus: (status: string) => ({
    type: ActionType.CHANGE_COMMENT_SENDING_STATUS,
    payload: status,
  }),

  loadUserData: (userData: {}) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),

  loadFavorites: (favoritesData: TOffer[]) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favoritesData,
  }),

  loadOffers: (offers: TOffer[]) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadOneOffer: (offer: TOffer) => ({
    type: ActionType.LOAD_ONE_OFFER,
    payload: offer,
  }),

  loadComments: (comments: TComment[]) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  loadNearbyOffers: (nearbyOffers: TOffer[]) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers,
  }),

  openSortOptions: (toggle: boolean) => ({
    type: ActionType.OPEN_SORT_OPTIONS,
    payload: !toggle,
  }),

  redirectToRoute: (url: string) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  requireAuthorization: (status: string) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setRating: (rating: number) => ({
    type: ActionType.SET_RATING,
    payload: rating,
  }),
};

export {ActionCreator};
