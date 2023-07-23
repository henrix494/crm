import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";

export default function Radio() {
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
					<input type="radio" name="visa" id="visa" className="mr-2" />
					<label htmlFor="visa">תשלום באמצעות אשראי</label>
				</div>
				<div className="flex items-center">
					{" "}
					<img src={paypal} className="w-12 mr-5" alt="" />
					<input type="radio" name="visa" id="paypal" className="mr-2" />
					<label htmlFor="paypal">תשלום באמצעות פייפאל</label>
				</div>
			</div>
		</form>
	);
}
