import {PropTypes} from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {AuthorizationStatus, Path} from "../../constants";
import Favorites from "../favorites/favorites";

const PrivateRoute = ({path, exact, authorizationStatus}) => {
  console.log(path, exact, authorizationStatus);
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Favorites />
            : <Redirect to={Path.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
