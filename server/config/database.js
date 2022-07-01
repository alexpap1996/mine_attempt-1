import mongoose from 'mongoose'

const connect = async () => {
  try {
    const uri = `mongodb+srv://alexpap:paok_gasp1234@cluster0.61xvxwf.mongodb.net/?retryWrites=true&w=majority`
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