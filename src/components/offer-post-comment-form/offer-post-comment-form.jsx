import {PropTypes} from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {CommentSendingStatus, ratingStars} from "../../constants";
import {ActionCreator} from "../../store/action";
import {ApiActionCreator} from "../../store/api-actions";
import RatingStar from "../offer-post-comment-rating-star/offer-post-comment-rating-star";

const PostCommentForm = ({id, rating, text, postComment, setRating, enterText, changeCommentSendingStatus, commentSendingStatus}) => {
  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    changeCommentSendingStatus(CommentSendingStatus.SENDING);
    postComment(id, {comment: text, rating});
  };

  const handleRatingAreaChange = (stars) => {
    setRating(stars);
  };
  const handleTextAreaChange = (evt) => {
    enterText(evt.target.value);
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handelFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => <RatingStar
          key={star}
          rating={star}
          currentRating={rating}
          onChange={handleRatingAreaChange}
        />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextAreaChange}
        value={text}
        required
        maxLength={300}
      >
      </textarea>
      {commentSendingStatus === CommentSendingStatus.ERROR ? `<span><b>Sorry, something go wrong with server, we cant send your review</b></span>` : ``}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={+rating && text.length >= 50 && commentSendingStatus !== CommentSendingStatus.SENDING ? false : true}
        >
          Submit
        </button>
      </div>
    </form>
  );
};


PostCommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  commentSendingStatus: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  enterText: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
  changeCommentSendingStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({STATE}) => ({
  rating: STATE.userComment.rating,
  text: STATE.userComment.text,
  commentSendingStatus: STATE.commentSendingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setRating(rating) {
    dispatch(ActionCreator.setRating(rating));
  },
  enterText(text) {
    dispatch(ActionCreator.enterText(text));
  },
  postComment(id, {comment, rating}) {
    dispatch(ApiActionCreator.postComment(id, {comment, rating}));
  },

  changeCommentSendingStatus(status) {
    dispatch(ActionCreator.changeCommentSendingStatus(status));
  },
});

export {PostCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(PostCommentForm);
