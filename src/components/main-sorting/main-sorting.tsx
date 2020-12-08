import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainSortingOptionsList from "../main-sorting-options-list/main-sorting-options-list";
import withSortMenuOpen from "../../hocs/with-toggle/with-toggle";
import {TRootReducer} from "../types/reducer";
import {TOffer} from "../types/offer";

type TMainSortProps = {
  offers: TOffer[]
  city: string
  sortType: string
  isActive: boolean
  changeSortType: (offers: TOffer[], city: string, sortType: string) => {}
  handleToggleClick: () => void
}

class MainSort extends React.PureComponent<TMainSortProps> {
  constructor(props: TMainSortProps) {
    super(props);

    this.handleChangeSortType = this.handleChangeSortType.bind(this);
  }

  handleChangeSortType(chosedSortType: string) {
    const {offers, city, changeSortType, handleToggleClick} = this.props;
    changeSortType(offers, city, chosedSortType);
    handleToggleClick();
  }

  render() {
    const {sortType, isActive, handleToggleClick} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0}
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

const mapStateToProps = ({STATE, DATA}: TRootReducer) => ({
  sortType: STATE.sortType,
  offers: DATA.offers,
  city: STATE.city,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeSortType(offers: TOffer[], city: string, sortType: string) {
    dispatch(ActionCreator.changeSortType(offers, city, sortType));
  },
});

export {MainSort};
export default connect(mapStateToProps, mapDispatchToProps)(withOpenSortMainSort);
