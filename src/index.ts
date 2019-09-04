import * as express from 'express'

const app = express()

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
