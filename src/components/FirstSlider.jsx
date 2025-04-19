import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/images/Screenshot 2025-04-17 135437.png";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    title: "أخبار متنوعة",
    image: slide1,
    link: "/news/اخبار متنوعة",
  },
  {
    title: "محلية",
    image: slide1,
    link: "/news/محلية",
  },
  {
    title: "رياضة",
    image: slide1,
    link: "/news/رياضة",
  },
  {
    title: "سياسة",
    image: slide1,
    link: "/news/سياسة",
  },
  {
    title: "اقتصاد",
    image: slide1,
    link: "/news/اقتصاد",
  },
  
];

const FirstSlider = ({title , link}) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full py-12 px-4 flex justify-center items-center bg-white">
      <div className="max-w-5xl w-full relative">
       
        <div className="flex justify-between items-center mb-6">
          
          <button
            onClick={() => navigate(link)}
            className=" text-red-800 py-2 px-4 text-lg font-medium rounded-md border-2 border-red-800 hover:bg-red-800 hover:text-white transition-all duration-300"
          >
            <FaArrowLeft  size={18} />
          </button>

          
          <button
            onClick={() => navigate(link)}
            className="bg-red-800 text-white py-2 px-6 text-xl font-semibold rounded-md hover:bg-red-700 transition-all duration-300"
          >
            {title}
          </button>
        </div>

        <div className="flex justify-center items-center gap-6">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx}
                className={`relative transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                  isActive ? "w-80 scale-105" : "w-60 scale-95 opacity-70"
                } hover:scale-105 hover:opacity-100 transition duration-300`}
                onClick={() => navigate(slide.link)}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover brightness-90 hover:brightness-100"
                />
                <div className="absolute bottom-0 bg-red-900/70 text-white w-full text-center py-4 text-xl font-medium">
                  {slide.title}
                </div>
              </div>
            );
          })}
        </div>

        
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-800 text-white shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleLeft size={15} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-800 text-white shadow-md p-3 rounded-full hover:bg-red-700 transition"
        >
          <FaAngleDoubleRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default FirstSlider;
