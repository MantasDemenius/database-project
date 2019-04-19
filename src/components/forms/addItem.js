import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import InLineError from '../messages/InLineError';
import axios from 'axios';


class addItem extends Component {


  state = {
    data: {
      Pavadinimas: '' ,
      Adresas: '',
      Telefono_numeris: ''
    },
    errors: {}
  };

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.addData(this.state.data);
      //.catch(err => this.setState({ errors: err.response.data.errors }));
    }
  }

  validate = (data) => {
    const errors = {};
    const errText = "Privalomas laukelis";
    if(!data.Pavadinimas) errors.Pavadinimas = errText;
    if(!data.Adresas) errors.Adresas = errText;
    if(!data.Telefono_numeris) errors.Telefono_numeris = errText;
    return errors;
  }

  addData = (data) => {
    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `/imones/add`
    })
    .then(response => {
      if(response.status === 200)
        console.log("Sekmingai pridetas");
        window.location.reload();
    })
    .catch(err => {
      console.log(err);
    });
  }


  render () {
      const { errors } = this.state;
      return (
        <div style={form}>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Pavadinimas*</label>
              <input name="Pavadinimas" onChange={this.onChange} />
              {errors.Pavadinimas && <InLineError text={errors.Pavadinimas} />}
            </Form.Field>
            <Form.Field>
              <label>Adresas*</label>
              <input name="Adresas" onChange={this.onChange} />
              {errors.Adresas && <InLineError text={errors.Adresas} />}
            </Form.Field>
            <Form.Field>
              <label>Telefono numeris*</label>
              <input name="Telefono_numeris" onChange={this.onChange} />
              {errors.Telefono_numeris && <InLineError text={errors.Telefono_numeris} />}
            </Form.Field>
            <Button type='submit'>Prideti</Button>
        </Form>
      </div>
    );
  }
}

const form = {

}

export default addItem;
