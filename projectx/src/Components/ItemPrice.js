import React, { Component } from "react";

export default class ItemPrice extends Component {
  render() {
    return (
      <div>
        <h3 id="ItemPrice">Price: Rs {this.props.price}</h3>
      </div>
    );
  }
}
