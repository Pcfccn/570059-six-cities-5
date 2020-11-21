import React from "react";
import {PropTypes} from "prop-types";
import OfferList from "../offer-list/offer-list";
import MapComponent from "../map/map";
import {MapClassName} from "../../constants";
import offerPropTypes from "../types/offer";
import MainSort from "../main-sorting/main-sorting";
import {connect} from "react-redux";
import {getCityOffers} from "../../store/selectors";

const MainPlaces = ({offers, city, enteredOfferLocation, enteredOfferId, sortType}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
          <MainSort />
          <OfferList key={sortType} offerCards={offers} />
        </section>
        <div className="cities__right-section">
          <MapComponent
            key={`${city}-${enteredOfferId}`}
            className={MapClassName.CITIES}
            cityLocation={offers[0].cityLocation}
            zoom={offers[0].cityZoom}
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
  sortType: PropTypes.string.isRequired,
  enteredOfferId: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
  enteredOfferLocation: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  enteredOfferLocation: state.STATE.enteredOffer.location,
  enteredOfferId: state.STATE.enteredOffer.id,
  offers: getCityOffers(state),
  sortType: state.STATE.sortType,
});

export {MainPlaces};
export default connect(mapStateToProps)(MainPlaces);
