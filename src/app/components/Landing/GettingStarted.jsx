"use client";
import HeadingWithSubHead from "@/app/common/headingWithSubHead";
import Layout from "@/app/common/layout";
import TabSection from "./Tabsection";
import Image from "next/image";
import Button from "@/app/common/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

const GettingStarted = () => {
  const tab = [
    {
      id: 0,
      img: "/assets/Home/images/1.png",
      heading: "Create Your Hub",
      subhead:
        "Set up your personalized mini-site to showcase your products or services. With just a few clicks, your online store or service hub is live.",
      btn: "Get started",
      bg: "#e5a500",
    },
    {
      id: 1,
      img: "/assets/Home/images/2.png",
      heading: "Add Your Offerings",
      subhead:
        "Upload products or services with detailed descriptions, images, and pricing. Whether you're selling, trading, or bartering, SwapHub supports it all.",
      btn: "Get started",
      bg: "#2A662A",
    },
    {
      id: 2,
      img: "/assets/Home/images/3.png",
      heading: "Engage and Sell",
      subhead:
        "Connect with customers who can browse, trade, or purchase your offerings seamlessly. Offer flexible payment options like 'buy now, pay later' for a better experience.",
      btn: "Get started",
      bg: "#EF6703",
    },
    {
      id: 3,
      img: "/assets/Home/images/4.png",
      heading: "Expand Your Reach",
      subhead:
        "Grow your business with SwapHub’s innovative features. Track your performance, build relationships, and unlock new opportunities.",
      btn: "Get started",
      bg: "#34346A",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <Layout>
        <div>
          <HeadingWithSubHead
            heading={"Get started in few steps"}
            vaiant={"secondary"}
            className={"text-center mb-16"}
          />
          <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {tab.map((items) => {
                return (
                  activeTab === items?.id && (
                    <div
                      key={items?.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="mt-10 flex items-center justify-center rounded-[2.5rem] w-[85%] h-[496px] mx-auto"
                      style={{ background: items?.bg }}
                    >
                      <Image
                        src={items?.img}
                        width={490}
                        height={500}
                        alt="createHub"
                        className="ml-[-1rem]"
                      />
                      <div className="pr-16 pl-16 flex flex-col gap-y-6">
                        <p className="text-white text-2xl font-bold leading-7">
                          {items?.heading}
                        </p>
                        <p className="text-white text-lg font-normal font-['Inter'] leading-normal">
                          {items?.subhead}
                        </p>
                        <Button variant={"primary"} className={"w-fit"}>
                          {items?.btn}
                        </Button>
                      </div>
                    </div>
                  )
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Buttons for showing progress */}
          <div className="mt-6 mx-auto w-[85%] gap-x-3 flex justify-end">
            <Button variant={"primary"}>{activeTab + 1} / 4</Button>
            <Button
              variant={"primary"}
              onClick={() => {
                if (activeTab < 3) {
                  setActiveTab(activeTab + 1);
                } else setActiveTab(0);
              }}
            >
              <MdKeyboardArrowRight />
            </Button>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default GettingStarted;
