import React from 'react';
import PropTypes from 'prop-types';
import { Table  } from 'semantic-ui-react';


// {items.map(item =>
//   <Table.Row key={item.id_UZSAKYMAS}>
//     <Table.Cell>{item.Pavadinimas}</Table.Cell>
//   </Table.Row>
// )}

// <Table.Cell>{item.Data}</Table.Cell>
// <Table.Cell>{item.Vardas}</Table.Cell>
// <Table.Cell>{item.Uzsakymas}</Table.Cell>
// <Table.Cell>{item.Kaina}</Table.Cell>
// <Table.Cell>{item.Arbatpinigiai}</Table.Cell>

// <Table attached="top">
//   <Table.Header fullWidth>
//     <Table.Row textAlign="center">
function ReportOrderItem(data) {
  let newName = '';
  const nameChange = (name) => {
    newName=name;
  }
  const tableHeader = (previousName) => (

    previousName !== newName &&
        (<Table attached>
          <Table.Header fullWidth>
            <Table.Row textAlign="center">
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell >{previousName}</Table.HeaderCell>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
            </Table.Row>
        </Table.Header>
      </Table>)
  );
  return(
    <React.Fragment>
    <Table striped singleLine fixed attached="top">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{"Date"}</Table.HeaderCell>
          <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
          <Table.HeaderCell>Order</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Tips</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </Table>
    {data.items.map(item =>
      <React.Fragment key={item.id_UZSAKYMAS}>
      {tableHeader(item.Pavadinimas)}
      {nameChange(item.Pavadinimas)}
        <Table striped singleLine fixed attached>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{item.Data}</Table.Cell>
            <Table.Cell>{item.Vardas}</Table.Cell>
            <Table.Cell>{item.Uzsakymas}</Table.Cell>
            <Table.Cell>{item.Kaina}</Table.Cell>
            <Table.Cell>{item.Arbatpinigiai}</Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>
      </React.Fragment>
    )}

  </React.Fragment>
  );
}


export default ReportOrderItem;
