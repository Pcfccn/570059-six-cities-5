import {createSelector} from "reselect";
import {getFilteredByCityOffers, sortOffers} from "../utils/common";
import {NameSpace} from "./root-reducer";

const getOffers = (state) => state;


const getCityOffers = createSelector(
    getOffers,
    (state) => sortOffers(getFilteredByCityOffers(state), state[NameSpace.STATE].sortType)
);

export {getCityOffers};
