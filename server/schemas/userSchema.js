import mongoose from 'mongoose'
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

const User = mongoose.model('User', userSchema)

export default User