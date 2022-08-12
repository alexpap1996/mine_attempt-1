import mongoose from 'mongoose'
import Product from './schemas/productSchema.js'
import Shop from './schemas/shopSchema.js'
import User from './schemas/userSchema.js'

import connect from './config/database.js'

// creating classes for objects for consistent data creation
// and readability
class Name {
  constructor(en, gr) {
    this.en = en
    this.gr = gr
  }
}

class _Shop {
  constructor(name, category, image) {
    this.name = name,
    this.category = category,
    this.image = image
  }
}

const createShop = (name, category, image) => {
  const shop = new Shop()
  shop.name = name,
  shop.category = category,
  shop.image = image
  return shop
}

class _User {
  constructor (firstname, lastname, email, password, emergencyphone) {
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.password = password
    this.emergencyphone = emergencyphone
  }
}

class _Product { 
  constructor (name, shopId, price, image) {
    this.name = name
    this.shopId = shopId
    this.price = price
    this.image = image
  }
}

// delete all existing records from database
const deleteExistingData = async () => {
  await Product.deleteMany({})
  await User.deleteMany({})
  await Shop.deleteMany({})
}

const createUsers = async () => {
  const user1 = new _User('firstname', 'lastname', 'test@test.com', 'password', '6912345678')
}

const createShops = async () => {
  const market1 = new _Shop(new Name('Mini Market', 'Μίνι Μάρκετ'), 'groceries', 'https://previews.123rf.com/images/filmlandscape/filmlandscape1702/filmlandscape170200008/72252201-a-famous-mini-mart-on-the-local-walking-street-of-luang-prabang-laos-.jpg')
  const pharmacy = new _Shop(new Name('Pharmacy', 'Φαρμακειο'), 'pharmacies', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658335845/pharmacy_1_ofngw0.jpg')
  const gyroplace = new _Shop(new Name('Gyro Place', 'Γυράδικο'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658337282/gyro_1_afzo80.jpg')
  const crepeplace = new _Shop(new Name('Crepe Place', 'Κρεπερί'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245464/cld-sample-4.jpg')
  
  const shops = [market1, pharmacy, gyroplace, crepeplace]
  const market2 = createShop(new Name('Mini Market', 'Μίνι Μάρκετ'), 'groceries', 'https://previews.123rf.com/images/filmlandscape/filmlandscape1702/filmlandscape170200008/72252201-a-famous-mini-mart-on-the-local-walking-street-of-luang-prabang-laos-.jpg')
  const res = await market2.save()
  // const res = await Shop.save(shops)
  console.log('res',res)
}

// missing shopIds, dont use for now
const createProducts = () => {
  const orange = new _Product(new Name('Orange', 'Πορτοκάλι'), '', 0.7, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const vitaminC = new _Product(new Name('Vitamin C - 1000mg', 'Βιταμινη C - 1000μγ'), '', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1660036588/5df9a1287e60e99cc253bd768e7d2236_VITC1000_r2ilyq.jpg')
  
  const products = [orange, vitaminC]
}

// connect to database
const runApp = async () => {
  await connect()

  await deleteExistingData()
  
  // create the records
  await createUsers()
  await createShops()
  // createProducts()
}
runApp()


