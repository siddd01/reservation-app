import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation =async (req,res,next)=>{
     const { firstName, lastName, email, date, time, phone } = req.body ;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
    }

    export const getAllUser=async (req,res)=>{
      try{
        // fetch all reservations
        const users= await Reservation.find({})
        res.status(200).json(users)
      }
      catch(error){
        res.status(400).json({
          message:"failed to fetch error"
        })
      }

    }


export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params; // ✅ DESTRUCTURE ID PROPERLY
    const updatedData = req.body;

    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.status(200).json(updatedReservation);
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({ message: "Fail to edit", error });
  }
};


export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Reservation.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    return res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return res.status(500).json({ message: "Failed to delete reservation", error: error.message });
  }
};

