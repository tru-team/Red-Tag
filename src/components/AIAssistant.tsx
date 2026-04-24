"use client";
import { useState } from "react";

interface ResultCard {
  destination: string;
  nights: string;
  hotel: string;
  date: string;
  price: string;
  badge: string;
  badgeColor: string;
}

const RESULTS: ResultCard[] = [
  { destination: "CANCUN · 7 NIGHTS", nights: "7 nights", hotel: "May 17 · Moon Palace", date: "", price: "$2,349", badge: "Best match", badgeColor: "bg-[#B91C1C]" },
  { destination: "VARADERO · 7 NIGHTS", nights: "7 nights", hotel: "May 17 · Melia Las Americas", date: "", price: "$1,899", badge: "Best value", badgeColor: "bg-[#B91C1C]" },
  { destination: "PUNTA CANA · 7 NIGHTS", nights: "7 nights", hotel: "May 18 · Iberostar", date: "", price: "$2,198", badge: "Popular", badgeColor: "bg-[#B91C1C]" },
  { destination: "VARADERO · 7 NIGHTS", nights: "7 nights", hotel: "May 17 · Melia Las Americas", date: "", price: "$1,899", badge: "Best match", badgeColor: "bg-[#B91C1C]" },
];

const CHIPS = ["Which has the best beach?", "More on Cuba", "Extend to 10 nights", "Flight times"];

