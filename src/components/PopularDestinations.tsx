"use client";
import { useState } from "react";
import { EmblaSection } from "./common/EmblaSection";
import { DESTINATIONS } from "../utils/data";

function DestCard({ country, city, price, image }: any) {
  const [liked, setLiked] = useState(false);
  return (
    <>
    <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
      <img src={image} alt={city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/10" />
        {/* <button onClick={() => setLiked(!liked)} className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg className={`w-4 h-4 ${liked ? "fill-[#CA2129] text-[#CA2129]" : "text-white fill-none"}`} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button> */}
    </div>
    <div className="relative px-4 py-4 text-center text-[#292A2D]">
        <h3 className="text-[30px] 2lg:text-4xl font-bold leading-none mb-0">{city}</h3>
        <span className=" text-[#757575] backdrop-blur-sm text-[14px] font-medium px-4 py-0 rounded-full mb-0 inline-block">{country}</span>
        <p className="font-bold text-2xl"><span className="font-normal text-[#1C75BC] text-[14px]">from</span> <span className="font-semibold text-[#1C75BC]">${price.replace("$", "")}</span> <span className="font-normal text-[14px]">/pp</span></p>
      </div>
    
      </>
  );
}

export default function PopularDestinations() {
  return (
    <EmblaSection
      title={<h2 className="text-[32px] font-medium text-[#00537A]">Popular Destinations</h2>}
      items={DESTINATIONS}
      renderItem={(d) => <DestCard {...d} />}
    />
  );
}