import React from "react";
import {PropTypes} from "prop-types";
import OfferCard from "../offerCard/offerCard";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this._setState = this._setState.bind(this);
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
            onMouseEnterCard={this._setState}
          />
        ))}
      </div>
    );
  }

  _setState(offerState) {
    this.setState(offerState);
    console.log(this.state);
  }
}

OfferList.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferCardClick: PropTypes.func.isRequired
};

export default OfferList;
