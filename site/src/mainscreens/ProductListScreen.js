import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import ProductCard from '../components/Product/ProductCard'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const GridProductItem = ({photoDir, productName, productPrice}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <ProductCard photoDir={photoDir} productName={productName} productPrice={productPrice}></ProductCard>
    </Grid>
  )
}

const ProductListScreen = () => {
  const location = useLocation()
  const shopId = location.pathname.split('/')[2]

  const { t } = useTranslation()

  const [products, setProducts] = useState([])
  const [shop, setShop] = useState({})
  const getProducts = async () => {
    try {
      const { data } = await axios('http://localhost:9000/api/shop/'+shopId)
      setProducts(data.products)
      setShop(data.shop)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    getProducts()
  }
    
  , [])
  return (<>
    <Container maxWidth='md' >
      <Typography component="h5" variant="h5" sx={{pt:2}}>{t('welcomeTo')} {shop.name}</Typography>
      <Grid container spacing={2} style={{ marginTop: 'unset' }}>
        {
          products.map(prod => <GridProductItem key={prod.id} photoDir={prod.photoDir} productName={prod.name} productPrice={prod.price} />)
        }
      </Grid>
    </Container>
  </>)
}

export default ProductListScreen