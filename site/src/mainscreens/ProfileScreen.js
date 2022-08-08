import React, { useState } from 'react'
import axios from 'axios'
import { ENDPOINT } from '../constants/routeConstants'
import { Container, Card, CardContent, Grid, Typography } from '@mui/material'

const ProfileScreen = () => {
  
	return <>
  	<Container maxWidth='sm' sx={{pt:2 }}> 
			<Card spacing={2} style={{ marginTop:'unset' }} >
      <CardContent>
					<Grid container sx={{ justifyContent:'center' }}>
						<Grid item xs={12} sx={{pb: 2}}>
							<Typography component="h4" variant="h4" sx={{textAlign: 'left', pt:1, pl:1}}>
								Your Profile
							</Typography>
							<Typography component="div" variant="body1" sx={{textAlign: 'left', pl:1}}>
								Here you can see your saved information
							</Typography>
						</Grid>
					</Grid>	
				</CardContent>
      </Card>
    </Container>
	</>
}

export default ProfileScreen