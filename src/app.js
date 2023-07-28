import express from 'express'
import UserRouter from './routers/user.router.js'

const app = express()
app.use(express.json())
const userRouter = new UserRouter()
app.use('/users', userRouter.getRouter())

app.listen(8080, () => console.log('Server Up!'))