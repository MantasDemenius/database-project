import React, { Component } from 'react';
import axios from 'axios';
class ReportOrder extends Component {


  componentDidMount(){
    this.getItems("");
    window.scrollTo(0, 0);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.updateData(this.state.data);
    }
  }

  getItems = (data) => {
    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `/Report/Order`
    })
    .then(response => {
      if(response.status === 200)
      console.log(response.data.results);
        // window.history.back();
        // window.location.reload();
        // window.location.replace("/List/Restaurants");
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  render() {

    return(
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default ReportOrder;
