import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import { shops, products, users } from './staticData_server.js'

import { getUser, createUser } from './controllers/userController.js'

// connect()
const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

// returning the first user we find no matter what we get as params
// this needs to be implemented
app.post('/api/user/login/', async (req, res) => {
  // const name = req.params.name
  //const user = await getUser(name)
  console.log('hit /api/user/login')
  res.json(users[0])
})

app.get('/api/user/test', async (req, res) => {
  // const name = req.params.name
  //const user = await getUser(name)
  console.log('hit /api/user/test')
  res.json(users[0])
})

app.get('/api/orders/:userId'), async (req, res) => {
  const userId = req.params.userId
  const orders = users.find(user => user.id === userId).orders
  res.json(orders)
}

// not used, for dev purposes only
app.post('/api/user/', async (req, res) => {
  await createUser(req, res)
})

// TODO: if the structure is changed in the db,
// adjust this accordingly
app.get('/api/shops/:category', (req, res) => {
  const category = req.params.category
  res.json(shops[category])
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

// TODO: create order logic
// add currentDate, product (maybe Ids?), userId
// optional: tip, price paid
app.get('/', (req, res) => {
  res.send('home page')
})


const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(
    `Server running in development mode on port ${PORT}`
  )
)