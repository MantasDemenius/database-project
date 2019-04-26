import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
// import ImoneEdit from './ImoneEdit';

class RestoranasItem extends Component {

  render() {
    const { match: { url }, itemDel, items} = this.props;
    return (
      <div>
        {/*<Route path={`${url}/edit/:itemId`} render={
            props => <ImoneEdit {...items.find(item => item.id_IMONE.toString() === props.match.params.itemId)} />
        }/>*/}
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Restorano pavadinimas</Table.HeaderCell>
              <Table.HeaderCell>Imones pavadinimas</Table.HeaderCell>
              <Table.HeaderCell>Adresas</Table.HeaderCell>
              <Table.HeaderCell>Telefono numeris</Table.HeaderCell>
              <Table.HeaderCell>Vadovo vardas</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_RESTORANAS}>
                  <Table.Cell>{item.id_RESTORANAS}</Table.Cell>
                  <Table.Cell>{item.IPavadinimas}</Table.Cell>
                  <Table.Cell>{item.Pavadinimas}</Table.Cell>
                  <Table.Cell>{item.Adresas}</Table.Cell>
                  <Table.Cell>{item.Telefono_numeris}</Table.Cell>
                  <Table.Cell>{item.Vadovo_vardas}</Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`${url}/edit/${item.id_RESTORANAS}`}>Redaguoti</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_RESTORANAS)}>Ištrinti</Button></Table.Cell>
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


export default RestoranasItem
