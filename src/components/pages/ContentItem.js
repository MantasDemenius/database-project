import React, { Component } from 'react';



export class ContentItem extends Component {
  render() {
    return (
      <div className="content-item">
        <p>{this.props.item.Pavadinimas}
        <button className="btn-del">X</button>
        </p>
      </div>
    );
  }
}

export default ContentItem;
