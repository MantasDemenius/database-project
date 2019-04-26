import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import ImoneEdit from '../forms/ImoneEdit';

class ImoneItem extends Component {

  render() {
    const { match: { url }, itemDel, items} = this.props;
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <ImoneEdit {...items.find(item => item.id_IMONE.toString() === props.match.params.itemId)} />
        }/>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_IMONE}>
                  <Table.Cell>{item.id_IMONE}</Table.Cell>
                  <Table.Cell>{item.Pavadinimas}</Table.Cell>
                  <Table.Cell>{item.Adresas}</Table.Cell>
                  <Table.Cell>{item.Telefono_numeris}</Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`${url}/edit/${item.id_IMONE}`}>Edit</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_IMONE)}>Delete</Button></Table.Cell>
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


export default ImoneItem
