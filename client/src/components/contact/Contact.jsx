import { useState } from "react";

export default function Contact() {
	const [error, setError] = useState("");
	const [upload, setUpLoad] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const postData = async () => {
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
					}),
				}
			);
			if (data.status === 401) {
				const resData = await data.json();
				setError(resData);
				setUpLoad("");
			} else {
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
		<div className="  relative h-[600px] max-md:flex-col items-center  flex justify-around bg-[url('./assets/fotter.png')] bg-cover bg-center  after:contents-[``] after:absolute after:bg-black after:w-[100%] after:h-[100%] after:opacity-60 max-md:after:opacity-60 after:z-40 z-30">
			<div className=" border-2 border-[white] flex-[0.7] z-[500] "></div>
			<div className="z-[500] text-white flex-1  text-center flex flex-col items-center justify-center">
				<h4 className="pt-5  text-4xl max-md:text-2xl">
					אל תפספסו את המכונה ששיגעה את אסיה
				</h4>
				<h4 className="pt-5  text-4xl max-md:text-2xl">
					השאירו מספר פאלפון לקבלת יותר פרטים
				</h4>
				<form className="text-[black] mt-10  w-full " onSubmit={handleSubmit}>
					<div className="mb-5 ">
						{" "}
						<input
							type="text"
							id="name"
							name="name"
							className="w-[32.4%] max-md:w-[57%] rounded-lg mr-2"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<label htmlFor="name" className="text-right text-[white] text-3xl">
							:שם
						</label>
					</div>
					<div>
						{" "}
						<input
							type="number"
							id="phone"
							name="phone"
							className="w-[29%] rounded-lg mr-2 max-md:w-[50%]"
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							value={phone}
						/>
						<label htmlFor="name" className="text-right text-[white] text-3xl ">
							:מספר
						</label>
					</div>
					<div className="text-[red] text-2xl">{error}</div>
					<div className="text-[green] text-2xl">{upload}</div>
					<div className="button-container-2 flex m-auto  mt-[8%] mb-[2%]">
						<span className="mas"> שלח</span>
						<button type="submit" name="Hover">
							שלח{" "}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
