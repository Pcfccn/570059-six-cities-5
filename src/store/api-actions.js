import {AuthorizationStatus, Path, PathApi} from "../constants";
import {ActionCreator} from "./action";

const ApiActionCreator = {
  fetchOfferList: () => (dispatch, _getState, api) => (
    api.get(PathApi.HOTELS)
      .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
      .catch(() => {})
  ),

  checkAuth: () => (dispatch, _getState, api) => (
    api.get(PathApi.LOGIN)
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .catch(() => {})
  ),

  login: ({email, password}) => (dispatch, _getState, api) => (
    api.post(PathApi.LOGIN, {email, password})
      .then((userData) => dispatch(ActionCreator.loadUserData(userData)))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.redirectToRoute(Path.MAIN)))
      .catch(() => {})
  )
};

export {ApiActionCreator};
