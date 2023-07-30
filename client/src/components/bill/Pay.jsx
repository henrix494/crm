import { useSelector } from "react-redux";
import { setError, setIsLoading } from "../../features/formSlice";
import { useDispatch } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import Radio from "./Radio";
export default function Pay() {
	const name = useSelector((state) => state.form.name);
	const lastName = useSelector((state) => state.form.lastName);
	const phone = useSelector((state) => state.form.phone);
	const Fphone = useSelector((state) => state.form.sPhone);
	const city = useSelector((state) => state.form.ciy);
	const street = useSelector((state) => state.form.street);
	const numOfTheBuilding = useSelector((state) => state.form.numOfTheBuilding);
	const numOfTheAprt = useSelector((state) => state.form.numOfTheAprt);
	const notes = useSelector((state) => state.form.notes);
	const currentItem = useSelector((state) => state.img.value);
	const amountOne = useSelector((state) => state.counter.value);
	const amountTwo = useSelector((state) => state.counter.valueTwo);
	const typeOfPay = useSelector((state) => state.radio.value);

	const dispatch = useDispatch();
	const postHandler = async () => {
		dispatch(setIsLoading(true));

		const data = await fetch("https://crm-ten-iota.vercel.app/postShip", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				lastName: lastName,
				phone: Fphone + phone,
				city: city,
				street: street,
				numOfTheBuilding: numOfTheBuilding,
				numOfTheAprt: numOfTheAprt,
				note: notes,
				typeOfPay: typeOfPay,
			}),
		});

		if (data.status === 401) {
			const resData = await data.json();
			dispatch(setError(resData));
			dispatch(setIsLoading(false));
		}
		if (data.status === 200) {
			dispatch(setIsLoading(false));
			dispatch(setError(""));
			if (!typeOfPay) {
				dispatch(setError("נא בחר אמצעי תשלום"));
			} else {
				if (typeOfPay === "visa") {
					const zCredit = await fetch(
						"https://crm-ten-iota.vercel.app/cheakout",
						{
							method: "POST",
							headers: { "Content-Type": "application/json " },
							body: JSON.stringify({
								phone: Fphone + phone,
								currentItem: currentItem,
								amountTwo: amountTwo,
								amountOne: amountOne,
								name: name,
							}),
						}
					);
					const final = await zCredit.json();
					window.open(final.sessionUrl.Data.SessionUrl);
				}
				if (typeOfPay === "paypal") {
					console.log("paypal");
				}
			}
		}
	};
	return (
		<div className="flex flex-col justify-center items-center pt-10  ">
			{" "}
			<Radio />
			<button onClick={postHandler} className="button-container-2  ">
				<span className="mas"> מעבר לתשלום</span>
				<button type="button" name="Hover">
					מעבר לתשלום
				</button>
			</button>
			<p className=" text-right text-xs mt-20 ">
				ביטול עסקה בהתאם לתקנות הגנת הצרכן (ביטול עסקה), התשע"א-2010 וחוק הגנת
				הצרכן, התשמ"א-1981
			</p>
		</div>
	);
}
