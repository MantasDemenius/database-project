import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import RestoranasItem from '../forms/RestoranasItem';
import RestoranasAdd from '../forms/RestoranasAdd';
import DatabaseBoxError from '../messages/DatabaseBoxError'
//import DatabaseBoxSuccess from '../messages/DatabaseBoxSuccess'

class Restoranai extends Component {

  state = {
    items:[],
    errors: {},

  }

  componentDidMount(){
    this.getItems();
    window.scrollTo(0, 0);
  }

  getItems = _ => {
    axios.get('/restoranas')
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
      url: `/restoranas/del?id=${id}`
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
    const { errors } = this.state;
    return(
      <React.Fragment>
        {/*<div style={{padding: '5px'}}>
          <Route path="/restoranas/add" component={RestoranasAdd} />
          <Link to="/restoranas/add" style={{float: 'right'}}>Nauja sutartis</Link>
        </div>*/}
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <Route path="/restoranas" render={props => (
                <RestoranasItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>
    );
  }
}

export default Restoranai;
