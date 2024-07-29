import main from "../../assets/Gemilai-CRM3605-2022pp.png";
export default function Cart() {
	return (
		<>
			<div className="text-[black] flex flex-col">
				<div className="flex justify-end mt-5 text-right">
					{" "}
					<div className="flex flex-col justify-around">
						<div>
							{" "}
							<h3 className="text-2xl"> CRM CLASSIC מכונת</h3>
						</div>
						<div>
							<h3 className="text-xl">₪1499</h3>
						</div>
					</div>
					<div>
						{" "}
						<img className="w-20" src={main} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
