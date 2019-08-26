import React from 'react';
import axios from 'axios';
import { CSVLink} from 'react-csv';

export default class Listen extends React.Component {
  
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://cosmo-rest-api-get.azurewebsites.net/api/documentos?code=xfELrJfMVpCYSxxzqQVKbRYYw5N0LQs6rerg7Bjx7dgwhSsVp3PqeQ==`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      
}

  render() {

    return (
      <div className ="marco">
        
      <table className='students'>
        
        <tr className="students">
          
          <td><b>NOMBRE DOCUMENTO</b></td>
          <td><b>ID EMPRESA</b></td>
          <td><b>No. PLANILLA</b></td>
          <td><b>NIT EMPRESA</b></td>
          <td><b>ID DEPARTAMENTO</b></td>
          <td><b>NOMBRE DEPARTAMENTO</b></td>
          <td><b>No. BOLETA</b></td>
          <td><b>FECHA PAGO</b></td>
          <td><b>ID COLABORADOR</b></td>
          <td><b>NOMBRE COLABORADOR</b></td>
          <td><b>NIT COLABORADOR</b></td>
         </tr> 
        
        { 
          this.state.persons.map(person => 
        <tr className="students">
          <td>  { person.nombreDocumento} </td>
          <td>  { person.codigoEmpresa} </td>
          <td>  { person.numeroPlanila} </td>
          <td>  { person.nitEmpresa} </td>
          <td>  { person.codigoDepartamento} </td>
          <td>  { person.nombreDepartamento} </td>
          <td>  { person.numeroBoleta} </td>
          <td>  { person.fechaPago} </td>
          <td>  { person.codigoColaborador} </td>
          <td>  { person.nombreColaborador} </td>
          <td>  { person.nitColaborador} </td>
          </tr>)
          }
      
    </table>
    
    <CSVLink data={this.state.persons} separator={";"} filename={"Datos_DQ.csv"} >
      <button className="button">
        Download File
      </button>
    </CSVLink>
    
    </div>
    )
  }
}


