import { Box, Card, CardContent, Grid, Input, InputLabel, InputAdornment } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
	const cartItems = []
  const { t } = useTranslation()
  const [tipAmount, setTipAmount] = useState(0)
  const handleTipChange = (event) => {
    setTipAmount(event.target.value)
  }
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('https://yourapi.com');
      // convert data to json
      const json = await data.json();
      return json;
    }
  }, [])

	return <>
    <Container > 
      <Grid container component="section" spacing={2} style={{ marginTop:'unset' }}>
        <Grid xs={12} sm={8} md={6} item>
          <CartProductsList />
        </Grid>
        <Grid xs={12} sm={8} md={6} item>
          <CartSummary />
        </Grid>
        <Grid xs={12} sm={2} md={2} item>
          <Card sx={{ backgroundColor: 'white'}}>
            <CardContent>
              <InputLabel htmlFor="standard-adornment-amount">{t('tip')}</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={tipAmount}
                onChange={handleTipChange}
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >
	</>
}

export default HomeScreen