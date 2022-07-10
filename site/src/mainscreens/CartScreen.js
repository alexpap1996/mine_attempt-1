import { Box, Grid, TableContainer } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import CartSummary from '../components/Cart/CartSummary';
import CartProductsList from '../components/Cart/CartProductsList';

const HomeScreen = () => {
	const cartItems = []
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
        <Grid 
          xs={12}
				  sm={6}
				  md={8} 
          item 
          sx={{ border: 1 }}
        >
          <CartProductsList />
        </Grid>
        <Grid 
          xs={12}
          sm={6}
          md={4}
          item sx={{ border: 1 }}
        >
          <CartSummary />
        </Grid>
      </Grid>
    </Container >
	</>
}

export default HomeScreen