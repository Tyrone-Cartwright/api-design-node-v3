import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
// creates a router
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)
// CRUD
app.get('/', (req, res, next) => {
  // res.send({ data: 1 })
  next()
})

app.get('/', (req, res) => {
  res.send({ data: 2 })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('app running on port 3000')
  })
}
