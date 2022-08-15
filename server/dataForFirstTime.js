import Product from './schemas/productSchema.js'
import Shop from './schemas/shopSchema.js'
import User from './schemas/userSchema.js'

import connect from './config/database.js'

// creating classes and methods for objects for consistent data creation
// and readability
class Name {
  constructor(en, gr) {
    this.en = en
    this.gr = gr
  }
}

const createShop = (name, category, image) => {
  const shop = new Shop()
  shop.name = name,
  shop.category = category,
  shop.image = image
  return shop
}

const createProd = (name, shopId, price, image) => {
  const prod = new Product()
  prod.name = name
  prod.shopId = shopId
  prod.price = price
  prod.image = image
  return prod
}

const createUser = (firstname, lastname, email, password, emergencyphone) => {
  const user = new User()
  user.firstname = firstname
  user.lastname = lastname
  user.email = email
  user.password = password
  user.emergencyphone = emergencyphone
}

// delete all existing records from database
// so whatever we insert after is going to be the entire database
const deleteExistingData = async () => {
  await Product.deleteMany({})
  // await User.deleteMany({})
  await Shop.deleteMany({})
}

const createUsers = async () => {
  const user1 = createUser('firstname', 'lastname', 'test@test.com', 'password', '6912345678')
  const users = [user1]
  const res = await User.bulkSave(users)
  return res
}

// shops that are missing and would be nice to have
// 2 bakeries (1 big 1 small maybe)
// 2 butchers (1 normal butcher 1 fish shop)
// 
const createShops = async () => {
  const market1 = createShop(new Name('Mini Market', 'Μίνι Μάρκετ'), 'groceries', 'https://www.giveandfund.com/giveandfund/projects/360/n50jfbbmhq.jpg')
  const market2 = createShop(new Name('Grand Market', 'Γκραντ Μάρκετ'), 'groceries', 'https://previews.123rf.com/images/filmlandscape/filmlandscape1702/filmlandscape170200008/72252201-a-famous-mini-mart-on-the-local-walking-street-of-luang-prabang-laos-.jpg')
  const pharmacy = createShop(new Name('Pharmacy', 'Φαρμακειο'), 'pharmacies', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658335845/pharmacy_1_ofngw0.jpg')
  const gyroplace = createShop(new Name('Gyro Place', 'Γυράδικο'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658337282/gyro_1_afzo80.jpg')
  const crepeplace = createShop(new Name('Crepe Place', 'Κρεπερί'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245464/cld-sample-4.jpg')
  
  const shops = [market1, market2, pharmacy, gyroplace, crepeplace]
  const res = await Shop.bulkSave(shops)
  return res.insertedIds
}

// goal: every shop should have at least 5 products for now
// feel free to clone products and changing only the shopId so the same product shows up at two shops
const createProducts = async (shopIds) => {
  const MiniMarketId = shopIds[0]
  const GrandMarketId = shopIds[1]
  const pharmacyId = shopIds[2]
  const gyroplace = shopIds[3]
  const crepeplace = shopIds[4]

  const orange = createProd(new Name('Orange', 'Πορτοκάλι'), MiniMarketId, 0.7, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const orange2 = createProd(new Name('Orange', 'Πορτοκάλι'), GrandMarketId, 0.7, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const kiwi = createProd(new Name('Kiwi', 'Ακτινίδιο'), GrandMarketId, 1.2, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg')
  const salt = createProd(new Name('Salt - 500gr', 'Αλάτι - 500γρ'), GrandMarketId, 2.0, 'https://res.cloudinary.com/djuuwduyx/image/upload/c_mpad,h_300,w_400/v1660566716/alati-sakoula-300-208x300_bgn6dq.png')
  const vitaminC = createProd(new Name('Vitamin C - 1000mg', 'Βιταμινη C - 1000μγ'), pharmacyId, 8.0, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1660036588/5df9a1287e60e99cc253bd768e7d2236_VITC1000_r2ilyq.jpg')
  
  const products = [orange, orange2, kiwi, salt, vitaminC]
  const res = await Product.bulkSave(products)
}

// connect to database
const runApp = async () => {
  await connect()

  await deleteExistingData()
  
  // create the records
  // await createUsers()
  const shopIds = await createShops()
  createProducts(shopIds)
}
runApp()


