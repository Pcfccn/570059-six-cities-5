import {cities, SortType} from "../constants";
import {offers} from "../mock/offer";
import {extend} from "../utils/common";
import {ActionType} from "./action";

const initialState = {
  city: cities[0],
  offers: offers.filter((offer) => (offer.city === cities[0])),
  isSortOptionsOpened: false,
  sortType: SortType.POPULAR_DESC,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return (
        extend(state, {
          city: action.payload,
          offers: offers.filter((offer) => (offer.city === action.payload)),
        })
      );

    case ActionType.OPEN_SORT_OPTIONS:
      return (extend(state, {isSortOptionsOpened: action.payload}));

    case ActionType.CHANGE_SORT_TYPE:
      return (extend(state, {sortType: action.payload}));

    default:
      return state;
  }

};

export {reducer};
