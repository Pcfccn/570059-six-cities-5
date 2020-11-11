import {PropTypes} from "prop-types";
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {AuthorizationStatus} from "../../constants";

const PrivateRoute = ({path, redirectPath, children, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Fragment>{children}</Fragment>
            : <Redirect to={redirectPath} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
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
