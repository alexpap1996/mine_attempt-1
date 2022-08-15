import React, { useState } from 'react'
import { Box, Card, Typography, CardMedia, CardContent, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

// card that redirects to appropriate page when clicked
// used for choosing category or shop
const ClickableCard = ({ goToDir, image, alt, title, cardColor, textColor, icon }) => {
  const IconComp = icon
  const [elevation, setElevation] = useState(2)
  const [brightness, setBrightness] = useState('100%')

  // if mouse is hovering on the card lower the brightness and add elevation
  const handleMouseEnter = () => {
    setElevation(3)
    setBrightness('87%')
  }

  // reset to default values when mouse is not hovering
  const handleMouseLeave = () => {
    setElevation(2)
    setBrightness('100%')
  }

  return (<>
    <RouterLink to={`/shops/${goToDir}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{ 
          backgroundColor: cardColor,
          color: textColor,
          filter: `brightness(${brightness})`
        }} 
        elevation={elevation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!IconComp && <CardMedia
          component="img"
          height="140"
          width="140"
          image={image}
          alt="pharmacies"
        /> }
        <CardContent sx={{paddingBottom: '16px !important'}}>
          {IconComp && 
            <Box sx={{ display:'flex', justifyContent:'center', margin: '1rem 0', fontSize: '48px' }}>
              <IconComp fontSize="inherit"/>
            </Box>
          }
          <Typography align="center" component="h6" variant="h6">
            {title}
          </Typography>
        </CardContent>
      </Card>
      {/* </Paper> */}
    </RouterLink>
  </>)
}

export default ClickableCard