import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ApiActionCreator} from "../../store/api-actions";
import FavoritesCityItem from "../favorites-city-item/favorites-city-item";
import Header from "../header/header";
import {TOffer} from "../types/offer";
import {TRootReducer} from "../types/reducer";

type TFavoritesProps = {
  favorites: TOffer[]
  offers: TOffer[]
  fetchFavorites: () => void
};

const Favorites: React.FC<TFavoritesProps> = ({favorites, offers, fetchFavorites}) => {
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


  const favoritesCity = new Set<string>();
  favorites.map((item) => {
    favoritesCity.add(item.city);
  });

  const getFavoritesFromCity = (city: string, favotiteOffers: TOffer[]) => ((favotiteOffers).filter((offer) => offer.city === city));

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

const mapStateToProps = ({DATA}: TRootReducer) => ({
  favorites: DATA.favorites,
  offers: DATA.offers,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchFavorites() {
    dispatch(ApiActionCreator.fetchFavorites());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
