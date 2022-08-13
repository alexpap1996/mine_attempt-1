import React, { useState } from 'react'
import { Container, Card, CardContent, Grid, Typography, Box, Button, Snackbar, Alert } from '@mui/material'
import { GlobalState } from '../contexts/Context'
import ProfileData from '../components/Profile/ProfileData'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { ENDPOINT } from '../constants/routeConstants'

const ProfileScreen = () => {
  const { t } = useTranslation()
  const { state: { user }, dispatch} = GlobalState()

	const [editState, setEditState] = useState(false)
	const [copiedUser, setCopiedUser] = useState (user)
	const [errorOpen, setErrorOpen] = useState(false)

	const closeErrrorHandler = () => {
		setErrorOpen(false)
	}

	const onClickEditHandler = () => {
		setEditState(true)
	}

	const onClickSaveHandler = async () => {
		const { firstname, lastname, emergencyphone } = copiedUser

		// if one of the fields is empty, return error
		if (!firstname || !lastname || !emergencyphone) {
			return setErrorOpen(true)
		}

		// if at least one of the fields has changed, do the callout to server
		if (firstname !== user.firstname || lastname !== user.lastname || emergencyphone !== user.emergencyphone) {
			const res = await axios.post(ENDPOINT + '/api/user/edit', {
				_id: user._id, firstname, lastname, emergencyphone
			})
			console.log(res.data.user.firstname)
			dispatch({
				type: 'update_user',
				payload: { user: res.data.user}
			})
		}
		setEditState(false)
	}

	const onChangeData = (event) => {
		setCopiedUser({
			...copiedUser,
			[event.target.name]: event.target.value
		})
	}

	return <>
  	<Container maxWidth='sm' sx={{pt:2 }}> 
			<Card spacing={2} style={{ marginTop:'unset' }} >
        <CardContent sx={{position:'relative'}}>
					<Box sx={{ mr: 3, mt:1, right:'0px', position: 'absolute' }}>
						{!editState 
							? <Button variant="contained" color="secondary" disableElevation onClick={onClickEditHandler}>
							{t('edit')}
						</Button>
							: <Button variant="contained" color="primary" disableElevation onClick={onClickSaveHandler}>
							{t('save')}
						</Button>
						}
					</Box>
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
          <ProfileData user={user} editState={editState} changeValue={onChangeData}></ProfileData>
				</CardContent>
      </Card>
    </Container>
		<Snackbar open={errorOpen} autoHideDuration={4000} onClose={closeErrrorHandler} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="error" sx={{ width: '100%' }} onClose={closeErrrorHandler}>
        {t('fieldsMustBePopulated')}
      </Alert>
    </Snackbar>
	</>
}

export default ProfileScreen