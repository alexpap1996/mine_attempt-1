import React from 'react'
import { Container, Card, CardContent, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { GlobalState } from '../contexts/Context';

const HomeScreen = () => {
  const { state: { user } } = GlobalState()
  const hasUnreviewedOrder = user.orders?.some(order => {
    return order.status === 'delivered'
  })

	return <>
		<Container maxWidth='sm' sx={{pt:2 }}> 
			<Card spacing={2} style={{ marginTop:'unset' }} >
				<CardContent>
					<Grid container sx={{ justifyContent:'center',textAlign: 'center'}}>
						<Grid item xs={12} sx={{pb: 2}}>
							<Typography component="h4" variant="h5" sx={{ pt:1, pl:1}}>
								Welcome To Shops
							</Typography>
              <Typography component="div" variant="body2" sx={{ pt:1, pl:1}}>
								Here you can shop from the local stores and have them delivered at the hotel.
							</Typography>
							<Typography component="div" variant="body2" sx={{pl:1}}>
								Click above on the shops button to browse the shop categories, pick a shop and start putting products into the cart
							</Typography>
              {
                hasUnreviewedOrder ? 
                <Typography>
                  Please consider leaving a review for your completed orders.
                  Click here to go to your orders and leave a review.
                </Typography>
                :
                <Typography component="div" variant="body2" sx={{ pl:1}}>
								To leave a review, you can go to 'My Orders' and click the button next to the order to leave a review for the products
							  </Typography>
              }
						</Grid>
					</Grid>	
				</CardContent>
			</Card>
		</Container>
	</>
}

export default HomeScreen