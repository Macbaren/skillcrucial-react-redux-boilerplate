import mongoose from 'mongoose'
import config from '../config'

const { mongoatlas } = config
// const { mongo } = config

mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection failed ${err}`)
})

export default (mongoUrl = mongoatlas) => {
  mongoose.connect(mongoUrl, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return mongoose.connection
}
