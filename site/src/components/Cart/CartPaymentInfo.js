import { Card, CardContent, TextField, FormControl, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CartPaymentInfo = ({ hasCartItems = false }) => {
  const { t } = useTranslation()
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cvv, setCvv] = useState({ public:'', private: ''})
  const [expiryDate, setExpiryDate] = useState('')

  const opacity = hasCartItems ? 1 : 0.15

  const handleNumberInput = (event) => {
    const val = event.target.value
    if (!isNaN(val) && val.length <= 16) {
      setCardNumber(val)
    }
  }

  const handleNameInput = (event) => {
    setCardName(event.target.value)
  }

  const handleCvvKeyDown = (event) => {
    const { key, keyCode } = event
    const cvvPriv = cvv.private

    if (!isNaN(key) && cvvPriv.length < 3) {
      setCvv({public: '*'.repeat(cvvPriv.length + 1), private: (cvvPriv + key)})
      console.log(cvv)
    } else if ( keyCode === 8) {
      setCvv({public: '*'.repeat(cvvPriv.length - 1), private: (cvvPriv.slice(0,-1))})
    }
    console.log(cvv)
  }

  const handleDateKeyDown = (event) => {
    const { key, keyCode } = event
    if (!isNaN(key) && expiryDate.length < 5) {
      const date = expiryDate.length === 2 ? expiryDate + '/' +  key : expiryDate + key
      setExpiryDate(date)
    } else if (keyCode === 8) {
      const deletedChars = expiryDate.charAt(expiryDate.length - 2) === '/' ? -2 : -1
      setExpiryDate(expiryDate.slice(0, deletedChars))
    }
  }

  return (<>
    <Card sx={{bgcolor: 'white' }}>
      <CardContent sx={{opacity}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Typography component="div" variant="body1" >
                {t('cardNumber')}
              </Typography>
              <TextField 
                placeholder="**** **** **** ****"
                value={cardNumber}
                onInput={handleNumberInput}
                sx={{ backgroundColor:'white'}}
                disabled={!hasCartItems}
              />
            </FormControl>  
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Typography component="div" variant="body1" >
                {t('cardName')}
              </Typography>
              <TextField 
                value={cardName}
                onInput={handleNameInput}
                sx={{ backgroundColor:'white'}}
                disabled={!hasCartItems}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Typography component="div" variant="body1" >
                {t('cardExpiryDate')}
              </Typography>
              <TextField
                placeholder="MM/YY"
                value={expiryDate}
                onKeyDown={handleDateKeyDown}
                sx={{ backgroundColor:'white'}}
                disabled={!hasCartItems}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Typography component="div" variant="body1" >
                CVV
              </Typography>
              <TextField 
                placeholder="***"
                value={cvv.public}
                onKeyDown={handleCvvKeyDown}
                sx={{ backgroundColor:'white'}}
                disabled={!hasCartItems}
              />
            </FormControl>
          </Grid>
        </Grid>        
      </CardContent>
    </Card>
  </>)
}

export default CartPaymentInfo