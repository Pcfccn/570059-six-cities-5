import {AuthorizationStatus, Path, ApiURL} from "../constants";
import {ActionCreator} from "./action";

const ApiActionCreator = {
  fetchOfferList: () => (dispatch, _getState, api) => (
    api.get(ApiURL.HOTELS)
      .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
      .catch(() => {})
  ),

  fetchOffer: (id) => (dispatch, _getState, api) => (
    api.get(ApiURL.getUrlById(id))
    .then(({data}) => dispatch(ActionCreator.loadOneOffer(data)))
    .catch(() => {})
  ),

  fetchComments: (id) => (dispatch, _getState, api) => (
    api.get(ApiURL.getUrlCommentsById(id))
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch(() => {})
  ),

  fetchNearbyOffers: (id) => (dispatch, _getState, api) => (
    api.get(ApiURL.getUrlNearbyById(id))
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch(() => {})
  ),

  checkAuth: () => (dispatch, _getState, api) => (
    api.get(ApiURL.LOGIN)
      .then((userData) => dispatch(ActionCreator.loadUserData(userData)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(() => {})
  ),

  login: ({email, password}) => (dispatch, _getState, api) => (
    api.post(ApiURL.LOGIN, {email, password})
      .then((userData) => dispatch(ActionCreator.loadUserData(userData)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.redirectToRoute(Path.MAIN)))
      .catch(() => {})
  ),

  postComment: (id, {comment, rating}) => (dispatch, _getState, api) => (
    api
    .post(ApiURL.getUrlCommentsById(id), {comment, rating})
    .then(() => {
      dispatch(ApiActionCreator.fetchComments(id));
      dispatch(ActionCreator.setRating(`0`));
      dispatch(ActionCreator.enterText(``));
    })
    .catch(() => {})
  ),
};

export {ApiActionCreator};
