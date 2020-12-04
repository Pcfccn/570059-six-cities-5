import React from "react";
import {BookmarksButtonType, Path} from "../../constants";
import {getWidthForRatingStar} from "../../utils/common.ts";
import BookmarksButton from "../bookmark-button/bookmark-button";
import offerPropTypes from "../types/offer";

const FavoritesOfferCard = ({favotiteOffer, offer}) => {
  const {id, previewImage, price, rating, name, type} = favotiteOffer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={Path.getUrlById(id)}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksButton
            key={offer.isInBookmarks}
            id={id}
            type={BookmarksButtonType.PLACE_CARD}
            isInBookmarks={offer.isInBookmarks}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getWidthForRatingStar(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={Path.getUrlById(id)}>{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

FavoritesOfferCard.propTypes = {
  favotiteOffer: offerPropTypes,
  offer: offerPropTypes,
};

export default FavoritesOfferCard;
