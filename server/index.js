import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import { shops, products, users } from './staticData_server.js'

import { createUser, authenticateUser, createOrder } from './controllers/userController.js'
import Product from './schemas/productSchema.js'
import Shop from './schemas/shopSchema.js'

connect()
const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

// this is called for login
app.post('/api/user/login/', async (req, res) => {
  await authenticateUser(req, res)
})

app.get('/api/user/test', async (req, res) => {
  // const name = req.params.name
  //const user = await getUser(name)
  console.log('hit /api/user/create')
  res.json(users[0])
})

// returns an object {orders: [], products: []}
// order array contains the product IDs only
// products is the
app.get('/api/orders/:userId', async (req, res) => {
  const userId = req.params.userId
  const orders = users.find(user => user.id === userId).orders

  let productIds = new Set()
  orders.forEach(order => 
    order.products.forEach(prodId => {
      productIds.add(prodId)
    })
  )
  const filteredProds = products.filter(prod => productIds.has(prod.id))
  
  res.json({orders, products: filteredProds})
})

app.post('/api/orders/products', async (req, res) => {
  const { productIds } = req.body

  const filteredProds = products.filter(prod => productIds.includes(prod.id))
  res.json(filteredProds)
})

app.post('/api/orders/create', async (req, res) => {
  console.log('hit order create')
  await createOrder(req, res)
})

// use this route to create user
app.post('/api/user/create/', async (req, res) => {
  await createUser(req, res)
})

// TODO: if the structure is changed in the db,
// adjust this accordingly
app.get('/api/shops/:category', async (req, res) => {
  const category = req.params.category
  console.log(`category: ${category}`)
  const categoryShops = await Shop.find({category})
  res.json(categoryShops)
})

//TODO: products refer to static products, make them refer to mongoose
app.get('/api/shop/:shopId', (req, res) => {
  const shopId = req.params.shopId
  const filteredProds = products.filter(prod => prod.shopId === shopId)
  const shopArray = Object.keys(shops).reduce((acc, cur) => {
    acc = [ ...acc, ...shops[cur]]
    return acc
  }, [])
  const shop = shopArray.find(shop => shop.id === shopId)
  const shopAndProducts = {
    shop, products: filteredProds
  }
  // console.log(req.params)
  res.json(shopAndProducts)
})

app.post('/api/products/create/', async (req, res) => {
  const products = req.body.products
  console.log(products)
  const result = await Product.insertMany(products)
  res.json(result)
})

app.post('/api/shops/create/', async (req, res) => {
  const shops = req.body.shops
  console.log(shops)
  await Shop.deleteMany({})
  const result = await Shop.insertMany(shops)
  res.json(result)
})


const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(
    `Server running in development mode on port ${PORT}`
  )
)