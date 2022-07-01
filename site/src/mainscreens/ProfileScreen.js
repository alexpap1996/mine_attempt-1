import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ProfileScreen = () => {
  const getUserData = async () => {
    try {
      const { data } = await axios('http://localhost:9000/api/user/name')
      const result = data
      console.log(result)
    } catch (e) {
      console.error(e)
    }
  }
  
	return <>
		<Box>
      ProfileScreen
      <Button onClick={getUserData}>get data</Button>
    </Box>
	</>
}

export default ProfileScreen