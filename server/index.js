import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'
import { shops } from './staticData_server.js'

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

app.post('/api/user/', async (req, res) => {
  await createUser(req, res)
})

app.get('/api/shops/:category', (req, res) => {
  const category = req.params.category
  res.json(shops[category])
})


const PORT = 9000

app.listen(
  PORT,
  console.log(
    `Server running in development mode on port ${PORT}`
  )
)