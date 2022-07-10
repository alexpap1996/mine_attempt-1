import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

const photoPrefix = './../../../public/images/products/'

const ProductCard = ({photoDir}) => {
  console.log(photoPrefix+photoDir)
  return (<>
    <Card 
      sx={{ 
        backgroundColor: 'white',
        color: 'black',
      }} 
      elevation={2}
    >
      <img src="./../../../public/images/pharmacy_1.jpg" alt="ok"></img>
      <CardMedia
        component="img"
        image="./../../../public/images/pharmacy_1.jpg"
        height='140'
        width='140'
        alt="pharmacies"
        style={{height: '100px'}}
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </Box>
      </CardContent>
    </Card>
  </>)
}

export default ProductCard