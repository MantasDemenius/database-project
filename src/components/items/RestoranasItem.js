import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import RestoranasEdit from '../forms/RestoranasEdit';
import axios from 'axios';

class RestoranasItem extends Component {

  state = {
    CompanyItems: []
  }

  componentDidMount(){
    this.getDropdown();
  }
  getDropdown = _ => {
    axios.get('/Companies')
    .then(response => {
      this.setState({
        CompanyItems: response.data.results
      });
        console.log(this.state.CompanyItems);
    })
    .catch(error => console.log(error));
  }

  // getOptions = (prop) => {
  //   console.log(prop.selectedID);
  //   console.log(prop.selectedName);
  //   console.log(this.props.)
  //   console.log(this.state.CompanyItems);
  //   let optionItems = this.state.CompanyItems.map((dropdownItem) => {
  //     let select = "";
  //     if(prop.selectedID === dropdownItem.id_IMONE){
  //       select = "selected";
  //     }
  //       return <h1>bruh</h1>
  //   });
  // }
//return (<option key={dropdownItem.id_IMONE}>{dropdownItem.IPavadinimas}</option>)
// <this.getOptions selectedID={data.id_IMONE} selectedName={data.IPavadinimas}/>


  render() {
    const { match: { url }, itemDel, items} = this.props;

    let optionItems = this.state.CompanyItems.map((dropdownItem) =>
          <option key={dropdownItem.id_IMONE} value={dropdownItem.id_IMONE}>{dropdownItem.Pavadinimas}</option>
      );
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <RestoranasEdit {...items.find(item => item.id_RESTORANAS.toString() === props.match.params.itemId)} dropdownItems={optionItems}/>
        }/>
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Restaurant's name</Table.HeaderCell>
              <Table.HeaderCell>Company's name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Manager's name</Table.HeaderCell>
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


export default RestoranasItem
