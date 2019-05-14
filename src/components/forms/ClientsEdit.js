import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import Validator from 'validator';
import DatabaseBoxError from '../messages/DatabaseBoxError'

class SuppliersEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
          id_KLIENTAS: props.id_KLIENTAS || '',
          Vardas: props.Vardas || '' ,
          Telefono_numeris: props.Telefono_numeris || '',
          Adresas: props.Adresas || '',
          Pastas: props.Pastas || ''
        },
        errors: {}
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props.id_IMONE !== prevProps.id_IMONE && prevProps.id_IMONE !== undefined){
      this.setState({
        data: {
          id_KLIENTAS: this.props.id_KLIENTAS,
          Vardas: this.props.Vardas,
          Telefono_numeris: this.props.Telefono_numeris,
          Adresas: this.props.Adresas,
          Pastas: this.props.Pastas
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
      url: `https://desolate-scrubland-14964.herokuapp.com/Clients/edit`
    })
    .then(response => {
      if(response.status === 200)
        // window.history.back();
        // window.location.reload();
        window.location.replace("/database-project/Clients");

    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  validate = (data) => {
    const errors = {};
    const errText = "Can't be empty";
    if(!this.state.data.Vardas) errors.Vardas = errText;
    if(!Validator.isMobilePhone(this.state.data.Telefono_numeris)) errors.Telefono_numeris = errText + " or a wrong number format";
    if(!this.state.data.Adresas) errors.Adresas = errText;
    if(!Validator.isEmail(this.state.data.Pastas)) errors.Pastas = errText + " or an invalid email";
    return errors;
  }

  componentDidMount() {
    document.getElementById('myModal').style.display = "block";
  }

  closeModal = _ => {
    document.getElementById('myModal').style.display = "none";
    window.history.back();
  }


  render () {
    const { data, errors } = this.state;
    return (
      <div id="myModal" className="modal">
          <div className="modalContent">
            <div className="closeCursor" onClick={this.closeModal}>&times;</div>
            {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
            <Message
                attached
                header= "Edit the client"
              />
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>ID</label>
                  {data.id_KLIENTAS}
                </Form.Field>
                <Form.Field error={!!errors.Vardas}>
                  <label>{"Client's name"}</label>
                  <input name="Vardas" placeholder={this.props.Vardas} value={data.Vardas}
                    onChange={this.onChange} />
                  {errors.Vardas && <InLineError text={errors.Vardas} />}
                </Form.Field>
                <Form.Field error={!!errors.Adresas}>
                  <label>Address</label>
                  <input name="Adresas" placeholder={this.props.Adresas} value={data.Adresas}
                    onChange={this.onChange} />
                  {errors.Adresas && <InLineError text={errors.Adresas} />}
                </Form.Field>
                <Form.Field error={!!errors.Telefono_numeris}>
                  <label>Phone</label>
                  <input name="Telefono_numeris" placeholder={this.props.Telefono_numeris} value={data.Telefono_numeris}
                    onChange={this.onChange} />
                  {errors.Telefono_numeris && <InLineError text={errors.Telefono_numeris} />}
                </Form.Field>
                <Form.Field error={!!errors.Pastas}>
                  <label>Email</label>
                  <input name="Pastas" placeholder={this.props.Pastas} value={data.Pastas}
                    onChange={this.onChange} />
                  {errors.Pastsa && <InLineError text={errors.Pastas} />}
                </Form.Field>
                <Button type='submit'>Edit</Button>
            </Form>
          </div>
        </div>
    );
  }
}

export default SuppliersEdit;
