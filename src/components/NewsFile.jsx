import React from 'react';
import fileImg from '../assets/Screenshot 2025-04-17 135437.png'

const NewsFile = () => {
    const newsItems = [
        {
            title: " “مزارع تبوك” تشهد إزهار أكثر من 90 ألف شجرة حمضيات خلال شهر أبريل الجاري",
            source: " صحيفة منبر الإلكترونية",
            image: fileImg, 
            link: "file1.html"
        },
        {
            title: " “مزارع تبوك” تشهد إزهار أكثر من 90 ألف شجرة حمضيات خلال شهر أبريل الجاري",
            source: " صحيفة منبر الإلكترونية",
            image: fileImg, 
            link: "file1.html"
        },
        {
            title: " صدور الموافقة الكريمة على منح ميدالية الاستحقاق من الدرجة الثالثة لـ 115 مقيمًا لتبرعهم بالدم",
            source: " صراحة الإلكترونية",
            image: fileImg, 
            link: "file2.html"
        },
        {
            title: " الحكومة الإلكترونية تعلن عن تدشين خدمة إصدار وتجديد بطاقة الهوية للمواطنين خارج البحرين عبر البوابة ",
            source: " الوطن البحرينية",
            image: fileImg, 
            link: "file3.html"
        },
        {
            title: " أهلا بكم في بيت العبيد.. تسلا تتوصل لتسوية مع موظفة سوداء رفعت دعوى قضائية تتعلق بالتمييز العنصر",
            source: " سي إن إن عربية CNN",
            image: fileImg, 
            link: "file4.html"
        }
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="bg-red-900 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center text-2xl font-bold mb-6">الملف الإعلامي</div>
                <div className="flex gap-6 flex-wrap justify-center overflow-hidden">
                    {newsItems.map((item, index) => (
                        <a href={item.link} key={index} className="w-60 max-w-full sm:w-64 border rounded-lg overflow-hidden transform transition-all hover:scale-105">
                            <img src={item.image} alt={`خبر ${index + 1}`} className="w-full h-40 object-cover" />
                            <div className="p-4 text-center">
                                <div className="font-semibold mb-2">{item.title}</div>
                                <div className="text-sm text-gray-300">{item.source}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default NewsFile;

