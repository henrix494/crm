import { useSelector } from "react-redux";
import { setError } from "../../features/formSlice";
import { useDispatch } from "react-redux";
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
	const Paddle = window.Paddle;
	const dispatch = useDispatch();
	const postHandler = async () => {
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
			}),
		});
		if (data.status === 401) {
			const resData = await data.json();
			dispatch(setError(resData));
		}
		if (data.status === 200) {
			Paddle.Checkout.open({
				product: 55186,
			});
		}
	};
	return (
		<div className="flex justify-center items-center mt-10">
			{" "}
			<button onClick={postHandler} className="button-container-2  ">
				<span className="mas"> קנה עכשיו</span>
				<button type="button" name="Hover">
					קנה עכשיו
				</button>
			</button>
		</div>
	);
}
