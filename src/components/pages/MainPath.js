import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CompaniesItem from '../items/CompaniesItem';
import RestaurantsItem from '../items/RestaurantsItem';
import SuppliersItem from '../items/SuppliersItem';
import ClientsItem from '../items/ClientsItem';
import CommentsItem from '../items/CommentsItem';
import DatabaseBoxError from '../messages/DatabaseBoxError';
//import DatabaseBoxSuccess from '../messages/DatabaseBoxSuccess'

class MainPath extends Component {

  state = {
    items:[],
    CompanyItems: [],
    SupplierItems: [],

    errors: {},
    url: '' || this.props.match.url
  }


  componentDidMount(){
    this.getItems(this.props.match.url);
    this.getDropdown();
    window.scrollTo(0, 0);
  }

  //try to get items when the state is correct
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.match.url !== this.props.match.url){
      this.getItems(nextProps.match.url);
      this.setState({url: nextProps.match.url,
                    errors: {}});
      return true;
    }else{
      if(nextState.url !== this.state.url){
        return false;
      }
    }
    return true;
  }

  getDropdown = _ => {
    axios.get('/Companies')
    .then(response => {
      this.setState({
        CompanyItems: response.data.results
      });
    })
    .catch(error => console.log(error));
    axios.get('/Suppliers')
    .then(response => {
      this.setState({
        SupplierItems: response.data.results
      });
    })
    .catch(error => console.log(error));
  }

  getItems = (url) => {
    axios.get(`${url}`)
    .then(response => {
      this.setState({items: response.data.results});
      console.log("getitems: ", this.state.items);
    })
    .catch(error => console.log(error));
  }

  itemDel = (id) => {
    axios({
      method: 'post',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `${this.state.url}/del?id=${id}`
    })
    .then(response => {
      if(response.status === 200)
        window.location.reload();
        //this.setState( { errors: response.data.message});
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
      window.scrollTo(0, 0);
    });
  }

  RouteCheck = (prop) => {
    const location = prop.location;
    const CompanyItems = prop.CompanyItems;
    const SupplierItems = prop.SupplierItems;
      switch(location){
        case "/Companies":
          return (<Route path={`${location}`} render={props => (
                  <CompaniesItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/Restaurants":
          return (<Route path={`${location}`} render={props => (
                  <RestaurantsItem {...props} items={this.state.items} itemDel={this.itemDel} CompanyItems={CompanyItems} SupplierItems={SupplierItems}/>
          )} />)
        case "/Suppliers":
          return (<Route path={`${location}`} render={props => (
                  <SuppliersItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/Clients":
          return (<Route path={`${location}`} render={props => (
                  <ClientsItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/Comments":
          return (<Route path={`${location}`} render={props => (
                  <CommentsItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        default:
          return (<h1>To be continued</h1>)
        }
  }

  render() {
    const { errors, url } = this.state;
    let optionItems = this.state.CompanyItems.map((dropdownItem) =>
         <option key={dropdownItem.id_IMONE} value={dropdownItem.id_IMONE}>{dropdownItem.Pavadinimas}</option>
     );
     let optionItems2 = this.state.SupplierItems.map((dropdownItem) =>
          <option key={dropdownItem.id_TIEKEJAS} value={dropdownItem.id_TIEKEJAS}>{dropdownItem.Pavadinimas}</option>
      );
    return(
      <React.Fragment>
        <div style={{padding: '5px'}}>
          <Link to={`${url}/add`} style={{float: 'right'}}>Add new entry</Link>
        </div>
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <this.RouteCheck location={url} CompanyItems={optionItems} SupplierItems={optionItems2}/>
      </React.Fragment>
    );
  }
}

export default MainPath;
