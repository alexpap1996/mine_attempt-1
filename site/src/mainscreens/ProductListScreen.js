import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import ProductCard from '../components/Product/ProductCard'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const GridProductItem = ({photoDir, productName, productPrice}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProductCard photoDir={photoDir} productName={productName} productPrice={productPrice}></ProductCard>
    </Grid>
  )
}

const ProductListScreen = () => {
  const location = useLocation()
  const shopId = location.pathname.split('/')[2]
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    try {
      const { data } = await axios('http://localhost:9000/api/shop/'+shopId)
      setProducts(data)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    getProducts()
  }
    
  , [])
  return (<>
    <Container maxWidth='xl' >
      <Grid container spacing={4} style={{ marginTop: 'unset' }}>
        {
          products.map(prod => <GridProductItem photoDir={prod.photoDir} productName={prod.name} productPrice={prod.price} />)
        }
      </Grid>
    </Container>
  </>)
}

export default ProductListScreen