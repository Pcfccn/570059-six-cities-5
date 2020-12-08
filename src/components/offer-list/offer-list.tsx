import React, {FC} from "react";
import OfferCard from "../offer-card/offer-card";
import {OfferCardClassName} from "../../constants";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {TEmptyOffer, TOffer} from "../types/offer";

type TOfferListProps = {
  changeEnteredOffer: (entreredOffer: TOffer | TEmptyOffer) => void
  offerCards: TOffer[]
}
const OfferList: FC<TOfferListProps> = ({changeEnteredOffer, offerCards}) => {
  const handleMouseEnterCard = (entreredOffer: TOffer | TEmptyOffer) => {
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

const mapDispatchToProps = (dispatch: any) => ({
  changeEnteredOffer(entreredOffer: TOffer | TEmptyOffer) {
    dispatch(ActionCreator.changeEnteredOffer(entreredOffer));
  },
});

export {OfferList};
export default connect(null, mapDispatchToProps)(OfferList);
