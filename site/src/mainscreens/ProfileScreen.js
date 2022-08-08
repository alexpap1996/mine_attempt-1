import React from 'react'
import { Container, Card, CardContent, Grid, Typography }from '@mui/material'
import { GlobalState } from '../contexts/Context'
import ProfileData from '../components/Profile/ProfileData'
import { useTranslation } from 'react-i18next'

const ProfileScreen = () => {
  const { t } = useTranslation()
  const { state: { user }} = GlobalState()

	return <>
  	<Container maxWidth='sm' sx={{pt:2 }}> 
			<Card spacing={2} columnSpacing={2} style={{ marginTop:'unset' }} >
        <CardContent>
					<Grid container sx={{ justifyContent:'center' }}>
						<Grid item xs={12} sx={{pb: 2}}>
							<Typography component="h4" variant="h4" sx={{textAlign: 'left', pt:1, pl:1}}>
								{t('profile')}
							</Typography>
							<Typography component="div" variant="body1" sx={{textAlign: 'left', pl:1}}>
								{t('seeProfileInfo')}
							</Typography>
						</Grid>
					</Grid>
          <ProfileData user={user}></ProfileData>
				</CardContent>
      </Card>
    </Container>
	</>
}

export default ProfileScreen