import React from "react";
import City from "../city/city";
import PropTypes from "prop-types";
import {CITIES} from "../../constants";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {TStateData} from "../../store/reducers/state-data/state-data";
import { TRootReducer } from "../types/reducer";

type TCityListProps = {
  city: string
  changeCity: (city: string) => void
}

const CitiesList: React.FC<TCityListProps> = ({city, changeCity}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((currentCity) => {
              const isActive = currentCity === city;
              return (
                <City
                  key={currentCity}
                  thisCity={currentCity}
                  active={isActive}
                  changeCity={changeCity}
                />
              );
            })
          }
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({STATE}: TRootReducer) => ({
  city: STATE.city,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeCity(thisCity: string) {
    dispatch(ActionCreator.changeCity(thisCity));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
