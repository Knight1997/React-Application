import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class ItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClicks = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    // const {deleteItem} = this.props.deleteItem;
    const itemId = this.props.itemId;
    const deleteItem = this.props.deleteItem;
    return (
      <div>
        <button width="400" id="ItemButton" onClick={this.handleClicks}>
          Buy Now
        </button>
        <button
          width="400"
          id="DeleteButton"
          onClick={() => deleteItem(itemId)}
        >
          {" "}
          Dont Show this item
        </button>
        <h4 className="fas fa-2x">
          Number of Items: {this.state.count}
        </h4>
      </div>
    );
  }
}
