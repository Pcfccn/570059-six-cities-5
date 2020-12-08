import {TAction} from "../../../components/types/action";
import {ActionType, CITIES, CommentSendingStatus, SortType} from "../../../constants";
import {extend} from "../../../utils/common";

type TStateData = {
  city: string,
  sortType: string,
  enteredOffer: {id: string, location: [number, number]},
  userComment: {rating: string, text: string},
  commentSendingStatus: string,
};

const initialState: TStateData = {
  city: CITIES[0],
  sortType: SortType.POPULAR_DESC,
  enteredOffer: {id: ``, location: [0, 0]},
  userComment: {rating: `0`, text: ``},
  commentSendingStatus: CommentSendingStatus.DONE,
};

const stateData = (state: TStateData = initialState, action: TAction) => {
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
      return (
        extend(state, {sortType: action.payload.type}));

    case ActionType.CHANGE_ENTERED_OFFER:
      return (extend(state, {enteredOffer: action.payload.offer}));

    case ActionType.CHANGE_COMMENT_SENDING_STATUS:
      return (extend(state, {commentSendingStatus: action.payload}));

    default:
      return state;
  }
};

export {stateData, TStateData};
