import {widthStartsCoefficient} from "../constants";

const getOffer = ((offers, props) => (offers.filter((offer) => offer.id === props.match.params.id)[0]));

const getReviews = ((offers, reviews, props) => {
  return (
    getOffer(offers, props).reviews.map((id) => reviews[id])
  );
});

const getWidthForRatingStar = (rating) => `${rating * widthStartsCoefficient}%`;

export {getOffer, getReviews, getWidthForRatingStar};
