import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Input } from 'semantic-ui-react';

import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


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
      this.getItems(this.state.data);
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
//<Input icon='calendar' iconPosition='left' fluid placeholder='Date to' />
  render() {

    return(
      <React.Fragment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Date from</label>
              <div style={FieldWidth}>
              <SemanticDatepicker type="basic" />
              </div>
            </Form.Field>
            <Form.Field>
              <label>Date to</label>
              <SemanticDatepicker type="basic"></SemanticDatepicker>

            </Form.Field>
            <Form.Field>
              <label>Restaurant</label>
              <Input placeholder='Restaurant'/>
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

const FieldWidth = {
  width: '100%'
}

export default ReportOrder;
