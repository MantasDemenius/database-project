import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


export class ContentItem extends Component {

  render() {
    const { match: { url }} = this.props;
    return (
      <div className="content-item">
        {this.props.items.map(item  =>
          <p key={item.id_IMONE}>
            {item.Pavadinimas}
            <Link to={`${url}/edit/${item.id_IMONE}`}>Edit</Link>
            <Button negative onClick={this.props.itemDel.bind(this, item.id_IMONE)}>Delete</Button>

          </p>
        )}

      </div>
    );
  }
}
export default ContentItem
