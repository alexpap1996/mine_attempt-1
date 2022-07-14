import React, { useState } from 'react'
import { Box, IconButton, Typography } from "@mui/material"

const QuantitySelector = ({quantity = 0, size }) => {
  const fontSize = size === 'medium' ? '1.3rem' : '1rem'
  const [currQuantity, setCurrQuantity] = useState(quantity)
  const incrementHandler = () => {
    setCurrQuantity(currQuantity + 1)
  }
  const decrementHandler = () => {
    if (currQuantity > 1) setCurrQuantity(currQuantity - 1)
  }
  return (
    <Box sx={{ display: 'flex', alignItems:'center'}}>
      <IconButton color='secondary' sx={{backgroundColor: 'darkgrey', height: fontSize, width: fontSize }} onClick={decrementHandler}>
        <p style={{fontSize}}>-</p>
      </IconButton>
        <Typography variant='body1' sx={{ padding: '0 0.3rem', fontSize}}>{currQuantity}</Typography>
      <IconButton color='secondary' sx={{backgroundColor: 'darkgrey', height: fontSize, width: fontSize }} onClick={incrementHandler}>
        <p style={{fontSize}}>+</p>
      </IconButton>
    </Box>
  )
}

export default QuantitySelector