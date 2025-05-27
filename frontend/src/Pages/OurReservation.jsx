import axios from "axios";
import { useEffect, useState } from "react";

const OurReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/users");
        setReservations(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reservations");
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-600">{error}</div>;
  if (reservations.length === 0)
    return <div className="text-center p-6">No reservations found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        All Reservations
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {reservations.map((reservation) => (
          <div
            key={reservation._id}
            className="bg-white shadow-xl rounded-xl p-6 space-y-6"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-4 border-b pb-4">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {reservation.firstName} {reservation.lastName}
                </h2>
                <p className="text-gray-500">Reservation Holder</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex justify-between border-b pb-4 text-gray-600">
              <div>
                <h3 className="font-semibold">Date</h3>
                <p>{reservation.date}</p>
              </div>
              <div>
                <h3 className="font-semibold">Time</h3>
                <p>{reservation.time}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-gray-700">
              <h3 className="font-semibold mb-1">Contact Information</h3>
              <p>
                <span className="font-medium">Email:</span> {reservation.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {reservation.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurReservation;
