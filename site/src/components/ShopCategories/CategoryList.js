import React from 'react'
import { Card, Grid, Typography, CardMedia, CardContent, Link, useTheme } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/system'
import { useTranslation } from 'react-i18next'
import ClickableCard from '../ClickableCard';

/* icons */
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'; //πιο κοντα σε cart ειναι αυτο
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const categories = [
  {
    name: 'food',
    icon: RestaurantIcon
  },
  {
    name: 'groceries',
    icon: StoreIcon
  },
  {
    name: 'pharmacies',
    icon: LocalPharmacyIcon
  },
]

const GridCategoryCard = ({id, title, goToDir, cardColor, textColor, icon}) => {
  return ( 
    <Grid item xs={6} sm={4}>
      <ClickableCard id={id} title={title} goToDir={goToDir} cardColor={cardColor} textColor={textColor} Icon={icon}/>
    </Grid>
  )
}

const CategoryList = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { main, contrastText } = theme.palette.primary

  return (<>
    <Typography align="center" component="h4" variant="h4" py={3}>
      {t('pickACategory')}
    </Typography>
    <Container maxWidth='md'>
      <Grid container direction="row" spacing={4}>
        {
          categories.map((category) => (
            <GridCategoryCard 
              id='1'
              title={t(category.name)}
              goToDir={category.name}
              cardColor={main}
              textColor={contrastText}
              icon={category.icon}
            />
          ))
        }
      </Grid>
    </Container>
  </>)
}

export default CategoryList