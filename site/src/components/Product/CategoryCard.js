import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const CategoryCard = () => {
  return <>
    <Card>
      <CardMedia
        component="img"
        height="140"
        // https://github.com/safak/youtube/blob/react-shop-ui/src/pages/Product.jsx
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        sx={{backgroundColor: 'rgba(32, 33, 37, 0.64)'}}
      />
    </Card>
  </>
}

export default CategoryCard