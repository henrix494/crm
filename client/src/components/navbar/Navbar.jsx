import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import info from "../../assets/info.svg";
export default function Navbar() {
	const [indexx, setIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const tests = [
		"משלוח חינם עד הבית",
		"הנחה חד פעמית של 20%",
		"חויית קפה מיוחדת",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % tests.length);
				setIsAnimating(false);
			}, 1000);
		}, 4000);

		return () => clearInterval(timer); // Cleanup the timer on unmount
	}, [indexx, tests.length]);

	return (
		<div className="relative z-[9000] w-screen flex justify-between items-center h-full text-[white] text-2xl  ">
			<div className="pl-10 max-lg:pl-2 relative  ">
				{" "}
				{window.location.pathname === "/Checkout" ? (
					<Link to={"/#info"}>
						<img
							className="w-[20px] max-lg:w-6 cursor-pointer"
							src={info}
							alt=""
						/>
					</Link>
				) : (
					<a href="#info">
						{" "}
						<img
							className="w-[20px] max-lg:w-6 cursor-pointer"
							src={info}
							alt=""
						/>
					</a>
				)}
			</div>

			<div className="flex justify-center overflow-hidden">
				{tests.map((text, i) => {
					const translateX = indexx === i ? "0px" : "-100%";
					const opacity = indexx === i ? "1" : "0";
					const transitionDelay = isAnimating ? `${i * 0.3}s` : "0s";

					return (
						<p
							key={i}
							className={` text-xl absolute top-1/2 transition-all duration-1000 ease-in-out translate-y-[-50%] translate-x-${translateX} opacity-${opacity}`}
							style={{ transitionDelay }}>
							{text}
						</p>
					);
				})}
			</div>
			<div className="pr-10 max-lg:pr-2 ">
				<Link to="/">
					<img className="w-[20px] max-lg:w-6" src={home} alt="" />
				</Link>
			</div>
		</div>
	);
}
