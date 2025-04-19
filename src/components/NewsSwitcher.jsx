import React, { useState } from "react";
import NewsCard from "./NewsCards"; 
import img1 from '../assets/images/Screenshot 2025-04-17 135437.png'

const fakePopularNews = [
  { title: "خبر 1 - الأكثر قراءة", source: "المصدر", img: img1, link: "#" },
  { title: "خبر 2 - الأكثر قراءة", source: "المصدر", img: img1, link: "#" },
  { title: "خبر 1 - الأكثر قراءة", source: "المصدر", img: img1, link: "#" },
  { title: "خبر 2 - الأكثر قراءة", source: "المصدر", img: img1, link: "#" },
  
];

const fakeRatedNews = [
  { title: "خبر 1 - الأعلى تقييمًا", source: "المصدر", img: img1, link: "#" },
  { title: "خبر 2 - الأعلى تقييمًا", source: "المصدر", img: img1, link: "#" },
];

const fakeWriterPopular = [
  { title: "مقال 1 - الأكثر قراءة", source: "كاتب 1",  img: img1, link: "#" },
  { title: "مقال 2 - الأكثر قراءة", source: "كاتب 2",  img: img1, link: "#" },
];

const fakeWriterRated = [
  { title: "مقال 1 - الأعلى تقييمًا", source: "كاتب 1", img: img1, link: "#" },
  { title: "مقال 2 - الأعلى تقييمًا", source: "كاتب 2",img: img1, link: "#" },
];

const NewsSwitcher = () => {
  const [activeNewsTab, setActiveNewsTab] = useState("popular");
  const [activeWriterTab, setActiveWriterTab] = useState("popular");

  return (
    <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
      {/*News Box*/}
      <div className="bg-red-900 p-5 rounded-xl border border-red-800 shadow-sm w-full lg:w-2/3">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setActiveNewsTab("popular")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              activeNewsTab === "popular"
                ? "bg-white text-red-900"
                : "text-white border-red-900"
            }`}
          >
            الأكثر قراءة
          </button>
          <button
            onClick={() => setActiveNewsTab("rated")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              activeNewsTab === "rated"
                ? "bg-white text-red-900"
                : "text-white border-red-900"
            }`}
          >
            الأعلى تقييمًا
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(activeNewsTab === "popular" ? fakePopularNews : fakeRatedNews).map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* Writer News*/}
      <div className="bg-red-900 p-5 rounded-xl border border-red-800 shadow-sm w-full lg:w-1/3">
        <h2 className="text-center text-lg font-bold text-white mb-4">مقالات الكتاب</h2>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setActiveWriterTab("popular")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              activeWriterTab === "popular"
                ? "bg-white text-red-900"
                : "text-white border-white"
            }`}
          >
            الأكثر قراءة
          </button>
          <button
            onClick={() => setActiveWriterTab("rated")}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              activeWriterTab === "rated"
                ? "bg-white text-red-900"
                : "text-white border-red-900"
            }`}
          >
            الأعلى تقييمًا
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(activeWriterTab === "popular" ? fakeWriterPopular : fakeWriterRated).map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsSwitcher;

