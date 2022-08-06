import React, { useEffect, useState } from 'react'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import ProductCard from '../components/Product/ProductCard'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
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

const ProductListScreen = () => {
  const { i18n } = useTranslation()
  const currLang = i18n.language

  const location = useLocation()
  const shopId = location.pathname.split('/')[2]

  const [products, setProducts] = useState([])
  const [shop, setShop] = useState({})
  
  useEffect(() => {
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
    {
      Object.keys(shop).length

      ? <Container maxWidth='md' >
        <Card sx={{my:3}}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography component="h5" variant="h3" sx={{ fontWeight: 300}} >{shop.name[currLang]}</Typography>
            <Typography component="div" variant="h6" >{shop.category}</Typography>
          </CardContent>
        </Card>
        
        <Grid container spacing={2} style={{ marginTop: 'unset' }}>
          {
            products.map(prod => <GridProductItem key={prod.id} product={prod} />)
          }
        </Grid>
      </Container>

      : <Loading />
    }
  </>)
}

export default ProductListScreen