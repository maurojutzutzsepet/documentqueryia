import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
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

    <Button variant="contained">
      Descargar Archivo
    </Button>
    
    </div>
    )
  }
}


/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
*/