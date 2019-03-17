import React, { Component } from 'react';
import ContentItem from './ContentItem';

class Imones extends Component {

state = {
  imones:
  [
    {
      id: 1,
      title: "sijonai"
    },
    {
      id: 2,
      title: "balvonai"
    },
    {
      id: 3,
      title: "klijai"
    },
    {
      id: 4,
      title: "kelnes"
    }
  ]
}


  render() {
    return  this.state.imones.map((record) => (
      <div className="content-item">
        <ContentItem key={record.id} item={record}/>
      </div>

    ));
  }
}

export default Imones;
