import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import SuppliersEdit from '../forms/SuppliersEdit';

class SuppliersItem extends Component {

  render() {
    const { match: { url }, itemDel, items} = this.props;
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <SuppliersEdit {...items.find(item => item.id_TIEKEJAS.toString() === props.match.params.itemId)} />
        }/>
      <div>
        <Table striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Supplier's name"}</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>{"Manager's name"}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_TIEKEJAS}>
                  <Table.Cell>{item.id_TIEKEJAS}</Table.Cell>
                  <Table.Cell>{item.Pavadinimas}</Table.Cell>
                  <Table.Cell>{item.Adresas}</Table.Cell>
                  <Table.Cell>{item.Telefono_numeris}</Table.Cell>
                  <Table.Cell>{item.Vadovo_vardas}</Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`${url}/edit/${item.id_TIEKEJAS}`}>Edit</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_TIEKEJAS)}>Delete</Button></Table.Cell>
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


export default SuppliersItem
