import * as dotenv from 'dotenv'
import * as express from 'express'

import routes from './routes'
import loggerMiddleware from './middleware/logger'

dotenv.config()
const app = express()

const { PORT, API_BASE_URL } = process.env

app.use(API_BASE_URL, routes)
app.use(loggerMiddleware)

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})
