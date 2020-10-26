import {PropTypes} from "prop-types";
import React from "react";
import {ratingStars} from "../../constants";
import RatingStar from "../offer-post-comment-rating-star/offer-post-comment-rating-star";

class PostCommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      text: ``
    };
  }

  render() {
    const {onSubmitForm} = this.props;
    const handelFormSubmit = (evt) => {
      evt.preventDefault();
      onSubmitForm(this.state);
    };

    const handleTextAreaChange = (evt) => {
      this.setState({text: evt.target.value});
    };
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={handelFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingStars.map((stars) => <RatingStar key={stars} index={stars}/>)}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={handleTextAreaChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

PostCommentForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default PostCommentForm;
