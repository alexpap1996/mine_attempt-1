import React, { useEffect, useState } from 'react'
import { Container, Card, CardContent, Grid, Typography, Snackbar, Alert } from '@mui/material'
import OrderList from '../components/Orders/OrderList'
import { GlobalState } from '../contexts/Context'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from "react-router-dom";

// page to view the created orders of the user
// we take this value from global state from user.orders
const OrdersScreen = () => {
  const { state: { user } } = GlobalState()
	const { t } = useTranslation()
	const [searchParams, setSearchParams] = useSearchParams();
	const [openMessage, setOpenMessage] = useState(false)

  // if the url contains 'order_created' 
  //  it means we are redirected from order creation
  //  so we display the snackbar that contains the 'order created' message
  // using useEffect with empty array as dependency so it only runs once
	useEffect(() => {
		if (searchParams.get("order_created")) {
			setOpenMessage(true)
		}
	}, [])
	
	const closeHandler = () => {
		setOpenMessage(false)
	}
	
	return <>
		<Container maxWidth='md' sx={{pt:2, pb:2 }}> 
			<Card spacing={2} style={{ marginTop:'unset' }} >
				<CardContent>
					<Grid container sx={{ justifyContent:'center' }}>
						<Grid item xs={12} sx={{pb: 2}}>
							<Typography component="h4" variant="h4" sx={{textAlign: 'left', pt:1, pl:1}}>
								{t('orders')}
							</Typography>
							<Typography component="div" variant="body1" sx={{textAlign: 'left', pl:1}}>
								{t('seeYourOrders')}
							</Typography>
						</Grid>
						<OrderList orders={user.orders}/>
					</Grid>	
				</CardContent>
			</Card>
		</Container>
		<Snackbar open={openMessage} autoHideDuration={6000} onClose={closeHandler} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={closeHandler} severity="success" sx={{ width: '100%' }}>
        {t('orderCreated')}
      </Alert>
    </Snackbar>
	</>
}

export default OrdersScreen