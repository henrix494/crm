import Hero from "./components/hero/Hero";
import Equ from "./components/equ/Equ";
import About from "./components/about/About";
import Reviews from "./components/reviews/Reviews";
import YoutubeEmbed from "./components/vid/Vid";
import Contact from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
function App() {
	return (
		<>
			{/* <div className=" fixed top-0 w-full  h-[70px] bg-[white] z-[5000000]">
				<Navbar />
			</div> */}

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
			</Routes>
		</>
	);
}

export default App;
