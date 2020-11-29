import {ActionType, cities, CommentSendingStatus, SortType} from "../../../constants";
import {offers} from "../../../mock/offer";
import {extend, filterOffersByCity, sortOffers} from "../../../utils/common";

const initialState = {
  city: cities[0],
  sortType: SortType.POPULAR_DESC,
  enteredOffer: {id: ``, location: []},
  userComment: {rating: `0`, text: ``},
  commentSendingStatus: CommentSendingStatus.DONE,
};

const stateData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return (
        extend(state, {city: action.payload})
      );

    case ActionType.SET_RATING:
      return (
        extend(state, {userComment: extend(state.userComment, {rating: action.payload})}));

    case ActionType.ENTER_TEXT:
      return (
        extend(state, {userComment: extend(state.userComment, {text: action.payload})}));

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

    case ActionType.CHANGE_COMMENT_SENDING_STATUS:
      return (extend(state, {commentSendingStatus: action.payload}));

    default:
      return state;
  }
};

export {stateData};
