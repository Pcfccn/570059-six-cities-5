import React, {FC} from "react";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";
import MainPlaces from "../main-places/main-places";
import MainNoPlaces from "../main-no-places/main-no-places";
import {TOffer} from "../types/offer";
import {TRootReducer} from "../types/reducer";

type TMainProps = {
  offers: TOffer[]
  city: string
}

const Main: FC<TMainProps> = ({offers, city}) => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {offers && offers.length
          ? <MainPlaces city={city}/>
          : <MainNoPlaces city={city}/>
        }
      </main>
    </div>
  );
};

const mapStateToProps = ({DATA, STATE}: TRootReducer) => ({
  offers: DATA.offers,
  city: STATE.city,
});

export {Main};
export default connect(mapStateToProps)(Main);
