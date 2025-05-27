import { data } from "../restApi.json";
import Navbar from "./Navbar";
const Team = () => {
  return (
    <>
    <Navbar/>
       <section className="team-section py-16 bg-[#f9f9f9]" id="team">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR TEAM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate team behind our flavors. We believe in creating exceptional dishes through teamwork, dedication, and creativity.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data[0].team.map((member) => (
            <div
              className="bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={member.id}
            >
              <img
                src={member.image}
                alt={member.name || "Team Member"}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Team
