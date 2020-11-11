import {AuthorizationStatus, Path, ApiURL} from "../constants";
import {ActionCreator} from "./action";

const ApiActionCreator = {
  fetchOfferList: () => (dispatch, _getState, api) => (
    api.get(ApiURL.HOTELS)
      .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
      .catch(() => {})
  ),

  checkAuth: () => (dispatch, _getState, api) => (
    api.get(ApiURL.LOGIN)
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(() => {})
  ),

  login: ({email, password}) => (dispatch, _getState, api) => (
    api.post(ApiURL.LOGIN, {email, password})
      .then((userData) => dispatch(ActionCreator.loadUserData(userData)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.redirectToRoute(Path.MAIN)))
      .catch(() => {})
  )
};

export {ApiActionCreator};
