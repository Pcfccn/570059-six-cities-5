import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ApiActionCreator} from "../../store/api-actions";
import FavoritesCityItem from "../favorites-city-item/favorites-city-item";
import Header from "../header/header";
import {PropTypes} from "prop-types";
import offerPropTypes from "../types/offer";

const Favorites = ({favorites, offers, fetchFavorites}) => {
  useEffect(() => {
    fetchFavorites();
  }, []);

  if (!favorites.length) {
    return (
      <div className="page page--favorites-empty">
        <Header />

        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>);
  }


  const favoritesCity = new Set();
  favorites.map((item) => {
    favoritesCity.add(item.city);
  });

  const getFavoritesFromCity = (city, favotiteOffers) => ((favotiteOffers).filter((offer) => offer.city === city));

  const favoritesCityComponents = Array.from(favoritesCity).map((city) => (<FavoritesCityItem
    key={city}
    city={city}
    favorites={getFavoritesFromCity(city, favorites)}
    offers={offers}
  />));
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCityComponents}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  fetchFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(offerPropTypes).isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favorites: DATA.favorites,
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites() {
    dispatch(ApiActionCreator.fetchFavorites());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
