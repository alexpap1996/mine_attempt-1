import React, { useState } from 'react'
import { Box, Card, Typography, CardMedia, CardContent, Link, CssBaseline, Paper, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const CategoryCard = ({ id = '', image, alt, title, goToDir = '', cardColor, textColor, icon }) => {
  const IconComp = icon
  const { t } = useTranslation()
  const [elevation, setElevation] = useState(2) //maybe remove setElevation
  const [brightness, setBrightness] = useState('100%')
  const theme = useTheme()

  // const { main: backgroundColor, contrastText: color } = theme.palette.primary

  const handleMouseEnter = () => {
    setElevation(3)
    setBrightness('87%')
  }

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
          image="./../../images/pharmacy_1.jpg"
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

export default CategoryCard