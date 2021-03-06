import React from "react";
import {PropTypes} from "prop-types";
import OfferCard from "../offer-card/offer-card";
import offerPropTypes from "../types/offer";
import {OfferCardClassName} from "../../constants";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const OfferList = ({changeEnteredOffer, offerCards}) => {
  const handleMouseEnterCard = (entreredOffer) => {
    changeEnteredOffer(entreredOffer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((currentCard) => (
        <OfferCard
          key={currentCard.id}
          offer={currentCard}
          className={OfferCardClassName.CITIES_PLACE}
          onMouseEnterCard={handleMouseEnterCard}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(offerPropTypes).isRequired,
  changeEnteredOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeEnteredOffer(entreredOffer) {
    dispatch(ActionCreator.changeEnteredOffer(entreredOffer));
  },
});

export {OfferList};
export default connect(null, mapDispatchToProps)(OfferList);
