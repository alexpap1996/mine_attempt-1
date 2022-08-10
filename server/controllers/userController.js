import User from '../schemas/userSchema.js'

const createUser = async (req, res)  => {
	const { firstname,lastname,emergencyphone, email, password } = req.body

	const user = await User.create({
    firstname,
    lastname,
    emergencyphone,
    email,
    password,
  })

	if (user) {
    res.status(201).json({
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
        emergencyphone: user.emergencyphone
        // token: generateToken(user._id),
      })
    } else {
      res.status(403)
    }
  } else {
    res.status(400)
    res.json({
      message: 'user not found'
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

export {
	createUser,
  authenticateUser,
  createOrder
}