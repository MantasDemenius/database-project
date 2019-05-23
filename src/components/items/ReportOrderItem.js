import React from 'react';
import { Table  } from 'semantic-ui-react';

function ReportOrderItem(props) {

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

  const fullPrice = (previousName, sumPrice, sumTips, avgPrice, avgTips) => (
  previousName !== newName &&
  (<React.Fragment>
    <Table singleLine fixed attached>
      <Table.Body>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell active>Sum</Table.Cell>
          <Table.Cell active>{sumPrice}</Table.Cell>
          <Table.Cell active>{sumTips}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell active>Average</Table.Cell>
          <Table.Cell active>{avgPrice}</Table.Cell>
          <Table.Cell active>{avgTips}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>)

  );

  let position = 1;
  const counter = () => {
    position = position + 1;
  }


  return(
    <React.Fragment>
    <Table singleLine fixed attached="top">
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
    {props.items.map(item =>
      <React.Fragment key={item.id_UZSAKYMAS}>

        {tableHeader(item.Pavadinimas)}
        {nameChange(item.Pavadinimas)}

          <Table singleLine fixed attached>
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
            {fullPrice(position !== props.items.length ? props.items[position].Pavadinimas : '' ,
               item.Kaina_Suma, item.Arbatpinigiai_Suma,
               item.Kaina_Vidurkis, item.Arbatpinigiai_Vidurkis)}
            {counter()}
      </React.Fragment>
    )}
    <Table singleLine fixed attached color="green" inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Count</Table.HeaderCell>
          <Table.HeaderCell>{props.finalItems.Kiekis}</Table.HeaderCell>
          <Table.HeaderCell>Sum</Table.HeaderCell>
          <Table.HeaderCell>{props.finalItems.Full_Kaina}</Table.HeaderCell>
          <Table.HeaderCell>{props.finalItems.Full_Arbatpinigiai}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </Table>
    </React.Fragment>
  );
}


export default ReportOrderItem;
