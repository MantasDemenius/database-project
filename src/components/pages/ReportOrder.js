import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input, Icon } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import ReportOrderItem from '../items/ReportOrderItem';


class ReportOrder extends Component {

  state = {
    formData: {
      Pavadinimas: '',
      Vardas: '',
      DateTo: '',
      DateFrom: ''
    },
    data:[],
    finalData: {
      Full_Kaina: '',
      Full_Arbatpinigiai: '',
      Kiekis: ''
    },
    errors: {},
    loading: false
  };

  componentDidMount(){
    this.getItems("");
    window.scrollTo(0, 0);
  }

  onChange = (e, {name, value}) => {
    this.setState({
    formData: { ...this.state.formData, [name]: value}
  });}

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.formData);
    //this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.getItems(this.state.formData);
    }
  }

  validate = (data) => {
    const errors = {};
    // const errText = "Can't be empty";
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
      url: `https://database-project-server.herokuapp.com/database-project/Report/Order`
    })
    .then(response => {
      if(response.status === 200){
      console.log(response.data.results);
      this.setState({data: response.data.results,
      loading: false})
      }
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors,
      loading: false });
    });

    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `https://database-project-server.herokuapp.com/database-project/Report/Order/Sum`
    })
    .then(response => {
      if(response.status === 200){
      console.log(response.data.results);
      this.setState({finalData: response.data.results[0],
      loading: false})
      }
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors,
      loading: false });
    });

  }

  render() {
    const { formData, loading } = this.state;
    return(
      <React.Fragment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Group widths='equal'>
          <Form.Field>
            <label>Date from</label>
            <DateInput
              name='DateFrom'
              placeholder="Date from"
              dateFormat="YYYY-MM-DD"
              clearable
              clearIcon={<Icon name="remove" color="red" />}
              autoComplete="off"
              value={formData.DateFrom}
              iconPosition="left"
              onChange={this.onChange}
            />
          </Form.Field>
            <Form.Field>
              <label>Date to</label>
              <DateInput
                name='DateTo'
                placeholder="Date to"
                dateFormat="YYYY-MM-DD"
                clearable
                clearIcon={<Icon name="remove" color="red" />}
                autoComplete="off"
                value={formData.DateTo}
                iconPosition="left"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Restaurant</label>
              <Input name='Pavadinimas' placeholder='Name' onChange={this.onChange}/>
            </Form.Field>
            <Form.Field>
              <label>Client</label>
              <Input name="Vardas" placeholder='Name' onChange={this.onChange}/>
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Filter</Button>

        </Form>
        {this.state.finalData.Kiekis !== 0 ? <ReportOrderItem items={this.state.data} finalItems={this.state.finalData}/> : <h1>No data was found</h1>}

      </React.Fragment>
    );
  }
}

export default ReportOrder;
