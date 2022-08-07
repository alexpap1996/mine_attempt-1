import React from 'react'
import './OrderProductsModal.css'
import { List, Typography, Modal, Box, Card, CardContent, CardHeader, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import OrderProductsModalItem from './OrderProductsModalItem'
import CloseIcon  from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  maxHeight: '70vh'
}

const OrderProductsModal = ({products = [], unsetModalProducts}) => {
  const { t } = useTranslation()
  const handleClose = () => {
    unsetModalProducts()
  }

  const open = !!products.length

  const price = products.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style} className="modal">
        <CardHeader
          action={
            <IconButton onClick={handleClose}>
              <CloseIcon  />
            </IconButton>
          }
          title={t('orderProducts')}
          sx={{pb:0}}
        />
        <CardContent sx={{paddingRight: 'unset'}}>
          <List className="modal-list" sx={{paddingRight:1}}>
            {
              products.map(prod => <OrderProductsModalItem product={prod}/>)
            }
          </List>
          <Box sx={{paddingRight:2, pt:1}}>
            <Typography variant="h6" component="h2" sx={{ textAlign: 'right'}}>
              {`${price.toFixed(2)}€`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default OrderProductsModal