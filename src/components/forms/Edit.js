import React from 'react';

export default ({ id_IMONE, Pavadinimas }) =>
  <React.Fragment>
    {id_IMONE}
    {Pavadinimas}
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
