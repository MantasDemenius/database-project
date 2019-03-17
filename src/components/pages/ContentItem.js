import React, { Component } from 'react';



class ContentItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default ContentItem;
