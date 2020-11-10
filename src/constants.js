const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT_OPTIONS: `OPEN_SORT_OPTIONS`,
  CHANGE_SORT_TYPE: `OPEN_SORT_TYPE`,
  CHANGE_ENTERED_OFFER: `CHANGE_ENTERED_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const Path = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  getUrlById: (id) => (`/offer/${id}`)
};
const PathApi = {
  LOGIN: `/login`,
  HOTELS: `/hotels`,
};

const ratingStars = [5, 4, 3, 2, 1];
const ratingInputTitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const widthStartsCoefficient = 20;

const OfferCardClassName = {
  NEAR_PLACE: `near-places__card`,
  CITIES_PLACE: `cities__place-card`,
};

const MapClassName = {
  PROPERTY: `property__map`,
  CITIES: `cities__map`,
};

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

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

export {ActionType, Path, PathApi, widthStartsCoefficient, ratingStars, ratingInputTitle, OfferCardClassName,
  MapClassName, cities, SortType, AuthorizationStatus};
