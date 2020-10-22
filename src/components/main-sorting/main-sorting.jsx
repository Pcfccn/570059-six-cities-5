import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {PropTypes} from "prop-types";
import MainSortingOptionsList from "../main-sorting-options/main-sorting-options-list";

const MainSort = (props) => {
  const {isSortOptionsOpened, openSortOptions} = props;
  const handleOpenSortOptions = () => {
    openSortOptions(isSortOptionsOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleOpenSortOptions}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOptionsOpened ? `places__options--opened` : ``}`}>
        <MainSortingOptionsList />
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isSortOptionsOpened: state.isSortOptionsOpened,
});

const mapDispatchToProps = (dispatch) => ({
  openSortOptions(isSortOptionsOpened) {
    dispatch(ActionCreator.openSortOptions(isSortOptionsOpened));
  },
});

MainSort.propTypes = {
  openSortOptions: PropTypes.func.isRequired,
  isSortOptionsOpened: PropTypes.bool.isRequired,
};

export {MainSort};
export default connect(mapStateToProps, mapDispatchToProps)(MainSort);
