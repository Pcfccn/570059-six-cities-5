const Path = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  getUrlById: (id) => (`/offer/${id}`)
};

const ratingStars = [5, 4, 3, 2, 1];
const ratingInputTitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const widthStartsCoefficient = 20;

const CityCoordinates = {
  Amsterdam: [52.38333, 4.9],
  Paris: [48.864716, 2.349014],
};

const OfferCardClassName = {
  nearPlace: `near-places__card`,
  citiesPlace: `cities__place-card`,
};

const MapClassName = {
  property: `property__map`,
  cities: `cities__map`,
};

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const SortType = {
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  POPULAR_DESC: `Popular`,
  RATING_DESC: `Top rated first`,
};

export {Path, widthStartsCoefficient, ratingStars, ratingInputTitle, CityCoordinates, OfferCardClassName, MapClassName, cities, SortType};
