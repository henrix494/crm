import img from "../../assets/coffe.png";
import imgM from "../../assets/Gemilai-CRM3605-2022pp.png";
import tank from "../../assets/1688144133605.png";
import handle from "../../assets/handle.jpg";
import zoompng from "../../assets/zoompng.png";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";
import isracard from "../../assets/isracard.jpg";
import mainC from "../../assets/Gemilai-CRM3605-2022pp.png";
import paypal from "../../assets/paypal.png";
import grinder from "../../assets/burr.jpg";

import { useState } from "react";

export default function Checkout() {
	const imageSrc = [img, imgM, tank, handle, zoompng];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [readMore, setReadMore] = useState(false);
	const [numbere, setNumber] = useState(1499);
	const [items, setItems] = useState(1);
	const [dis, setDis] = useState(2000);

	const goToNextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
	};

	const goToPreviousImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageSrc.length - 1 : prevIndex - 1
		);
	};

	const addNumber = () => {
		setItems((prev) => {
			return prev + 1;
		});
		setNumber((prev) => prev + 1499);
		setDis((prev) => prev + 2000);
	};

	const minusNumber = () => {
		setItems((prev) => {
			return prev - 1;
		});
		setNumber((prev) => prev - 1499);
		setDis((prev) => prev - 2000);
	};

	return (
		<div className="">
			<div className="pt-[8%] grid grid-cols-5 max-lg:flex max-lg:flex-col   ">
				<div className=" mr-[10%] text-right  col-span-3 max-lg:order-2 max-lg:mt-[35%] max-lg:w-full   ">
					<div className=" border-b-2 pb-8  ">
						<h2 className=" font-bold text-4xl max-md:pr-4">
							BRL 3605 מכונת אספרסו{" "}
						</h2>
						<p className="pt-3 text-xl max-md:pr-4">
							הינה מכונה מקצועית בעלת מפרט טכני כמו של מכונות הקפה הקיימות בבתי
							הקפה, BRL 3605 מכונת ה{" "}
						</p>
						<p className="pt-2 text-xl max-md:pr-4">
							.המכונת הקפה המושלמת לבית שלכם ולבתי קפה במחיר מטורף
						</p>
						<div className={`${readMore ? "block" : "hidden"} max-md:pr-4`}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
								aliquid minima, temporibus necessitatibus placeat expedita
								nesciunt, aperiam, perspiciatis nihil iste ipsa eligendi rerum
								laboriosam ut quos? Debitis a nam illum?
							</p>
						</div>
						{!readMore ? (
							<button
								onClick={() => {
									setReadMore((prev) => !prev);
								}}
								className=" text-[#6d6def] pt-2 max-md:mr-4">
								קרא עוד
							</button>
						) : (
							<button
								onClick={() => {
									setReadMore((prev) => !prev);
								}}
								className=" text-[#6d6def] pt-2 max-lg:mr-4">
								סגור
							</button>
						)}
					</div>
					<div className=" text-right mt-10 max-md:pr-4 max-lg:flex  max-lg:flex-col">
						<div className="flex justify-end items-center  max-lg:flex-col ">
							<div className="lg:mr-[17vw] max-lg:pb-5">
								<div>
									{" "}
									<p className=" underline font-bold text-2xl">:פרטים נוספים</p>
								</div>
								<ul className="  flex flex-col gap-1  	">
									<li className="font-bold">
										<span className=" font-normal">15054</span> :מקט &#8226;{" "}
									</li>
									<li className="font-bold">
										אחריות:<span className=" font-normal"> חודשים 12</span>{" "}
										&#8226;
									</li>
									<li className="font-bold">
										זמן אספקה:<span className=" font-normal"> חודשים 12</span>{" "}
										&#8226;
									</li>
									<li className="font-bold">
										מחיר משלוח:<span className=" font-normal"> ללא עלות</span>{" "}
										&#8226;
									</li>
								</ul>
							</div>

							<h3 className=" font-bold text-5xl ">
								<span className=" font-normal text-xl line-through text-[#797676]	">
									₪{dis.toLocaleString()}
								</span>{" "}
								₪{numbere.toLocaleString()}
							</h3>
						</div>
						<div className="flex justify-between mt-10 text-3xl gap-2 items-center   pb-28 max-lg:flex-col">
							<div className=" border-t-2 w-full self-start text-left mr-20 border-b-2 h-[48px] px-10">
								<div className="flex items-center max-lg:justify-center gap-5">
									<div>
										<img className="w-12" src={visa} alt="" />
									</div>
									<div>
										<img className="w-12" src={masterCard} alt="" />
									</div>
									<div>
										<img src={isracard} className="w-12" alt="" />
									</div>
									<div>
										<img src={paypal} className="w-12" alt="" />
									</div>
								</div>
							</div>
							<div className="flex items-center gap-2 max-lg:mt-[2rem] ">
								{" "}
								<div className="button-container-2 mr-8  ">
									<span className="mas"> קנה עכשיו</span>
									<button type="button" name="Hover">
										קנה עכשיו
									</button>
								</div>
								<div>
									<button
										onClick={addNumber}
										className=" text-xl rounded-full border-2 px-2 py-2">
										+
									</button>
								</div>
								<div>
									<p>{items}</p>
								</div>
								<div>
									<button
										onClick={minusNumber}
										disabled={items === 1}
										className=" text-xl rounded-full border-2 px-2 py-2">
										&#8722;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" h-[480px] w-[500px] max-lg:w-[100vw] col-span-1 relative flex flex-col  ">
					<button
						className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md"
						onClick={goToPreviousImage}>
						קודם
					</button>
					<img
						className={`h-full w-full object-cover max-lg:w-[100%]  ${
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
					<div className="flex  w-[90px]  gap-5 mt-10 max-lg:flex max-lg:justify-between max-md:gap-0 max-md:w-full   ">
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
			<div className=" border-t-2 mt-20 max-md:mt-7 text-right  ">
				<div className="  max-lg:mr-0   mr-[10vw]">
					<h3 className="  text-4xl font-bold mt-8 max-lg:text-2xl max-lg:text-center">
						חבילה מומלצת לחוויה המושלמת{" "}
					</h3>
				</div>
				<div className="flex items-center justify-around max-lg:flex-col ">
					{" "}
					<div className="max-lg:order-2 self-start max-lg:self-center mt-20 max-lg:mt-10 text-center flex justify-center flex-col items-center    ">
						<h4 className="text-5xl font-bold">מחיר: ₪1,699</h4>
						<h5 className="text-3xl"></h5>
						<div className="button-container-2  mt-10 ">
							<span className="mas"> קנה עכשיו</span>
							<button type="button" name="Hover">
								קנה עכשיו
							</button>
						</div>
					</div>{" "}
					<div className="flex justify-end max-lg:justify-center  mt-10 max-lg:order-1">
						<img
							className="w-[20%] border-2 max-lg:w-[30%]"
							src={mainC}
							alt=""
						/>
						<div className=" max-lg:mx-5 mx-10 flex items-center font-extrabold text-9xl max-lg:text-5xl ">
							<p>+</p>
						</div>{" "}
						<img
							className="w-[20%]  max-lg:w-[30%] border-2    "
							src={grinder}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
