import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ClickableCard from '../ClickableCard';
import { Container, Box, Grid, Typography, useTheme, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const GridShopCard = ({id, title, goToDir, cardColor}) => {
  return (
    <Grid item xs={6} sm={4}>
      <ClickableCard id={id} title={title} goToDir={'../shop/'+id} cardColor={cardColor}/>
    </Grid>
  )
}

const ShopList = ({category}) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { main } = theme.palette.secondary
  const [shopsList, setShopsList] = useState([])
  const getCategoryShops = async () => {
    try {
      const { data } = await axios('/api/shops/'+category)
      console.log(data)
      setShopsList(data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getCategoryShops()
  }, [])

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
            <GridShopCard id={shop.id} title={shop.name} goToDir={shop.id} cardColor={main}/>
          ))
        }
      </Grid>
    </Container>
  </>)
}

export default ShopList