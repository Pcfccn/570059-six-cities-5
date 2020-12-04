import {ActionType} from "../../../constants";
import {adaptDataToOffers} from "../../../services/adapter";
import {TComment} from "../../../components/types/comment";
import {TOffer} from "../../../components/types/offer";
import {extend, sortComments} from "../../../utils/common";

type TOfferDataInitialState = {
  offers: TOffer[]
  favorites: []
  comments: TComment []
  nearbyOffers: []
  numberOfComments: number
}

const initialState: TOfferDataInitialState = {
  offers: [],
  favorites: [],
  comments: [],
  nearbyOffers: [],
  numberOfComments: 0,
};

const offersData = (state: TOfferDataInitialState = initialState, action: any) => {
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
        .sort((prev: TComment, next: TComment): number => sortComments(prev, next))
        .slice(0, 10),
        numberOfComments: action.payload.length,
      });

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearbyOffers: adaptDataToOffers(action.payload)});
  }
  return state;
};

export {offersData};
