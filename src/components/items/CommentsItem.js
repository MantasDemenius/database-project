import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table, Popup } from 'semantic-ui-react';
import CommentEdit from '../forms/CommentEdit';

class CommentsItem extends Component {

  render() {
    const { match: { url }, itemDel, items} = this.props;
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <CommentEdit {...items.find(item => item.id_RESTORANAS.toString() === props.match.params.itemId)}/>
        }/>
      <div>
        <Table striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Restaurant's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Date"}</Table.HeaderCell>
              <Table.HeaderCell>{"Stars ☆"}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_ATSILIEPIMAS}>
                  <Table.Cell>{item.id_ATSILIEPIMAS}</Table.Cell>
                  <Table.Cell>{item.RPavadinimas}</Table.Cell>
                  <Table.Cell>{item.KVardas}</Table.Cell>
                  <Table.Cell>{item.Data}</Table.Cell>
                  <Table.Cell>{item.Ivertinimas}</Table.Cell>
                  <Table.Cell><Popup trigger={<Button>Read Comment</Button>} content={`${item.Komentaras}`} on='click' hideOnScroll /></Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`Comments/edit/${item.id_ATSILIEPIMAS}`}>Edit</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_ATSILIEPIMAS)}>Delete</Button></Table.Cell>
            </Table.Row>
            )}
          </Table.Body>
        </Table>
        </div>
      </div>
    );
  }
}

const button = {
  font: `bold 14px Arial`,
  textDecoration: `none`,
  color: `#ffffff`,
  padding: `11px 0px`
}


export default CommentsItem
