import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Component/About"
import HeroSection from "./Component/HeroSection"
import Qualities from "./Component/Qualities"
import Reservation from "./Component/Reservation"
import Team from "./Component/Team"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Success from "./Pages/Success"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/success" element={<Success/>}/>
        <Route path="/heroSection" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualities" element={<Qualities />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reservation" element={<Reservation />} />


    </Routes>

    </BrowserRouter>
  )
}

export default App
