import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import { useTranslation } from "react-i18next"

const AlertModal = ({open = false, handleClose}) => {
  const { t } = useTranslation()
  return (
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          {t('warning')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('areYouSure')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="yes" onClick={handleClose}>{t('yes')}</Button>
          <Button name="no" onClick={handleClose} autoFocus>
            {t('no')}
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default AlertModal