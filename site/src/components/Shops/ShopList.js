import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import ClickableCard from '../ClickableCard';
import { Container, Card, Box, Grid, Typography, CardMedia, CardContent, Link, useTheme, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const GridShopCard = ({id, title, goToDir, cardColor}) => {
  return (
    <Grid item xs={6} sm={4}>
      <ClickableCard id={id} title={title} goToDir={goToDir} cardColor={cardColor}/>
    </Grid>
  )
}

const ShopList = ({category}) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { main } = theme.palette.secondary
  const [shopsList, setShopsList] = useState([])
  const handleButtonClick = async () => {
    try {
      const { data } = await axios('http://localhost:9000/api/shops/shops')
      console.log('data')
      console.log(data)
      setShopsList(data[category])
      console.log(shopsList)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    console.log('running use effect')
    handleButtonClick()
  }, [])

  return (<>
    <Box sx={{ margin: '16px', position: 'absolute' }}>
      <Button variant="text" startIcon={<ArrowBackIcon />} component={RouterLink} to='/shop'>
        {t('categories')}
      </Button>
    </Box>
    <Typography align="center" component="h4" variant="h4" py={3}>
      {t(category)}
    </Typography>
    {/* <Button onClick={handleButtonClick}>test</Button> */}
    <Container maxWidth='md'>
      <Grid container direction="row" spacing={4}>
        {
          shopsList && shopsList.map((categoryName) => (
            <GridShopCard id='1' title={t(categoryName)} goToDir={categoryName} cardColor={main}/>
          ))
        }
      </Grid>
    </Container>
  </>)
}

export default ShopList