import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Reservation = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [date,setDate]=useState("")
    const [time,setTime]=useState("")
    const [phone,setPhone]=useState(0)

    const navigate=useNavigate()
    const handleReservation = async(e)=>{
        e.preventDefault()
      try {
      const { data } = await axios.post(
       "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
  (
    <section id="reservation" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img src="/reservation.png" alt="Reservation" className="w-full rounded-xl shadow-md" />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Make a Reservation</h2>
          <p className="text-sm text-gray-600 mb-6">For further questions, please call</p>

          <form onSubmit={(e) => { handleReservation(e) }} className="space-y-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Date and Time */}
            <div className="flex gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Email and Phone */}
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-3 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-600 transition duration-200"
            >
              Reserve Now <HiOutlineArrowNarrowRight className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Reservation
