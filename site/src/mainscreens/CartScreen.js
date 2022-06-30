import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

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
		<div>This is the cart component</div>
		<div>You have {cartItems.length} items in your cart</div>
		<div>
			<Link to="/">Home</Link>
		</div>
	</>
}

export default HomeScreen