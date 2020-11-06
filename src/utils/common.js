import {SortType, widthStartsCoefficient} from "../constants";

const getOffer = ((offers, props) => (offers.filter((offer) => offer.id === +props.match.params.id)[0]));

const getMockNearestOffers = (offers, props) => {
  if (offers.length <= 4) {
    return offers.filter((offer) => offer.id !== props.match.params.id);
  } else {
    return offers.filter((offer) => offer.id !== props.match.params.id).slice(0, 3);
  }
};

const getReviews = ((offers, reviews, props) => {
  return (
    getOffer(offers, props).reviews.map((id) => reviews[id])
  );
});

const getWidthForRatingStar = (rating) => `${rating * widthStartsCoefficient}%`;

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

export {getOffer, getReviews, getWidthForRatingStar, getMockNearestOffers, extend, filterOffersByCity, sortOffers};
