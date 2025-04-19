// داخل ملف NewsCard.jsx مثلاً
import React from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ title, source, img, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white border rounded-lg p-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300 flex items-center gap-4 flex-row-reverse cursor-pointer"
    >
      
      <img
        src={img}
        alt={title}
        className="w-24 h-20 object-cover rounded-md flex-shrink-0 border"
      />

      {/*News Details*/}
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-auto">{source}</p>
      </div>
    </div>
  );
};

export default NewsCard;

