import express from 'express'
import { login, logout, register } from '../controller/AuthController.js'

const AuthRouter=express.Router()

AuthRouter.post('/register',register)

AuthRouter.post('/login',login)

AuthRouter.post("/logout",logout)


export default AuthRouter ;