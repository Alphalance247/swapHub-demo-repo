"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button from "./Button";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(null);

  const navs = [
    {
      id: 1,
      name: "Products",
      scrollSection: "about",
      link: "/",
      icon: <FaCaretDown size={16} />,
      hover: "hover:text-[#2A662A]",
      border: "border-[#2A662A]",
      activeText: "text-[#2A662A]",
      subMenu: [
        {
          name: "Tailor",
          link: "/",
        },
        {
          name: "Barber",
          link: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Company",
      scrollSection: "solution",
      link: "/",
      link: <FaCaretDown size={16} />,
      hover: "hover:text-[#EF6703]",
      border: "border-[#EF6703]",
      activeText: "text-[#EF6703]",
    },
    {
      id: 3,
      name: "Support",
      scrollSection: "serve",
      link: "/",
      icon: <FaCaretDown size={16} />,
      hover: "hover:text-[#51F4A6]",
      border: "border-[#51F4A6]",
      activeText: "text-[#51F4A6]",
      subMenu: [
        {
          name: "Me",
          link: "/",
        },
        {
          name: "You",
          link: "/",
        },
      ],
    },
  ];

  return (
    <header className="sticky z-[1000] top-[2.5rem] px-6 max-md:px-4 max-md:top-5">
      <div
        className={`"py-4 px-6 bg-white h-[86px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  rounded-bl-2xl shadow-[0px_4px_10px_0px_rgba(18,18,18,0.04)] max-w-[1280px] mx-auto flex justify-between items-center max-lg:rounded-tr-2xl max-lg:rounded-tl-2xl ${
          showMobileMenu
            ? "max-lg:rounded-br-[0px] max-lg:rounded-bl-[0px]"
            : "max-lg:rounded-br-2xl max-lg:rounded-bl-2xl"
        } `}
      >
        <Link href="/">
          <Image
            src="/assets/icons/commonIcons/logo.svg"
            width={130}
            height={28}
            alt="logo"
          />
        </Link>

        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items, i) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex items-end relative cursor-pointer max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li
                  className={`${
                    activeMenu === items?.name
                      ? `${items?.activeText} ${items?.border} border-b-4 pb-2`
                      : "text-[#121212]"
                  }  cursor-pointer flex gap-x-2 items-center  ${
                    items?.hover
                  } py-3 px-2 text-base font-poppinsRegular max-xl:text-xs max-xl:px-2`}
                  onClick={() => {
                    setActiveMenu(items?.name);
                  }}
                  onMouseEnter={() => {
                    if (showDropDown === i) {
                      setShowDropDown(null);
                    } else {
                      setShowDropDown(i);
                    }
                  }}
                  onMouseLeave={() => setShowDropDown(null)}
                >
                  {items?.subMenu ? (
                    <button
                      className={`flex gap-x-2 items-center transition-colors duration-300 ${items?.hoverColor} cursor-pointer`}
                    >
                      {items?.name} <span>{items?.icon}</span>
                    </button>
                  ) : (
                    <Link href={items?.link} className="">
                      {items?.name}
                    </Link>
                  )}

                  {items?.subMenu && showDropDown === i && (
                    <div className="absolute left-0 top-10 mt-2 w-48 bg-white shadow-lg rounded-md">
                      {items?.subMenu.map((subLink, subIndex) => (
                        <Link key={subIndex} href={subLink?.link}>
                          <span className="block px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                            {subLink?.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="flex items-center gap-x-4 max-lg:hidden">
          <Link href={"/login"}>
            <Button variant="primary" className="w-fit">
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="w-[258px]" variant={"secondary"}>
              Start a free account
            </Button>
          </Link>
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
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white rounded-br-2xl rounded-bl-2xl ${
          showMobileMenu ? "h-auto" : "h-0"
        }`}
      >
        <nav className="justify-start gap-4 flex flex-col py-8 px-3 lg:items-center">
          {navs.map((items) => {
            return (
              <ul key={items?.id} className="">
                <li className="text-[#4f4f4f] cursor-pointer px-4 text-sm font-semibold font-geist block">
                  {items?.name}
                </li>
              </ul>
            );
          })}

          <div className="flex flex-col gap-y-4">
            <Link href={"/login"}>
              <Button variant="primary" className="w-fit max-lg:w-full">
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button className="w-[258px] max-lg:w-full" variant={"secondary"}>
                Start a free account
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
