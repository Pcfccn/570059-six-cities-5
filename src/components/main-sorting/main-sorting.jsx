import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {PropTypes} from "prop-types";
import MainSortingOptionsList from "../main-sorting-options/main-sorting-options-list";
import offerPropTypes from "../types/offer";

class MainSort extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleOpenSortOptions = this.handleOpenSortOptions.bind(this);
    this.handleChangeSortType = this.handleChangeSortType.bind(this);
  }
  handleOpenSortOptions() {
    const {isSortOptionsOpened, openSortOptions} = this.props;
    openSortOptions(isSortOptionsOpened);
  }

  handleChangeSortType(chosedSortType) {
    const {offers, city, changeSortType} = this.props;
    changeSortType(offers, city, chosedSortType);
    this.handleOpenSortOptions();
  }

  render() {
    const {isSortOptionsOpened, sortType} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.handleOpenSortOptions}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isSortOptionsOpened ? `places__options--opened` : ``}`}>
          <MainSortingOptionsList changeType={this.handleChangeSortType} activeSortType={sortType} />
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isSortOptionsOpened: state.isSortOptionsOpened,
  sortType: state.sortType,
  offers: state.offers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  openSortOptions(isSortOptionsOpened) {
    dispatch(ActionCreator.openSortOptions(isSortOptionsOpened));
  },

  changeSortType(offers, city, sortType) {
    dispatch(ActionCreator.changeSortType(offers, city, sortType));
  },
});

MainSort.propTypes = {
  openSortOptions: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired,
  isSortOptionsOpened: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export {MainSort};
export default connect(mapStateToProps, mapDispatchToProps)(MainSort);
