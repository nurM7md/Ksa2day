import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const RenderCategory = ({ category, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mt-2 ${depth === 0 ? "border-b pb-2" : ""}`}>
      <div
        className="cursor-pointer font-bold hover:text-yellow-300 flex flex-row-reverse items-center text-right transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {category.children && (
          <span className="text-sm  ml-2 hover:text-yellow-300 transition duration-300">
            {isOpen ? "−" : "+"}
          </span>
        )}
        {category.link ? (
          <a
            href={category.link}
            className="text-sm  hover:text-yellow-300 transition duration-300 transform hover:translate-x-1"
          >
            {category.title}
          </a>
        ) : (
          <span className="text-sm  hover:text-yellow-300 transition duration-300 transform hover:translate-x-1">{category.title}</span>
        )}
      </div>

      {category.children && isOpen && (
        <div
          className={`mt-2 ${
            depth === 0 ? "grid grid-cols-3 gap-4 pl-4" : "pl-6"
          } text-sm text-gray-100`}
        >
          {category.children.map((child, idx) => (
            <div key={idx} className="text-right">
              <RenderCategory category={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [showNewsOverlay, setShowNewsOverlay] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const newsCategories = [
    {
      title: "اخر الاخبار",
      link: "/latest-news",
    },
    {
      title: "أقسام الأخبار",
      children: [
        { title: "سياسى", link: "/political" },
        { title: "اقتصادى", link: "/economic" },
        { title: "رياضى", link: "/sports" },
        { title: "فنى", link: "/art" },
        { title: "ثقافى", link: "/cultural" },
        { title: "تقنيات المعلومات", link: "/tech" },
        { title: "صحة", link: "/health" },
        { title: "محلية", link: "/local" },
        { title: "اخبار متنوعة", link: "/misc" },
        { title: "تقارير", link: "/reports" },
        { title: "كتاب", link: "/authors" },
        { title: "كاريكاتير", link: "/comics" },
      ],
    },
    {
      title: "الصحافة السعودية",
      children: [
        { title: "مجلات", link: "/magazines" },
        {
          title: "صحافة عامة",
          children: [
            { title: "رياض", link: "/riyadh" },
            { title: "عكاظ", link: "/okaz" },
            { title: "الجزيرة", link: "/okaz" },
          ],
        },
        { 
          title: "صحافة الكترونية", 
          children: [
            { title: "سبورت السعودية ", link: "/riyadh" },
            { title: "سبق الالكترونية", link: "/okaz" },
            { title: "صدى الالكترونية", link: "/okaz" },
          ]
         },
        
        
      ],
    },
    {
      title: "الصحافة الخليجية",
      children: [
        { title: "مجلات", link: "/magazines" },
        {
          title: "صحافة عامة",
          children: [
            { title: "رياض", link: "/riyadh" },
            { title: "عكاظ", link: "/okaz" },
            { title: "الجزيرة", link: "/okaz" },
          ],
        },
        { 
          title: "صحافة الكترونية", 
          children: [
            { title: "سبورت السعودية ", link: "/riyadh" },
            { title: "سبق الالكترونية", link: "/okaz" },
            { title: "صدى الالكترونية", link: "/okaz" },
          ]
         },
        
        
      ],
    },
    {
      title: "الصحافة العربية",
      children: [
        { title: "مجلات", link: "/magazines" },
        {
          title: "صحافة عامة",
          children: [
            { title: "رياض", link: "/riyadh" },
            { title: "عكاظ", link: "/okaz" },
            { title: "الجزيرة", link: "/okaz" },
          ],
        },
        { 
          title: "صحافة الكترونية", 
          children: [
            { title: "سبورت السعودية ", link: "/riyadh" },
            { title: "سبق الالكترونية", link: "/okaz" },
            { title: "صدى الالكترونية", link: "/okaz" },
          ]
         },
        
        
      ],
    },
    {
      title: "الصحافة الدولية",
      children: [
        { title: "مجلات", link: "/magazines" },
        {
          title: "صحافة عامة",
          children: [
            { title: "رياض", link: "/riyadh" },
            { title: "عكاظ", link: "/okaz" },
            { title: "الجزيرة", link: "/okaz" },
          ],
        },
        { 
          title: "صحافة الكترونية", 
          children: [
            { title: "سبورت السعودية ", link: "/riyadh" },
            { title: "سبق الالكترونية", link: "/okaz" },
            { title: "صدى الالكترونية", link: "/okaz" },
          ]
         },
        
        
      ],
    },
  ];

  const menuItems = [
    "مكتبة العينات",
    "مكتبة الفيديوهات",
    "الأحصاءات",
    "كتاب المقالات",
    "الصحف والمجلات",
    "النشرات والتقارير",
    "الملف الإعلامي",
    "تغريدات تويتر",
    "الأخبار",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-red-900 text-white px-6 py-4 shadow-md relative">
        <div className="container mx-auto flex justify-center items-center">
          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars className="text-white text-2xl" />
            </button>
          </div>

          {/* Menu Items - Desktop */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 flex items-center gap-1"
                onClick={() => item === "الأخبار" && setShowNewsOverlay(true)}
              >
                <span>{item}</span>
                {item === "الأخبار" && <FaChevronDown className="text-xs mt-1" />}
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items - Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer px-4 py-2 border-b border-white hover:text-yellow-300 transition"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  item === "الأخبار" && setShowNewsOverlay(true);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* News Overlay */}
      {showNewsOverlay && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowNewsOverlay(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-red-900 text-white p-8 rounded-lg shadow-xl w-[90%] max-w-4xl max-h-[80%] overflow-y-auto relative">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <button
                  onClick={() => setShowNewsOverlay(false)}
                  className="text-white font-bold text-lg hover:text-yellow-300 transition"
                >
                  <FaTimes />
                </button>
                <h2 className="text-xl font-bold text-white">
                  الأقسام الإخبارية 📰
                </h2>
              </div>

              <div className="space-y-4 text-right ">
                {newsCategories.map((cat, i) => (
                  <RenderCategory key={i} category={cat} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
