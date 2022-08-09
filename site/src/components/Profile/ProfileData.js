import { Grid, TextField } from "@mui/material"
import { useTranslation } from 'react-i18next'

const GridItem = ({value, label}) => {
  return <Grid item xs={12} md={6}>
    <TextField
      label={label}
      defaultValue={value}
      InputProps={{
        readOnly: true,
      }}
      variant="standard"
    />    
  </Grid>
}

const ProfileData = ({ user = {} }) => {
  const { t } = useTranslation()
  return (<>
    <Grid container spacing={2} sx={{p:2}}>
      <GridItem label={t('firstname')} value={user.firstname} />
      <GridItem label={t('lastname')} value={user.lastname} />
      <GridItem label={t('emergencyPhone')} value={user.emergencyphone} />
      <GridItem label={t('emailAddress')} value={user.email} />
    </Grid>
  </>)
}

export default ProfileData