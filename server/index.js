import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import mongoose from 'mongoose'

// user methods are more complicated so they are put into separate file
import { createUser, authenticateUser, createOrder, getUserOrders, rateProducts, editUser } from './controllers.js'

// import the schemas
import Product from './schemas/productSchema.js'
import Shop from './schemas/shopSchema.js'

// connect to the db
connect()
const app = express()

// init middleware
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

// get full products to display when clicking on an order
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

// edits a user
app.post('/api/user/edit/', async (req, res) => {
  await editUser(req, res)
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

// insert an order
app.post('/api/products/create/', async (req, res) => {
  const products = req.body.products
  const result = await Product.insertMany(products)
  res.json(result)
})

// rate products of an order
app.post('/api/products/rate/', async (req, res) => {
  await rateProducts(req, res)
})

// used only by other files to insert shops into the db
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
    `Server running on port ${PORT}`
  )
)