import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ImoneItem from '../forms/ImoneItem';
import ImoneAdd from '../forms/ImoneAdd';


class Imones extends Component {

  state = {
    items:[]
  }

  componentDidMount(){
    this.getItems();
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
    //   headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // },
      url: `/imone/del?id=${id_IMONE}`
    })
    .then(response => {
      if(response.status === 200)
        console.log("Sekmingai istrintas");
        window.location.reload();
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <Route path="/imone/add" component={ImoneAdd} />
          <Link to="/imone/add" style={link}>Nauja sutartis</Link>
        </div>
        <Route path="/imone" render={props => (
                <ImoneItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>
    );
  }
}

const link = {
  float: 'right'
}

export default Imones;
