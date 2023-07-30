import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import { useDispatch } from "react-redux";
import { setOption } from "../../features/radioSlice";
export default function Radio() {
	const dispath = useDispatch();

	return (
		<form className=" self-end pb-10">
			{" "}
			<div className="flex flex-col justify-center items-end">
				<div className="flex items-center">
					{" "}
					<div className="flex gap-4 pr-5">
						<img src={visa} className="w-12 " alt="" />
						<img src={masterCard} className="w-12 " alt="" />
					</div>
					<input
						onChange={(e) => {
							dispath(setOption(e.target.value));
						}}
						type="radio"
						name="visa"
						id="visa"
						value={"visa"}
						className="mr-2"
					/>
					<label htmlFor="visa">תשלום באמצעות אשראי</label>
				</div>
			</div>
		</form>
	);
}
