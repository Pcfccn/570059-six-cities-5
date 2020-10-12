import {PropTypes} from "prop-types";
import React, {PureComponent} from "react";
import {widthStartsCoefficient} from "../../constants";


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onOfferCardClick} = this.props;
    const onClick = () => {
      onOfferCardClick(offer.id);
    };
    const {image, price, rating, isInBookmarks, name, type, isPremium} = offer;
    const widthForRatingStar = rating * widthStartsCoefficient;
    const isInBookmarksButtonActive = isInBookmarks
      ? `place-card__bookmark-button place-card__bookmark-button--active button`
      : `place-card__bookmark-button button`;
    const isPremiumTemplate = isPremium
      ? <div className="place-card__mark"><span>Premium</span></div>
      : ``;

    return (
      <article className="cities__place-card place-card" onClick={onClick}>
        {isPremiumTemplate}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={image[0]} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price.value}.</b>
              <span className="place-card__price-text">&#47;&nbsp;{price.period}</span>
            </div>
            <button className={isInBookmarksButtonActive} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${widthForRatingStar}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      period: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    isInBookmarks: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onOfferCardClick: PropTypes.func.isRequired
};

export default OfferCard;
