import {PropTypes} from "prop-types";
import React from "react";

const ratingInputTitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

class PostCommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      text: ``
    };
  }

  getInputTemplate(index) {
    return (
      <React.Fragment key={`${index}-stars`}>
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
      </React.Fragment>
    );
  }

  getInputsTemplate() {
    const inputs = [];
    for (let i = 5; i > 0; i--) {
      inputs.push(this.getInputTemplate(i));
    }
    return inputs;
  }

  render() {
    const {onSubmitForm} = this.props;
    const onSubmit = (evt) => {
      evt.preventDefault();
      onSubmitForm(this.state);
    };
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {this.getInputsTemplate()}

        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={(evt) => {
            this.setState({text: evt.target.value});
          }}></textarea>
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
