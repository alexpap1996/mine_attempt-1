import React from 'react'
import { useTranslation } from "react-i18next";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Card, Divider } from '@mui/material';

const Row = ({text, amount = 0, sx = undefined}) => {
  return (
    <>
      <Grid item xs={10} sx={sx}>
        <Typography sx={{ fontWeight:'500'}}>{text}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography align='right'>{amount}€</Typography>
      </Grid>
    </>
  )
}

const CartTotals = ({itemTotal = 0 , tip = 0}) => {
  const { t } = useTranslation()
  const grandTotal = itemTotal + tip
  return <>
    <Grid container spacing={2} columns={12} sx={{px:3}}>
      <Row text={t('itemTotal')} amount={itemTotal}/>
      <Row text={t('tip')} amount={tip}/>
      <Row text={t('grandTotal')} amount={grandTotal}/>
    </Grid>
  </>
}

export default CartTotals
