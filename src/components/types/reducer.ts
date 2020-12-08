import {TOfferData} from "../../store/reducers/offers-data/offers-data";
import {TStateData} from "../../store/reducers/state-data/state-data";
import {TUser} from "../../store/reducers/user/user";

export type TRootReducer = {
  DATA: TOfferData
  STATE: TStateData
  USER: TUser
}
