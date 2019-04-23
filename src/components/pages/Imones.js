import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ImoneItem from '../forms/ImoneItem';
import ImoneAdd from '../forms/ImoneAdd';
import DatabaseBoxError from '../messages/DatabaseBoxError'
//import DatabaseBoxSuccess from '../messages/DatabaseBoxSuccess'

class Imones extends Component {

  state = {
    items:[],
    errors: {},

  }

  componentDidMount(){
    this.getItems();
    window.scrollTo(0, 0);
  }

  getItems = _ => {
    axios.get('/imone')
    .then(response => {
      this.setState({items: response.data.results});
    })
    .catch(error => console.log(error));
  }

  itemDel = (id_IMONE) => {
    axios({
      method: 'post',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `/imone/del?id=${id_IMONE}`
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
        <div style={{padding: '5px'}}>
          <Route path="/imone/add" component={ImoneAdd} />
          <Link to="/imone/add" style={{float: 'right'}}>Nauja sutartis</Link>
        </div>
        {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
        {/*{errors.globalSucc && (<DatabaseBoxSuccess text={errors.globalSucc}/>)}*/}
        <Route path="/imone" render={props => (
                <ImoneItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>
    );
  }
}

export default Imones;
