import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import Validator from 'validator';
import DatabaseBoxError from '../messages/DatabaseBoxError'

class RestoranasEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
          id_RESTORANAS: props.id_RESTORANAS || '',
          Pavadinimas: props.Pavadinimas || '' ,
          Adresas: props.Adresas || '',
          Telefono_numeris: props.Telefono_numeris || '',
          Vadovo_vardas: props.Vadovo_vardas || '',
          Vadovo_pavarde: props.Vadovo_pavarde || '',
          Vadovo_telefono_numeris: props.Vadovo_telefono_numeris || '',
          Vadovo_pastas: props.Vadovo_pastas || '',
          Imone: '' || props.id_IMONE,
          Tiekejas: '' || props.ResSuppItems.fk_TIEKEJAS
        },
        errors: {}

      };
  }

  componentDidUpdate(prevProps) {

    if(this.props.id_RESTORANAS !== prevProps.id_RESTORANAS && prevProps.id_RESTORANAS !== undefined){
      this.setState({
        data: {
          id_RESTORANAS: this.props.id_RESTORANAS,
          Pavadinimas: this.props.Pavadinimas,
          Adresas: this.props.Adresas,
          Telefono_numeris: this.props.Telefono_numeris,
          Vadovo_vardas: this.props.Vadovo_vardas,
          Vadovo_pavarde: this.props.Vadovo_pavarde,
          Vadovo_telefono_numeris: this.props.Vadovo_telefono_numeris,
          Vadovo_pastas: this.props.Vadovo_pastas,
          Imone: this.props.id_IMONE,
          Tiekejas: this.props.ResSuppItems.fk_TIEKEJAS
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
      url: `https://desolate-scrubland-14964.herokuapp.com/database-project/Restaurants/edit`
    })
    .then(response => {
      if(response.status === 200){
        window.history.back();
      }
        // window.location.reload();
        // window.location.replace("/Restaurants");
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  validate = (data) => {
    const errors = {};
    const errText = "Can't be empty";
    if(!this.state.data.Pavadinimas) errors.Pavadinimas = errText;
    if(!this.state.data.Adresas) errors.Adresas = errText;
    if(!Validator.isMobilePhone(this.state.data.Telefono_numeris)) errors.Telefono_numeris = errText + " or a wrong number format";
    if(!this.state.data.Vadovo_vardas) errors.Vadovo_vardas = errText;
    if(!this.state.data.Vadovo_pavarde) errors.Vadovo_pavarde = errText;
    if(!Validator.isMobilePhone(this.state.data.Vadovo_telefono_numeris)) errors.Vadovo_telefono_numeris = errText + " or a wrong number format";
    if(!Validator.isEmail(this.state.data.Vadovo_pastas)) errors.Vadovo_pastas = errText + " or an invalid email";
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
                header= "Edit the restaurant"
              />
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>ID</label>
                  {data.id_RESTORANAS}
                </Form.Field>
                <Form.Field error={!!errors.Pavadinimas}>
                  <label>{"Restaurant's Name"}</label>
                  <input name="Pavadinimas" placeholder={this.props.Pavadinimas} value={data.Pavadinimas}
                    onChange={this.onChange} />
                  {errors.Pavadinimas && <InLineError text={errors.Pavadinimas} />}
                </Form.Field>
                <Form.Field>
                  <label>{"Company"}</label>
                    <select name="Imone" value={data.Imone} onChange={this.onChange}>
                      {this.props.dropdownItems1}
                    </select>
                </Form.Field>
                <Form.Field>
                  <label>{"Supplier"}</label>
                    <select name="Tiekejas" value={data.Tiekejas} onChange={this.onChange}>
                      {this.props.dropdownItems2}
                    </select>
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
                <Form.Field error={!!errors.Vadovo_vardas}>
                  <label>{"Manager's name"}</label>
                  <input name="Vadovo_vardas" placeholder={this.props.Vadovo_vardas} value={data.Vadovo_vardas}
                    onChange={this.onChange} />
                  {errors.Vadovo_vardas && <InLineError text={errors.Vadovo_vardas} />}
                </Form.Field>
                <Form.Field error={!!errors.Vadovo_pavarde}>
                  <label>{"Manager's surname"}</label>
                  <input name="Vadovo_pavarde" placeholder={this.props.Vadovo_pavarde} value={data.Vadovo_pavarde}
                    onChange={this.onChange} />
                  {errors.Vadovo_pavarde && <InLineError text={errors.Vadovo_pavarde} />}
                </Form.Field>
                <Form.Field error={!!errors.Vadovo_telefono_numeris}>
                  <label>{"Manager's phone"}</label>
                  <input name="Vadovo_telefono_numeris" placeholder={this.props.Vadovo_telefono_numeris} value={data.Vadovo_telefono_numeris}
                    onChange={this.onChange} />
                  {errors.Vadovo_telefono_numeris && <InLineError text={errors.Vadovo_telefono_numeris} />}
                </Form.Field>
                <Form.Field error={!!errors.Vadovo_pastas}>
                  <label>{"Manager's email"}</label>
                  <input name="Vadovo_pastas" placeholder={this.props.Vadovo_pastas} value={data.Vadovo_pastas}
                    onChange={this.onChange} />
                  {errors.Vadovo_pastas && <InLineError text={errors.Vadovo_pastas} />}
                </Form.Field>
                <Button type='submit'>Edit</Button>
            </Form>
          </div>
        </div>
    );
  }
}

export default RestoranasEdit;
