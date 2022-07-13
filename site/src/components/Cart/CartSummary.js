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
import { Box, Card } from '@mui/material';

const CartSummary = ({totalPrice, tip}) => {
  const { t } = useTranslation()
  return <>
    <Card sx={{ backgroundColor: 'white', py:2}}>
      <CartTotals />
      <Box sx={{ pt: 2, display: 'flex', justifyContent:'center'}}>
        <Button
          // component={Link}
          // to={button.to}
          size="medium"
          color="primary"
          variant="contained"
        >
          {t("confirmOrder")}
        </Button>
      </Box>
    </Card>
  </>
}

export default CartSummary
