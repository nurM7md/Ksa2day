import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/images/Screenshot 2025-04-17 135437.png";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaArrowLeft,
} from "react-icons/fa";

const slides = [
  {
    image: slide1,
    headline: "ارتفاع أسعار الذهب اليوم في السوق المحلي",
    source: "جريدة الوطن",
    link: "/news/الذهب",
  },
  {
    image: slide1,
    headline: "انطلاق الدوري المصري بمشاركة قوية",
    source: "جريدة الأهرام",
    link: "/news/الرياضة",
  },
  {
    image: slide1,
    headline: "الرئيس يلتقي بالمستثمرين لمناقشة التطوير",
    source: "جريدة اليوم السابع",
    link: "/news/السياسة",
  },
  {
    image: slide1,
    headline: "طفرة في قطاع العقارات رغم التحديات",
    source: "جريدة الشروق",
    link: "/news/الاقتصاد",
  },
  {
    image: slide1,
    headline: "حملة توعية صحية جديدة تبدأ اليوم",
    source: "جريدة المصري اليوم",
    link: "/news/الصحة",
  },
];

const SecondSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); 
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); 
      } else {
        setSlidesToShow(4); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); 
    }, 500); 
    return () => clearInterval(interval);
  }, [current]);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (current + i) % slides.length;
      visibleSlides.push({ ...slides[index], isActive: i === 2 }); 
    }
    return visibleSlides;
  };

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full py-12 px-4 flex justify-center items-center bg-white">
      <div className="max-w-5xl w-full relative">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/news/الكتاب")}
            className=" text-red-800 py-2 px-4 text-lg font-medium rounded-md border-2 border-red-800 hover:bg-red-800 hover:!text-yellow-300 transition-all duration-300"
          >
            <FaArrowLeft size={18} />
          </button>

          <button
            onClick={() => navigate("/news/الكتاب")}
            className="bg-red-800 text-white py-2 px-6 text-xl font-semibold rounded-md hover:bg-red-700 hover:!text-yellow-300  transition-all duration-300"
          >
            الكتاب
          </button>
        </div>

        <div className="flex justify-center items-center gap-6">
          {getVisibleSlides().map((slide, idx) => {
            return (
              <div
                key={idx}
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 ${
                  slide.isActive
                    ? "scale-105 opacity-100 w-96 sm:w-80 md:w-96 lg:w-96"
                    : "scale-95 opacity-60 w-72 sm:w-64 md:w-72 lg:w-80 hover:opacity-100 hover:scale-105"
                }`}
                onClick={() => navigate(slide.link)}
              >
                <div className="relative w-full h-56">
                  <img
                    src={slide.image}
                    alt={slide.headline}
                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500"
                  />
                  <div className="absolute bottom-0 w-full bg-red-900/70 text-center py-3 px-2">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {slide.headline}
                    </h3>
                    <p className="text-sm text-white">{slide.source}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:!text-yellow-300 shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleLeft size={15} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:!text-yellow-300 shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default SecondSlider;
