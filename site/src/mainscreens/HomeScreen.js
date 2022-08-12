import React from 'react'
import { Navigate } from 'react-router-dom'

// redirects the user to shops screen after login or signup
const HomeScreen = () => {
	return (<Navigate to="/shops" replace={true} />)
}

export default HomeScreen