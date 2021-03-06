const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`,
  CHANGE_SORT_TYPE: `OPEN_SORT_TYPE`,
  CHANGE_ENTERED_OFFER: `CHANGE_ENTERED_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  LOAD_ONE_OFFER: `LOAD_ONE_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  SET_RATING: `SET_RATING`,
  ENTER_TEXT: `ENTER_TEXT`,
  CHANGE_COMMENT_SENDING_STATUS: `CHANGE_COMMENT_SENDING_STATUS`,
};

const Path = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  getUrlById: (id) => (`/offer/${id}`)
};
const ApiURL = {
  LOGIN: `/login`,
  HOTELS: `/hotels`,
  FAVORITES: `/favorite`,
  getUrlById: (id) => (`/hotels/${id}`),
  getUrlNearbyById: (id) => (`/hotels/${id}/nearby`),
  getUrlCommentsById: (id) => (`/comments/${id}`),
  getUrlFavoriteStatus: (id, status) => (`/favorite/${id}/${status}`),
};

const RATING_STARS = [5, 4, 3, 2, 1];
const RATING_INPUT_TITLES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const WIDTH_STARS_COEFFICIENT = 20;

const OfferCardClassName = {
  NEAR_PLACE: `near-places__card`,
  CITIES_PLACE: `cities__place-card`,
};

const MapClassName = {
  PROPERTY: `property__map`,
  CITIES: `cities__map`,
};

const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const SortType = {
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  POPULAR_DESC: `Popular`,
  RATING_DESC: `Top rated first`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const BookmarksButtonType = {
  PROPERTY: `PROPERTY`,
  PLACE_CARD: `PLACE_CARD`,
};

const CommentSendingStatus = {
  SENDING: `SENDING`,
  DONE: `DONE`,
  ERROR: `ERROR`,
};

const SortingPosition = {
  FIRST_HIGHER: -1,
  FIRST_LOWER: 1,
  ELEMENTS_EQUAL: 0,
};

export {ActionType, Path, ApiURL, WIDTH_STARS_COEFFICIENT, RATING_STARS, RATING_INPUT_TITLES, OfferCardClassName,
  MapClassName, CITIES, SortType, AuthorizationStatus, BookmarksButtonType, CommentSendingStatus, SortingPosition};
