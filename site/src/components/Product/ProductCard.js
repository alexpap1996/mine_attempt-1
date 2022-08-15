import React, { useState } from 'react'
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating, Snackbar, Alert } from '@mui/material'
import QuantitySelector from './QuantitySelector'
import { useTranslation } from 'react-i18next'
import { GlobalState } from '../../contexts/Context'

// the card of the product that contains some info and has the option to add specific quantities to cart
const ProductCard = ({product}) => {
  const { name, price, ratings = [] } = product
  const { t, i18n } = useTranslation()
  const currLang = i18n.language
  const [quantity, setQuantity] = useState(1)

  const { dispatch } = GlobalState()

  // when clicking on the card
  // we take the product of the component and the current quantity and add it to the global state
  // after we also display the success snackbar
  const addToCartHandler = () => {
    dispatch({
      type: 'add',
      payload: { ...product, quantity}
    })
    setOpen(true)
  }

  const quantityChangeHandler = (val) => {
    setQuantity(val)
  }

  // initializing the state of the alert
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false)
  }

  // take all ratings of the product and find the mean
  const rating = ratings.reduce((acc, rObj) => acc + rObj.rating, 0) / ratings.length
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
        image={product.image}
        alt={product.name.en}
        style={{height: '140px'}}
      />
      <CardContent>
        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item xs={9}>
            <Typography component="div" variant="h6" noWrap>
              {name[currLang]}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="div" sx={{ textAlign:'right', fontWeight:'400'}}>
              {price.toFixed(2)}€
            </Typography>
          </Grid>
        </Grid>
        <Rating name="read-only" value={rating} readOnly precision={0.5} sx={{pt:1}} />
        <Box sx={{ pt:1, display: 'flex', justifyContent: 'left', gap: '1rem'}}>
          <QuantitySelector quantity={1} size='medium' quantityChange={quantityChangeHandler}/>
          <Button variant='contained' onClick={addToCartHandler}>{t('addToCart')}</Button>
        </Box>
      </CardContent>
    </Card>

    <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={closeHandler} severity="success" sx={{ width: '100%' }}>
        {t('productAdded')}
      </Alert>
    </Snackbar>
  </>)
}

export default ProductCard