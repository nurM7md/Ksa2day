import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/images/Screenshot 2025-04-17 135437.png";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  { title: "أخبار متنوعة", image: slide1, link: "/news/اخبار متنوعة" },
  { title: "محلية", image: slide1, link: "/news/محلية" },
  { title: "رياضة", image: slide1, link: "/news/رياضة" },
  { title: "سياسة", image: slide1, link: "/news/سياسة" },
  { title: "اقتصاد", image: slide1, link: "/news/اقتصاد" },
];

const FirstSlider = ({ title, link }) => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // عدد الكروت اللي تظهر
  const [hoveredIndex, setHoveredIndex] = useState(null); // المتغير اللي بيمثل الكارت النشط
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4); // العرض الكامل ٤ كروت على الشاشات الكبيرة
      }
    };

    handleResize(); // تحديد حجم الكروت بناءً على حجم الشاشة
    window.addEventListener("resize", handleResize); // تحديث عند تغيير حجم الشاشة
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex((prevIndex) => (prevIndex + 1) % slides.length); // تغيير الكارت النشط كل نصف ثانية
    }, 500); // 500ms = نصف ثانية

    return () => clearInterval(interval); // تنظيف الinterval عند فك التثبيت
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); // تغيير السلايدر كل ٤ ثواني
    return () => clearInterval(interval);
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (current + i) % slides.length;
      visible.push({ ...slides[index] });
    }
    return visible;
  };

  return (
    <div className="w-full py-12 px-4 flex justify-center items-center bg-white">
      <div className="max-w-6xl w-full relative">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(link)}
            className="text-red-800 py-2 px-4 text-lg font-medium rounded-md border-2 border-red-800 hover:bg-red-800 hover:!text-yellow-300 transition-all duration-300"
          >
            <FaArrowLeft size={18} />
          </button>

          <button
            onClick={() => navigate(link)}
            className="bg-red-800 text-white py-2 px-6 text-xl font-semibold rounded-md hover:bg-red-700 hover:!text-yellow-300 transition-all duration-300"
          >
            {title}
          </button>
        </div>

        <div className="flex justify-center items-center gap-6 overflow-hidden">
          {getVisibleSlides().map((slide, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-700 ease-in-out cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                (hoveredIndex === idx || current === idx) ? "scale-105 opacity-100" : "scale-95 opacity-70"
              } w-60 sm:w-64 md:w-72 lg:w-80`}
              onClick={() => navigate(slide.link)}
              onMouseEnter={() => setHoveredIndex(idx)} // عند الوقوف على الكارت
              onMouseLeave={() => setHoveredIndex(null)} // العودة إلى الحالة الأصلية عند مغادرة الماوس
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-48 md:h-64 object-cover transition-all duration-700 ease-in-out ${
                  (hoveredIndex === idx || current === idx) ? "brightness-100" : "brightness-75"
                }`}
              />
              <div className="absolute bottom-0 bg-red-900/70 text-white w-full text-center py-2 md:py-4 text-base md:text-xl font-medium">
                {slide.title}
              </div>
            </div>
          ))}
        </div>

        {/* الأسهم */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:!text-yellow-300 shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 text-white hover:!text-yellow-300 shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;
