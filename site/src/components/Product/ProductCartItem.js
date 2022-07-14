import { List,Box, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Card, IconButton } from '@mui/material';
import QuantitySelector from './QuantitySelector';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductCartItem = ({product}) => {
  const { text, description, quantity, price } = product
  const prefix = "http://localhost:3000/images/"

  const handleDelete = () => {
    //somehow remove self from cart
  }

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
            {quantity}
          </>
        }
      />
      <Box sx={{alignSelf: 'center', paddingX: '0.5rem'}}>
        <QuantitySelector quantity={quantity}/>
      </Box>
      <Box sx={{alignSelf: 'center'}}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon onClick={handleDelete}/>
        </IconButton>
      </Box>
    </ListItem>
  )
}

export default ProductCartItem