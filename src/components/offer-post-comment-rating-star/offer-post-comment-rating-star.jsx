import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {ratingInputTitle} from "../../constants";

const RatingStar = (props) => {
  const {index, onChange} = props;
  const handleInputChange = (evt) =>{
    onChange(evt.target.value);
  };

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio"
        onChange={handleInputChange}
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={ratingInputTitle[index - 1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

RatingStar.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingStar;
