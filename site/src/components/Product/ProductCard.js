import React, { useState } from 'react'
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating } from '@mui/material'
import QuantitySelector from './QuantitySelector'
import { useTranslation } from 'react-i18next'
import { GlobalState } from '../../contexts/Context'

const ProductCard = ({product}) => {
  const { name, price, ratings = [] } = product
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(0)

  const { dispatch } = GlobalState()
  const addToCartHandler = (event) => {
    dispatch({
      type: 'add',
      payload: { ...product, quantity}
    })
  }

  const quantityChangeHandler = (val) => {
    setQuantity(val)
  }

  const rating = ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length
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
        image={product.image.url}
        alt="pharmacies"
        style={{height: '100px'}}
      />
      <CardContent>
        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item xs={6}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="text.secondary" component="div" sx={{ textAlign:'right'}}>
              {price}€
            </Typography>
          </Grid>
        </Grid>
        <Rating name="read-only" value={rating} readOnly precision={0.5} />
        <Box sx={{ pt:3, display: 'flex', justifyContent: 'left', gap: '1rem'}}>
          <QuantitySelector size='medium' quantityChange={quantityChangeHandler}/>
          <Button variant='contained' onClick={addToCartHandler}>{t('addToCart')}</Button>
        </Box>
      </CardContent>
    </Card>
  </>)
}

export default ProductCard