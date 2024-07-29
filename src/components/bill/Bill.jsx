import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../../features/ItemCountReducer";
import { decrement } from "../../features/ItemCountReducer";
import { useEffect } from "react";
import { incrementTwo } from "../../features/ItemCountReducer";

import { decrementTwo } from "../../features/ItemCountReducer";

import { secondItemPriceDown } from "../../features/ItemCountReducer";
import { secondItemPriceUp } from "../../features/ItemCountReducer";
import { addPrice } from "../../features/ItemCountReducer";
import { minusPrice } from "../../features/ItemCountReducer";
import Buyerinfo from "./Buyerinfo";
import Pay from "./Pay";
export default function Bill() {
	const dispatch = useDispatch();

	const IMGValue = useSelector((state) => state.img.value);
	const title = useSelector((state) => state.img.title);
	const price = useSelector((state) => state.counter.price);
	const priceTwo = useSelector((state) => state.counter.secoundPrice);

	const counterValue = useSelector((state) => state.counter.value);
	const counterValueTwo = useSelector((state) => state.counter.valueTwo);

	const des = useSelector((state) => state.img.des);
	const addNumber = () => {
		if (
			IMGValue === "/src/assets/doble.png" ||
			IMGValue === "/assets/doble-cec3014e.png"
		) {
			dispatch(secondItemPriceUp());
			dispatch(incrementTwo());
		} else {
			dispatch(increment());
			dispatch(addPrice());
		}
		console.log(IMGValue);
		console.log(priceTwo);
	};

	useEffect(() => {
		scrollTo(0, 0);
	}, []);

	const minusNumber = () => {
		if (
			IMGValue === "/src/assets/doble.png" ||
			IMGValue === "/assets/doble-cec3014e.png"
		) {
			dispatch(secondItemPriceDown());
			dispatch(decrementTwo());
		} else {
			dispatch(decrement());
			dispatch(minusPrice());
		}
	};
	return (
		<div className=" max-lg:mt-[15%] mt-10 lg:flex lg:justify-center lg:items-center lg:h-[90vh]    ">
			<div className=" flex justify-center items-center gap-20 max-lg:flex-col-reverse">
				<div className="h-[600px] w-[400px] max-lg:w-[100vw] max-md:h-[200px]   ">
					<div className=" flex justify-center items-center bg-[#ac7e3d] w-full h-[70px] rounded-t-3xl text-3xl text-[white]">
						<h2>תשלום</h2>
					</div>
					<Pay />
				</div>
				<div className="h-[600px] w-[400px] max-lg:w-[100vw] max-md:h-max ">
					<div className=" bg-[#ac7e3d] w-full h-[70px] rounded-t-3xl flex justify-center items-center text-3xl text-[white]">
						פרטי המזמין
					</div>
					<Buyerinfo />
				</div>
				<div className="h-[600px] max-lg:h-full w-[400px]  max-lg:w-[100vw]  ">
					<div className=" bg-[#ac7e3d] w-full h-[70px] rounded-t-3xl flex justify-center items-center text-3xl  text-[white] ">
						<h2>עגלת הקניות שלי</h2>
					</div>
					<div className=" flex flex-row-reverse text-right pt-4 items-center gap-2 border-2 pb-8">
						<div
							className={`${
								IMGValue === "/src/assets/doble.png" ? "" : "w-[200px]"
							}  `}>
							<img src={IMGValue} alt="" />
						</div>
						<div className="">
							{" "}
							<div className=" ">
								{" "}
								<h2 className="text-xl font-bold">{title}</h2>
							</div>
							<div>{des}</div>
							<div className="mt-2">
								<div className="  flex  justify-end items-center gap-2 ">
									<div>
										<button
											onClick={() => addNumber()}
											className=" text-xl rounded-full border-2 px-2 py-2">
											+
										</button>
									</div>
									<div>
										<p>
											{IMGValue === "/src/assets/doble.png" ||
											IMGValue === "/assets/doble-cec3014e.png"
												? counterValueTwo
												: counterValue}
										</p>
									</div>
									<div>
										{IMGValue === "/src/assets/doble.png" ||
										IMGValue === "/assets/doble-cec3014e.png" ? (
											<button
												onClick={() => minusNumber()}
												disabled={counterValueTwo === 1}
												className=" text-xl rounded-full border-2 px-2 py-2">
												&#8722;
											</button>
										) : (
											<button
												onClick={() => minusNumber()}
												disabled={counterValue === 1}
												className=" text-xl rounded-full border-2 px-2 py-2">
												&#8722;
											</button>
										)}
									</div>
									<p className="text-lg">
										₪
										{IMGValue === "/src/assets/doble.png" ||
										IMGValue === "/assets/doble-cec3014e.png"
											? priceTwo.toLocaleString()
											: price.toLocaleString()}{" "}
									</p>{" "}
								</div>
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
