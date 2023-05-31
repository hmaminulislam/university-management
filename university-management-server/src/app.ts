import express, { Application, urlencoded } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
