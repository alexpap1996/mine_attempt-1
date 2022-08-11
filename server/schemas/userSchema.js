import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const orderSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  tip: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  products: [{
    quantity: {
      type: Number,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    }
  }],
  creationDate: {
    type: Date,
    default: Date.now()
  }
},
{
  timestamp: true,
})

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emergencyphone: {
      type: Number,
      required: true
    },
    orders: [orderSchema]
  },
  {
    timestamps: true,
  }
)

userSchema.methods.testLogin = async function (pswrd) {
  return await bcrypt.compare(pswrd, this.password)
}
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
export default User