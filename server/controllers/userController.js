import User from '../schemas/userSchema.js'

const createUser = async (req, res)  => {
	const { firstname,lastname,emergencyphone, email, password } = req.body
  console.log(req.body)
  const userExists = await User.find({
    email: email
  })
  if (userExists) {
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


const authenticateUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
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
        // token: generateToken(user._id),
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

export {
	createUser,
  authenticateUser,
  createOrder,
  getUserOrders
}