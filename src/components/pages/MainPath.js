import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ImoneItem from '../items/ImoneItem';
import RestoranasItem from '../items/RestoranasItem';
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

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.match.url !== this.props.match.url){
      this.getItems(nextProps.match.url);
      this.setState({url: nextProps.match.url});
      return true;
    }else{
      if(nextState.url !== this.state.url){
        return false;
      }
    }
    return true;
  }

  // shouldComponentUpdate(){
  //   this.setState((props) => ({
  //     url: this.props.match.url
  //   }));
  //   return true;

  // }

  getItems = (url) => {
    axios.get(`${url}`)
    .then(response => {
      this.setState({items: response.data.results});
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

      switch(location){
        case "/imone":
          return (<Route path={`${location}`} render={props => (
                  <ImoneItem {...props} items={this.state.items} itemDel={this.itemDel}/>
              )} />)
        case "/restoranas":
          return (<Route path={`${location}`} render={props => (
                  <RestoranasItem {...props} items={this.state.items} itemDel={this.itemDel}/>
          )} />)
        default:
          return (<h1>this is no supposed to happen</h1>)
        }
  }

  render() {
    const { errors, url } = this.state;
    return(
      <React.Fragment>
        <div style={{padding: '5px'}}>
          <Link to={`${url}/add`} style={{float: 'right'}}>Nauja sutartis</Link>
        </div>
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <this.RouteCheck location={url}/>
      </React.Fragment>
    );
  }
}

export default MainPath;
