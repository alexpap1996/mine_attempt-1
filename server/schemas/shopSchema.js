import mongoose from 'mongoose'
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

const shopSchema = mongoose.Schema({
  name: {
    type: bilingualSchema,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type:String,
    required: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)
export default Shop