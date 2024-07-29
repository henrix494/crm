import { useState } from "react";
import img from "../../assets/coffe.png";
import "./hero.css";
import { Link } from "react-router-dom";
import anotherBean from "../../assets/anotherbean.png";
import bean from "../../assets/bean.png";
export default function Hero() {
	const [isBarHover, setIsBarHover] = useState(false);
	const [isMilkHover, setIsMilkHover] = useState(false);
	const [isTankHover, setIsTankHover] = useState(false);
	const [isHandleHover, setIsHandleHover] = useState(false);

	return (
		<div
			className={`h-[108vh] bg-[#D6D6E3]   flex justify-center relative bg-[url('../../assets/BG/coffee-beans-with-props-making-coffee.jpg')]  `}>
			{" "}
			<div className="text-[black] pt-20 flex flex-col items-center justify-center z-30">
				<div className=" text-center">
					{" "}
					<div>
						{" "}
						<h1 className=" text-8xl max-md:text-4xl font-bold test-ani">
							כפית מכונת קפה
						</h1>
						<p className=" text-3xl pt-5 text-center font-bold ops-ani ">
							{" "}
							<span className=" line-through pr-4	text-xl font-normal">
								₪ 2,000{" "}
							</span>{" "}
							₪רק ב - 1,499
						</p>
					</div>{" "}
				</div>
				<Link target="__blank" to={"/Checkout"} className="">
					<button className="button-container-2 mt-6  ">
						<span className="mas"> קנה עכשיו</span>
						<button type="button" name="Hover">
							קנה עכשיו
						</button>
					</button>
				</Link>
				<div>
					<div className=" z-50  m] ">
						{" "}
						<div className=" max-md:mt-10 relative md:max-lg:mt-20 z-[20]  ">
							<div className="flex justify-center z-[20]">
								{" "}
								<img className=" res     " src={img} alt="image" />{" "}
							</div>
							<div className="    ">
								{" "}
								<button
									className=" resHandle rounded-full w-5 h-5 absolute 2xl:max-[1600px]:right-[68%]   top-[47%] right-[80%] test z-20 "
									onMouseEnter={() => setIsHandleHover(true)}
									onMouseLeave={() => setIsHandleHover(false)}></button>
								<div
									className={` ${
										isHandleHover && "z-[5000000000000]"
									}  z-[2] absolute translate-x-[0%] px-1 translate-y-[-280%] bg-black text-white w-[240px] h-[100px] rounded-lg text-center transition-[15s] ${
										isHandleHover ? " timeFrame " : " timeFrameR"
									}`}>
									<div className="">
										<p className="text-center pt-5 text-xl ">
											ידית חליטה בעלת פיה כפולה{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="  absolute resbar   top-[20%] right-[70%] ">
								{" "}
								<button
									className=" rounded-full w-7 h-5    test z-20 "
									onMouseEnter={() => setIsBarHover(true)}
									onMouseLeave={() => setIsBarHover(false)}></button>
								<div
									className={`  absolute  px-1  bg-black text-white w-[240px]  h-max pb-6  rounded-lg text-center transition-[15s] ${
										isBarHover ? " timeFrame " : " timeFrameR"
									}`}>
									<div className="">
										<p className="text-center pt-5 text-xl z-50">
											מדד לחץ אשר מגיע עד 15 בר לחץ{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="  absolute top-[25%] right-[28%] resSwitch   ">
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
							<div className=" absolute top-[50%] right-[15%] resTank   ">
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
			</div>
			<div className="z-[1]">
				<img
					src={bean}
					className=" z-[1] absolute w-[200px] max-lg:w-[100px] rotate-[10deg] bottom-20 left-[23%] max-lg:opacity-60 max-md:opacity-40  md:test"
					alt=""
				/>{" "}
				<img
					src={anotherBean}
					className="z-[1]  absolute w-[200px] rotate-[20deg] max-lg:w-[100px] top-0 right-[10%] max-lg:opacity-70  max-md:opacity-40 md:test"
					alt=""
				/>{" "}
				<img
					src={anotherBean}
					className=" absolute  w-[200px] max-lg:w-[100px] rotate-[30deg] top-[30%] left-[10%] max-lg:opacity-70  max-md:opacity-40 md:test"
					alt=""
				/>{" "}
				<img
					src={anotherBean}
					className=" absolute  w-[200px] rotate-[160deg] max-lg:w-[100px] bottom-[50%] right-[26%] max-lg:opacity-70  max-md:opacity-40 md:test"
					alt=""
				/>{" "}
				<img
					src={bean}
					className="z-[1]  absolute w-[200px] max-lg:w-[100px] rotate-[60deg] top-5 left-[10%] max-lg:opacity-70  max-md:opacity-40 md:test"
					alt=""
				/>{" "}
				<img
					src={bean}
					className="z-[1]  absolute w-[200px] rotate-[20deg] max-lg:w-[100px] bottom-[29%] right-[5%] max-lg:opacity-70  max-md:opacity-40 md:test"
					alt=""
				/>
				<img
					src={bean}
					className="z-[1] absolute w-[200px] rotate-[0deg] max-lg:w-[100px] bottom-[0%] right-[10%] max-lg:opacity-70   max-md:opacity-40"
					alt=""
				/>
			</div>
		</div>
	);
}
