import Select from "react-select";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setName,
	setLastName,
	setPhone,
	setCity,
	setStreet,
	setnumOfTheBuilding,
	setnumOfTheAprt,
	setNotes,
	setStaretPhone,
} from "../../features/formSlice";
import "./cos.css";
export default function Buyerinfo() {
	const name = useRef(null);
	const lastNameRef = useRef(null);
	const Sphone = useRef(null);

	const phone = useRef(null);
	const city = useRef(null);
	const street = useRef(null);
	const numOfTheBuilding = useRef(null);
	const numOfTheAprt = useRef(null);
	const notes = useRef(null);
	const errorData = useSelector((state) => state.form.error);
	const loadingData = useSelector((state) => state.form.isLoading);
	const dispatch = useDispatch();
	const numbers = [
		"02",
		"03",
		"04",
		"08",
		"09",
		"050",
		"051",
		"052",
		"053",
		"054",
		"055",
		"056",
		"057",
		"058",
		"059",
		"072",
		"073",
		"074",
		"076",
		"077",
	];
	const options = numbers.map((number) => {
		return { value: number, label: number };
	});

	return (
		<div className="">
			<form action=" ">
				<div className="p-3 max-lg:p-0 flex flex-col gap-2 justify-center     ">
					{" "}
					<div className=" text-[black] flex text-right gap-2 mt-4 justify-center   ">
						{" "}
						<div>
							{" "}
							<div>
								{" "}
								<label htmlFor="name">שם משפחה</label>
							</div>
							<input
								ref={lastNameRef}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="name"
								name="name"
								onChange={() => {
									dispatch(setLastName(lastNameRef.current.value));
								}}
							/>
						</div>
						<div>
							{" "}
							<div>
								{" "}
								<label htmlFor="last_name">שם פרטי</label>
							</div>
							<input
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="last_name"
								name="last_name"
								ref={name}
								onChange={() => {
									dispatch(setName(name.current.value));
								}}
							/>
						</div>
					</div>
					<div className="flex justify-center items-center mt-6">
						<div className="flex-1 max-lg:flex-grow-0">
							{" "}
							<Select
								ref={Sphone}
								options={options}
								className=" rounded-full max-lg:w-[150px]"
								onChange={(choise) => {
									dispatch(setStaretPhone(choise.value));
								}}
							/>
						</div>

						<div className="px-1 text-xl">- </div>

						<div>
							<input
								ref={phone}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								placeholder="טלפון"
								type="text"
								onChange={() => dispatch(setPhone(phone.current.value))}
							/>
						</div>
					</div>
					<div className=" text-[black] flex text-right gap-2 mt-2 justify-center   ">
						{" "}
						<div>
							{" "}
							<div>
								<label htmlFor="street">רחוב</label>
							</div>
							<input
								ref={street}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="street"
								name="street"
								onChange={() => {
									dispatch(setStreet(street.current.value));
								}}
							/>
						</div>
						<div>
							{" "}
							<div>
								{" "}
								<label htmlFor="city">עיר</label>
							</div>
							<input
								ref={city}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="city"
								name="city"
								onChange={() => {
									dispatch(setCity(city.current.value));
								}}
							/>
						</div>
					</div>{" "}
					<div className=" text-[black] flex text-right gap-2 mt-2  justify-center  ">
						{" "}
						<div className="">
							{" "}
							<div>
								{" "}
								<label htmlFor="numofaprt">מספר בית</label>
							</div>
							<input
								ref={numOfTheAprt}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="numofaprt"
								name="numofaprt"
								onChange={() => {
									dispatch(setnumOfTheAprt(numOfTheAprt.current.value));
								}}
							/>
						</div>
						<div>
							{" "}
							<div>
								{" "}
								<label htmlFor="numOfbulding">מספר בניין</label>
							</div>
							<input
								ref={numOfTheBuilding}
								className=" border-b-2 border-black focus:outline-none  text-right max-lg:w-[150px]"
								type="text"
								id="numOfbulding"
								name="numOfbulding"
								onChange={() => {
									dispatch(setnumOfTheBuilding(numOfTheBuilding.current.value));
								}}
							/>
						</div>
					</div>
					<div>
						<label className=" float-right" htmlFor="notes">
							הערות
						</label>
						<textarea
							ref={notes}
							name="notes"
							id="notes"
							cols="10"
							rows="4"
							className="border-2  w-full rounded-lg text-right"
							onChange={() => {
								dispatch(setNotes(notes.current.value));
							}}></textarea>
						<div className="text-[red] text-center text-3xl">{errorData}</div>
					</div>
					{loadingData === true && (
						<div className="flex justify-center   max-lg:mr-0 ">
							{" "}
							<div className="lds-ellipsis ">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					)}
				</div>
			</form>
		</div>
	);
}
