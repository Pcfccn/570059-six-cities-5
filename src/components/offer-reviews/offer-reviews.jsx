import React from "react";
import {getWidthForRatingStar} from "../../utils/common";
import PropTypes from "prop-types";

const Reviews = ({reviews}) => {
  return (
    Object.values(reviews).map((review, i) => {
      return (
        <li className="reviews__item" key={`${i}-${review.user.name}`}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${getWidthForRatingStar(review.rating)}`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time
              className="reviews__time"
              dateTime={review.date}>{new Date(review.date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`})}
            </time>
          </div>
        </li>
      );
    })
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reviews;
