import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderProductsModalItem = ({ product, saveRating }) => {
  const { name: text, image } = product
  const { i18n } = useTranslation()
  const currLang = i18n.language

  const onChangeRating = (event) => {
    saveRating({ productId: product._id, rating: event.target.value})
  }

  return (<>
    <ListItem sx={{padding:'unset'}}>
      <ListItemAvatar sx={{py:1, pr:1}}>
        <Avatar src={image} sx={{ width: 56, height: 56 }}/>
      </ListItemAvatar>
      
      <ListItemText primary={text[currLang]} primaryTypographyProps={{component:"h4", variant:"h6"}} sx={{ pl: 2}}/>
      
      <Rating precision={0.5} onChange={onChangeRating} name={product._id}/>
    </ListItem>
  </>)
}

export default OrderProductsModalItem