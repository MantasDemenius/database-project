import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class ContentItem extends Component {
  render() {
    const { id_IMONE, Pavadinimas } = this.props.item;
    return (
      <div className="content-item">
        <p>{Pavadinimas}
        <button className="btn-del" onClick={this.props.delItem.bind(this, id_IMONE)}>Delete</button>
        <button className="btn-edit">Edit</button>
        </p>
      </div>
    );
  }
}

ContentItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ContentItem;
