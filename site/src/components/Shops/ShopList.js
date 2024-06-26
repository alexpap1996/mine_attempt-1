import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ClickableCard from '../ClickableCard';
import { Container, Box, Grid, Typography, useTheme, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { ENDPOINT } from '../../constants/routeConstants'

const GridShopCard = ({title, goToDir, cardColor, image}) => {
  return (
    <Grid item xs={6} sm={4}>
      <ClickableCard title={title} goToDir={goToDir} cardColor={cardColor} image={image}/>
    </Grid>
  )
}

// list of shops
// rendered as ClickableCard so the user is redirected to specific shop when clicking on a card
const ShopList = ({category}) => {
  const { i18n, t } = useTranslation()
  const currLang = i18n.language
  const theme = useTheme()
  const { main } = theme.palette.secondary
  const [shopsList, setShopsList] = useState([])
  
  useEffect(() => {
    // doing the callout to get all shops of selected category
    const getCategoryShops = async () => {
      try {
        const { data } = await axios(ENDPOINT + '/api/shops/' +category)
        setShopsList(data)
      } catch (e) {
        console.log(e.message)
      }
    }
    getCategoryShops()
  }, [category])

  return (<>
    <Box sx={{ margin: '16px', position: 'absolute' }}>
      <Button variant="text" startIcon={<ArrowBackIcon />} component={RouterLink} to='/shops'>
        {t('categories')}
      </Button>
    </Box>
    <Typography align="center" component="h4" variant="h4" py={4}>
      {t(category)}
    </Typography>
    <Container maxWidth='md' sx={{pt:2}}>
      <Grid container direction="row" spacing={4}>
        {
          shopsList && shopsList.map((shop) => (
            <GridShopCard key={shop._id} title={shop.name[currLang]} goToDir={'../shop/'+shop._id} cardColor={main} image={shop.image}/>
          ))
        }
      </Grid>
    </Container>
  </>)
}

export default ShopList