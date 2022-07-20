import React from 'react'
import { useTranslation } from "react-i18next";
import CartTotals from './CartTotals'

import Button from "@mui/material/Button"
import { Box, Card, Divider } from '@mui/material';

const CartSummary = ({hasCartItems = false}) => {
  const { t } = useTranslation()
  return <>
    <Card sx={{ backgroundColor: 'white', py:2}}>
      <CartTotals hasCartItems={hasCartItems}/>
      <Divider sx={{ mt: 1}}/>
      <Box sx={{ pt: 1, display: 'flex', justifyContent:'center'}}>
        <Button
          // component={Link}
          // to={button.to}
          size="medium"
          color="primary"
          variant="contained"
          disabled={!hasCartItems}
        >
          {t("confirmOrder")}
        </Button>
      </Box>
    </Card>
  </>
}

export default CartSummary
