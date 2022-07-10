import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

const prefix = "http://localhost:3000/images/products/"

const ProductCard = ({photoDir}) => {
  return (<>
    <Card 
      sx={{ 
        backgroundColor: 'white',
        color: 'black',
      }} 
      elevation={2}
    >
      <CardMedia
        component="img"
        image={prefix + photoDir}
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