import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import axios from 'axios';
import Validator from "validator";
import DatabaseBoxError from '../messages/DatabaseBoxError'


class CommentsAdd extends Component {

  state = {
    data: {
      id_ATSILIEPIMAS: '',
      Restoranas: '1',
      Klientas: '1',
      Data: '',
      Komentaras: '',
      Ivertinimas: '1',
      Vardas:  '' ,
      Adresas: '',
      Telefono_numeris:  '',
      Pastas: ''
    },
    errors: {},
    RestaurantItems: [],
    ClientItems: [],
    visible: false
  };

  componentDidMount() {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('addNew').style.display = "none";
    this.getDropdown();
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value}
  });

  handleNew = e => {
    if(document.getElementById('addNew').style.display === "block"){
      document.getElementById('addNew').style.display = "none";
    }else{
      document.getElementById('addNew').style.display = "block";
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if (document.getElementById('addNew').style.display === "block"){
      this.setState({visible: true});
    }

    if(Object.keys(errors).length === 0) {

      this.addData(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    const errText = "Can't be empty";
    if(!(this.state.data.Komentaras)){
      errors.Komentaras = errText;
    } else{
      if(this.state.data.Komentaras.length >= 255) errors.Komentaras = "Too long try to fit into 255 charachters";
    }
    if(!(this.state.data.Ivertinimas)) errors.Ivertinimas = errText;
    if(document.getElementById('addNew').style.display === "block"){
      if(!this.state.data.Vardas) errors.Vardas = errText;
      if(!this.state.data.Telefono_numeris) {
        errors.Telefono_numeris = errText;
      }else {
        if(!Validator.isMobilePhone(this.state.data.Telefono_numeris)) errors.Telefono_numeris = "Wrong number format";
      }

      if(!this.state.data.Adresas) errors.Adresas = errText;
      if(!this.state.data.Pastas) {
        errors.Pastas = errText;
      }else {
        if(!Validator.isEmail(this.state.data.Pastas)) errors.Pastas = "Invalid email";
      }
    }
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
      url: `/Comments/add`
    })
    .then(response => {
        this.props.history.push(`/Comments`);
        window.location.reload();

    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  closeModal = _ => {
    document.getElementById('myModal').style.display = "none";
    this.props.history.push(`/Comments`);
  }

  getDropdown = _ => {
    //Get restaurants info
    axios.get('/Restaurants')
    .then(response => {
      this.setState({
        RestaurantItems: response.data.results
      });
    })
    .catch(error => console.log(error));
    //Get clients info
    axios.get('/Clients')
    .then(response => {
      this.setState({
        ClientItems: response.data.results
      });
    })
    .catch(error => console.log(error));
  }

  render () {
      const { errors, data } = this.state;

      let optionItems1 = this.state.RestaurantItems.map((dropdownItem) =>
           <option key={dropdownItem.id_RESTORANAS} value={dropdownItem.id_RESTORANAS}>{dropdownItem.Pavadinimas}</option>
       );
     let optionItems2 = this.state.ClientItems.map((dropdownItem) =>
          <option key={dropdownItem.id_KLIENTAS} value={dropdownItem.id_KLIENTAS}>{dropdownItem.Vardas}</option>
      );
      return (
        <div id="myModal" className="modal">
            <div className="modalContent">
              <div className="closeCursor" onClick={this.closeModal}>&times;</div>
              {errors.globalErr && (<DatabaseBoxError text={errors.globalErr.sqlMessage}/>)}
              <Message
                  attached
                  header= "Edit the comment"
                />
                <Form onSubmit={this.onSubmit}>
                  <Form.Field>
                    <label>ID</label>
                    {data.id_ATSILIEPIMAS}
                  </Form.Field>
                  <Form.Field>
                    <label>{"Restaurant's name"}</label>
                      <select name="Restoranas" value={data.Restoranas} onChange={this.onChange}>
                        {optionItems1}
                      </select>
                  </Form.Field>
                  <Form.Field>
                    <label>{"Client's name"}</label>
                      <select name="Klientas" value={data.Klientas} onChange={this.onChange}>
                        {optionItems2}
                      </select>
                  </Form.Field>
                      <div id="addNew">
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
                        <input name="Telefono_numeris" value={data.Telefono_numeris} onChange={this.onChange} />
                        {errors.Telefono_numeris && <InLineError text={errors.Telefono_numeris} />}
                      </Form.Field>
                      <Form.Field error={!!errors.Pastas}>
                        <label>Email*</label>
                        <input name="Pastas" placeholder={this.props.Pastas} value={data.Pastas}
                          onChange={this.onChange} />
                        {errors.Pastas && <InLineError text={errors.Pastas} />}
                      </Form.Field>
                    </div>

                    <button type="button" onMouseDown={this.handleNew}>Click to add a client</button>


                  <Form.Field error={!!errors.Komentaras}>
                    <label>Comment*</label>
                    <Form.TextArea name="Komentaras" value={data.Komentaras} onChange={this.onChange}/>
                    {errors.Komentaras && <InLineError text={errors.Komentaras} />}
                  </Form.Field>
                  <Form.Field>
                    <label>{"Rating"}</label>
                      <select name="Ivertinimas" value={data.Ivertinimas} onChange={this.onChange}>
                        <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                        <option key={4} value={4}>4</option>
                        <option key={5} value={5}>5</option>
                      </select>
                  </Form.Field>
                  <Button type='submit'>Add</Button>
              </Form>
            </div>
          </div>
      );
  }
}

export default CommentsAdd;
