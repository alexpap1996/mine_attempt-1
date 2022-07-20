import React from 'react';
import { useLocation } from 'react-router-dom'
import CategoryList from '../components/ShopCategories/CategoryList';
import ShopList from '../components/Shops/ShopList';

const ShopsScreen = () => {
  const location = useLocation()
  const subDir = location.pathname.split('/')[2]
  const isShopDir = subDir !== undefined && subDir !== null

	return <>
    { !isShopDir && <CategoryList />}
    { isShopDir && <ShopList category={subDir} />}
	</>
}

export default ShopsScreen