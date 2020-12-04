import {combineReducers} from "redux";
import {offersData} from "./reducers/offers-data/offers-data";
import {stateData} from "./reducers/state-data/state-data";
import {user} from "./reducers/user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.STATE]: stateData,
  [NameSpace.USER]: user,
});
