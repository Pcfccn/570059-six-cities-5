import React, { FC } from "react";
import {connect} from "react-redux";
import {ApiActionCreator} from "../../store/api-actions";
import Header from "../header/header";
import PropTypes from "prop-types";

type TAuthData = {
  email: string
  password: string
}
type TSignInProps = {
  onSubmit: ({email, password}: TAuthData) => void
}

const SignIn: FC<TSignInProps> = ({onSubmit}) => {

  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  const handleFormSubmit = (evt: any) => {
    evt.preventDefault();
    onSubmit({
      email: emailRef.current ? emailRef.current.value : ``,
      password: passwordRef.current ? passwordRef.current.value : ``
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required={true}
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit(authData: TAuthData) {
    dispatch(ApiActionCreator.login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
