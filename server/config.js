require('dotenv').config()

const options = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  mongo: process.env.MONGO,
  mongoatlas: process.env.MONGOATLAS
}

export default options
