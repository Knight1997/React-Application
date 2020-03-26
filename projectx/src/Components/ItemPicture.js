import React, { Component } from "react";

export default class ItemPicture extends Component {
  render() {
    return (
      <div>
        <img
          className="ItemPictureClass"
          src={this.props.url}
          alt={this.props.altName}
          width="200"
        />
      </div>
    );
  }
}
