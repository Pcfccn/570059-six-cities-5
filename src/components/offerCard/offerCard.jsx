import {PropTypes} from "prop-types";
import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {widthStartsCoefficient} from "../../constants";


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {offer, onMouseEnterCard} = this.props;
    const handleCardMouseEnter = () => {
      onMouseEnterCard(offer);
    };
    const {image, price, rating, isInBookmarks, name, type, isPremium} = offer;
    const widthForRatingStar = rating * widthStartsCoefficient;
    const isInBookmarksButtonActive = isInBookmarks
      ? `place-card__bookmark-button--active`
      : ``;
    const isPremiumTemplate = isPremium
      ? <div className="place-card__mark"><span>Premium</span></div>
      : ``;

    return (
      <article className="cities__place-card place-card"
        onMouseEnter={handleCardMouseEnter}
      >
        {isPremiumTemplate}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${offer.id}`}>
            <img className="place-card__image" src={image[0]} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price.value}.</b>
              <span className="place-card__price-text">&#47;&nbsp;{price.period}</span>
            </div>
            <button className={`place-card__bookmark-button ${isInBookmarksButtonActive} button`} type="button">
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
            <Link to={`/offer/${offer.id}`}>{name}</Link>
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
  onMouseEnterCard: PropTypes.func.isRequired,
};

export default OfferCard;
