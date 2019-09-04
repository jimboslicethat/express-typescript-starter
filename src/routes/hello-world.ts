import * as express from 'express'

const router = express.Router()

router.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

export default router
