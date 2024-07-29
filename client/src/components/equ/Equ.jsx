import imgM from "../../assets/Gemilai-CRM3605-2022pp.png";
import tank from "../../assets/1688144133605.png";
import handle from "../../assets/handle.jpg";
import brush from "../../assets/brush.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./equ.css";
//test sa
export default function Equ() {
  return (
    <div className="bg-[#F4EDE4] pb-10 h-[110vh] max-lg:h-min overflow-hidden">
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="self-center flex justify-around pt-10 max-lg:flex-col">
            <div>
              <img
                className="w-[80vh] rounded-xl"
                src={imgM}
                alt="Coffee machine BRL 3605"
              />
            </div>
            <div className="pt-10 flex flex-col gap-5 max-lg:gap-2 text-right">
              <h4 className="text-4xl font-bold max-lg:text-2xl text-right max-lg:text-center">
                BRL 3605 מכונת הקפה שלנו
              </h4>
              <h4 className="text-4xl text-right max-lg:text-xl max-lg:text-center">
                משלוח עם שליח עד הבית בחינם
              </h4>
              <h4 className="text-4xl text-right max-lg:text-xl max-lg:text-center">
                ₪קנו עכשיו רק ב 1,499
              </h4>
              <Link
                target="__blank"
                to={"/Checkout"}
                className="self-end max-lg:self-center"
              >
                <button className="button-container-2 mt-6 max-lg:mt-2 relative">
                  <span className="mas left-0 top-0">קנה עכשיו</span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="self-center flex justify-around pt-10 max-lg:flex-col items-center">
            <div className="rounded-xl">
              <img
                className="w-[80vh] rounded-xl"
                src={tank}
                alt="Water tank"
              />
            </div>
            <div>
              <h4 className="text-4xl font-bold max-lg:text-2xl text-right max-lg:text-center max-lg:pt-10">
                טנק מים אשר מכיל עד 1.7 ליטר מים
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="self-center flex justify-around pt-10 max-lg:flex-col items-center">
            <div>
              <img
                className="w-[80vh] rounded-xl"
                src={handle}
                alt="Coffee machine handle"
              />
            </div>
            <div>
              <h4 className="text-4xl font-bold max-lg:text-2xl text-right max-lg:text-center max-lg:pt-10">
                ידית חליטה איכותית להכנת קפה מושלם
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="self-center flex justify-around pt-10 max-lg:flex-col items-center">
            <div>
              <img
                className="w-[80vh] rounded-xl"
                src={brush}
                alt="Coffee machine cleaning brush"
              />
            </div>
            <div>
              <h4 className="text-4xl font-bold max-lg:text-2xl text-right max-lg:text-center max-lg:pt-10">
                מברשת איכותית לניקיון מכונת הקפה
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
