import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const categories = [
  'food',
  'groceries',
  'pharmacies'
]

const ShopsScreen = () => {
  const [data, setData] = useState('')

  const buttonClickHandler = async (event) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
    setData(data)
  }

	return <>
		{categories.map(cat => 
      <Box key={cat} sx={{ margin: 1, display: 'inline' }}>
        <Button onClick={buttonClickHandler} name={cat}>{cat}</Button>
      </Box>
    )}
    {data && <p>{data.name}</p>}
	</>
}

export default ShopsScreen