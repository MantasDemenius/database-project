import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import Validator from 'validator';
import DatabaseBoxError from '../messages/DatabaseBoxError'

class CommentEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
          id_ATSILIEPIMAS: props.id_ATSILIEPIMAS || '',
          Restoranas: props.id_RESTORANAS || '',
          Klientas: props.id_KLIENTAS || '',
          Data: props.Data || '',
          Komentaras: props.Komentaras || '',
          Ivertinimas: props.Ivertinimas || ''
        },
        errors: {}

      };
  }

  componentDidUpdate(prevProps) {

    if(this.props.id_RESTORANAS !== prevProps.id_RESTORANAS && prevProps.id_RESTORANAS !== undefined){
      this.setState({
        data: {
          id_ATSILIEPIMAS: this.props.id_ATSILIEPIMAS,
          Restoranas: this.props.id_RESTORANAS,
          Klientas: this.props.id_KLIENTAS,
          Data: this.props.Data,
          Komentaras: this.props.Komentaras,
          Ivertinimas: this.props.Ivertinimas
        }
      });
    }
  }

  onChange = (e) =>
    this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value}
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
      url: `https://desolate-scrubland-14964.herokuapp.com/database-project/Comments/edit`
    })
    .then(response => {
      if(response.status === 200)
        window.history.back();
        // window.location.reload();
        // window.location.replace("/Comments");
    })
    .catch(err => {
      this.setState( { errors: err.response.data.errors });
    });
  }

  validate = (data) => {
    const errors = {};
    const errText = "Can't be empty";
    if(!(this.state.data.Komentaras)) errors.Komentaras = errText;
    if(this.state.data.Komentaras.length >= 255) errors.Komentaras = "Too long try to fit into 255 charachters";
    if(!(this.state.data.Ivertinimas)) errors.Ivertinimas = errText;
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
                      {this.props.dropdownItems1}
                    </select>
                </Form.Field>
                <Form.Field>
                  <label>{"Client's name"}</label>
                    <select name="Klientas" value={data.Klientas} onChange={this.onChange}>
                      {this.props.dropdownItems2}
                    </select>
                </Form.Field>
                <Form.Field error={!!errors.Adresas}>
                  <label>Comment</label>
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
                <Button type='submit'>Edit</Button>
            </Form>
          </div>
        </div>
    );
  }
}

export default CommentEdit;
