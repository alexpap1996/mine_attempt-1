import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ENDPOINT } from '../constants/routeConstants'

const ProfileScreen = () => {
  const [test, setTest] = useState('')
  const getUserData = async () => {
    try {
      const { data } = await axios(ENDPOINT + '/api/user/test')
      const result = data
      setTest(JSON.stringify(result))
      console.log(result)
    } catch (e) {
      console.error(e)
    }
  }

  const clear = () => {
    setTest('')
  }
  
	return <>
		<Box>
      ProfileScreen
      <Button onClick={getUserData}>get data</Button>
      <Button onClick={clear}>CLEAR</Button>
      <Box>{test}</Box>
    </Box>
	</>
}

export default ProfileScreen