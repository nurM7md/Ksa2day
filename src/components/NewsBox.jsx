import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import NewsCard from "./NewsCards";

const NewsBox = ({ title, link, items }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-red-900 rounded-xl p-5 w-full md:w-1/2 shadow-sm border border-red-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">

  
  <div className="flex justify-between items-center mb-5">
    
    <button
      onClick={() => navigate(link)}
      className="text-white border border-white p-2 rounded-md hover:bg-white hover:!text-red-900 transition-all duration-300"
    >
      <FaArrowLeft  size={14} />
    </button>

    <button
  onClick={() => navigate(link)}
  style={{ color: 'white' }}
  className="hover:!text-red-900 hover:bg-white py-2 px-4 text-sm font-semibold border border-white rounded-md transition-all duration-300"
>
  {title}
</button>


  </div>

  {/*News Cards*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {items.map((item, idx) => (
      <NewsCard
        key={idx}
        title={item.title}
        source={item.source}
        img={item.img}
      />
    ))}
  </div>
</div>


  );
};

export default NewsBox;
