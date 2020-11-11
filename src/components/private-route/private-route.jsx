import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({path, isAuthorizated, redirectPath, children, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      isAuthorizated={isAuthorizated}
      render={() => {
        return (
          authorizationStatus === isAuthorizated
            ? <Fragment>{children}</Fragment>
            : <Redirect to={redirectPath} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isAuthorizated: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
