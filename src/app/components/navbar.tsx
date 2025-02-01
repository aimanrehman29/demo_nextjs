"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineCar,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { IoLogoAngular, IoIosSearch, IoMdSettings } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaUsers, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="w-full sm:h-[50px] lg:h-[80px] bg-white flex items-center justify-between md:px-4 lg:px-6 lg:px-10 border-b border-gray-200 py-2">
          <div className="flex items-center">
            <Link href="/">
              <IoLogoAngular className="w-[40px] h-[40px] lg:w-[70.47px] lg:h-[70.47px]" />
            </Link>

            <div className="hidden lg:flex text-sm font-medium ml-8">
              <a
                href="/allproduct"
                className="hover:bg-green-500 rounded-full text-[16px] font-bold px-6 py-1"
              >
                Actions
              </a>
              <a
                href="/allproduct"
                className="hover:bg-green-500 rounded-full text-[16px] font-bold px-6 py-1"
              >
                Sell a car
              </a>
              <a
                href="/allproduct"
                className="hover:bg-green-500 rounded-full text-[16px] font-bold px-6 py-1"
              >
                Community
              </a>
              <a
                href="/allproduct"
                className="hover:bg-green-500 rounded-full text-[16px] font-bold px-6 py-1"
              >
                About
              </a>
              <a
                href="/allproduct"
                className="hover:bg-green-500 rounded-full text-[16px] font-bold px-6 py-1"
              >
                Emails
              </a>
            </div>
          </div>

          <div className="flex justify-start space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-full border border-gray-300 rounded-full py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute right-4 text-gray-500 cursor-pointer">
                <IoIosSearch />
              </button>
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href="/allproduct"
                className="bg-green-500 hover:bg-green-300 rounded-full text-[16px] font-bold px-6 py-3"
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="lg:hidden cursor-pointer flex items-center space-x-2">
            <Link href="/checkout">
              <AiOutlineHeart
                size={20}
                className="cursor-pointer text-gray-600 hover:text-black"
              />
            </Link>
            <Link href="/cart">
              <IoBagOutline
                size={18}
                className="cursor-pointer text-gray-600 hover:text-black"
              />
            </Link>
            <Link href={"/profile"}>
              <FiUser className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Icon */}
            <HiOutlineMenuAlt3
              size={20}
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        {/*  Mobile Sidebar Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="w-64 bg-white h-full p-6 space-y-6">
              <HiOutlineX
                size={28}
                className="cursor-pointer text-black"
                onClick={() => setIsOpen(false)}
              />

              <div className="flex flex-col space-y-4 text-sm font-medium mt-10">
                <a
                  href="/allproduct"
                  className="hover:underline text-[16px] font-bold flex items-center space-x-2"
                >
                  <FaShoppingCart size={18} />
                  <span>Actions</span>
                </a>

                <a
                  href="/sell-car"
                  className="hover:underline text-[16px] font-bold flex items-center space-x-2"
                >
                  <AiOutlineCar size={18} />
                  <span>Sell a Car</span>
                </a>

                <a
                  href="/community"
                  className="hover:underline text-[16px] font-bold flex items-center space-x-2"
                >
                  <FaUsers size={18} />
                  <span>Community</span>
                </a>

                <a
                  href="/about"
                  className="hover:underline text-[16px] font-bold flex items-center space-x-2"
                >
                  <AiOutlineInfoCircle size={18} />
                  <span>About</span>
                </a>

                <a
                  href="/emails"
                  className="hover:underline text-[16px] font-bold flex items-center space-x-2"
                >
                  <AiOutlineMail size={18} />
                  <span>Emails</span>
                </a>

                <div className="flex justify-start space-x-2 mt-auto">
                  <IoMdSettings size={20} />
                  <Link href={"#"} className="hover:underline text-[16px]">
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
