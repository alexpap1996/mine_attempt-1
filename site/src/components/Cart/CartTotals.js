import React from 'react'
import { useTranslation } from "react-i18next";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Row = ({text, amount = 0}) => {
  return (
    <TableRow>
      <TableCell>{text}</TableCell>
      <TableCell>{amount}</TableCell>
    </TableRow>
  )
}

const CartTotals = ({itemTotal = 0 , tip = 0}) => {
  const { t } = useTranslation()
  const grandTotal = itemTotal + tip
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ }} size="small" aria-label="a dense table">
        <Row text={t('itemTotal')} amount={itemTotal}/>
        <Row text={t('tip')} amount={tip}/>
        <Row text={t('grandTotal')} amount={grandTotal}/>
      </Table>
    </TableContainer>
  </>
}

export default CartTotals
