import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ImoneItem from '../forms/ImoneItem';
import DatabaseBoxError from '../messages/DatabaseBoxError'
//import DatabaseBoxSuccess from '../messages/DatabaseBoxSuccess'

class MainPath extends Component {

  state = {
    items:[],
    errors: {},
    url: '' || this.props.match.url
  }

  componentDidMount(){
    this.getItems();
    console.log(this.state.url);
    window.scrollTo(0, 0);
  }

  getItems = _ => {
    axios.get(`${this.state.url}`)
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

  render() {
    const { errors, url } = this.state;
    return(
      <React.Fragment>
        <div style={{padding: '5px'}}>
          <Link to={`${url}/add`} style={{float: 'right'}}>Nauja sutartis</Link>
        </div>
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <Route path={`${url}`} render={props => (
                <ImoneItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>
    );
  }
}

export default MainPath;
