import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaKey,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

const Header = () => {
  return (
    <div>
      {/*Header1 */}
      <div className="relative bg-red-900 text-sm flex flex-wrap items-center justify-between px-4 py-2">
  {/* social icons */}
  <div className="flex items-center space-x-2 text-white p-1 rounded mb-2 sm:mb-0">
    <Link><FaGoogle /></Link>
    <Link><FaYoutube /></Link>
    <Link><FaTwitter /></Link>
    <Link><FaFacebook /></Link>
  </div>

  {/* search bar */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl">
    <form className="flex w-full">
      <input
        type="text"
        placeholder="ابحث فى الموقع"
        className="flex-grow px-3 py-1 rounded-l border-none text-black outline-none"
      />
      <button type="submit" className="bg-gray-400 px-4 py-1 rounded-r">
        <FaSearch className="text-white" />
      </button>
    </form>
  </div>

  {/* logins (large screens only) */}
  <div className="hidden lg:flex items-center space-x-2 text-white">
    <Link to={'/login'} className="flex items-center space-x-1 font-bold">
      <span>تسجيل دخول</span>
      <FaKey />
    </Link>
    <Link to={'/newlogin'} className="flex items-center space-x-1 font-bold">
      <span>تسجيل جديد</span>
      <IoMdPersonAdd />
    </Link>
  </div>

  {/* logins (small screens) */}
  <div className="flex lg:hidden w-full justify-center mt-16 space-x-4 text-white">
    <Link to={'/login'} className="flex items-center space-x-1 font-bold">
      <span>تسجيل دخول</span>
      <FaKey />
    </Link>
    <Link to={'/newlogin'} className="flex items-center space-x-1 font-bold ">
      <span >تسجيل جديد</span>
      <IoMdPersonAdd />
    </Link>
  </div>
</div>

    </div>
  );
};
export default Header