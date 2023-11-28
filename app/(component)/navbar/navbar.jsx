"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./navbarStyle.css";
const navLink = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/work" },
  { name: "Contact", link: "/contact" },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIndex, setNavIndex] = useState(0);
  return (
    <>
      <nav className=" md:container md:mx-auto w-full ">
        <div className=" flex flex-col md:flex-row   items-center justify-between  py-4 px-8 ">
          <div className="w-full md:w-20  flex justify-between items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <div
              className="show-menu md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className={`text-center md:block   md:justify-between ${
              isOpen ? "none" : "hidden"
            } `}
            id="navbar-sticky"
          >
            <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navLink.map((item, index) => {
                return (
                  <li key={index} onClick={() => setNavIndex(index)}>
                    <Link
                      href={`${item?.link}`}
                      className={`block py-2 px-3 ${
                        index === navIndex ? "text-white" : "text-navbar_text"
                      }   hover:text-text_white  md:p-0 `}
                      aria-current="page"
                    >
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <button className="px-5 py-2 hidden md:block bg-btn rounded-lg hover:bg-btn_hover hover:text-black">
              Let s talk
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
