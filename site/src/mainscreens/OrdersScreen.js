import React from 'react'
import { Container, Card, CardContent, Grid, Typography } from '@mui/material'
import OrderList from '../components/Orders/OrderList'
import { GlobalState } from '../contexts/Context'
import { useTranslation } from 'react-i18next'

const OrdersScreen = () => {
  const { state: { user } } = GlobalState()
	const { t } = useTranslation()
	// useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const { data } = await axios(ENDPOINT + '/api/orders/'+user._id)
	// 			const
  //     } catch (e) {
  //       console.log(e.message)
  //     }
  //   }
  //   getOrders()
  // }, [user])
	
	return <>
		<Container maxWidth='md' sx={{pt:2 }}> 
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
	</>
}

export default OrdersScreen