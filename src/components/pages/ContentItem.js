import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


        //<button className="btn-edit" onClick={this.redirectToTarget}>Edit</button>
export class ContentItem extends Component {

  render() {
    console.log(this.props.item);
    const { match: { url }, id_IMONE, Pavadinimas } = this.props.item;
    return (
      <div className="content-item">
        <p key={id_IMONE}>{Pavadinimas}
        <button className="btn-del" onClick={this.props.delItem.bind(this, id_IMONE)}>Delete</button>
        <Link className="btn-edit" to={`${url}/edit`}>Edit</Link>

        </p>
      </div>
    );
  }
}

ContentItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ContentItem;
