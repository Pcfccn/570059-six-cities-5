import React from "react";

const withToggle = (Component) => {
  return class WithToggle extends React.PureComponent {
    constructor(props) {
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
