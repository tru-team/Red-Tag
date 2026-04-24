"use client";
import { useState } from "react";
import Image from "next/image";
import { TABS } from "../utils/data";

export default function SearchCard() {
  const [activeTab, setActiveTab] = useState("Vacations Packages");
  const [input, setInput] = useState<string>("");


  const config = TABS.find((t) => t.label === activeTab) || TABS[0];

  
  return (
    <div className="lg:pt-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-full p-0 overflow-hidden">

        <div className="flex border-b border-gray-100 px-2 md:px-4 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-1.5 px-3 py-3.5 text-[14px] font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.label
                  ? "border-[#00537A] text-[#00537A]"
                  : "border-transparent text-[#333] hover:text-[#00537A]"
              }`}
            >
              <div className="relative w-4 h-4">
                <Image 
                  src={tab.icon} 
                  alt={tab.label} 
                  width={16} 
                  height={16}
                  className="object-contain" 
                />
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 md:p-5 space-y-3">
          {config.showFrom && (
            <div className="border border-[#DDD] rounded-[50px] py-2 px-8">
              <p className="text-sm text-black uppercase font-semibold mb-1">From:</p>
              <input
                type="text"
                defaultValue="Toronto (YYZ)"
                className="text-sm font-normal text-gray-800 w-full outline-none"
              />
            </div>
          )}


          {config.showTo && (
            <div className="border border-[#DDD] rounded-[50px] py-2 px-8">
              <p className="text-[14px] text-black uppercase font-semibold mb-1">To:</p>
              <input
                type="text"
                placeholder="Please select a destination or hotel"
                className="text-sm text-gray-800 w-full outline-none placeholder:text-gray-800"
              />
            </div>
          )}
          {(config.showDates || config.showTravellers) && (
            <div className="flex flex-col xs:flex-row gap-4">
              {config.showDates && (
                <div className="flex-1 border border-[#DDD] rounded-[50px] py-2 px-8">
                  <p className="text-[14px] text-black font-semibold mb-1">Dates:</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="May 17 - May 24"
                      className="text-sm font-normal text-gray-800 w-full outline-none"
                    />
                    <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              )}
              {config.showTravellers && (
                <div className="flex-1 border border-[#DDD] rounded-[50px] py-2 px-8">
                  <p className="text-[14px] text-black font-semibold mb-1">Travellers &amp; Rooms</p>
                  <input
                    type="text"
                    defaultValue="2 adults · 1 room"
                    className="text-sm font-normal text-gray-800 w-full outline-none"
                  />
                </div>
              )}
            </div>
          )}

          <div className="w-full flex items-center gap-3 mt-2">
            <div className="w-full flex items-center rounded-[40px] py-2 pl-3 pr-1.5 border border-[#ddd]">
              <button className="h-[30px] flex mr-2 items-center gap-1.5 text-xs text-black font-semibold shrink-0 bg-[#F0F1F1] rounded-3xl px-4 py-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9.26377 2.56382C9.16533 2.60101 9.09971 2.69507 9.09971 2.80007C9.09971 2.90507 9.16533 2.99914 9.26377 3.03632L10.4997 3.50007L10.9635 4.73601C11.0006 4.83445 11.0947 4.90007 11.1997 4.90007C11.3047 4.90007 11.3988 4.83445 11.436 4.73601L11.8997 3.50007L13.1356 3.03632C13.2341 2.99914 13.2997 2.90507 13.2997 2.80007C13.2997 2.69507 13.2341 2.60101 13.1356 2.56382L11.8997 2.10007L11.436 0.864136C11.3988 0.765698 11.3047 0.700073 11.1997 0.700073C11.0947 0.700073 11.0006 0.765698 10.9635 0.864136L10.4997 2.10007L9.26377 2.56382ZM4.37252 5.96101L4.89971 4.82132L5.4269 5.96101C5.5319 6.18851 5.71346 6.37007 5.94096 6.47507L7.08065 7.00226L5.94096 7.52945C5.71346 7.63445 5.5319 7.81601 5.4269 8.04351L4.89971 9.1832L4.37252 8.04351C4.26752 7.81601 4.08596 7.63445 3.85846 7.52945L2.71877 7.00007L3.86064 6.47289C4.08814 6.36789 4.26971 6.18632 4.37471 5.95882L4.37252 5.96101ZM4.32221 3.56789L3.42096 5.52132L1.46752 6.42257L1.45439 6.42914C1.36908 6.46851 1.18533 6.55382 0.903145 6.68289C0.778457 6.73976 0.699707 6.86445 0.699707 7.00007C0.699707 7.1357 0.778457 7.26039 0.903145 7.31726C1.18533 7.44632 1.36689 7.53164 1.45439 7.57101L1.46752 7.57757L3.42096 8.47882L4.32221 10.4323L4.32877 10.4454C4.36814 10.5307 4.45346 10.7144 4.58252 10.9966C4.63939 11.1213 4.76408 11.2001 4.89971 11.2001C5.03533 11.2001 5.16002 11.1213 5.21689 10.9966C5.53189 10.3163 5.54721 10.2813 6.37846 8.48101L8.33189 7.57976L8.34502 7.5732C8.43033 7.53382 8.61408 7.44851 8.89627 7.31945C9.02096 7.26257 9.09971 7.13789 9.09971 7.00226C9.09971 6.86664 9.02096 6.74195 8.89627 6.68507C8.21596 6.37007 8.18096 6.35476 6.38065 5.52351L5.47939 3.57007L5.47283 3.55695C5.43346 3.47164 5.34815 3.28789 5.21908 3.0057C5.16221 2.88101 5.03752 2.80226 4.9019 2.80226C4.76627 2.80226 4.64158 2.88101 4.58471 3.0057C4.28283 3.65757 4.33314 3.55257 4.32439 3.57007L4.32221 3.56789ZM9.79971 10.5001L8.56377 10.9638C8.46533 11.001 8.39971 11.0951 8.39971 11.2001C8.39971 11.3051 8.46533 11.3991 8.56377 11.4363L9.79971 11.9001L10.2635 13.136C10.3006 13.2344 10.3947 13.3001 10.4997 13.3001C10.6047 13.3001 10.6988 13.2344 10.736 13.136L11.1997 11.9001L12.4356 11.4363C12.5341 11.3991 12.5997 11.3051 12.5997 11.2001C12.5997 11.0951 12.5341 11.001 12.4356 10.9638L11.1997 10.5001L10.736 9.26414C10.6988 9.1657 10.6047 9.10007 10.4997 9.10007C10.3947 9.10007 10.3006 9.1657 10.2635 9.26414L9.79971 10.5001Z" fill="#333333"/>
                </svg>
                AI Search
              </button>
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder=""
                  className="w-full text-sm text-[#333] outline-none placeholder-[#808080]"
                />
              </div>
              <button className="w-8 h-8 bg-[#CA2129] hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-[14px] text-left lg:text-right pt-8 lg:pt-12">
        *Per booking. Certain conditions apply. Click for terms and conditions.
      </p>
    </div>
  );
}