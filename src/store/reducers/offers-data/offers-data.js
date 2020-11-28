import {extend} from "../../../utils/common";
import {ActionType} from "../../../constants";
import {adaptDataToOffers} from "../../../services/adapter";

const initialState = {
  offers: [],
  favorites: [],
  comments: [],
  nearbyOffers: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: adaptDataToOffers(action.payload)});

    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: adaptDataToOffers(action.payload)});

    case ActionType.LOAD_ONE_OFFER:
      return extend(
          state,
          {offers: state.offers.filter((offer) => offer.id !== action.payload.id)
          .concat(adaptDataToOffers([action.payload]))
          });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearbyOffers: adaptDataToOffers(action.payload)});
  }
  return state;
};

export {offersData};
