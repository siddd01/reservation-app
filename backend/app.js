import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { dbConnection } from "./database/dbconnection.js"
import reservationRoute from './routes/reservationRoute.js'

const app=express()

//to accesss the .env
dotenv.config({path : "./config/config.env"})
app.use(
    cors({
         origin:[process.env.FRONTEND_URL], //path of frontend where you want to connect your backend,
    methods:['GET','PUT','DELETE','POST'],
    credentials:true
    })
)

app.use(express.json()) // string to json obj


app.use(express.urlencoded({extended:true}))

app.use("/api/v1/users",reservationRoute)

app.use("/api/v1/reservation",reservationRoute)

dbConnection()
export default app