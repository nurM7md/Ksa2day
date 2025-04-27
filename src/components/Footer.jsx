import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-red-900 text-white pt-4 pb-8 ">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          {/* card 1 */}
          <div className="bg-red-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-500 animate-fade-in-up delay-100 hover:shake">
            <h4 className="text-lg font-bold mb-3 border-b border-white pb-1 ">
              تابعنا
            </h4>
            <div className="flex gap-4 text-3xl mt-2 justify-center items-center">
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300">
                <FaFacebook />
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300">
                <FaTwitter />
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300">
                <FaYoutube />
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300">
                <FaGooglePlusG />
              </Link>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-red-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-500 animate-fade-in-up delay-300 hover:shake">
            <h4 className="text-lg font-bold mb-3 border-b border-white pb-1">
              روابط سريعة
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-200 ">
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                أخبار عالمية
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                مقالات
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                أخبار الساعة
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                جرافك
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                صحافة
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                اتصل بنا
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                مساعدة
              </Link>
              <Link className="cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:text-yellow-300 ">
                اخبار محلية
              </Link>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-red-800 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-500 animate-fade-in-up delay-500 hover:shake">
            <h4 className="text-lg font-bold mb-3 border-b border-white pb-1">
              اشترك معنا
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              اشترك في القائمة البريدية لتصلك أحدث الأخبار والمجلات والمقالات
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-3 py-2 text-black rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-red-900 hover:bg-gray-200 transition duration-300 font-semibold px-4 py-2 rounded-r-md"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* copy rights */}
        <div className="text-center text-gray-200 text-sm mt-3 border-t border-red-700 pt-3">
          © جميع الحقوق محفوظة دورية <strong>2016</strong>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
