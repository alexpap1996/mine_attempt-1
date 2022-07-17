import { Box, Card, CardContent, Grid, Input, InputLabel, InputAdornment, TextField, Select, MenuItem, FormControl, Typography } from '@mui/material';
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
        <Grid xs={12} sm={8} md={8} item>
          <CartProductsList />
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <CartSummary />
        </Grid>
        <Grid xs={12} sm={2} md={2} item>
          <Card sx={{ backgroundColor: 'white'}}>
            <CardContent>
              <Typography>
                {t('chooseTip')}
              </Typography>
              <FormControl fullWidth>
                
              </FormControl>
                <TextField 
                  value={tipAmount}
                  onChange={handleTipChange}
                  sx={{ backgroundColor:'white'}}
                  select 
                  SelectProps={{ MenuProps: { disableScrollLock: true } }}
                >
                  <MenuItem value={0}>----</MenuItem>
                  <MenuItem value={0.5}>0.5€</MenuItem>
                  <MenuItem value={1}>1€</MenuItem>
                  <MenuItem value={2}>2€</MenuItem>
                </TextField>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container >
	</>
}

export default HomeScreen