import mongoose from 'mongoose'
import User from './schemas/userSchema.js'
import Product from './schemas/productSchema.js'

// get user params from body
// check if user already exists
// if not create with params
// if they exist return error
const createUser = async (req, res)  => {
	const { firstname,lastname,emergencyphone, email, password } = req.body
  console.log(req.body)
  const userExists = await User.find({
    email: email
  })
  if (userExists.length) {
    res.status(400)
    res.json({
      message: 'userExists'
    })
    return 
  }

	const user = await User.create({
    firstname,
    lastname,
    emergencyphone,
    email,
    password,
  })
  
	if (user) {
    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      emergencyphone: user.emergencyphone,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}

// update user with incoming params from body
// return the updated user
const editUser = async (req, res) => {
  const { _id, firstname, lastname, emergencyphone } = req.body
  const user = await User.findByIdAndUpdate(_id, {
    firstname, lastname, emergencyphone
  }, {new: true})
  res.status(200)
  res.json({user})
}

// used for login
// returns true if email and password are both correct
// returns appropriate error if one of them is wrong
const authenticateUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  // user will be null if the email is not found in the db
  if (user) {
    // check for password against the user
    const result = await user.testLogin(password)
    if (result) {
      res.status(200)
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        emergencyphone: user.emergencyphone,
        orders: user.orders
      })
    } else {
      res.status(403)
      res.json({
        message: 'wrongPassword'
      })
    }
  } else {
    res.status(400)
    res.json({
      message: 'userNotFound'
    })
  }
}

const createOrder = async (req, res) => {
  const { email, status, price, tip, paymentMethod, products } = req.body
  const newOrder = {
    status, price, tip, paymentMethod, products
  }

  console.log(newOrder)
  
  try {
    const user = await User.findOne({ email })
    user.orders.push(newOrder)
    const savedUser = await user.save()

    res.status(200)
    res.json(savedUser)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({
      message: e.message
    })
  }
}

const getUserOrders = async (req, res) => {
  const userId = req.params.userId
  console.log(userId)
  const user = await User.findById(userId)
  if (!user) return
  console.log(user)
  const orders = user.orders

  res.status(200)
  res.json(orders)
}

const rateProducts = async (req, res) => {
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
  await Product.bulkSave(products)

  const user = await User.findById(userId)
  user.orders.find(order => order._id.toString() === orderId).status = 'rated'

  await user.save()
  res.json(user.orders)
}

export {
	createUser,
  editUser,
  authenticateUser,
  createOrder,
  getUserOrders,
  rateProducts
}