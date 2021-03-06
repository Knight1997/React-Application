import React, { Component } from "react";
import "./index.css";
import itemsData from "./ItemsData";
import Item from "./Components/Item";
import Navbar from "./Components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemsData
    };
  }
  deleteItem = id => {
    const revisedItemsdata = this.state.items.filter(item => item.id !== id);
    this.setState({ items: revisedItemsdata });
  };
  render() {
    return (
      <React.Fragment>
        <section>
          <Navbar />
        </section>
        <section className="ItemsClass">
          {this.state.items.map(item => (
            <Item
              key={item.id}
              imgUrl={item.imgUrl}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              id={item.id}
              deleteItem={this.deleteItem}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
