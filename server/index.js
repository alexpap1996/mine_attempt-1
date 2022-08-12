import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import { users } from './staticData_server.js'
import mongoose from 'mongoose'

import { createUser, authenticateUser, createOrder, getUserOrders } from './controllers/userController.js'
import Product from './schemas/productSchema.js'
import Shop from './schemas/shopSchema.js'
import User from './schemas/userSchema.js'

connect()
const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

// called to login / authenticate user
app.post('/api/user/login/', async (req, res) => {
  console.log('hit login')
  await authenticateUser(req, res)
})

// returns an object {orders: [], products: []}
// order array contains the product IDs only
// products is the
app.get('/api/orders/:userId', async (req, res) => {
  // await test(req, res)
  await getUserOrders(req, res)
})

app.post('/api/orders/products', async (req, res) => {
  const { productIds } = req.body

  const objectIds = productIds.map(pId => 
    mongoose.Types.ObjectId(pId)
  )

  const filteredProds = await Product.find({
    '_id': { $in: objectIds}
  })

  res.json(filteredProds)
})

// used to create an order
app.post('/api/orders/create', async (req, res) => {
  console.log('hit order create')
  await createOrder(req, res)
})

// creates a user
app.post('/api/user/create/', async (req, res) => {
  await createUser(req, res)
})

// returns all shops the belong to the category that is passed
app.get('/api/shops/:category', async (req, res) => {
  const category = req.params.category
  const categoryShops = await Shop.find({category})
  res.json(categoryShops)
})

// shopId refers to a specific shop
// returns the products of that shop
// and the shop itself to use its info in the page
app.get('/api/shop/:shopId', async (req, res) => {
  const shopId = req.params.shopId
  const filteredProds = await Product.find({shopId:mongoose.Types.ObjectId(shopId)})

  const shop = await Shop.findById(shopId)
  const shopAndProducts = {
    shop, products: filteredProds
  }
  res.json(shopAndProducts)
})

app.post('/api/products/create/', async (req, res) => {
  const products = req.body.products
  const result = await Product.insertMany(products)
  res.json(result)
})

app.post('/api/products/rate/', async (req, res) => {
  const { orderId, userId, ratings } = req.body

  const productIds = Object.keys(ratings).map(pId => mongoose.Types.ObjectId(pId))
  const products = await Product.find({
    '_id': { $in: productIds}
  })
  products.forEach(prod => {
    prod.ratings.push({
      rating: ratings[prod._id],
      user: userId
    })
  })
  const result = await Product.bulkSave(products)

  const user = await User.findById(userId)
  user.orders.find(order => order._id.toString() === orderId).status = 'rated'

  await user.save()
  res.json(user.orders)
})

app.post('/api/shops/create/', async (req, res) => {
  const shops = req.body.shops
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