import React, { useState } from 'react'
import './OrderProductsModal.css'
import { List, Typography, Modal, Box, Card, CardContent, CardHeader, IconButton, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import OrderProductsModalItem from './OrderProductsModalItem'
import OrderProductsRateItem from './OrderProductsRateItem'
import CloseIcon  from '@mui/icons-material/Close';
import AlertModal from '../../utils/AlertModal'
import { ENDPOINT } from '../../constants/routeConstants'
import axios from 'axios'
import { GlobalState } from '../../contexts/Context'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  maxHeight: '70vh'
}

// modal with two modes
// 'normal' mode shows the products with quantity and price, along with total order price
// 'rate' mode shows the products with the Rating component so the user can rate each one and save the rating on db
const OrderProductsModal = ({products = [], unsetModalProducts, modalMode, orderId}) => {
  const { t } = useTranslation()
  const { state: {user}, dispatch } = GlobalState()
  const handleClose = () => {
    unsetModalProducts()
  }

  const [alertOpen, setAlertOpen] = useState(false)
  const [ratings, setRatings] = useState({})

  const open = !!products.length

  const price = products.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)

  // saves the rating on the component state
  const saveRating = ({productId, rating}) => {
    setRatings({
      ...ratings,
      [productId]: rating
    })
  }

  // upon clicking save we open a confirmation alert
  const onClickSaveRating = () => {
    setAlertOpen(true)
  }

  // after clicking on an option we handle the value clicked
  // if the value is yes we save the rating on the db
  // if the value is no we do nothing
  // after either case we close the alert and the product modal
  const handleAlertClose = async (event) => {
    if (event.target.name === 'yes') {
      const res = await axios.post(ENDPOINT + '/api/products/rate/', {
        orderId: orderId,
        userId: user._id,
        ratings: ratings
      })
      if (res.status === 200) {
        // save the rated status on the global state
        dispatch({
          type: 'order_rated',
          payload: {
            orderId
          }
        })
      }
      unsetModalProducts()
    }
    setAlertOpen(false)
  }

  return (<>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Card sx={style} className="modal">
        <CardHeader
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon  />
            </IconButton>
          }
          title={modalMode === 'normal' ? t('orderProducts') : t('rateProducts')}
          sx={{pb:0}}
        />
        <CardContent sx={{paddingRight: 'unset'}}>
          <List className="modal-list" sx={{paddingRight:1}}>
            {
              products.map(prod => modalMode === 'normal'
                ? <OrderProductsModalItem product={prod}/>
                : <OrderProductsRateItem saveRating={saveRating} product={prod} />)
            }
          </List>
            <Box sx={{paddingRight:2, pt:1, display:'flex', justifyContent:'flex-end'}}>
              {modalMode ==='normal' ?
                <Typography variant="h6" component="h2" sx={{ textAlign: 'right'}}>
                  {`${price.toFixed(2)}€`}
                </Typography>
                : <Button onClick={onClickSaveRating}>Save</Button>
              }
            </Box>
        </CardContent>
      </Card>
    </Modal>
    <AlertModal open={alertOpen} handleClose={handleAlertClose}/>
    </>
  )
}

export default OrderProductsModal