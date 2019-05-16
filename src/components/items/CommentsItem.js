import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Table, Popup } from 'semantic-ui-react';
import CommentsEdit from '../forms/CommentsEdit';
import axios from 'axios';

class CommentsItem extends Component {

  state = {
    RestaurantItems: [],
    ClientItems: []
  }

  componentDidMount(){
    this.getDropdown();
  }

  getDropdown = _ => {
    //Get restaurants info
    axios.get('https://desolate-scrubland-14964.herokuapp.com/database-project/Restaurants')
    .then(response => {
      this.setState({
        RestaurantItems: response.data.results
      });
    })
    .catch(error => console.log(error));
    //Get clients info
    axios.get('https://desolate-scrubland-14964.herokuapp.com/database-project/Clients')
    .then(response => {
      this.setState({
        ClientItems: response.data.results
      });
    })
    .catch(error => console.log(error));
  }


  render() {
    const { match: { url }, itemDel, items} = this.props;
    let optionItems1 = this.state.RestaurantItems.map((dropdownItem) =>
         <option key={dropdownItem.id_RESTORANAS} value={dropdownItem.id_RESTORANAS}>{dropdownItem.Pavadinimas}</option>
     );
     let optionItems2 = this.state.ClientItems.map((dropdownItem) =>
          <option key={dropdownItem.id_KLIENTAS} value={dropdownItem.id_KLIENTAS}>{dropdownItem.Vardas}</option>
      );
    return (
      <div>
        <Route path={`${url}/edit/:itemId`} render={
            props => <CommentsEdit {...items.find(item => item.id_ATSILIEPIMAS.toString() === props.match.params.itemId)}
            dropdownItems1={optionItems1} dropdownItems2={optionItems2}/>
        }/>
      <div>
        <Table striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>{"Restaurant's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Client's name"}</Table.HeaderCell>
              <Table.HeaderCell>{"Date"}</Table.HeaderCell>
              <Table.HeaderCell>{"Stars ☆"}</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map(item  =>
            <Table.Row key={item.id_ATSILIEPIMAS}>
                  <Table.Cell>{item.id_ATSILIEPIMAS}</Table.Cell>
                  <Table.Cell>{item.RPavadinimas}</Table.Cell>
                  <Table.Cell>{item.KVardas}</Table.Cell>
                  <Table.Cell>{item.Data}</Table.Cell>
                  <Table.Cell>{item.Ivertinimas}</Table.Cell>
                  <Table.Cell><Popup trigger={<Button>Read Comment</Button>} content={`${item.Komentaras}`} on='click' hideOnScroll /></Table.Cell>
                  <Table.Cell><Button primary><Link style={button} to={`Comments/edit/${item.id_ATSILIEPIMAS}`}>Edit</Link></Button></Table.Cell>
                  <Table.Cell><Button negative onClick={itemDel.bind(this, item.id_ATSILIEPIMAS)}>Delete</Button></Table.Cell>
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


export default CommentsItem
