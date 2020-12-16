import React, { Component, FC } from "react";

type TComponentState = {
  isActive: boolean
}

const withToggle = (Component: any) => {
  return class WithToggle extends React.PureComponent<any, TComponentState> {
    constructor(props: any) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          handleToggleClick={this._handleClick}
        />
      );
    }
  };
};

export default withToggle;
