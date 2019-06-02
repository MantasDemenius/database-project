import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import axios from 'axios';
import Validator from "validator";
import DatabaseBoxError from '../messages/DatabaseBoxError'


class ClientsAdd extends Component {

  state = {
    data: {
      id_KLIENTAS: '',
      Vardas:  '' ,
      Adresas: '',
      Telefono_numeris:  '',
      Pastas: ''
    },
    errors: {},
  };

  componentDidMount() {
    document.getElementById('myModal').style.display = "block";
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0) {
      this.addData(this.state.data);
    }
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

  addData = (data) => {
    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `https://database-project-server.herokuapp.com/database-project/List/Clients/add`
    })
    .then(response => {
      if(response.status === 200){
        console.log("Sekmingai pridetas");
        this.props.history.push(`/database-project/List/Clients`);
      }

        // this.props.history.push(`/database-project/Clients`);
        // window.location.reload();
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  closeModal = _ => {
    document.getElementById('myModal').style.display = "none";
    this.props.history.push(`/database-project/List/Clients`);
  }

  render () {
      const { errors, data } = this.state;
      return (
        <div id="myModal" className="modal">
            <div className="modalContent">
              <div className="closeCursor" onClick={this.closeModal}>&times;</div>
              {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
              <Message
                  attached
                  header= "Add new Client"
                />
                <Form onSubmit={this.onSubmit}>
                  <Form.Field error={!!errors.Vardas}>
                    <label>{"Client's Name*"}</label>
                    <input name="Vardas" placeholder={this.props.Vardas} value={data.Vardas}
                      onChange={this.onChange} />
                    {errors.Vardas && <InLineError text={errors.Vardas} />}
                  </Form.Field>
                  <Form.Field error={!!errors.Adresas}>
                    <label>Address*</label>
                    <input name="Adresas" placeholder={this.props.Adresas} value={data.Adresas}
                      onChange={this.onChange} />
                    {errors.Adresas && <InLineError text={errors.Adresas} />}
                  </Form.Field>
                  <Form.Field error={!!errors.Telefono_numeris}>
                    <label>Phone*</label>
                    <input name="Telefono_numeris" placeholder={this.props.Telefono_numeris} value={data.Telefono_numeris}
                      onChange={this.onChange} />
                    {errors.Telefono_numeris && <InLineError text={errors.Telefono_numeris} />}
                  </Form.Field>
                  <Form.Field error={!!errors.Pastas}>
                    <label>Email*</label>
                    <input name="Pastas" placeholder={this.props.Pastas} value={data.Pastas}
                      onChange={this.onChange} />
                    {errors.Pastas && <InLineError text={errors.Pastas} />}
                  </Form.Field>
                  <Button type='submit'>Add</Button>
              </Form>
            </div>
          </div>
      );
  }
}

export default ClientsAdd;
