import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
       <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h2>
          <p className="text-lg text-gray-600 mb-6">
            The only thing we're serious about is food.
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            possimus optio adipisci dolores impedit illum iusto perferendis,
            laudantium quod accusamus consequuntur consectetur, tempore nulla
            error iure reiciendis dolorem assumenda. Necessitatibus fugit
            asperiores totam rem esse exercitationem iusto ipsum qui dolore ex,
            accusantium repellat mollitia repellendus.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-md shadow-md"
          >
            Explore Menu <HiOutlineArrowRight size={20} />
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/about.png"
            alt="About"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
    </>
 
  );
};

export default About;
