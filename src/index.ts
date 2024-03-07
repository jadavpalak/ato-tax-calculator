import express, { Express } from 'express'
import dotenv from 'dotenv'
import { askForInput } from './taxInput'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.listen(port, () => {})

askForInput()





