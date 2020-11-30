import {createSelector} from "reselect";
import {sortOffers} from "../utils/common";
import {NameSpace} from "./root-reducer";

const getOffers = (state) => state;
const getFilteredByCityOffers = (state) => state[NameSpace.DATA].offers.filter((offer) => offer.city === state[NameSpace.STATE].city);

const getCityOffers = createSelector(
    getOffers,
    (state) => sortOffers(getFilteredByCityOffers(state), state[NameSpace.STATE].sortType)
);

export {getCityOffers};
