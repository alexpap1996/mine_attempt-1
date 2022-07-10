import React from 'react'
import { Container, Grid } from '@mui/material'
import ProductCard from '../components/Product/ProductCard'

const GridProductItem = ({photoDir}) => {
  return (<Grid item xs={12} sm={6} md={4}>
    <ProductCard photoDir={photoDir}></ProductCard>
  </Grid>)
}

const ProductListScreen = () => {
  return (<>
    <Container maxWidth='xl' >
      <Grid container spacing={4} style={{ marginTop: 'unset' }}>
        <GridProductItem photoDir='kiwi.jpg'/>
        <GridProductItem photoDir='orange.jpg'/>
        <GridProductItem photoDir='kiwi.jpg'/>
        <GridProductItem photoDir='kiwi.jpg'/>
      </Grid>
    </Container>
  </>)
}

export default ProductListScreen