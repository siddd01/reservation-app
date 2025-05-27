import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <img src="/sandwich.png" alt="success" className="mx-auto w-32 mb-4" />
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Reservation Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Redirecting to Home in <span className="font-semibold">{countdown}</span> seconds...
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full transition duration-300"
        >
          Back to Home
          <HiOutlineArrowNarrowRight className="text-lg" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
