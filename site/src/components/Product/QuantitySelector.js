import React, { useState } from 'react'
import { Box, IconButton, Typography } from "@mui/material"

const QuantitySelector = ({quantity = 0 }) => {
  const [currQuantity, setCurrQuantity] = useState(quantity)
  const incrementHandler = () => {
    setCurrQuantity(currQuantity + 1)
  }
  const decrementHandler = () => {
    if (currQuantity > 1) setCurrQuantity(currQuantity - 1)
  }
  return (
    <Box sx={{ display: 'flex', alignItems:'center'}}>
      <IconButton color='secondary' sx={{backgroundColor: 'darkgrey', height: '1rem', width: '1rem' }} onClick={decrementHandler}>
        <p styles={{fontSize:'1rem'}}>-</p>
      </IconButton>
        <Typography sx={{ padding: '0 0.3rem'}}>{currQuantity}</Typography>
      <IconButton color='secondary' sx={{backgroundColor: 'darkgrey', height: '1rem', width: '1rem' }} onClick={incrementHandler}>
        <p styles={{fontSize:'1rem'}}>+</p>
      </IconButton>
    </Box>
  )
}

export default QuantitySelector