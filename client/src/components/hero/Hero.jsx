import { useState } from "react";
import img from "../../assets/coffe.png";
import "./hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
	const [isBarHover, setIsBarHover] = useState(false);
	const [isMilkHover, setIsMilkHover] = useState(false);
	const [isTankHover, setIsTankHover] = useState(false);
	const [isHandleHover, setIsHandleHover] = useState(false);

	return (
		<div className="   relative  flex md:justify-around max-md:flex-col max-md:justify-center   bg-[url('./assets/henrix_a_coffee_bean_explosion_commercial_high_quality_2e757a3d-c5a3-49d5-b5d1-0ca72d3a6dcf.png')] bg-cover bg-no-repeat bg-center after:contents-[``] after:absolute after:bg-black after:w-[100%] after:h-[100%] after:opacity-80 max-md:after:opacity-60 after:z-40 z-30 ">
			<div className="  max-md:order-2 z-50 text-[white]  py-[4%] self-start flex flex-col  max-md:items-center max-md:text-center">
				<div className=" border-b-2 border-[#F58422] pb-4">
					<h3 className="text-4xl font-bold">החוויה האולטימטיבית של הקפה</h3>
					<p className=" text-[#F58422] font-bold text-3xl mt-4">
						מכונת האספרסו החדשה- אמיצות, טעם ופשטות
					</p>
				</div>
				<div>
					{" "}
					<div className="mt-5">
						<p className="text-xl mb-2">
							{" "}
							. תתחילו את היום שלכם בקפה מושלם עם מכונת האספרסו המקצועית שלנו
						</p>{" "}
						<p className="text-xl mb-2">
							{" "}
							אתם תוכלו ליהנות מחווית טעם יוצאת דופן בכל בוקר
						</p>
						<p className="text-xl mb-2">
							מכונת הקפה מאוד קלה ונוחה לשימוש. תוכלו להכין קפה מיקצועי וטעים
							תוך כמה שניות
						</p>
						<p className=" text-3xl">
							{" "}
							<span className=" line-through pr-4	text-xl"> 2000 </span> רק ב -
							1499 ש"ח
						</p>
					</div>
				</div>
				<Link target="__blank" to={"/Checkout"} className="button-container-2">
					<span className="mas"> קנה עכשיו</span>
					<button type="button" name="Hover">
						קנה עכשיו
					</button>
				</Link>
			</div>
			<div className=" z-50  ">
				{" "}
				<div className=" relative">
					<img className=" " src={img} alt="image" />{" "}
					<div className="    ">
						{" "}
						<button
							className=" rounded-full w-5 h-5 absolute   top-[47%] right-[80%] test z-20 "
							onMouseEnter={() => setIsHandleHover(true)}
							onMouseLeave={() => setIsHandleHover(false)}></button>
						<div
							className={` absolute translate-x-[0%] px-1 translate-y-[-280%] bg-black text-white w-[240px] h-[100px] rounded-lg text-center transition-[15s] ${
								isHandleHover ? " timeFrame " : " timeFrameR"
							}`}>
							<div className="">
								<p className="text-center pt-5 text-xl">
									ידית חליטה בעלת פיה כפולה{" "}
								</p>
							</div>
						</div>
					</div>
					<div className=" absolute   top-[20%] right-[70%] ">
						{" "}
						<button
							className=" rounded-full w-7 h-5    test z-20 "
							onMouseEnter={() => setIsBarHover(true)}
							onMouseLeave={() => setIsBarHover(false)}></button>
						<div
							className={` absolute  px-1  bg-black text-white w-[240px]  h-max pb-6  rounded-lg text-center transition-[15s] ${
								isBarHover ? " timeFrame " : " timeFrameR"
							}`}>
							<div className="">
								<p className="text-center pt-5 text-xl z-50">
									מדד לחץ אשר מגיע עד 15 בר לחץ{" "}
								</p>
							</div>
						</div>
					</div>
					<div className=" absolute top-[25%] right-[28%]   ">
						{" "}
						<button
							className=" rounded-full w-7 h-5    test z-20 "
							onMouseEnter={() => setIsMilkHover(true)}
							onMouseLeave={() => setIsMilkHover(false)}></button>
						<div
							className={` absolute px-1 right-0 bg-black text-white max-sm:w-[150px] max-md:right-[0] w-[240px] h-max pb-6 rounded-lg text-center transition-[15s] ${
								isMilkHover ? " timeFrame " : " timeFrameR"
							}`}>
							<div className="">
								<p className="text-center pt-5 text-xl">
									מתג שליטה על לחץ מקציף החלב
								</p>
							</div>
						</div>
					</div>
					<div className=" absolute top-[50%] right-[15%]   ">
						{" "}
						<button
							className=" rounded-full w-7 h-5  test z-20 "
							onMouseEnter={() => setIsTankHover(true)}
							onMouseLeave={() => setIsTankHover(false)}></button>
						<div
							className={` absolute right-0  bg-black text-white max-md:right-[20%] w-[240px] h-[100px] rounded-lg text-center transition-[15s] ${
								isTankHover ? " timeFrame " : " timeFrameR"
							}`}>
							<div className="">
								<p className="text-center pt-5 text-xl">
									טנק מים נישלף שיכול להכיל עד 1.7 ליטר מים
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
