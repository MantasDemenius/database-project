import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

class CommentsItem extends Component {

  render() {
    const { itemDel, items} = this.props;
    return (
      <div>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Restaurant's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Comment"}</Table.HeaderCell>
              <Table.HeaderCell>{"Date"}</Table.HeaderCell>
              <Table.HeaderCell>{"Stars ☆"}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_ATSILIEPIMAS}>
                  <Table.Cell>{item.id_ATSILIEPIMAS}</Table.Cell>
                  <Table.Cell>{item.IPavadinimas}</Table.Cell>
                  <Table.Cell>{item.Pavadinimas}</Table.Cell>
                  <Table.Cell>{item.Adresas}</Table.Cell>
                  <Table.Cell>{item.Telefono_numeris}</Table.Cell>
                  <Table.Cell>{item.Vadovo_vardas}</Table.Cell>
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
