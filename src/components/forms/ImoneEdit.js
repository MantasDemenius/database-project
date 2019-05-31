import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';
import Validator from 'validator';
import DatabaseBoxError from '../messages/DatabaseBoxError'

class ImoneEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: {
          id_IMONE: props.id_IMONE || '',
          Pavadinimas: props.Pavadinimas || '' ,
          Adresas: props.Adresas || '',
          Telefono_numeris: props.Telefono_numeris || ''
        },
        errors: {}
      };
  }

  componentDidUpdate(prevProps) {
    if(this.props.id_IMONE !== prevProps.id_IMONE && prevProps.id_IMONE !== undefined){
      this.setState({
        data: {
          id_IMONE: this.props.id_IMONE,
          Pavadinimas: this.props.Pavadinimas,
          Adresas: this.props.Adresas,
          Telefono_numeris: this.props.Telefono_numeris
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
//https://database-project-server.herokuapp.com/database-project
  updateData = (data) => {
    axios({
      method: 'post',
      data: data,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: `https://database-project-server.herokuapp.com/database-project/Companies/edit`
    })
    .then(response => {
      // if(response.status === 200)
      //   window.location.reload();
         // window.history.back();

        //window.location.replace("/database-project/Companies");
        if(response.status === 200){
          console.log("posted");
          window.history.back();
        }

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

    // const errText = "Privalomas laukelis";
    // if(!data.Pavadinimas) errors.Pavadinimas = errText;
    // if(!data.Adresas) errors.Adresas = errText;
    // if(!data.Telefono_numeris) errors.Telefono_numeris = errText;
    return errors;
  }

  componentDidMount() {
    document.getElementById('myModal').style.display = "block";
  }

  closeModal = _ => {
    document.getElementById('myModal').style.display = "none";
    //this.state.history.push(`/imones`);
    window.history.back();
    //window.location.reload();
    //window.location.replace("/imones");
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
                header= {`Edit this item ${this.props.Pavadinimas}`}
              />
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>ID</label>
                  {data.id_IMONE}
                </Form.Field>
                <Form.Field error={!!errors.Pavadinimas}>
                  <label>Name</label>
                  <input name="Pavadinimas" placeholder={this.props.Pavadinimas} value={data.Pavadinimas}
                    onChange={this.onChange} />
                  {errors.Pavadinimas && <InLineError text={errors.Pavadinimas} />}
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
                <Button type='submit'>Edit</Button>
            </Form>
          </div>
        </div>
    );
  }
}

export default ImoneEdit;
