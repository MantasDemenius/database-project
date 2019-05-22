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
function ReportOrderItem(props) {
  console.log(props);
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
          <Table.Cell></Table.Cell>
          <Table.Cell>{sumPrice}</Table.Cell>
          <Table.Cell>{sumTips}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>{avgPrice}</Table.Cell>
          <Table.Cell>{avgTips}</Table.Cell>
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
          <Table.HeaderCell>{props.finalItems.Arbatpinigiai}</Table.HeaderCell>
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
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{props.finalItems.Kaina}</Table.HeaderCell>
          <Table.HeaderCell>{props.finalItems.Arbatpinigiai}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </Table>
    </React.Fragment>
  );
}


export default ReportOrderItem;

// let newName = '';
// const nameChange = (name) => {
//   newName=name;
// }
// const tableHeader = (previousName) => (
//   previousName !== newName &&
//       (<Table attached>
//         <Table.Header fullWidth>
//           <Table.Row textAlign="center">
//             <Table.HeaderCell/>
//             <Table.HeaderCell/>
//             <Table.HeaderCell >{previousName}</Table.HeaderCell>
//             <Table.HeaderCell/>
//             <Table.HeaderCell/>
//             <Table.HeaderCell/>
//           </Table.Row>
//       </Table.Header>
//     </Table>)
// );
//
// const fullPrice = (previousName, sumPrice, sumTips, avgPrice, avgTips) => (
// previousName !== newName &&
// (<React.Fragment>
//   <Table singleLine fixed attached>
//     <Table.Body>
//       <Table.Row>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell>{sumPrice}</Table.Cell>
//         <Table.Cell>{sumTips}</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell>{avgPrice}</Table.Cell>
//         <Table.Cell>{avgTips}</Table.Cell>
//       </Table.Row>
//     </Table.Body>
//   </Table>
// </React.Fragment>)
//
// );

// <React.Fragment>
// <Table singleLine fixed attached="top">
//   <Table.Header>
//     <Table.Row>
//       <Table.HeaderCell>{"Date"}</Table.HeaderCell>
//       <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
//       <Table.HeaderCell>Order</Table.HeaderCell>
//       <Table.HeaderCell>Price</Table.HeaderCell>
//       <Table.HeaderCell>Tips</Table.HeaderCell>
//     </Table.Row>
//   </Table.Header>
// </Table>
// {props.items.map(item =>
//   <React.Fragment key={item.id_UZSAKYMAS}>
//     {tableHeader(item.Pavadinimas)}
//     {fullPrice(item.Pavadinimas, item.Kaina_Suma, item.Arbatpinigiai_Suma, item.Kaina_Vidurkis, item.Arbatpinigiai_Vidurkis)}
//     {nameChange(item.Pavadinimas)}
//       <Table singleLine fixed attached>
//       <Table.Body>
//         <Table.Row>
//           <Table.Cell>{item.Data}</Table.Cell>
//           <Table.Cell>{item.Vardas}</Table.Cell>
//           <Table.Cell>{item.Uzsakymas}</Table.Cell>
//           <Table.Cell>{item.Kaina}</Table.Cell>
//           <Table.Cell>{item.Arbatpinigiai}</Table.Cell>
//         </Table.Row>
//       </Table.Body>
//       </Table>
//
//   </React.Fragment>
// )}
//
// </React.Fragment>
