import Navbar from "../commons/Navbar";
import Herosection from "../components/Herosection";
import Whyus from "../components/Whyus";

function  LandingPage(){
    return (
        <>
        <Navbar/>
        <Herosection/>
        <Whyus/>
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg">
  <p className="text-gray-800">This is on a frosted glass-like background.</p>
</div>
        </>
        
    )
}

export default LandingPage;