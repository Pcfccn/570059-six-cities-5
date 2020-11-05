import {createSelector} from "reselect";
import {NameSpace} from "./root-reducer";

const getOffers = (state) => state;

const getCityOffers = createSelector(
    getOffers,
    (state) => state[NameSpace.DATA].offers.filter((offer) => offer.city === state[NameSpace.STATE].city)
);

export {getCityOffers};
