import express, { Application, urlencoded } from 'express'
import cors from 'cors';
import userRouter from './app/modules/users/user.router';
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Application
app.use("/api/v1/users/", userRouter)

// testing
app.get('/', async (req, res) => {
  res.send('Server working Successfull')
})

export default app
