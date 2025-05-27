
const HeroSection = () => {
  return (
   <>

    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Delicious
          </h1>

          <div className="flex items-center gap-6">
            <img src="/hero1.png" alt="Delicious Food" className="w-48 h-auto rounded-lg shadow-lg" />
            
            <div>
              <h2 className="text-4xl font-bold text-yellow-600 leading-tight">
                Food <br /> Dishes
              </h2>
              <img src="/threelines.svg" alt="Decorative lines" className="mt-4" />
              <img src="/logo.svg" alt="Logo" className="mt-6 w-24" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center">
          <img src="/hero2.png" alt="More Delicious Dishes" className="mx-auto w-full max-w-md rounded-lg shadow-md" />
          <h2 className="mt-6 text-3xl font-semibold text-gray-700">Dishes</h2>
        </div>
      </div>
    </section>
   </>
  );
};

export default HeroSection;
