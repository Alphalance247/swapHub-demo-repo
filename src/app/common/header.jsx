"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button from "./Button";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navs = [
    { id: 1, name: "Products", scrollSection: "about", link: "/" },
    { id: 3, name: "Company", scrollSection: "solution", link: "/" },
    { id: 4, name: "Support", scrollSection: "serve", link: "/" },
  ];

  return (
    <header className="sticky z-[1000] top-[2.5rem]">
      <div className="px-6 py-4 bg-white h-[86px] rounded-2xl shadow-[0px_4px_10px_0px_rgba(18,18,18,0.04)] max-w-[1280px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/icons/commonIcons/logo.svg"
            width={130}
            height={28}
            alt="logo"
          />
        </Link>

        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex items-end cursor-pointer max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li
                  className={`${
                    activeMenu === items?.name
                      ? "text-[#51F4A6] border-b-[2px] border-[#51F4A6] pb-2"
                      : "text-[#121212]"
                  }  cursor-pointer  hover:text-[#51F4A6] py-3 px-2 text-base font-poppinsRegular max-xl:text-xs max-xl:px-2`}
                  onClick={() => setActiveMenu(items?.name)}
                >
                  <Link href={items?.link}>{items?.name}</Link>
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="flex items-center gap-x-4 max-lg:hidden">
          <Button variant="primary" className="w-fit">
            Login
          </Button>
          <Button className="w-[258px]" variant={"secondary"}>
            Start a free account
          </Button>
        </div>

        <div className="lg:hidden transition-all duration-500 grow flex justify-end items-center h-10 gap-8">
          <button
            className="transition-all duration-500 text-black p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${
          showMobileMenu ? "h-auto" : "h-0"
        }`}
      >
        <nav className="justify-start items-center gap-4 flex flex-col py-8 px-3">
          {navs.map((items) => {
            return (
              <ul key={items?.id} className="">
                <li className="text-[#4f4f4f] cursor-pointer px-4 text-sm font-semibold font-geist block">
                  {items?.name}
                </li>
              </ul>
            );
          })}

          <div>
            {/* <Button onClick={() => handleNavClick(null, "get-in-touch")} /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
