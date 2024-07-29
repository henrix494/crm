import side from "../../assets/side.jpg";
import bean from "../../assets/bean.png";
import anotherBean from "../../assets/anotherbean.png";
import "./about.css";
export default function About() {
	return (
		<div className=" bg-[#F4EDE4] px-10 pb-10 relative  flex justify-around     ">
			<div className="   flex md:max-lg:flex-col gap-10 pt-[40]  pb-10  max-md:flex-col max-md:pt-10 max-md:border-none ">
				<div className="flex justify-center ">
					<img
						className=" w-[100%] md:max-lg:w-auto lg:h-[500px]   z-[3]  "
						src={side}
						alt=""
					/>
				</div>
				<img
					className="w-[140px] h-[140px] rotate-80 absolute left-1/2 z-[2] max-md:opacity-40"
					src={anotherBean}
					alt=""
				/>
				<img
					className="w-[180px] h-[180px] rotate-[8deg] absolute top-1/2 right-[45%] z-[2]  max-md:opacity-40"
					src={bean}
					alt=""
				/>
				<img
					className="w-[120px] h-[120px] rotate-12 absolute top-[3%] left-[20%] z-[2]  max-md:opacity-40"
					src={bean}
					alt=""
				/>
				<img
					className="w-[120px] h-[120px] rotate-[-25deg] absolute bottom-[3%] left-[10%] z-[2]  max-md:opacity-40"
					src={bean}
					alt=""
				/>
				<img
					className="w-[140px] h-[140px] rotate-[deg] absolute bottom-[0%] left-[40%] z-[2]  max-md:opacity-40"
					src={bean}
					alt=""
				/>
				<div className=" text-right  text-[white] z-[3] font-bold">
					<p className="text-[#000] text-5xl max-md:mt-10 ">על המכונה שלנו</p>
					<div className="mt-10 text-2xl flex flex-col gap-6 text-[#8a642b]">
						{" "}
						<p>מידות :257*285*315 מ"מ</p>
						<p>
							יבוא מאיטליה עם מדחסים בטכנולוגית אולקה אשר מגיעים ל 15 בר לחץ
						</p>{" "}
						<p>
							טנק מים יכול להכיל עד 1.7 ליטר מים אשר אפשר להסיר בכל זמן רצוי
						</p>
						<p>פונקציה של מים חמים בכל עת </p>
						<p>מקציף חלב חזק מאוד אשר יכול להסתובב 360 מעלות</p>
						<p>כיבוי אוטומטי לאחר חוסר שימוש למשך 15 דקות</p>
						<p>מגש חימום כוסות אשר נימצא מעל המכונת קפה</p>
					</div>
				</div>
			</div>
		</div>
	);
}
