import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {ratingInputTitle} from "../../constants";

class RatingStar extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {index} = this.props;

    return (
      <Fragment>
        <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio"
          onChange={
            (evt) => {
              this.setState({rating: evt.target.value});
            }
          }
        />
        <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={ratingInputTitle[index - 1]}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  }
}

RatingStar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default RatingStar;
