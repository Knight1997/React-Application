import React, { Component } from "react";

export default class OrdersWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleAdd = () => {
    this.setState(
      state => {
        return { count: state.count + 1 };
      },
      () => this.props.callback(this.state.count)
    );
  };
  handleMinus = () => {
    this.setState(state => {
      if (state.count === 0) return { count: 0 };
      return { count: state.count - 1 };
    }, this.props.callback(this.state.count));
  };
  render() {
    return (
      <div className="orderCounts">
        <i
          className="fa fa-minus minusButton"
          aria-hidden="true"
          onClick={this.handleMinus}
        ></i>
        <span className="orderCounter">{this.state.count}</span>
        <i
          className="fa fa-plus plusButton"
          aria-hidden="true"
          onClick={this.handleAdd}
        ></i>
      </div>
    );
  }
}
