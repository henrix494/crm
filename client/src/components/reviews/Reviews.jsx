import svg from "../../assets/left-quote-quote-svgrepo-com.svg";
import "./rev.css";
import { useEffect, useRef, useState } from "react";

export default function Reviews() {
	const cardRefs = useRef([]);
	const [isCardVisible, setIsCardVisible] = useState([]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1, // Adjust threshold value as per your requirements
		};

		const callBackFunc = (entries) => {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry;
				const index = cardRefs.current.indexOf(target);
				setIsCardVisible((prevVisible) => {
					const newVisible = [...prevVisible];
					newVisible[index] = isIntersecting;
					return newVisible;
				});
			});
		};
		const observer = new IntersectionObserver(callBackFunc, options);
		cardRefs.current.forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="flex gap-20 justify-center pt-10 pb-5 text-right max-md:flex-col items-center ">
			<div
				ref={(ref) => cardRefs.current.push(ref)}
				className={`  ${
					isCardVisible[0] === true
						? " translate-x-0 opacity-100 "
						: "translate-x-[-100%] max-md:translate-x-[-50%] opacity-0"
				}  h-[300px] style w-[280px] bg-[#FFF5D6] p-8 text-[white] rounded-md shadow `}>
				<div>
					<img className="w-[50px]" src={svg} alt="" />
				</div>
				<div>
					<h3 className=" font-bold text-[#666253] mt-1">מכונה מדהימה</h3>
				</div>
				<div className=" ">
					{" "}
					<article className=" text-[#BAB39E] mt-4">
						אני מאוד מרוצה ממכונת הקפה, היא מאוד קלה לשימוש ומספקת תוצאות והמחיר
						מאוד זול!
					</article>
				</div>
				<div>
					<h4 className="text-[#666253] mt-4 font-extrabold text-xl">
						מוריס קלארק
					</h4>
				</div>
			</div>
			<div
				ref={(ref) => cardRefs.current.push(ref)}
				className={` ${
					isCardVisible[1] === true
						? " translate-x-0 opacity-100 "
						: "translate-x-[-110%] max-md:translate-x-[-50%] opacity-0"
				}  h-[300px] style w-[280px] md:max-lg:hidden bg-[#FFF5D6] p-8 text-[white] rounded-md shadow `}>
				<div>
					<img className="w-[50px]" src={svg} alt="" />
				</div>
				<div>
					<h3 className=" font-bold text-[#666253] mt-1">הופתעתי לטובה</h3>
				</div>
				<div>
					{" "}
					<article className=" text-[#BAB39E] mt-4">
						קניתי את המכונה לעסק , המכונת קפה הזאת חסכה לי הרבה כסף והלקוחות
						יצאו מאוד מרוצים
					</article>
				</div>
				<div>
					<h4 className="text-[#666253] mt-4 font-extrabold text-xl">
						משה וייסרמן
					</h4>
				</div>
			</div>
			<div
				ref={(ref) => cardRefs.current.push(ref)}
				className={` ${
					isCardVisible[2] === true
						? " translate-x-0 opacity-100 "
						: "translate-x-[-110%] max-md:translate-x-[-50%] opacity-0"
				}  h-[300px] style w-[280px] md:max-lg:hidden bg-[#FFF5D6] p-8 text-[white] rounded-md shadow `}>
				<div>
					<img className="w-[50px]" src={svg} alt="" />
				</div>
				<div>
					<h3 className=" font-bold text-[#666253] mt-1">כחובבן קפה</h3>
				</div>
				<div>
					{" "}
					<article className=" text-[#BAB39E] mt-4">
						כמישו שרק התחיל להתעסק במכונות ידניות המכונה הזאת הייתה מושלמת
						בישבילי. מאוד קלה לתיפעול
					</article>
				</div>
				<div>
					<h4 className="text-[#666253] mt-4 font-extrabold text-xl">
						בוריס קגנמן
					</h4>
				</div>
			</div>
			<div
				ref={(ref) => cardRefs.current.push(ref)}
				className={` ${
					isCardVisible[3] === true
						? " translate-x-0 opacity-100 "
						: "translate-x-[-110%] max-md:translate-x-[-50%] opacity-0"
				}  h-[300px] style w-[280px] bg-[#FFF5D6] p-8 text-[white] rounded-md shadow `}>
				<div>
					<img className="w-[50px]" src={svg} alt="" />
				</div>
				<div>
					<h3 className=" font-bold text-[#666253] mt-1">לעצמי ולי</h3>
				</div>
				<div>
					{" "}
					<article className=" text-[#BAB39E] mt-4">
						קניתי את המכונה והתלבטתי ביגלל המחיר. אני כבר משתמש במכונה הזאת יותר
						משנה והקפה עדיין מאוד טעים
					</article>
				</div>
				<div>
					<h4 className="text-[#666253] mt-4 font-extrabold text-xl">
						ישראל בוחבוט
					</h4>
				</div>
			</div>
		</div>
	);
}
