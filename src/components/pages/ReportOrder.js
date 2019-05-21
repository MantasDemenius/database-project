import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';


class ReportOrder extends Component {

  state = {
    FormData: {
      Pavadinimas: '',
      Vardas: '',
      date: '5',
      DateFrom: ''
    },

    data:{},
    errors: {},
    loading: false
  };

  componentDidMount(){
    this.getItems("");
    window.scrollTo(0, 0);
  }

  onChange = e => this.setState({
    FormData: { ...this.state.FormData, [e.target.name]: e.target.value}
  });

  handleChange = e => {
    console.log(e);
  }
  // this.setState(
  //   console.log(e);
  //   {FormData: {date: e.target.value}}
  // );

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.FormData);
    //this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.getItems(this.state.FormData);
    }
  }

  validate = (data) => {
    const errors = {};
    const errText = "Can't be empty";
    return errors;
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
      if(response.status === 200){
      console.log(response.data.results);
      this.setState({data: response.data.results,
      loading: false})
      }

        // window.history.back();
        // window.location.reload();
        // window.location.replace("/List/Restaurants");
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors,
      loading: false });
    });
  }
  //
  // <Form.Field>
  //   <label>Date from</label>
  //   <DateInput
  //     name='DateFrom'
  //     placeholder="Date"
  //     value={FormData.DateFrom}
  //     iconPosition="left"
  //     onChange={this.handleChange}
  //   />
  // </Form.Field>
  render() {
    const { errors, FormData, loading } = this.state;
    return(
      <React.Fragment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Group widths='equal'>

            <Form.Field>
              <label>Date to</label>
              <DateInput
                name='date'
                placeholder="DateTime"
                value={this.state.FormData.date}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Restaurant</label>
              <Input name='Pavadinimas' placeholder='Restaurant' onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <label>Client</label>
              <Input placeholder='Client'/>
            </Form.Field>

          </Form.Group>
          <Button type='submit'>Filter</Button>

        </Form>
      </React.Fragment>
    );
  }
}

export default ReportOrder;
