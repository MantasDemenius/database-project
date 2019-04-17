import React from 'react';
import { Form, Button } from 'semantic-ui-react'

export default ({ id_IMONE, Pavadinimas, Adresas, Telefono_numeris }) =>
  <React.Fragment>
    <Form>
    <Form.Field>
      <label>Pavadinimas</label>
      <input placeholder={Pavadinimas} />
    </Form.Field>
    <Form.Field>
      <label>Adresas</label>
      <input placeholder={Adresas} />
    </Form.Field>
    <Form.Field>
      <label>Telefono numeris</label>
      <input placeholder={Telefono_numeris} />
    </Form.Field>
    <Button type='submit'>Pakeisti</Button>
  </Form>
  </React.Fragment>


// class Edit extends Component {
//   render () {
//     const { match, id_IMONE, Pavadinimas, Adresas, Telefono_numeris } = this.props;
//     console.log(match);
//     return (
//       <div>
//         {this.props.Pavadinimas}
//         {Pavadinimas}
//         {Adresas}
//         {Telefono_numeris}
//         <h1> hdasdsadasdsai</h1>
//       </div>
//
//     );
//   }
// }
//
// export default Edit;
