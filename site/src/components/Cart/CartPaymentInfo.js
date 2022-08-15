import { Card, CardContent, TextField, FormControl, Typography, Grid, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const buttons = [ 'card', 'cash' ]

const MethodButton = ({name, text, handlePaymentTypeChange, paymentType, disabled}) => {

  return (
    <Box sx={{ display: 'inline'}}>
      <Button
        name={name}
        onClick={handlePaymentTypeChange}
        size="medium"
        color="primary"
        disabled={disabled}
        variant={paymentType === name && !disabled ? "contained" : "text"}
        sx={{padding: '7px 10px', ml:1}}
      >
        {text}
      </Button>
    </Box>
  )
}

// has all the payment information and handles any changes
const CartPaymentInfo = ({ hasCartItems = false, handlePaymentMethodChange, detailsMissing = '' }) => {
  const { t } = useTranslation()
  const [paymentType, setPaymentType] = useState('cash')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cvv, setCvv] = useState({ public:'', private: ''})
  const [expiryDate, setExpiryDate] = useState('')

  // payment details start as cash which has no details necessary
  const [paymentDetails, setPaymentDetails] = useState({
    type: 'cash',
    details: {
      cardnumber: '',
      cardname: '',
      cvv: '',
      expirydate: ''
    }
  })

  // if cart is empty or payment type is not cart
  // we shouldn't need to edit any fields
  const inputsDisabled = !hasCartItems || paymentType !== 'card'
  const opacity = !inputsDisabled ? 1 : 0.15

  const handlePaymentTypeChange = (event) => {
    const value = event.target.name
    setPaymentType(value)
    updatePaymentMethod({
      type: 'method',
      value
    })
  }

  const handleNumberInput = (event) => {
    const val = event.target.value
    if (!isNaN(val) && val.length <= 16) {
      setCardNumber(val)
      updatePaymentMethod({
        type: 'value',
        name: 'cardnumber',
        value: val
      })
    }
  }

  const handleNameInput = (event) => {
    const { value } = event.target
    setCardName(value)
    updatePaymentMethod({
      type: 'value',
      name: 'cardname',
      value
    })


  }

  const updatePaymentMethod = (newData) => {
    if (newData.type === 'method') {
      setPaymentDetails({
        ...paymentDetails,
        type: newData.value
      })
    } else {
      const temp = { ...paymentDetails }
      temp.details[newData.name] = newData.value
      setPaymentDetails(temp)
    }
  }

  // cvv should display as ***
  // but we should also save the actual numbers
  const handleCvvKeyDown = (event) => {
    const { key, keyCode } = event
    const cvvPriv = cvv.private

    if (!isNaN(key) && cvvPriv.length < 3) {
      setCvv({public: '*'.repeat(cvvPriv.length + 1), private: (cvvPriv + key)})
      updatePaymentMethod({
        type: 'value',
        name: 'cvv',
        value: (cvvPriv + key)
      })
    } else if ( keyCode === 8) {
      setCvv({public: '*'.repeat(cvvPriv.length - 1), private: (cvvPriv.slice(0,-1))})
      updatePaymentMethod({
        type: 'value',
        name: 'cvv',
        value: (cvvPriv.slice(0,-1))
      })
    }
  }

  // here we toggles the / between MM/YY automatically and also save the current value
  const handleDateKeyDown = (event) => {
    const { key, keyCode } = event
    if (!isNaN(key) && expiryDate.length < 5) {
      const date = expiryDate.length === 2 ? expiryDate + '/' +  key : expiryDate + key
      setExpiryDate(date)
      updatePaymentMethod({
        type: 'value',
        name: 'expirydate',
        value: date
      })
    } else if (keyCode === 8) {
      const deletedChars = expiryDate.charAt(expiryDate.length - 2) === '/' ? -2 : -1
      const date = expiryDate.slice(0, deletedChars)
      setExpiryDate(date)
      updatePaymentMethod({
        type: 'value',
        name: 'expirydate',
        value: date
      })
    }
  }

  // setPaymentDetails (from useState) is asynchronous
  // so we call handlePaymentMethodChange with useEffect
  // to be sure it sends up the values after setPaymentDetails is finished
  useEffect(() => {
    handlePaymentMethodChange(paymentDetails)
  }, [handlePaymentMethodChange, paymentDetails])

  return (<>
    <Card sx={{bgcolor: 'white' }}>
      <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography sx={{display: 'inline'}}>
            {t('paymentMethod')}
          </Typography>
          <Box sx={{display:'inline', float:'right'}}>
          {
            buttons.map(buttonName => 
              <MethodButton 
                key={buttonName}
                name={buttonName}
                text={t(buttonName)} 
                handlePaymentTypeChange={handlePaymentTypeChange} 
                paymentType={paymentType} 
                disabled={!hasCartItems}
              />
            )
          }
          </Box>
        </Box>
        
    
        <Grid container spacing={2} sx={{opacity, pt:2}} >
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
                disabled={inputsDisabled}
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
                disabled={inputsDisabled}
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
                disabled={inputsDisabled}
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
                disabled={inputsDisabled}
              />
            </FormControl>
          </Grid>
        </Grid>        
      </CardContent>
    </Card>
  </>)
}

export default CartPaymentInfo