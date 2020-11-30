import React from "react";
import City from "../city/city";
import PropTypes from "prop-types";
import {CITIES} from "../../constants";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = ({city, changeCity}) => {
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


const mapStateToProps = ({STATE}) => ({
  city: STATE.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(thisCity) {
    dispatch(ActionCreator.changeCity(thisCity));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
