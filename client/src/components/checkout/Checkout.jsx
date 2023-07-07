import img from "../../assets/coffe.png";
import imgM from "../../assets/Gemilai-CRM3605-2022pp.png";
import tank from "../../assets/1688144133605.png";
import handle from "../../assets/handle.jpg";
import zoompng from "../../assets/zoompng.png";
import { useState } from "react";

export default function Checkout() {
	const imageSrc = [img, imgM, tank, handle, zoompng];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [readMore, setReadMore] = useState(false);

	const goToNextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
	};

	const goToPreviousImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageSrc.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className="pt-[8%] grid grid-cols-5 max-md:flex max-md:flex-col ">
			<div className=" mr-[10%] text-right  col-span-3 max-md:order-2 max-md:mt-[35%] ">
				<div className=" border-b-2 pb-8 ">
					<h2 className=" font-bold text-4xl">CRM 3605 מכונת אספרסו </h2>
					<p className="pt-3 text-xl">
						הינה מכונה מקצועית בעלת מפרט טכני כמו של מכונות הקפה הקיימות בבתי
						הקפה, CRM 3605 מכונת ה{" "}
					</p>
					<p className="pt-2 text-xl">
						.המכונת הקפה המושלמת לבית שלכם ולבתי קפה במחיר מטורף
					</p>
					<div className={`${readMore ? "block" : "hidden"}`}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
							aliquid minima, temporibus necessitatibus placeat expedita
							nesciunt, aperiam, perspiciatis nihil iste ipsa eligendi rerum
							laboriosam ut quos? Debitis a nam illum?
						</p>
					</div>

					<button
						onClick={() => {
							setReadMore((prev) => !prev);
						}}
						className=" text-[#6d6def] pt-2">
						קרא עוד
					</button>
				</div>
			</div>
			<div className=" h-[480px] w-[500px] max-md:w-[100vw] col-span-1 relative">
				<button
					className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
					onClick={goToPreviousImage}>
					קודם
				</button>
				<img
					className={`h-full w-full object-cover max-md:w-[100%] ] ${
						currentIndex === 4 && ` object-fit`
					}`}
					src={imageSrc[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
				/>
				<button
					className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
					onClick={goToNextImage}>
					הבא
				</button>{" "}
				<div className="flex  w-[90px]  gap-5 mt-10 max-md:flex max-md:justify-between max-md:gap-0 max-md:w-full  ">
					{imageSrc.map((img, index) => {
						return (
							<img
								onClick={() => setCurrentIndex(index)}
								onMouseEnter={() => setCurrentIndex(index)}
								className="hover:border-2 cursor-pointer max-md:w-[60px]"
								key={index}
								src={img}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
