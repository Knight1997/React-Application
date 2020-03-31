import React, { Component } from "react";
import ItemPicture from "./ItemPicture";
import ItemPrice from "./ItemPrice";
import ItemButton from "./ItemButton";
import DeleteItem from "./DeleteItem";
import OrdersWindow from "./OrdersWindow";
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  callback = count => {
    this.setState({ count: count });
  };
  render() {
    return (
      <div className="ItemClass">
        <ItemPicture url={this.props.imgUrl} altName={this.props.itemName} />
        <ItemPrice price={this.props.itemPrice} />
        <OrdersWindow callback={this.callback} />
        <ItemButton count={this.state.count} />
        <DeleteItem deleteItem={this.props.deleteItem} itemId={this.props.id} />
      </div>
    );
  }
}