export default function AIAssistant() {
  const [input, setInput] = useState<string>("");

  return (
    <section className="bg-[#F2F3F3] py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
    
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs text-black font-medium mb-2 rounded-[40px] py-1 px-2 bg-white">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI Assistant
          </div>
          <h2 className="text-[32px] font-medium text-[#00537A]">AI Trip Assistant</h2>
        </div>


        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#80C600] rounded-full" />
              <span className="text-sm font-semibold text-gray-700">redtag AI</span>
            </div>
            <span className="text-sm text-[#808080]">Searching 50,000+ live packages</span>
          </div>

          <div className="p-5 space-y-4 min-h-[300px]">
   
            <div className="flex justify-end">
              <div className="bg-[#00537A] text-white text-sm px-4 py-3 rounded-2xl rounded-br-sm max-w-[88%] xs:max-w-xs leading-relaxed">
                I want a beach vacation for 2, leaving Toronto around May long weekend, budget around $2,500 total. Somewhere warm, and all-inclusive.
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g clip-path="url(#clip0_213_3600)">
                    <path d="M9.26377 2.5637C9.16533 2.60089 9.09971 2.69495 9.09971 2.79995C9.09971 2.90495 9.16533 2.99901 9.26377 3.0362L10.4997 3.49995L10.9635 4.73589C11.0006 4.83433 11.0947 4.89995 11.1997 4.89995C11.3047 4.89995 11.3988 4.83433 11.436 4.73589L11.8997 3.49995L13.1356 3.0362C13.2341 2.99901 13.2997 2.90495 13.2997 2.79995C13.2997 2.69495 13.2341 2.60089 13.1356 2.5637L11.8997 2.09995L11.436 0.864014C11.3988 0.765576 11.3047 0.699951 11.1997 0.699951C11.0947 0.699951 11.0006 0.765576 10.9635 0.864014L10.4997 2.09995L9.26377 2.5637ZM4.37252 5.96089L4.89971 4.8212L5.4269 5.96089C5.5319 6.18839 5.71346 6.36995 5.94096 6.47495L7.08065 7.00214L5.94096 7.52933C5.71346 7.63433 5.5319 7.81589 5.4269 8.04339L4.89971 9.18308L4.37252 8.04339C4.26752 7.81589 4.08596 7.63433 3.85846 7.52933L2.71877 6.99995L3.86064 6.47276C4.08814 6.36776 4.26971 6.1862 4.37471 5.9587L4.37252 5.96089ZM4.32221 3.56776L3.42096 5.5212L1.46752 6.42245L1.45439 6.42901C1.36908 6.46839 1.18533 6.5537 0.903145 6.68276C0.778457 6.73964 0.699707 6.86433 0.699707 6.99995C0.699707 7.13558 0.778457 7.26026 0.903145 7.31714C1.18533 7.4462 1.36689 7.53151 1.45439 7.57089L1.46752 7.57745L3.42096 8.4787L4.32221 10.4321L4.32877 10.4453C4.36814 10.5306 4.45346 10.7143 4.58252 10.9965C4.63939 11.1212 4.76408 11.2 4.89971 11.2C5.03533 11.2 5.16002 11.1212 5.21689 10.9965C5.53189 10.3162 5.54721 10.2812 6.37846 8.48089L8.33189 7.57964L8.34502 7.57308C8.43033 7.5337 8.61408 7.44839 8.89627 7.31933C9.02096 7.26245 9.09971 7.13776 9.09971 7.00214C9.09971 6.86651 9.02096 6.74183 8.89627 6.68495C8.21596 6.36995 8.18096 6.35464 6.38065 5.52339L5.47939 3.56995L5.47283 3.55683C5.43346 3.47151 5.34815 3.28776 5.21908 3.00558C5.16221 2.88089 5.03752 2.80214 4.9019 2.80214C4.76627 2.80214 4.64158 2.88089 4.58471 3.00558C4.28283 3.65745 4.33314 3.55245 4.32439 3.56995L4.32221 3.56776ZM9.79971 10.5L8.56377 10.9637C8.46533 11.0009 8.39971 11.095 8.39971 11.2C8.39971 11.305 8.46533 11.399 8.56377 11.4362L9.79971 11.9L10.2635 13.1359C10.3006 13.2343 10.3947 13.3 10.4997 13.3C10.6047 13.3 10.6988 13.2343 10.736 13.1359L11.1997 11.9L12.4356 11.4362C12.5341 11.399 12.5997 11.305 12.5997 11.2C12.5997 11.095 12.5341 11.0009 12.4356 10.9637L11.1997 10.5L10.736 9.26401C10.6988 9.16558 10.6047 9.09995 10.4997 9.09995C10.3947 9.09995 10.3006 9.16558 10.2635 9.26401L9.79971 10.5Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_213_3600">
                    <rect width="14" height="14" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </span>
                <span className="text-xs font-semibold text-gray-600">redtag AI</span>
              </div>
              <p className="text-sm text-[#333] leading-relaxed">
                Found 4 all-inclusive packages from YYZ around May 17-24 that fit your budget. Cuba is the best value right now - prices just dropped. Here are your top picks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {RESULTS.map((r, i) => (
                  <div key={i} className="flex items-stretch h-full flex-col justify-between border bg-[#F0F1F1] border-gray-200 rounded-xl p-3 hover:border-red-300 hover:shadow-sm transition-all cursor-pointer">
                    <p className="text-[10px] font-bold text-[#6A6A6A] leading-tight">{r.destination}</p>
                    <p className="text-lg font-bold text-[#414042] mt-1">{r.price}</p>
                    <p className="text-[14px] text-[#414042] mt-0.5">{r.hotel}</p>
                    <span className={`inline-block mt-2 text-[14px] w-max font-semibold text-white px-3 py-0.5 rounded-full ${r.badgeColor}`}>
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {CHIPS.map((chip) => (
                  <button
                    key={chip}
                    className="text-[14px] text-[#414042] border border-[#DDD] bg-[#F0F1F199] hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 px-5 py-3 flex items-center gap-3">
            <div className="w-full flex rounded-[40px] py-2 pl-3 pr-1.5 border border-[#ddd]">
            <button className="flex mr-2 items-center gap-1.5 text-xs text-gray-500 font-medium shrink-0 bg-[#F0F1F1] rounded-3xl px-3 py-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Search
            </button>
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything - dates, budget, destination, vibe..."
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
    </section>
  );
}
