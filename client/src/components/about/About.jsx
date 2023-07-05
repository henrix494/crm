import side from "../../assets/side.jpg";
export default function About() {
	return (
		<div className=" bg-[#1E1E1E] px-10 pb-10">
			<div className="flex justify-around pt-20 border-2 pb-10   border-[#F58422] max-md:flex-col max-md:pt-10 max-md:border-none ">
				<div>
					<img className="h-[500px]  max-md:h-[50%]" src={side} alt="" />
				</div>

				<div className=" text-right text-[white] ">
					<p className="text-[white] text-4xl max-md:mt-10">על המכונה שלנו</p>
					<div className="mt-10 text-xl flex flex-col gap-6 text-[#F58422]">
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
