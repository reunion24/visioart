import React, { Component } from "react";
/**
 * props:
 *    onToggle(state object) func - A callback after the component is toggled.
 *    label string - The label for the Dropdown
 *    children object - The content that needs to be shown or hidden
 */
export default class Dropdown extends Component {
  state = {
    show: false
  };

  toggle = () => {
    const { onToggle = () => {} } = this.props;
    this.setState(
      ({ show }) => {
        return {
          show: !show
        };
      },
      () => onToggle(this.state)
    );
  };

  render() {
    const { label = "Show", children } = this.props;
    const { show } = this.state;
    return (
      <div className="dropdown">
        <label onClick={this.toggle}>{label}</label>
        {show ? <div className="content">{children}</div> : null}
      </div>
    );
  }
}
