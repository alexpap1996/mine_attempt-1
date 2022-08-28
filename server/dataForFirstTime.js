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
  return user
}

// delete all existing records from database
// so whatever we insert after is going to be the entire database
const deleteExistingData = async () => {
  await Product.deleteMany({})
  await User.deleteMany({})
  await Shop.deleteMany({})
}

const createUsers = async () => {
  const user1 = createUser('firstname', 'lastname', 'test@test.com', 'password', 6912345678)
  const user2 = createUser('firstname', 'lastname', 'test2@test.com', 'password', 6912345678)
  const users = [user1, user2]
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
  const market3 = createShop(new Name('Super Market', 'Σούπερ Μάρκετ'), 'groceries', 'https://www.helppost.gr/wp-content/uploads/2014/08/bazaar-super-market-fylladio-prosfores.jpg')
  const pharmacy = createShop(new Name('Pharmacy', 'Φαρμακειο'), 'pharmacies', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658335845/pharmacy_1_ofngw0.jpg')
  const gyroplace = createShop(new Name('Gyro Place', 'Γυράδικο'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658337282/gyro_1_afzo80.jpg')
  const crepeplace = createShop(new Name('Crepe Place', 'Κρεπερί'), 'food', 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245464/cld-sample-4.jpg')
  const butchershop1 = createShop(new Name('Mini Butcher Shop', 'Μίνι Κρεοπωλείο'), 'butcher', 'https://archello.s3.eu-central-1.amazonaws.com/images/2020/03/21/design-interior-angst-realizat-01.1584792886.0245.jpg')
  const butchershop2 = createShop(new Name('Mills Butcher', 'Κρεοπωλείο Μιλς'), 'butcher', 'https://www.hk-interiors.co.uk/images/srv/page-services/Gallery%20Pictures/Food%20Retail/Mills%2C%20Hockley%20Heath/Mills%20Butchers%20Shopfitting%20%20%281%29.jpg')
  const bakery1 = createShop(new Name('Traditional Bakery', 'Παραδοσιακός Φούρνος'), 'bakeries', 'https://www.olivemagazine.gr/wp-content/uploads/2017/11/anoigma-psomi-fournos.jpg')
  const bakery2 = createShop(new Name('Sitos Bakery', 'Σίτος Φούρνος'), 'bakeries', 'https://www.dkinox-stavropoulos.gr/image/cache/catalog/product/ta-erga-mas/sitos-artopoieio-rafia-rafieres-provolis-proionton-glikon-kalamata-800x600.jpg')
  
  const shops = [market1, market2, market3, pharmacy, gyroplace, crepeplace, butchershop1, butchershop2, bakery1, bakery2]
  const res = await Shop.bulkSave(shops)
  return res.insertedIds
}

// goal: every shop should have at least 5 products for now
// feel free to clone products and changing only the shopId so the same product shows up at two shops
const createProducts = async (shopIds) => {
  const miniMarketId = shopIds[0]
  const grandMarketId = shopIds[1]
  const superMarketId = shopIds[2]
  const pharmacyId = shopIds[3]
  const gyroplaceId = shopIds[4]
  const crepeplaceId = shopIds[5]
  const butcherShop1Id = shopIds[6]
  const butcherShop2Id = shopIds[7]
  const bakery1Id = shopIds[8]
  const bakery2Id = shopIds[9]

  const orange = createProd(new Name('Orange', 'Πορτοκάλι'), miniMarketId, 0.7, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const orange2 = createProd(new Name('Orange', 'Πορτοκάλι'), grandMarketId, 0.7, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const orange3 = createProd(new Name('Orange', 'Πορτοκάλι'), superMarketId, 0.5, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/orange_d4p0kz.jpg')
  const kiwi = createProd(new Name('Kiwi', 'Ακτινίδιο'), grandMarketId, 1.2, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1658245479/kiwi_e75c3b.jpg')
  const salt = createProd(new Name('Salt - 500gr', 'Αλάτι - 500γρ'), grandMarketId, 2.0, 'https://res.cloudinary.com/djuuwduyx/image/upload/c_mpad,h_300,w_400/v1660566716/alati-sakoula-300-208x300_bgn6dq.png')
  const salt2 = createProd(new Name('Salt - 500gr', 'Αλάτι - 500γρ'), superMarketId, 1.8, 'https://res.cloudinary.com/djuuwduyx/image/upload/c_mpad,h_300,w_400/v1660566716/alati-sakoula-300-208x300_bgn6dq.png')
  const milk = createProd(new Name('Milk', 'Γάλα'), superMarketId, 2.7, 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872')
  const beer = createProd(new Name('Beer', 'Μπίρα'), superMarketId, 8.7, 'https://vinepair.com/wp-content/uploads/2016/05/no-label-beer.jpg')
  const toiletPaper = createProd(new Name('Toilet paper', 'Χαρτί υγείας'), superMarketId, 5.2, 'https://static.praxisdienst.com/out/pictures/generated/product/1/800_800_90/140434_green_hygiene_rolf_toilettenpapier_2_web_eco.jpg')
  const toothbrush = createProd(new Name('Toothbrush', 'Οδοντόβουρτσα'), superMarketId, 10.0, 'https://5.imimg.com/data5/JS/ZF/ZW/SELLER-86482978/deep-clean-tooth-brush-500x500.jpg')
  const vitaminC = createProd(new Name('Vitamin C - 1000mg', 'Βιταμινη C - 1000μγ'), pharmacyId, 8.0, 'https://res.cloudinary.com/djuuwduyx/image/upload/v1660036588/5df9a1287e60e99cc253bd768e7d2236_VITC1000_r2ilyq.jpg')
  const painkillers = createProd(new Name('Paracetamol - 500mg', 'Paracetamol - 500γρ'), pharmacyId, 8.0, 'https://norway.postsen.com/content/uploads/2022/08/01/29efa4eb4a.jpg')
  const gyros = createProd(new Name('Gyros', 'Γύρος'), gyroplaceId, 8.7, 'https://1900livadia.gr/polymesa/2021/02/pita-gyros-kotopoulo.jpg')
  const souvlaki = createProd(new Name('Souvlaki', 'Σουβλάκι'), gyroplaceId, 9.7, 'https://1900livadia.gr/polymesa/2021/02/pita-souvlaki-xeiropoiito.jpg')
  const friedPotatoes = createProd(new Name('Fried Potatoes', 'Πατατες Τηγανιτές'), gyroplaceId, 3.5, 'https://www.argiro.gr/wp-content/uploads/2018/07/patates-tiganites.jpg')
  const potatoPita = createProd(new Name('Potato-Pita', 'Πατατόπιτα'), gyroplaceId,5.5,'https://delivery.gyrovolia.gr/wp-content/uploads/2019/10/patatopita.jpg')
  const crepe1 = createProd(new Name('Chocolate crepe', 'Κρέπα σοκολάτας'), crepeplaceId, 5.7, 'https://thumbs.dreamstime.com/z/crepe-chocolate-13293909.jpg')
  const crepe2 = createProd(new Name('Chocolate crepe with banana and biscuits', 'Κρέπα σοκολάτας με μπανάνα και μπισκότο'), crepeplaceId, 9.7, 'https://everydaydishes.com/wp-content/uploads/2014/11/strawberry-crepes-everydaydishes_com-H-700x460.jpg')
  const steakBeef = createProd(new Name('Flat Iron steak beef', 'Μοσχαρίσια μπριζόλα'), butcherShop1Id, 7.0, 'https://www.siakos.gr/3180-thickbox_default/flat-iron-steak-beef-siakos.jpg')
  const steakBeef2 = createProd(new Name('Flat Iron steak beef', 'Μοσχαρίσια μπριζόλα'), butcherShop2Id, 7.0, 'https://www.siakos.gr/3180-thickbox_default/flat-iron-steak-beef-siakos.jpg')
  const ribEye = createProd(new Name('Rib eye steak', 'Rib eye μπριζόλα'), butcherShop2Id, 10.0, 'https://cdn.wikifarmer.com/market/el/images/thumbnails/380/330/detailed/74/rib-eye-steak-price-per-kilo.jpg.jpg?t=1654678686')
  const mince1 = createProd(new Name('Mince 1kg', 'Κιμάς 1κγ'),butcherShop1Id, 5.0, 'https://kcalkitchen.co.uk/wp-content/uploads/2019/12/HT00076.jpg')
  const mince2 = createProd(new Name('Mince 1kg', 'Κιμάς 1κγ'),butcherShop2Id, 5.0, 'https://kcalkitchen.co.uk/wp-content/uploads/2019/12/HT00076.jpg')
  const bread1 = createProd(new Name('Cereal loaf bread', 'Ψωμί απο δημητριακά'), bakery1Id, 10.0, 'https://frenchbakery.cafe/wp-content/uploads/2020/06/Cereal-Loaf-Bread-1.jpg')
  const bread2 = createProd(new Name('Country bread', 'Χωριάτικο ψωμί'), bakery2Id, 10.0, 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-05/french-style-country-loaf.jpg?itok=LVIWYfCO')
  const bread3 = createProd(new Name('Chocolate croissant', 'Κρουασάν σοκολάτας'), bakery2Id, 6.0, 'https://www.bakingbusiness.com/ext/resources/2020/4/Croissant.jpg?t=1588345875&width=1080')
  
  const products = [
    orange, 
    orange2, 
    orange3, 
    kiwi, 
    salt, 
    salt2, 
    milk, 
    beer, 
    toiletPaper,
    toothbrush, 
    vitaminC, 
    painkillers, 
    gyros, 
    souvlaki,
    friedPotatoes,
    potatoPita,
    crepe1, 
    crepe2, 
    steakBeef, 
    steakBeef2, 
    mince1,
    mince2,
    ribEye, 
    bread1, 
    bread2, 
    bread3
  ]
  const res = await Product.bulkSave(products)
}

// connect to database
const runApp = async () => {
  await connect()

  await deleteExistingData()
  
  // create the records
  await createUsers()
  const shopIds = await createShops()
  createProducts(shopIds)
}
runApp()


