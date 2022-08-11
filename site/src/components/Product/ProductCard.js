import React, { useState } from 'react'
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, Rating, Snackbar, Alert } from '@mui/material'
import QuantitySelector from './QuantitySelector'
import { useTranslation } from 'react-i18next'
import { GlobalState } from '../../contexts/Context'

const ProductCard = ({product}) => {
  const { name, price, ratings = [] } = product
  const { t, i18n } = useTranslation()
  const currLang = i18n.language
  const [quantity, setQuantity] = useState(1)

  const { dispatch } = GlobalState()
  const addToCartHandler = (event) => {
    dispatch({
      type: 'add',
      payload: { ...product, quantity}
    })
    setOpen(true)
  }

  const quantityChangeHandler = (val) => {
    setQuantity(val)
  }

  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false)
  }

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
            <Typography variant="h6" color="text.secondary" component="div" sx={{ textAlign:'right', fontWeight:'400'}}>
              {price}€
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