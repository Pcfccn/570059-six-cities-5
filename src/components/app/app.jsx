import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Path} from "../../constants";
import {reviews} from "../../mock/offer";
import {getOffer, getReviews} from "../../utils/common";
import Favorites from "../favorites/favorites";
import Main from "../main/main";
import Offer from "../offer/Offer";
import SignIn from "../sign-in/sign-in";

// const onSubmitForm = (state) => {
const onSubmitForm = () => {
  // console.log(state);
};

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path = {Path.MAIN}
          render={() => (
            <Main
              offers={offers}
              onSubmitForm={onSubmitForm}
            />
          )
          }
        />
        <Route exact path = {Path.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path = {Path.FAVORITES}>
          <Favorites />
        </Route>
        <Route
          path = {Path.OFFER} exact
          render={(offerProps) => (
            <Offer
              offer={getOffer(offers, offerProps)}
              reviews={getReviews(offers, reviews, offerProps)}
              onSubmitForm={onSubmitForm}
            />
          )
          }
        />
        <Route
          render = {() => (
            <Fragment>
              <h1>There`s no page</h1>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    image: PropTypes.array.isRequired,
    inside: PropTypes.array.isRequired,
    isInBookmarks: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.object.isRequired,
  }).isRequired)
};

export default App;
