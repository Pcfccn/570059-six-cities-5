import React from "react";
import {PropTypes} from "prop-types";
import OfferCard from "../offer-card/offer-card";
import offerPropTypes from "../types/offer";
import {OfferCardClassName} from "../../constants";

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
            className={OfferCardClassName.citiesPlace}
            onMouseEnterCard={this.handleMouseEnterCard}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OfferList;
