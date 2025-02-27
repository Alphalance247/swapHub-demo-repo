"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Input from "./SearchInput";
import Button from "./Button";

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const navs = [
    {
      id: 1,
      heading: "Company",
      name1: "Home",
      name2: "Services",
      name3: "Features",
      name4: "Careers",
      link1: "/",
      link2: "/",
      link3: "/",
      link4: "/",
    },
    {
      id: 3,
      heading: "Help",
      name1: "Customer Support",
      name2: "Terms & Conditions",
      name3: "Privacy Policy",
      name4: "Privacy Policy",
      link1: "/",
      link2: "/",
      link3: "/",
      link4: "/",
    },
  ];
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-[1280px] pt-36 pb-12 px-6 mx-auto">
        <div className="flex gap-x-20 justify-between mb-20 max-xl:gap-x-10 max-lg:flex-col max-lg:gap-y-10">
          {/* [25%15%15%25%] */}
          <div className="w-[25%]">
            <Image
              src="/assets/icons/commonIcons/footerlogo.svg"
              width={130}
              height={28}
              alt="logo"
            />
            <p className="text-[#e3e3e3] text-xl font-normal mt-8">
              Turn your products and services into a seamless online experience
              for customers.
            </p>

            <div className="flex gap-x-4 mt-[26px]">
              <Image
                src="/assets/Home/icons/facebook.svg"
                width={40}
                height={40}
                alt="logo"
              />
              <Image
                src="/assets/Home/icons/linkedIn.svg"
                width={40}
                height={40}
                alt="logo"
              />
              <Image
                src="/assets/Home/icons/instagram.svg"
                width={40}
                height={40}
                alt="logo"
              />
            </div>
          </div>

          {navs.map((items) => {
            return (
              <div key={items?.id} className="">
                <h6 className="mb-6 text-white text-base font-bold">
                  {items?.heading}
                </h6>
                <div>
                  <ul className="">
                    <li
                      className={`${
                        activeMenu === items?.name1
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name1)}
                    >
                      <Link href={items?.link1}>{items?.name1}</Link>
                    </li>
                    <li
                      className={`${
                        activeMenu === items?.name2
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name2)}
                    >
                      <Link href={items?.link2}>{items?.name2}</Link>
                    </li>
                    <li
                      className={`${
                        activeMenu === items?.name3
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name3)}
                    >
                      <Link href={items?.link3}>{items?.name3}</Link>
                    </li>

                    <li
                      className={`${
                        activeMenu === items?.name4
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name4)}
                    >
                      <Link href={items?.link4}>{items?.name4}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="p-6 bg-[#303030] rounded-[20px] flex flex-col justify-start gap-y-3 max-lg:flex-1">
            <p className="text-center text-white text-base font-semibold leading-normal">
              Subscribe To Our Newsletter
            </p>
            <Input placeholder={"Enter your email address"} />
            <Button variant={"secondary"} className={"w-full"}>
              Subscribe
            </Button>
          </div>
        </div>

        <p className="border-t border-slate-200 pt-9 text-center text-white text-sm font-normal">
          © Copyright 2025, All Rights Reserved by SwapHub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
