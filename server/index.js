import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import { shops, products } from './staticData_server.js'

import { getUser, createUser } from './controllers/userController.js'

// connect()
const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

app.get('/api/user/:name', async (req, res) => {
  const name = req.params.name
  const user = await getUser(name)
  console.log(`req.params.name: ${name}`)
  console.log(user)
  res.json(user)
})

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

// TODO:query products with the correct shopId and return them in an array
app.get('/api/shop/:shopId', (req, res) => {
  const shopId = req.params.shopId
  
})

// TODO: create order logic
// add currentDate, product (maybe Ids?), userId
// optional: tip, price paid
app.post('', (req, res) => {

})


const PORT = 9000

app.listen(
  PORT,
  console.log(
    `Server running in development mode on port ${PORT}`
  )
)