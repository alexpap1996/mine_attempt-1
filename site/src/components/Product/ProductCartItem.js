import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Card } from '@mui/material';
import QuantitySelector from './QuantitySelector';

const ProductCartItem = ({product}) => {
  const { text, description, quantity, price } = product
  const prefix = "http://localhost:3000/images/"
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar sx={{py:1, pr:1}}>
        <Avatar alt="Remy Sharp" src={`${prefix}/noodles.jpg`} sx={{ width: 56, height: 56 }}/>
      </ListItemAvatar>
      <ListItemText
        primary={text}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {description}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </>
        }
      />
      <QuantitySelector />
    </ListItem>
  )
}

export default ProductCartItem