import React from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button"

const CartSummary = ({totalPrice, tip}) => {
  const { t } = useTranslation()
  return <>
    <CartTotals />
    <Button
      // component={Link}
      // to={button.to}
      size="medium"
      color="primary"
      variant="contained"
      sx={{padding: '5px'}}
    >
      {t("confirmOrder")}
    </Button>
  </>
}

export default CartSummary
