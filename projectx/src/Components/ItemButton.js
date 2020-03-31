import React, { Component } from "react";

export default class ItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClicks = () => {
    this.setState({count: this.props.count});
  };
  render() {
    return (
      <div>
        <button width="400" id="ItemButton" onClick={this.handleClicks}>
          Buy Now
        </button>
        <h4 className="fas fa-2x">Number of Items: {this.state.count}</h4>
      </div>
    );
  }
}
