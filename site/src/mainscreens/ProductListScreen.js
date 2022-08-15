import React, { useEffect, useState } from 'react'
import { Card, CardContent, Container, Grid, Typography, Box, Button, Divider } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductCard from '../components/Product/ProductCard'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { ENDPOINT } from '../constants/routeConstants'
import Loading from '../utils/Loading'

const GridProductItem = ({product}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <ProductCard 
        product={product}
      ></ProductCard>
    </Grid>
  )
}

// list of products of the selected store
const ProductListScreen = () => {
  const { i18n, t } = useTranslation()
  const currLang = i18n.language

  const location = useLocation()
  const shopId = location.pathname.split('/')[2]

  const [products, setProducts] = useState([])
  const [shop, setShop] = useState({})
  const shopCategory = shop.category
  
  // using useEffect so this runs on first render and if the shopId happens to change
  useEffect(() => {
    // calling out using the current shop id
    // which will return us all the products of that shop and also some details of the shop to display
    const getProducts = async () => {
      try {
        const { data } = await axios(ENDPOINT + '/api/shop/'+shopId)
        setProducts(data.products)
        setShop(data.shop)
      } catch (e) {
        console.log(e.message)
      }
    }
    getProducts()
  }, [shopId])

  
  return (<>
    {shopCategory && <Box sx={{ margin: '16px', position: 'absolute' }}>
      <Button variant="text" startIcon={<ArrowBackIcon />} component={RouterLink} to={`/shops/${shopCategory}`}>
        {t(shopCategory)}
      </Button>
    </Box>}
    {
      Object.keys(shop).length
      ? <Container maxWidth='md' >
        <Card sx={{mt:3, mb:2}}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Divider flexItem>
              <Typography component="h5" variant="h3" sx={{ fontWeight: 300}} >{shop.name[currLang]}</Typography>
            </Divider>
            
            <Typography component="div" variant="h6" >{t(shop.category)}</Typography>
          </CardContent>
        </Card>
        
        <Grid container spacing={2} style={{ marginTop: 'unset' }}>
          {
            products.map(prod => <GridProductItem key={prod._id} product={prod} />)
          }
        </Grid>
      </Container>

      : <Loading />
    }
  </>)
}

export default ProductListScreen