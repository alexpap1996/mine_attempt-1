import { Grid, TextField, FormControl } from "@mui/material"
import { useTranslation } from 'react-i18next'

const GridItem = ({value, label, name, editState, changeValue, type}) => {
  return <Grid item xs={12} md={6}>
    <FormControl fullWidth>
      <TextField
        name={name}
        label={label}
        defaultValue={value}
        InputProps={{
          disabled: !editState,
        }}
        variant="standard"
        sx={{px:3, label:{px:4}, input: {textAlign: "right", pr:1}}}
        onChange={changeValue}
        type={type ? type : 'text'}
      />
    </FormControl>
  </Grid>
}

// fields displaying user information
// when editState === true the fields are editable
const ProfileData = ({ user = {}, editState, changeValue }) => {
  const { t } = useTranslation()
  return (<>
    <Grid container spacing={2} sx={{p:2}}>
      <GridItem 
        label={t('firstname')} 
        value={user.firstname} 
        name="firstname" 
        editState={editState} 
        changeValue={changeValue}
      />
      <GridItem 
        label={t('lastname')} 
        value={user.lastname}  
        name="lastname" 
        editState={editState} 
        changeValue={changeValue}
      />
      <GridItem 
        label={t('emergencyPhone')} 
        value={user.emergencyphone} 
        name="emergencyphone" 
        editState={editState} 
        changeValue={changeValue}
        type="number"
      />
      <GridItem label={t('emailAddress')} value={user.email}/>
    </Grid>
  </>)
}

export default ProfileData