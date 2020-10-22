import React from "react";
import {PropTypes} from "prop-types";
import OfferList from "../offer-list/offer-list";
import MapComponent from "../map/map";
import {MapClassName} from "../../constants";
import offerPropTypes from "../types/offer";
import MainSort from "../main-sorting/main-sorting";

const MainPlaces = (props) => {
  const {offers, city} = props;
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in Amsterdam`}</b>
          <MainSort />
          <OfferList offerCards={offers} />
        </section>
        <div className="cities__right-section">
          <MapComponent
            key={city}
            className={MapClassName.cities}
            city={city}
            pinLocations={offers.map((offer) => (offer.location))}
          />
        </div>
      </div>
    </div>
  );
};

MainPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

export default MainPlaces;
