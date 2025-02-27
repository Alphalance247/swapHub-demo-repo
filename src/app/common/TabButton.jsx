"use client"; // Required for state in Next.js App Router

import { useState } from "react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-6 py-2 rounded-full border border-black flex items-center gap-2 transition 
            ${
              activeTab === index
                ? "bg-black text-white"
                : "bg-[#F0F0F0] text-black hover:bg-gray-100"
            }`}
        >
          {activeTab === index && (
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          )}
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
