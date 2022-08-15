import mongoose from 'mongoose'

// object that has a string for each language
const bilingualSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  gr: {
    type: String,
    required: true,
  },
})

// we save the rating of the product and the id of the user that made the rating
const ratingSchema = mongoose.Schema({
  rating: { 
    type: Number, 
    required: true 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
})

const productSchema = mongoose.Schema({
  name: {
    type: bilingualSchema,
    required: true
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Shop',
  },
  ratings: [ratingSchema],
  price: {
    type: Number,
    required: true
  },
  image: { 
    type: String, 
    required: true 
  }
})
const Product = mongoose.model('Product', productSchema)
export default Product