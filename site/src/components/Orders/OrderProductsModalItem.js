import React from 'react'
import { Box, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// items of product modal on 'normal' mode
// shows the product image, name, quantity and price
const OrderProductsModalItem = ({ product }) => {
  const { name: text, quantity, image, price } = product
  const { i18n } = useTranslation()
  const currLang = i18n.language
  return (<>
    <ListItem sx={{padding:'unset'}}>
      <ListItemAvatar sx={{py:1, pr:1}}>
        <Avatar src={image} sx={{ width: 56, height: 56 }}/>
      </ListItemAvatar>
      <ListItemText primary={text[currLang]} primaryTypographyProps={{component:"h4", variant:"h6"}} sx={{ pl: 2}}/>
      <Box style={{backgroundColor: 'rgb(247, 247, 247)', padding: '0.25rem 0.5rem', marginRight: '1rem' }}>
        <Typography >
          {quantity}
        </Typography>
      </Box>
      x
      <Box style={{ minWidth: '4rem', textAlign: 'right' }}>
        <Typography component="div" variant="body1">
          {price.toFixed(2)}€
        </Typography>
      </Box>
    </ListItem>
  </>)
}

export default OrderProductsModalItem