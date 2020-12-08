import React, {FC} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path, AuthorizationStatus} from "../../constants";
import {TRootReducer} from "../types/reducer";

type THeaderProps = {
  authStatus: typeof AuthorizationStatus.AUTH | typeof AuthorizationStatus.NO_AUTH
  email: string | null
}

const Header: FC<THeaderProps> = ({authStatus, email}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={Path.MAIN}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={Path.FAVORITES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {authStatus === AuthorizationStatus.AUTH
                      ? email
                      : `Sign In`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({USER}: TRootReducer) =>({
  authStatus: USER.authorizationStatus,
  email: USER.email
});

export {Header};
export default connect(mapStateToProps)(Header);
