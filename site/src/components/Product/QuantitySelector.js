import React, { useState } from 'react'
import { Box, IconButton, Typography } from "@mui/material"
import { Add, Remove } from '@mui/icons-material';

const QuantitySelector = ({quantity = 0, size, quantityChange }) => {
  const fontSize = size === 'medium' ? '1.5rem' : '1.3rem'

  const [currQuantity, setCurrQuantity] = useState(quantity)
  const incrementHandler = () => {
    quantityChange(currQuantity + 1)
    setCurrQuantity(currQuantity + 1)
  }
  const decrementHandler = () => {
    if (currQuantity > 1) {
      quantityChange(currQuantity - 1)
      setCurrQuantity(currQuantity - 1)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems:'center'}}>
      <IconButton color='secondary'  sx={{backgroundColor: 'darkgrey', height: fontSize, width: fontSize }} onClick={decrementHandler}>
        <Remove fontSize='small'/>
      </IconButton>
        <Typography variant='body1' sx={{ padding: '0 0.3rem', fontSize}}>{currQuantity}</Typography>
      <IconButton color='secondary' sx={{backgroundColor: 'darkgrey', height: fontSize, width: fontSize }} onClick={incrementHandler}>
        <Add  fontSize='small'/>
      </IconButton>
    </Box>
  )
}

export default QuantitySelector