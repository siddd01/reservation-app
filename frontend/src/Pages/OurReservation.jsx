import axios from "axios";
import { useEffect, useState } from "react";

const OurReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    email: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    const fetchReservations = async (id) => {
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
  const handleEditClick = (reservation) => {
    setEditingId(reservation._id);
    setEditData(reservation);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave  = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/reservation/edit${editingId}`,
        editData,
        { withCredentials: true }
      );
      setReservations((prev) =>
        prev.map((r) => (r._id === editingId ? data : r))
      );
      setEditingId(null);
      console.log("updated", data);
    } catch (error) {
      console.log("update fail", error);
    }
  };
const handleDelete = async (reservation) => {
  console.log("Deleting reservation:", reservation);
  console.log("Reservation id:", reservation._id);
  if (!reservation._id) {
    alert("Invalid reservation ID");
    return;
  }
  try {
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/reservation/delete/${reservation._id}`,
      { withCredentials: true }
    );
    alert(data.message);
    setReservations((prev) => prev.filter((r) => r._id !== reservation._id));
  } catch (error) {
    console.log(error);
  }
};


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
            {editingId === reservation._id ? (
              <>
                <input
                  name="firstName"
                  value={editData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="lastName"
                  value={editData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="date"
                  value={editData.date}
                  onChange={handleInputChange}
                  type="date"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="time"
                  value={editData.time}
                  onChange={handleInputChange}
                  type="time"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border p-2 rounded w-full"
                />
                <input
                  name="phone"
                  value={editData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="border p-2 rounded w-full"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
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

                <div className="text-gray-700">
                  <h3 className="font-semibold mb-1">Contact Information</h3>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {reservation.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {reservation.phone}
                  </p>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => handleEditClick(reservation)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button onClick={()=>{
                  handleDelete(reservation)}}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurReservation;
