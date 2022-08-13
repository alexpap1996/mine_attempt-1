import mongoose from 'mongoose'

// TODO:
// for now this connects to online db,
// make it work with local mongo db
const connect = async () => {
  try {
    //const uri = 
    const uri = `mongodb+srv://alexpap:paok_gasp1234@cluster0.61xvxwf.mongodb.net/ecommerce?retryWrites=true&w=majority`
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