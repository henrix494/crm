import Hero from "./components/hero/Hero";
import Equ from "./components/equ/Equ";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import YoutubeEmbed from "./components/vid/Vid";
import Contact from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import Bill from "./components/bill/Bill";
import Terms from "./components/terms/Terms";
import whatup from "../src/assets/whatsapp.png";
function App() {
  return (
    <>
      <div className=" fixed top-0 right-0   h-[30px] bg-[#15120c] z-[5000000] ">
        <Navbar />
      </div>
      <div className=" fixed bottom-4 left-4 z-[652626516516516] cursor-pointer animate-bounce hover:opacity-60 transition-all">
        {" "}
        <a href="https://wa.me/0544717377" target="__blank">
          <div>
            <img className="w-[50px]" src={whatup} alt="" />
          </div>
        </a>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Equ />
              <About />
              <Reviews />
              <YoutubeEmbed />
              <Contact />
            </>
          }
        />

        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
