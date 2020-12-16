import React, { FC } from "react";
import {connect} from "react-redux";
import {CommentSendingStatus, RATING_STARS} from "../../constants";
import {ActionCreator} from "../../store/action";
import {ApiActionCreator} from "../../store/api-actions";
import RatingStar from "../offer-post-comment-rating-star/offer-post-comment-rating-star";
import { TRootReducer } from "../types/reducer";

type TPostComment = {
  id: number
  object: {
    comment: string
    rating: number
  }
}

type TPostCommentFormProps = {
  id:number
  rating:number
  text:string
  postComment: (
    id: number,
    {comment, rating}:  {
      comment: string
      rating: number
  }) => void
  setRating: (rating: number) => void
  enterText: (enterText: string) => void
  changeCommentSendingStatus: (sendingStatus: string) => void
  commentSendingStatus: string
}

const PostCommentForm: FC<TPostCommentFormProps> = ({id, rating, text, postComment, setRating, enterText, changeCommentSendingStatus, commentSendingStatus}) => {

  const isButtonDisabled = !+rating || text.length < 50 || commentSendingStatus === CommentSendingStatus.SENDING;

  const handelFormSubmit = (evt: any) => {
    evt.preventDefault();
    changeCommentSendingStatus(CommentSendingStatus.SENDING);
    postComment(id, {comment: text, rating});
  };

  const handleRatingAreaChange = (stars: number) => {
    setRating(stars);
  };
  const handleTextAreaChange = (evt: any) => {
    enterText(evt.target.value);
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handelFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map((star) => <RatingStar
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
      {commentSendingStatus === CommentSendingStatus.ERROR && <span><b>Sorry, something go wrong with server, we cant send your review</b></span>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = ({STATE}: TRootReducer) => ({
  rating: STATE.userComment.rating,
  text: STATE.userComment.text,
  commentSendingStatus: STATE.commentSendingStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  setRating(rating: number) {
    dispatch(ActionCreator.setRating(rating));
  },
  enterText(text: string) {
    dispatch(ActionCreator.enterText(text));
  },
  postComment(id: number, {comment, rating}:  {
    comment: string
    rating: number
}) {
    dispatch(ApiActionCreator.postComment(id, {comment, rating}));
  },

  changeCommentSendingStatus(status: string) {
    dispatch(ActionCreator.changeCommentSendingStatus(status));
  },
});

export {PostCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(PostCommentForm);
