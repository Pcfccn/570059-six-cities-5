import React from "react";
import {PropTypes} from "prop-types";
import OfferCard from "../offerCard/offerCard";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {offerCards, onOfferCardClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offerCards.map((currentCard) => (
          <OfferCard
            key={currentCard.id}
            offer={currentCard}
            onOfferCardClick={onOfferCardClick}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferCardClick: PropTypes.func.isRequired
};

export default OfferList;
