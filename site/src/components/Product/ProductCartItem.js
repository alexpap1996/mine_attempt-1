import { Box, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material';
import QuantitySelector from './QuantitySelector';
import DeleteIcon from '@mui/icons-material/Delete';
import { GlobalState } from '../../contexts/Context';
import { useTranslation } from 'react-i18next';

// a product that is inside the cart
// rendered as a ListItem so it displays as a row with the necessary information
// can be removed or have its quantity changed
const ProductCartItem = ({product}) => {
  const { name: text, quantity, image } = product
  const { i18n } = useTranslation()
  const currLang = i18n.language

  const { dispatch } = GlobalState()

  // if deleted remove the product from the cart that is inside the global state
  const handleDelete = () => {
    dispatch({
      type: 'remove',
      payload: product
    })
  }


  // if quantity is changed update the cart inside the global state
  const quantityChangeHandler = (val) => {
    dispatch({
      type: 'edit',
      payload: {...product, quantity: val}
    })
  }

  return (<>
    <ListItem >
      <ListItemAvatar sx={{py:1, pr:1}}>
        <Avatar alt={`${text.en} avatar`} src={image} sx={{ width: 56, height: 56 }}/>
      </ListItemAvatar>
      <ListItemText primary={text[currLang]} primaryTypographyProps={{component:"h2", variant:"h5"}} sx={{ pl: 2}}/>
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