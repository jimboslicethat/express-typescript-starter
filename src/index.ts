import * as dotenv from 'dotenv'
import * as express from 'express'

import routes from './routes'

dotenv.config()
const app = express()

const { PORT, API_BASE_URL } = process.env

app.use(API_BASE_URL, routes)

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})
