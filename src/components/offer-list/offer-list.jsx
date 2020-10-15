import React from "react";
import {PropTypes} from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleMouseEnterCard = this.handleMouseEnterCard.bind(this);
  }

  handleMouseEnterCard(offerState) {
    this.setState(offerState);
  }

  render() {
    const {offerCards} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offerCards.map((currentCard) => (
          <OfferCard
            key={currentCard.id}
            offer={currentCard}
            onMouseEnterCard={this.handleMouseEnterCard}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OfferList;
