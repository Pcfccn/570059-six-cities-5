import {SortingPosition, SortType, WIDTH_STARS_COEFFICIENT} from "../constants";

const getOffer = ((offers, props) => (offers.filter((offer) => offer.id === +props.match.params.id)[0]));

const getReviews = ((offers, reviews, props) => {
  return (
    getOffer(offers, props).reviews.map((id) => reviews[id])
  );
});

const getWidthForRatingStar = (rating) => `${rating * WIDTH_STARS_COEFFICIENT}%`;

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const filterOffersByCity = (offers, city) => {
  return (offers.filter((offer) => (offer.city === city)));
};

const sortOffers = (cityOffers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR_DESC:
      return cityOffers;
    case SortType.PRICE_ASC:
      return cityOffers.sort((a, b) => (a.price.value - b.price.value));
    case SortType.PRICE_DESC:
      return cityOffers.sort((a, b) => (b.price.value - a.price.value));
    case SortType.RATING_DESC:
      return cityOffers.sort((a, b) => (b.rating - a.rating));
    default:
      return cityOffers;
  }
};

const sortComments = (prev, next) => {
  switch (true) {
    case prev.date > next.date:
      return SortingPosition.FIRST_HIGHER;
    case prev.date < next.date:
      return SortingPosition.FIRST_LOWER;
    default:
      return SortingPosition.ELEMENTS_EQUAL;
  }
};

export {getOffer, getReviews, getWidthForRatingStar, extend, filterOffersByCity, sortOffers, sortComments};
