import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section id="who_are_we" className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">

        {/* Left Text Column */}
        <div className="flex flex-col space-y-8 flex-1">
          {data[0].who_we_are.slice(0, 2).map((element) => (
            <div key={element.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-5xl font-light text-red-500">{element.number}</h2>
              <p className="text-lg font-medium text-gray-700">{element.title}</p>
            </div>
          ))}
        </div>

        {/* Center Image with Gradient Background */}
        <div className="relative flex-1 flex justify-center">
          <img
            src="center.svg"
            alt="Gradient background"
            className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 opacity-30"
          />
          <img
            src="whoweare.png"
            alt="Who we are"
            className="relative rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Right Text Column */}
        <div className="flex flex-col space-y-8 flex-1">
          {data[0].who_we_are.slice(2).map((element) => (
            <div key={element.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-5xl font-light text-red-500">{element.number}</h2>
              <p className="text-lg font-medium text-gray-700">{element.title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhoAreWe;
