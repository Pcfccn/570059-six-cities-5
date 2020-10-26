import {cities, SortType} from "../constants";
import {offers} from "../mock/offer";
import {extend, filterOffersByCity, sortOffers} from "../utils/common";
import {ActionType} from "./action";

const initialState = {
  city: cities[0],
  offers: filterOffersByCity(offers, cities[0]),
  isSortOptionsOpened: false,
  sortType: SortType.POPULAR_DESC,
  enteredOffer: {id: ``, location: []},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return (
        extend(state, {
          city: action.payload,
          offers: filterOffersByCity(offers, action.payload),
        })
      );

    case ActionType.OPEN_SORT_OPTIONS:
      return (extend(state, {isSortOptionsOpened: action.payload}));

    case ActionType.CHANGE_SORT_TYPE:
      if (action.payload.type === SortType.POPULAR_DESC) {
        return (extend(state, {
          sortType: action.payload.type,
          offers: filterOffersByCity(offers, action.payload.city),
        }));
      } else {
        return (extend(state, {
          sortType: action.payload.type,
          offers: sortOffers(action.payload.offers, action.payload.type),
        }));
      }

    case ActionType.CHANGE_ENTERED_OFFER:
      return (extend(state, {enteredOffer: action.payload.offer}));

    default:
      return state;
  }
};

export {reducer};
