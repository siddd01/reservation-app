import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Qualities from "./Component/Qualities";
import Reservation from "./Component/Reservation";
import Team from "./Component/Team";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import OurReservation from "./Pages/OurReservation";
import Success from "./Pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroSection" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualities" element={<Qualities />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/ourReservation" element={<OurReservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
