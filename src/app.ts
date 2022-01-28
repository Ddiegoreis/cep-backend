import express from 'express'
import cors from 'cors'
import 'express-async-errors'

import { routes } from './routes'
import { errorManager } from './cep/middlewares/errorManager'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errorManager)

export { app }