import User from '../schemas/userSchema.js'

const getUser = async (name) => {
	const user = await User.findOne({ name })

	if (user) {
		return {
      _id: user._id,
      name: user.username,
			password: user.password,
			email: user.email,
    }
	} else {
		// throw new Error('Invalid email or password')
		console.log('in else')
	}
}

const createUser = async (req, res)  => {
	const { name, email, password } = req.body
	const user = await User.create({
    name,
    email,
    password,
  })

	if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}

export {
	getUser,
	createUser,
}