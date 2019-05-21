import React from 'react';
import PropTypes from 'prop-types';
import { Table,  } from 'semantic-ui-react';


// <Table.Cell>{item.Data}</Table.Cell>
// <Table.Cell>{item.Vardas}</Table.Cell>
// <Table.Cell>{item.Uzsakymas}</Table.Cell>
// <Table.Cell>{item.Kaina}</Table.Cell>
// <Table.Cell>{item.Arbatpinigiai}</Table.Cell>
const ReportOrderItem = ({items}) => (
  <Table striped singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Restaurant</Table.HeaderCell>
        <Table.HeaderCell>{"Date"}</Table.HeaderCell>
        <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
        <Table.HeaderCell>Order</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Tips</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {for(var i = 0; i < items.length; i++){
      <Table.Row key={item.id_UZSAKYMAS}>
        <Table.Cell>{item[i].Pavadinimas}</Table.Cell>

      </Table.Row>
      }
    }
    </Table.Body>
  </Table>


);


export default ReportOrderItem;
