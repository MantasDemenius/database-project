import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table, Icon } from 'semantic-ui-react';
import RestoranasEdit from '../forms/RestoranasEdit';
import CommentsItem from './CommentsItem';
// {...props} ClientItems={ClientItems} CommentItems={CommentItems}
class RestoranasItem extends Component {

  render() {
    const { match: { url }, itemDel, items, CompanyItems, SupplierItems} = this.props;
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <RestoranasEdit {...items.find(item => item.id_RESTORANAS.toString() === props.match.params.itemId)}
            dropdownItems1={CompanyItems} dropdownItems2={SupplierItems} />
        }/>
      <Route path={`${url}/comments/:itemId`} render={
            props => <CommentsItem {...items.find(item => item.id_RESTORANAS.toString() === props.match.params.itemId)}
             itemDel={itemDel}  />
        }/>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Restaurant's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Company's name"}</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>{"Manager's name"}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
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
                  <Table.Cell><Button secondary><Link style={button} to={`${url}/comments/${item.id_RESTORANAS}`}>Comments</Link><Icon style={icon} name="comment"/></Button></Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`${url}/edit/${item.id_RESTORANAS}`}>Edit</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_RESTORANAS)}>Delete</Button></Table.Cell>
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

const icon = {
  paddingLeft: '10%'
}

export default RestoranasItem
