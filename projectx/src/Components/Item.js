import React, { Component } from "react";
import ItemPicture from "./ItemPicture";
import ItemPrice from "./ItemPrice";
import ItemButton from "./ItemButton";
export default class Item extends Component {
  render() {
    return (
      <div className="ItemClass">
        <ItemPicture url={this.props.imgUrl} altName={this.props.itemName} />
        <ItemPrice price={this.props.itemPrice} />
        <ItemButton itemId={this.props.id} deleteItem={this.props.deleteItem} />
      </div>
    );
  }
}
