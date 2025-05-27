import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md bg-white rounded-2xl shadow-lg p-8">
        <img
          src="/notFound.svg"
          alt="Not Found"
          className="mx-auto w-40 mb-6"
        />
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Looks like you're lost. We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full transition duration-300"
        >
          Back to Home <HiOutlineArrowNarrowRight className="text-lg" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
