import {SortType, WIDTH_STARS_COEFFICIENT} from "../constants";
import {NameSpace} from "../store/root-reducer";

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

const getFilteredByCityOffers = (state) => state[NameSpace.DATA].offers.filter((offer) => offer.city === state[NameSpace.STATE].city);

const sortComments = (prev, next) => {
  switch (true) {
    case prev.date > next.date:
      return -1;
    case prev.date < next.date:
      return 1;
    default:
      return 0;
  }
};

export {getOffer, getReviews, getWidthForRatingStar, extend, filterOffersByCity, sortOffers, getFilteredByCityOffers, sortComments};
