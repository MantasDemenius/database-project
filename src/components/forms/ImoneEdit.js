import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import InLineError from '../messages/InLineError';
import '../../style/modalContentStyle.css';

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
      url: `/imone/update`
    })
    .then(response => {
      if(response.status === 200)
        console.log("Sekmingai paredaguotas");
        // window.history.back();
        // window.location.reload();
        window.location.replace("/imone");

    })
    .catch(err => {
      console.log(err);
    });
  }

  validate = (data) => {
    const errors = {};
    const errText = "Privalomas laukelis";
    if(!data.Pavadinimas) errors.Pavadinimas = errText;
    if(!data.Adresas) errors.Adresas = errText;
    if(!data.Telefono_numeris) errors.Telefono_numeris = errText;
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
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>ID</label>
                  {data.id_IMONE}
                </Form.Field>
                <Form.Field>
                  <label>Pavadinimas</label>
                  <input name="Pavadinimas" placeholder={this.props.Pavadinimas} value={data.Pavadinimas}
                    onChange={this.onChange} />
                  {errors.Pavadinimas && <InLineError text={errors.Pavadinimas} />}
                </Form.Field>
                <Form.Field>
                  <label>Adresas</label>
                  <input name="Adresas" placeholder={this.props.Adresas} value={data.Adresas}
                    onChange={this.onChange} />
                  {errors.Adresas && <InLineError text={errors.Adresas} />}
                </Form.Field>
                <Form.Field>
                  <label>Telefono numeris</label>
                  <input name="Telefono_numeris" placeholder={this.props.Telefono_numeris} value={data.Telefono_numeris}
                    onChange={this.onChange} />
                  {errors.Telefono_numeris && <InLineError text={errors.Telefono_numeris} />}
                </Form.Field>
                <Button type='submit'>Pakeisti</Button>
            </Form>
          </div>
        </div>
    );
  }
}

export default ImoneEdit;
