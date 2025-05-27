import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate=useNavigate()

  return (
    <>
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-yellow-600">
        Food App
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {data[0].navbarLinks.map((item) => (
          <div
            key={item.id}
            onClick={()=>navigate(`/${item.link}`)}
            className="text-gray-700 hover:text-yellow-600 transition-colors"
          >
            {item.title}
          </div>
        ))}
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
          OUR MENU
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setShow(!show)}
          className="text-2xl text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          {data[0].navbarLinks.map((item) => (
            <Link
              key={item.id}
              className="text-gray-700 hover:text-yellow-600 transition-colors w-full"
              onClick={() => {setShow(false)
                navigate(`/${item.link}`)
              }} // close menu on click
            >
              {item.title}
            </Link>
          ))}
          <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
            OUR MENU
          </button>
        </div>
      )}
    </nav>

    </>
    
  );
};

export default Navbar;
