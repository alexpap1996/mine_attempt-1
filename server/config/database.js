import mongoose from 'mongoose'

const connect = async () => {
  try {
    const uri = `mongodb://0.0.0.0:27017/myShopDB`
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`Mongo connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connect