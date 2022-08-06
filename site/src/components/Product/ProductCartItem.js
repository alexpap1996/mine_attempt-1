import { Box, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import QuantitySelector from './QuantitySelector';
import DeleteIcon from '@mui/icons-material/Delete';
import { GlobalState } from '../../contexts/Context';
import { useState } from 'react';


const ProductCartItem = ({product}) => {
  console.log('ProductCartItem render')
  const { name: text , description, quantity, image: {url: imageUrl} } = product
  const { dispatch } = GlobalState()

  const handleDelete = () => {
    dispatch({
      type: 'remove',
      payload: product
    })
  }

  const quantityChangeHandler = (val) => {
    dispatch({
      type: 'add',
      payload: {...product, quantity: val}
    })
  }

  return (<>
    <ListItem >
      <ListItemAvatar sx={{py:1, pr:1}}>
        <Avatar alt={`${text} avatar`} src={imageUrl} sx={{ width: 56, height: 56 }}/>
      </ListItemAvatar>
      <ListItemText primary={text} primaryTypographyProps={{component:"h2", variant:"h5"}} sx={{ pl: 2}}/>
      <Box sx={{alignSelf: 'center', paddingX: '0.5rem'}}>
        <QuantitySelector quantity={quantity} quantityChange={quantityChangeHandler}/>
      </Box>
      <Box sx={{alignSelf: 'center'}}>
        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  </>)
}

export default ProductCartItem