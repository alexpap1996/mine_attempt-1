import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Row = ({num, name, price}) => {
  return (
    <TableRow>
      <TableCell>{num}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{price}</TableCell>
    </TableRow>
  )
}

const populateArr = (text) => {
  return {text, price:(Math.random() * 7).toFixed(2)}
}

const arr = [
  populateArr('Chow mein Noodles'),
  populateArr('Maki rolls'),
  populateArr('Dragon rolls'),
  populateArr('Soy sauce'),
]

const CartTotals = () => {
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ }} size="small" aria-label="a dense table">
        {
          arr.map((prod, i) => {
            return <Row num={i+1} name={prod.text} price={prod.price}/>
          })
        }
      </Table>
    </TableContainer>
  </>
}

export default CartTotals