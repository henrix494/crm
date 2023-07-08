import imgM from "../../assets/Gemilai-CRM3605-2022pp.png";
import tank from "../../assets/1688144133605.png";
import handle from "../../assets/handle.jpg";
import brush from "../../assets/brush.jpg";

import "./equ.css";
export default function Equ() {
	return (
		<div className="bg-[#F4EDE4] pb-10 ">
			<h2 className=" text-center text-5xl text-[black] pt-8 font-bold">
				מה בא בפנים
			</h2>
			<div className="flex gap-[70px] justify-center mt-16 max-md:flex-col max-md:items-center">
				<div className="flex gap-10 max-xl:flex-col">
					<div className=" bg-[#D0CFD3] border-2 h-[300px] border-[#F58422] rounded-md w-[300px] relative first ">
						<img src={imgM} alt="תמונה של מכונת קפה" />
					</div>
					<div className="  border-2 border-[#F58422] rounded-md h-[300px] w-[300px] relative secound ">
						<img
							className="h-[100%] w-[100%]"
							src={tank}
							alt="תמונה של טנק מים"
						/>
					</div>
				</div>
				<div className="flex gap-10 max-xl:flex-col">
					<div className=" border-2 h-[300px] w-[300px] relative third">
						{" "}
						<img
							className="h-[100%] w-[100%]"
							src={handle}
							alt="תמונה של ידית לחץ של קפה"
						/>
					</div>
					<div className=" border-2 h-[300px] w-[300px] relative brush">
						{" "}
						<img
							className="h-[100%] w-[100%]"
							src={brush}
							alt="תמונה של נקיון"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
