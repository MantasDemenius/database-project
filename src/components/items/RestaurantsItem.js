import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Button, Table} from 'semantic-ui-react';
import RestoranasEdit from '../forms/RestoranasEdit';
// {...props} ClientItems={ClientItems} CommentItems={CommentItems}
class RestoranasItem extends Component {

  state = {
    CompanyItems:[],
    SupplierItems:[],
    ResSuppItems: []
  }

  componentDidMount(){
    this.getDropdown();
  }

  getDropdown = _ => {
    //Get companies info
    axios.get('https://database-project-server.herokuapp.com/database-project/Companies')
    .then(response => {
      this.setState({
        CompanyItems: response.data.results
      });
    })
    .catch(error => console.log(error));
    //Get suppliers info
    axios.get('https://database-project-server.herokuapp.com/database-project/Suppliers')
    .then(response => {
      this.setState({
        SupplierItems: response.data.results
      });
    })
    .catch(error => console.log(error));
    //get which restaurants have which suppliers
    axios.get('https://database-project-server.herokuapp.com/database-project/Restaurants/suppliers')
    .then(response => {
      console.log("ResSupp: ", response.data.results);
      this.setState({
        ResSuppItems: response.data.results
      });
    })
    .catch(error => console.log(error));
  }



  render() {
    const { match: { url }, itemDel, items} = this.props;
    let optionItems1 = this.state.CompanyItems.map((dropdownItem) =>
         <option key={dropdownItem.id_IMONE} value={dropdownItem.id_IMONE}>{dropdownItem.Pavadinimas}</option>
     );
     let optionItems2 = this.state.SupplierItems.map((dropdownItem) =>
          <option key={dropdownItem.id_TIEKEJAS} value={dropdownItem.id_TIEKEJAS}>{dropdownItem.Pavadinimas}</option>
      );
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <RestoranasEdit {...items.find(item => item.id_RESTORANAS.toString() === props.match.params.itemId)}
            dropdownItems1={optionItems1} dropdownItems2={optionItems2} ResSuppItems={this.state.ResSuppItems.find(item => item.fk_RESTORANAS.toString() === props.match.params.itemId)} />
        }/>
      <div>
        <Table striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Company's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Restaurant's name"}</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>{"Manager's name"}</Table.HeaderCell>
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
