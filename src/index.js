import express from 'express'
import config from './utils/config'

const app = express()

const { port } = config

app.get('/', (req, res) => {
  res.send({ msg: 'Hello There' })
})

app.listen(config.port)
