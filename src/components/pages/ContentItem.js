import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Edit from '..//forms/Edit';

export class ContentItem extends Component {

  render() {
    const { match: { url }, itemDel, items} = this.props;
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <Edit {...items.find(item => item.id_IMONE.toString() === props.match.params.itemId)} />
        }/>
        {items.map(item  =>
          <p key={item.id_IMONE}>
            {item.Pavadinimas}
            <Link to={`${url}/edit/${item.id_IMONE}`}>Edit</Link>
            <Button negative onClick={itemDel.bind(this, item.id_IMONE)}>Delete</Button>
          </p>
        )}
      </div>
    );
  }
}
// <Route path={`${url}/edit/:itemId`} render={
//     ({ match })  =>(
//     <Edit  {...this.props.items.find(item => item.id_IMONE === match.params.itemId)}/>
//   )}/>

export default ContentItem
