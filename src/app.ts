import express, { Application, NextFunction, Request, Response, urlencoded } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.router'
import ApiError from './errors/ApiError'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Application
app.use('/api/v1/users/', userRouter)



// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'Ore baba')
//   // next('Ore Baba error')
// })

// global error handler
// app.use()

export default app
