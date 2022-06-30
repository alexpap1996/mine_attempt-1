import path from 'path'
import cors from 'cors'
import express from 'express'
import connect from './config/database.js'

connect()
const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

router.route('/api/users').get((req, res) => {
  console.log('inside api users')
  return res.json('this may have had user data!')
})

router.route('/').get((req, res) => {
  console.log('inside route dir')
  return res.json('ok!')
})

const PORT = 5000

app.listen(
  PORT,
  console.log(
    `Server running in development mode on port ${PORT}`
  )
)