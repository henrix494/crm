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

function App() {
	return (
		<>
			<div className=" fixed top-0 w-full  h-[35px] bg-[#655032] z-[5000000] ">
				<Navbar />
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
			</Routes>
		</>
	);
}

export default App;
