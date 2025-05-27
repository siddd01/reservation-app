import HeroSection from "../Component/HeroSection";
import Menu from "../Component/Menu";
import Qualities from "../Component/Qualities";
import WhoAreWe from "../Component/WhoAreWe";

const Home = () => {
  return (
    <div className="p-16">

    <HeroSection />
 
      <hr className="flex-grow border-t-2 border-red-400" />
<Menu/>

  <hr className="flex-grow border-t-2 border-red-400" />


    <Qualities />

  <hr className="flex-grow border-t-2 border-red-400" />


<WhoAreWe/>
    </div>
  );
};

export default Home;
