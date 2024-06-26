import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import { useTranslation } from 'react-i18next'
import ClickableCard from '../ClickableCard';

/* icons */
import MedicationIcon from '@mui/icons-material/Medication';
import StoreIcon from '@mui/icons-material/Store';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

// categories along with their icons
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
    icon: MedicationIcon
  },
  {
    name: 'bakeries',
    icon: BakeryDiningIcon
  },
  {
    name: 'butcher',
    icon: KebabDiningIcon
  },
]

const GridCategoryCard = ({title, goToDir, cardColor, textColor, icon}) => {
  return ( 
    <Grid item xs={6} sm={4}>
      <ClickableCard title={title} goToDir={goToDir} cardColor={cardColor} textColor={textColor} icon={icon}/>
    </Grid>
  )
}

// list of shop categories
// rendering list of ClickableCard so the user is redirected after clicking on one
const CategoryList = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { main, contrastText } = theme.palette.primary

  return (<>
    <Typography align="center" component="h4" variant="h4" py={4}>
      {t('pickACategory')}
    </Typography>
    <Container maxWidth='md'>
      <Grid container direction="row" spacing={4} sx={{ justifyContent:'center', pt:2 }}>
        {
          categories.map((category) => (
            <GridCategoryCard 
              title={t(category.name)}
              goToDir={category.name}
              cardColor={main}
              textColor={contrastText}
              icon={category.icon}
              key={category.name}
            />
          ))
        }
      </Grid>
    </Container>
  </>)
}

export default CategoryList