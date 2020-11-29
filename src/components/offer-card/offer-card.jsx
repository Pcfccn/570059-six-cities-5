import {PropTypes} from "prop-types";
import React from "react";
import {Link} from "react-router-dom";
import {BookmarksButtonType, Path, widthStartsCoefficient} from "../../constants";
import BookmarksButton from "../bookmark-button/bookmark-button";
import offerPropTypes from "../types/offer";

const OfferCard = ({offer, className, onMouseEnterCard}) => {
  const handleCardMouseEnter = () => {
    onMouseEnterCard(offer);
  };
  const handleCardMouseLeave = () => {
    onMouseEnterCard({id: ``, location: []});
  };
  const {id, price, rating, isInBookmarks, name, type, isPremium, previewImage} = offer;
  const widthForRatingStar = rating * widthStartsCoefficient;
  const isPremiumTemplate = isPremium
    ? <div className="place-card__mark"><span>Premium</span></div>
    : ``;

  return (
    <article className={`${className} place-card`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {isPremiumTemplate}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={Path.getUrlById(offer.id)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price.value}.</b>
            <span className="place-card__price-text">&#47;&nbsp;{price.period}</span>
          </div>
          <BookmarksButton
            id={id}
            type={BookmarksButtonType.PLACE_CARD}
            isInBookmarks={isInBookmarks}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${widthForRatingStar}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={Path.getUrlById(offer.id)}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropTypes,
  className: PropTypes.string.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
};

export default OfferCard;
