import {ActionType, AuthorizationStatus, CommentSendingStatus, SortType} from "../constants";
import {ActionCreator} from "./action";

describe(`Action creator work correctly`, () => {
  it(`change city`, () => {
    expect(ActionCreator.changeCity(``)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: ``,
    });
  });

  it(`changeSortType`, () => {
    expect(ActionCreator.changeSortType([1, 2], `Paris`, SortType.POPULAR_DESC)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: {
        offers: [1, 2],
        city: `Paris`,
        type: SortType.POPULAR_DESC},
    });
  });

  it(`changeEnteredOffer`, () => {
    expect(ActionCreator.changeEnteredOffer({})).toEqual({
      type: ActionType.CHANGE_ENTERED_OFFER,
      payload: {offer: {}},
    });
  });

  it(`enterText`, () => {
    expect(ActionCreator.enterText(`text`)).toEqual({
      type: ActionType.ENTER_TEXT,
      payload: `text`,
    });
  });

  it(`loadUserData`, () => {
    expect(ActionCreator.loadUserData({})).toEqual({
      type: ActionType.LOAD_USER_DATA,
      payload: {},
    });
  });

  it(`loadOffers`, () => {
    expect(ActionCreator.loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [],
    });
  });

  it(`loadOneOffer`, () => {
    expect(ActionCreator.loadOneOffer({})).toEqual({
      type: ActionType.LOAD_ONE_OFFER,
      payload: {},
    });
  });

  it(`loadComments`, () => {
    expect(ActionCreator.loadComments({})).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: {},
    });
  });

  it(`loadNearbyOffers`, () => {
    expect(ActionCreator.loadNearbyOffers([])).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [],
    });
  });

  it(`openSortOptions`, () => {
    expect(ActionCreator.openSortOptions(true)).toEqual({
      type: ActionType.OPEN_SORT_OPTIONS,
      payload: false,
    });
  });

  it(`redirectToRoute`, () => {
    expect(ActionCreator.redirectToRoute(`url`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `url`,
    });
  });

  it(`requireAuthorization`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`setRating`, () => {
    expect(ActionCreator.setRating(5)).toEqual({
      type: ActionType.SET_RATING,
      payload: 5,
    });
  });

  it(`changeCommentSendingStatus`, () => {
    expect(ActionCreator.changeCommentSendingStatus(CommentSendingStatus.ERROR)).toEqual({
      type: ActionType.CHANGE_COMMENT_SENDING_STATUS,
      payload: CommentSendingStatus.ERROR,
    });
  });

  it(`loadFavorites`, () => {
    expect(ActionCreator.loadFavorites([{}, {}, {a: [1, 2]}])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [{}, {}, {a: [1, 2]}],
    });
  });

});
