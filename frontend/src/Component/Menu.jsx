import { data } from '../restApi.json'
const Menu = () => {
  return (
    <>

       <section className="menu py-16 bg-white" id="menu">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">POPULAR DISHES</h2>
          <p className="text-gray-600">
            Discover our most loved dishes curated by chefs and adored by foodies. Savor the taste of excellence!
          </p>
        </div>

        {/* Dish Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data[0].dishes.map((dish) => (
            <div
              key={dish.id}
              className="card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{dish.title}</h3>
                <button className="px-4 py-1 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-dark transition">
                  {dish.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Menu
