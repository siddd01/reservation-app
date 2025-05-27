import express from 'express'
import { getAllUser, sendReservation } from '../controller/reservation.js'

const router = express.Router()

router.post("/send", sendReservation)
router.get("/",getAllUser)

export default router
