import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {adaptDataToOffers} from "../../../services/adapter";

const initialState = {offers: []};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: adaptDataToOffers(action.payload)});
  }
  return state;
};

export {offersData};
