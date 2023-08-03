import { useState } from "react";
import "./coss.css";
import anotherBean from "../../assets/anotherbean.png";
import bean from "../../assets/bean.png";
import { Link } from "react-router-dom";
export default function Contact() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const fullDate = `${day}/${month}/${year}`;
	const [error, setError] = useState("");
	const [upload, setUpLoad] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [isLoading, setIsLoading] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();

		const postData = async () => {
			setIsLoading(true);

			const data = await fetch(
				`https://crm-git-main-henrix494.vercel.app/info`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name,
						phone: phone,
						date: fullDate,
					}),
				}
			);
			if (data.status === 401) {
				setIsLoading(false);

				const resData = await data.json();
				setError(resData);
				setUpLoad("");
			} else {
				setIsLoading(false);

				const resData = await data.json();
				setUpLoad(resData);
				setError("");
				setName("");
				setPhone("");
			}
		};

		postData();
	};
	return (
		<div className=" relative h-max  bg-[#000000] mt-[12rem] text-[white] pb-20">
			<div className=" text-black absolute w-[80%] max-lg:w-[90vw] h-[200px]  top-[-5rem] left-1/2 translate-x-[-50%] rounded-3xl bg-[#FFF5D6]">
				<div className=" relative">
					<div>
						<img
							src={bean}
							className=" absolute w-[200px] max-lg:w-[100px] rotate-[60deg] top-5 left-[10%] opacity-70 "
							alt=""
						/>{" "}
						<img
							src={anotherBean}
							className=" absolute w-[200px] rotate-[20deg] max-lg:w-[100px] top-0 right-[10%] opacity-70"
							alt=""
						/>
					</div>
					<h4
						id="info"
						className=" text-center mt-10 text-3xl font-bold max-lg:text-2xl">
						קנה עכשיו בהנחה חד פעמית של 20%
					</h4>{" "}
					<div className="   flex justify-center items-center mt-5 ">
						{" "}
						<Link
							target="__blank"
							to={"/Checkout"}
							className="button-container-2  ">
							<span className="mas"> קנה עכשיו</span>
							<button type="button" name="Hover">
								קנה עכשיו
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex h-full pt-[9%] flex-col items-center max-lg:pt-[15%]">
				<div>
					<h3 className="text-7xl font-bold max-lg:text-[2rem] max-lg:mt-[30%]">
						צור קשר לקבלת מידע
					</h3>
				</div>
				<div className="mt-10">
					<form
						action=""
						className="flex flex-col gap-5 items-center"
						onSubmit={handleSubmit}>
						{" "}
						<div className=" border-b-[white] border-b-2">
							<input
								className="focus:outline-none rounded-lg text-right w-[429px] max-lg:w-[256px] focus:border-none active:border-none border-b-[white]  bg-black  h-[30px] px-5"
								type="text"
								id="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
							<label htmlFor="name" className=" text-3xl font-bold">
								{" "}
								:שם
							</label>
						</div>
						<div className="border-b-[white] border-b-2">
							{" "}
							<input
								className=" rounded-lg text-right w-[400px] bg-black focus:outline-none h-[30px] px-5  max-lg:w-[230px] "
								type="text"
								id="phone"
								name="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<label htmlFor="phone" className=" text-3xl font-bold">
								{" "}
								:מספר
							</label>
						</div>
						<div className=" self-center">
							{" "}
							<div className=" text-center  text-[red] font-bold mb-4 text-2xl max-lg:mr-0 ">
								{error}
							</div>
							<div className=" text-center  text-[green] font-bold mb-4 text-2xl max-lg:mr-0">
								{upload}
							</div>
							<div className="flex justify-center   max-lg:mr-0">
								{" "}
								{isLoading && (
									<div className="lds-ellipsis white ">
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
								)}
							</div>
							<button
								target="__blank"
								className="button-container-2  w-[400px] max-lg:w-[100vw] mt-[1.5rem] ">
								<span className="mas"> שלח</span>
								<button type="button" name="Hover">
									שלח
								</button>
							</button>
						</div>
					</form>
				</div>
				<h2 className="pt-5">
					כל הזכויות שמורות כפית דרך מצדה 120 באר שבע &#169;{" "}
				</h2>
			</div>
		</div>
	);
}
