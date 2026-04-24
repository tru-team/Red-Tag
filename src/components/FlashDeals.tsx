"use client";

import { EmblaSection } from "./common/EmblaSection";
import Image from "next/image";

interface Deal {
  location: string;
  name: string;
  discount: number;
  nights: string;
  type: string;
  packageType: string;
  price: string;
  image: string;
}

const DEALS: Deal[] = [
  {
    location: "Cancun",
    name: "Moon Palace Resort",
    discount: 32,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$1,249",
    image: "/images/deals/deal1.jpg",
  },
  {
    location: "Punta Cana",
    name: "Iberostar Selection",
    discount: 18,
    nights: "May 20 to 24 · 5 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$989",
    image: "/images/deals/deal2.jpg",
  },
  {
    location: "Varadero",
    name: "Melia Las Americas",
    discount: 24,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$949",
    image: "/images/deals/deal3.jpg",
  },
  {
    location: "Varadero",
    name: "Melia Las Americas",
    discount: 14,
    nights: "May 17 to 24 · 7 nights",
    type: "Breakfast",
    packageType: "Flight + Hotel",
    price: "$1,599",
    image: "/images/deals/deal4.jpg",
  },
  {
    location: "Punta Cana",
    name: "Iberostar Selection",
    discount: 18,
    nights: "May 20 to 24 · 5 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$989",
    image: "/images/deals/deal2.jpg",
  },
  {
    location: "Cancun",
    name: "Moon Palace Resort",
    discount: 32,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$1,249",
    image: "/images/deals/deal1.jpg",
  },
];

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
      <div className="relative">
        <img src={deal.image} alt={deal.name} className="w-full h-32 lg:h-40 object-cover hover:scale-105 transition-transform duration-500" />
       
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2 mb-1">
        <span className="backdrop-blur-sm text-[#757575] text-[14px] font-medium px-0 py-0.5 rounded-full">
          {deal.location}
        </span>
         <span className=" bg-[#B91C1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          -{deal.discount}%
        </span>
       
        </div>
        <h4 className="font-bold text-gray-900 text-[20px]">{deal.name}</h4>
        <div className="flex flex-row flex-wrap gap-3 mt-1.5">
          <div className="flex items-center gap-1 text-[11px] text-[#757575] border-r-[0.5px] border-[#757575] pr-3">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {deal.nights}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#757575] border-r-[0.5px] border-[#757575] pr-3">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {deal.type}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#757575]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {deal.packageType}
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-gray-100">
          <span className="text-[14px] text-[#1C75BC]">from </span>
          <span className="text-[#1C75BC] font-semibold text-[20px]">{deal.price}</span>
          <span className="text-[14px] text-[#757575]">/pp</span>
        </div>
      </div>
    </div>
  );
}

export default function FlashDeals() {
  return (
    <EmblaSection
      title={
        <h2 className="text-[32px] font-medium text-[#CA2129] flex flex-col xs:flex-row items-center gap-2">
          <span className="w-full xs:w-auto flex items-center gap-2"><Image src="/images/icons/flash.svg" 
                    alt="flash icon" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6" /> Flash Deals</span>
          <span className="text-[32px] font-normal text-[#00537A]">· Updated Hourly</span>
        </h2>
      }
      items={DEALS}
      renderItem={(deal) => <DealCard deal={deal} />}
    />
  );
}