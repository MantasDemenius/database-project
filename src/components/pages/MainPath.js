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
    errors: {},
    url: '' || this.props.match.url
  }


  componentDidMount(){
    this.getItems(this.props.match.url);
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

//https://desolate-scrubland-14964.herokuapp.com
  getItems = (url) => {
    axios.get(`https://desolate-scrubland-14964.herokuapp.com${url}`)
    .then(response => {
      this.setState({items: response.data.results});
      console.log("getitems: ", this.state.items);
      console.log("got items from server heroku");
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
      url: `https://desolate-scrubland-14964.herokuapp.com${this.state.url}/del?id=${id}`
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
      switch(location){
        case "/database-project/Companies":
          return (<Route path={`${location}`} render={props => (
                  <CompaniesItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/database-project/Restaurants":
          return (<Route path={`${location}`} render={props => (
                  <RestaurantsItem {...props} items={this.state.items} itemDel={this.itemDel}/>
          )} />)
        case "/database-project/Suppliers":
          return (<Route path={`${location}`} render={props => (
                  <SuppliersItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/database-project/Clients":
          return (<Route path={`${location}`} render={props => (
                  <ClientsItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        case "/database-project/Comments":
          return (<Route path={`${location}`} render={props => (
                  <CommentsItem {...props} items={this.state.items} itemDel={this.itemDel} />
              )} />)
        default:
          return (<h1>To be continued</h1>)
        }
  }

  render() {
    const { errors, url } = this.state;
    return(
      <React.Fragment>
        <div style={{padding: '5px'}}>
          <Link to={`${url}/add`} style={{float: 'right'}}>Add new entry</Link>
        </div>
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <this.RouteCheck location={url}/>
      </React.Fragment>
    );
  }
}

export default MainPath;
