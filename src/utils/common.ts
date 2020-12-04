import {TOffer} from "../components/types/offer";
import {SortingPosition, SortType, WIDTH_STARS_COEFFICIENT} from "../constants";

const getOffer = ((offers: TOffer[], props: any) => (offers.filter((offer) => offer.id === +props.match.params.id)[0]));

const getWidthForRatingStar = (rating: number) => `${rating * WIDTH_STARS_COEFFICIENT}%`;

const extend = (a: object, b: object) => {
  return Object.assign({}, a, b);
};

const filterOffersByCity = (offers: TOffer[], city: string) => {
  return (offers.filter((offer) => (offer.city === city)));
};

const sortOffers = (cityOffers: TOffer[], sortType: string) => {
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

const sortComments = (prev: TComment, next: TComment) => {
  switch (true) {
    case prev.date > next.date:
      return SortingPosition.FIRST_HIGHER;
    case prev.date < next.date:
      return SortingPosition.FIRST_LOWER;
    default:
      return SortingPosition.ELEMENTS_EQUAL;
  }
};

export {getOffer, getWidthForRatingStar, extend, filterOffersByCity, sortOffers, sortComments};
