import React, {FC, Fragment, ReactNode} from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import { TRootReducer } from "../types/reducer";

type TPrivateRouteProps = {
  authorizationStatus: string
  isAuthorizated: string
  exact: boolean
  path: string
  redirectPath: string
  children: ReactNode
}

const PrivateRoute: FC<TPrivateRouteProps> = ({path, isAuthorizated, redirectPath, children, exact, authorizationStatus}) => {
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

const mapStateToProps = ({USER}: TRootReducer) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
