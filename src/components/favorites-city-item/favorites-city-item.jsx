import React from "react";
import FavoritesOfferCard from "../favorites-offer-card/favorite-offer-card";
import {PropTypes} from "prop-types";
import offerPropTypes from "../types/offer";

const FavoritesCityItem = ({city, favorites, offers}) => {
  const getOffer = (allOffers, id) => allOffers.filter((offer) => offer.id === id)[0];
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favotiteOffer) => <FavoritesOfferCard key={favotiteOffer.id} favotiteOffer={favotiteOffer} offer={getOffer(offers, favotiteOffer.id)}/>)}
      </div>
    </li>
  );
};


FavoritesCityItem.propTypes = {
  city: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(offerPropTypes).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default FavoritesCityItem;
