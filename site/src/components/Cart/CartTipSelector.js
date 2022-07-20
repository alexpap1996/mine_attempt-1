import React from 'react'
import { Card, CardContent, Typography, FormControl, TextField, MenuItem } from "@mui/material"
import { useTranslation } from "react-i18next"

const CartTipSelector = ({ tip, handleTipChange, hasCartItems = false }) => {
  const { t } = useTranslation()
  const opacity = hasCartItems ? 1 : 0.15
  return <Card sx={{ backgroundColor: 'white', mb:4 }}>
    <CardContent sx={{opacity}}>
      <Typography component="div" variant="body1" sx={{pb: 1}}>
        {t('chooseTip')}
      </Typography>
      <FormControl fullWidth>
        <TextField 
          value={tip}
          onChange={handleTipChange}
          sx={{ backgroundColor:'white'}}
          select 
          SelectProps={{ MenuProps: { disableScrollLock: true } }}
          disabled={!hasCartItems}
        >
          <MenuItem value={0}>----</MenuItem>
          <MenuItem value={0.5}>0.50€</MenuItem>
          <MenuItem value={1}>1.00€</MenuItem>
          <MenuItem value={2}>2.00€</MenuItem>
        </TextField>
      </FormControl>
    </CardContent>
  </Card>
}

export default CartTipSelector