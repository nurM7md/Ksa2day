import React from "react";
import NewsBox from "./NewsBox";
import newsImg from '../assets/images/Screenshot 2025-04-17 135437.png'


const NewsSection = () => {
    
  const diverseNews = [
    { title: "معاناة السكن الطلابي.. وارتفاع الإيجار", source: "الرؤية العمانية" , img:newsImg , link:"" },
    { title: "المحيسن يوقع مع أحمد هيلال", source: "الشاهد الإخباري", img:newsImg ,link:""},
    { title: "معاناة السكن الطلابي.. وارتفاع الإيجار", source: "الرؤية العمانية" , img:newsImg,link:"" },
    { title: "المحيسن يوقع مع أحمد هيلال", source: "الشاهد الإخباري", img:newsImg,link:"" },
  ];

  const channelsNews = [
    { title: "حرس الحدود يضبط متهمين", source: "صحيفة الواجهة" , img:newsImg},
    { title: "إدانة دعاة التحريض على هدم الأقصى", source: "الشاهد الإخباري", img:newsImg },
    { title: "حرس الحدود يضبط متهمين", source: "صحيفة الواجهة" , img:newsImg},
    { title: "إدانة دعاة التحريض على هدم الأقصى", source: "الشاهد الإخباري", img:newsImg },
  ];

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <NewsBox
          title=" أخبار متنوعة📰"
          link="/news/أخبار-متنوعة"
          items={diverseNews}
        />
        <NewsBox
          title=" محطات وقنوات📺"
          link="/news/محطات-وقنوات"
          items={channelsNews}
        />
      </div>
    </div>

  );
};

export default NewsSection;
