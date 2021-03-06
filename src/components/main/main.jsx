import {PropTypes} from "prop-types";
import React from "react";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";
import MainPlaces from "../main-places/main-places";
import MainNoPlaces from "../main-no-places/main-no-places";
import offerPropTypes from "../types/offer";

const Main = ({offers, city}) => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {offers && offers.length
          ? <MainPlaces city={city}/>
          : <MainNoPlaces city={city}/>
        }
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  offers: DATA.offers,
  city: STATE.city,
});

export {Main};
export default connect(mapStateToProps)(Main);
