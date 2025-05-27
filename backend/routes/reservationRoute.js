import express from 'express'
import { deleteReservation, getAllUser, sendReservation, updateReservation } from '../controller/reservation.js'

const router = express.Router()

router.post("/send", sendReservation)
router.get("/",getAllUser)
router.put("/edit:id",updateReservation)
router.delete('/delete/:id', deleteReservation);




export default router
