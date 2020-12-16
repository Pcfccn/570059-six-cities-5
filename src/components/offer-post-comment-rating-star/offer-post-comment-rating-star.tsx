import React, {FC, Fragment} from "react";
import {RATING_INPUT_TITLES} from "../../constants";

type TRatingStarProps = {
  rating: number
  currentRating: number
  onChange: (stars: number) => void
}

const RatingStar: FC<TRatingStarProps> = ({rating, currentRating, onChange}) => {
  const handleInputChange = (evt: any) =>{
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
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={RATING_INPUT_TITLES[-rating + 5]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

export default RatingStar;
