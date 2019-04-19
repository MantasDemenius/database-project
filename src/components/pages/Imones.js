import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ContentItem from './ContentItem';
import addItem from '../forms/addItem';


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
          <Route path="/imones/add" component={addItem} />
          <Link to="/imones/add">Nauja sutartis</Link>
        </div>
        <Route path="/imones" render={props => (
                <ContentItem {...props} items={this.state.items} itemDel={this.itemDel}/>
            )} />
      </React.Fragment>
    );
  }
}

export default Imones;
