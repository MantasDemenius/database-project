import React, { Component } from 'react';



class ContentItem extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.item.title}</p>
      </React.Fragment>

    );
  }
}

export default ContentItem;
