import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {PropTypes} from "prop-types";
import MainSortingOptionsList from "../main-sorting-options-list/main-sorting-options-list";
import offerPropTypes from "../types/offer";
import withSortMenuOpen from "../hocs/with-toggle/with-toggle";

class MainSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeSortType = this.handleChangeSortType.bind(this);
  }

  handleChangeSortType(chosedSortType) {
    const {offers, city, changeSortType} = this.props;
    changeSortType(offers, city, chosedSortType);
    this.props.handleToggleClick();
  }

  render() {
    const {sortType, isActive, handleToggleClick} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={handleToggleClick}
        >
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isActive ? `places__options--opened` : ``}`}>
          <MainSortingOptionsList changeType={this.handleChangeSortType} activeSortType={sortType} />
        </ul>
      </form>
    );
  }
}
const withOpenSortMainSort = withSortMenuOpen(MainSort);

MainSort.propTypes = {
  changeSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({STATE, DATA}) => ({
  sortType: STATE.sortType,
  offers: DATA.offers,
  city: STATE.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(offers, city, sortType) {
    dispatch(ActionCreator.changeSortType(offers, city, sortType));
  },
});

export {MainSort};
export default connect(mapStateToProps, mapDispatchToProps)(withOpenSortMainSort);
