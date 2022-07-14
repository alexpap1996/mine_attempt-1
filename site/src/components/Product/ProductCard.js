import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import QuantitySelector from './QuantitySelector'
import { useTranslation } from 'react-i18next'

const prefix = "http://localhost:3000/images/"

const ProductCard = ({photoDir, productName, productPrice}) => {
  const { t } = useTranslation()
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
        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item xs={6}>
            <Typography component="div" variant="h5">
              {productName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="text.secondary" component="div" sx={{ textAlign:'right'}}>
              {productPrice}€
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ pt:3, display: 'flex', justifyContent: 'left', gap:'1rem'}}>
          <QuantitySelector size='medium'/>
          <Button variant='contained'>{t('addToCart')}</Button>
        </Box>
      </CardContent>
    </Card>
  </>)
}

export default ProductCard