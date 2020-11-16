import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {ratingInputTitle} from "../../constants";

const RatingStar = ({rating, currentRating, onChange}) => {
  const handleInputChange = (evt) =>{
    onChange(evt.target.value);
  };

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        checked={+currentRating === rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={handleInputChange}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={ratingInputTitle[-rating + 5]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

RatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
  currentRating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingStar;
