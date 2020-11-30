import {extend, sortComments} from "../../../utils/common";
import {ActionType} from "../../../constants";
import {adaptDataToOffers} from "../../../services/adapter";

const initialState = {
  offers: [],
  favorites: [],
  comments: [],
  nearbyOffers: [],
  numberOfComments: 0,
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
          {offers: state.offers.map((offer) => {
            if (offer.id !== action.payload.id) {
              return offer;
            } else {
              return adaptDataToOffers([action.payload])[0];
            }
          })
          });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
        .sort((prev, next) => sortComments(prev, next))
        .slice(0, 10),
        numberOfComments: action.payload.length,
      });

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearbyOffers: adaptDataToOffers(action.payload)});
  }
  return state;
};

export {offersData};
