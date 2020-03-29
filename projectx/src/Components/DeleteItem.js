import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default class DeleteItem extends Component {
  render() {
    const itemId = this.props.itemId;
    const deleteItem = this.props.deleteItem;
    return (
      <div>
        <i
          className="fa fa-window-close"
          id="DeleteItem"
          onClick={() => deleteItem(itemId)}
          aria-hidden="true"
        ></i>
      </div>
    );
  }
}
