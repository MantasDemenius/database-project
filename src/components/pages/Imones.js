import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ContentItem from './ContentItem';

class Imones extends Component {

  state = {
    items:[]
  }

  componentDidMount(){
    this.getItems();
  }

  getItems = _ => {
    axios.get('/imones')
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
      url: `/imones/del?id=${id_IMONE}`
    })
    .then(response => {
      if(response.status === 200)
        console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return(
      <React.Fragment>
        <div >
          prideti irasas
        </div>
        <Route path="/imones" render={props => (
                <ContentItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>

    );
  }
}

export default Imones;
