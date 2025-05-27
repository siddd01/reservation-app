import { data } from '../restApi.json';

const Qualities = () => {
  return (<>

    <section id="qualities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Qualities
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data[0].ourQualities.map((element) => (
            <div
              key={element.id}
              className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={element.image}
                alt={element.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {element.title}
              </h3>
              <p className="text-gray-600">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </>
  );
};

export default Qualities;
