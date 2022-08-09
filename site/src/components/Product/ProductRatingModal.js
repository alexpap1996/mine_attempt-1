import { Modal, Card, CardHeader, IconButton, CardContent } from "@mui/material"

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

const ProductRatingModal = ({ open = false }) => {
  const handleClose = () => {
    open = false
  }

  return (<>
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
              <CloseIcon />
            </IconButton>
          }
          title={'fff'}
          sx={{pb:0}}
        />
        <CardContent sx={{paddingRight: 'unset'}}>
          
        </CardContent>
      </Card>
    </Modal>
  </>)
}

export default ProductRatingModal