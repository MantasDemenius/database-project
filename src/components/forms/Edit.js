import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
          id: props.id_IMONE || '',
          name: props.Pavadinimas || '' ,
          address: props.Adresas || '',
          phone: props.Telefono_numeris || ''
        },
        errors: {}
      };
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.id_IMONE);
    console.log(prevProps.id_IMONE);

    if(this.props.id_IMONE !== prevProps.id_IMONE && prevProps.id_IMONE !== undefined){
      this.setState({
        data: {
          id: this.props.id_IMONE,
          name: this.props.Pavadinimas,
          address: this.props.Adresas,
          phone: this.props.Telefono_numeris
        }
      });
    }
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.updateData(this.state.data);
      // .catch(err => this.setState({ errors: err.response.data.errors }));
  }
}

  updateData = (data) => {
    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `/imones/update`
    })
    .then(response => {
      if(response.status === 200)
        console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
  }

  validate = (data) => {
    const errors = {};
    if(!data.name) errors.name = "Can`t be blank";
    if(!data.address) errors.address = "Can`t be blank";
    if(!data.phone) errors.phone = "Can`t be blank";
    return errors;
  }

  render () {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>ID</label>
            {data.id}
          </Form.Field>
          <Form.Field>
            <label>Pavadinimas</label>
            <input name="name" placeholder={data.name} value={data.name}
              onChange={this.onChange} />
            {errors.name && <InLineError text={errors.name} />}
          </Form.Field>
          <Form.Field>
            <label>Adresas</label>
            <input name="address" placeholder={data.address} value={data.address}
              onChange={this.onChange} />
            {errors.address && <InLineError text={errors.address} />}
          </Form.Field>
          <Form.Field>
            <label>Telefono numeris</label>
            <input name="phone" placeholder={data.phone} value={data.phone}
              onChange={this.onChange} />
            {errors.phone && <InLineError text={errors.phone} />}
          </Form.Field>
          <Button type='submit'>Pakeisti</Button>
      </Form>
      </React.Fragment>

    );
  }
}

export default Edit;


// export default ({ id_IMONE, Pavadinimas, Adresas, Telefono_numeris }) =>
//   <React.Fragment>
//     <Form>
//     <Form.Field>
//       <label>Pavadinimas</label>
//       <input placeholder={Pavadinimas} value={Pavadinimas}/>
//     </Form.Field>
//     <Form.Field>
//       <label>Adresas</label>
//       <input placeholder={Adresas} value={Adresas}/>
//     </Form.Field>
//     <Form.Field>
//       <label>Telefono numeris</label>
//       <input placeholder={Telefono_numeris} value={Telefono_numeris}/>
//     </Form.Field>
//     <Button type='submit'>Pakeisti</Button>
//   </Form>
//   </React.Fragment>
