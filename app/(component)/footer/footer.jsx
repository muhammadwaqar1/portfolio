import Link from "next/link";
import React from "react";
const navLink = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Works", link: "/work" },
  { name: "Contact", link: "/contact" },
];
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year, "sdfds");
  return (
    <div className="flex justify-center items-center flex-col my-5 md:my-10 md:space-y-6">
      <h1 className="text-3xl">GridX</h1>
      <div
        className={`text-center md:block   md:justify-between`}
        id="navbar-sticky"
      >
        <ul className=" flex  p-4 md:p-0 mt-4 font-medium  md:space-x-10 rtl:space-x-reverse  md:mt-0 md:border-0">
          {navLink.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={`${item?.link}`}
                  className={`block py-2 px-3 text-navbar_text hover:text-text_white  md:p-0 `}
                  aria-current="page"
                >
                  {item?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-navbar_text">{`\u00A9 All rights reserved by ${year}`}</p>
    </div>
  );
}

export default Footer;
