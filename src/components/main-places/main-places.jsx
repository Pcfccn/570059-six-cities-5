import React from "react";
import {PropTypes} from "prop-types";
import OfferList from "../offer-list/offer-list";
import MapComponent from "../map/map";
import {MapClassName} from "../../constants";
import offerPropTypes from "../types/offer";
import MainSort from "../main-sorting/main-sorting";
import {connect} from "react-redux";

const MainPlaces = (props) => {
  const {offers, city, enteredOfferLocation, enteredOfferId} = props;
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
            key={`${city}-${enteredOfferId}`}
            className={MapClassName.CITIES}
            city={city}
            pinLocations={offers.map((offer) => (offer.location)).filter((offerLocation) => offerLocation !== enteredOfferLocation)}
            chosedPinLocation={enteredOfferLocation}
          />
        </div>
      </div>
    </div>
  );
};

MainPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  enteredOfferId: PropTypes.string.isRequired,
  enteredOfferLocation: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  enteredOfferLocation: state.enteredOffer.location,
  enteredOfferId: state.enteredOffer.id,
});

export {MainPlaces};
export default connect(mapStateToProps)(MainPlaces);
