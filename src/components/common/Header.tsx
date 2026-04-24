"use client";

import { navItems } from "@/src/utils/data";
import Image from "next/image";
import { useState } from "react";

export function Header({data}:any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logo, menuItem } = data;
console.log(menuItem,"fghmj,klogo")
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-4 md:px-6 2lg:px-12 mx-auto max-w-[1920px]">
      <div className="flex items-center justify-between px-4 lg:px-5 2lg:px-8 py-2 lg:py-4 border border-white rounded-[50px]">
      <div className="flex items-center gap-2">
        <Image src={`https:${logo.fields.file.url}`} 
          alt={logo?.fields?.description || "logo" }
          width={132} 
          height={48} 
          className="w-20 h-auto 2lg:w-32 2lg:h-12" />
      </div>
      <nav className="hidden lg:flex items-center gap-1.5">
        {menuItem.map((item : any) => (
          <a key={item?.fields?.label} href={""} className="px-4 py-2 text-[15px] font-medium text-white rounded-lg  hover:text-white/70 transition-colors">
            {item?.fields?.title}
          </a>
        ))}
      </nav>
       <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-2">
          <button className="text-white text-sm font-medium border-[2px] border-white rounded-full px-5 py-1.5 hover:bg-white/50 transition-colors">
            Sign In
          </button>
          <button className="bg-[#B91C1C] border-[2px] border-[#B91C1C] text-white text-sm font-bold rounded-full px-5 py-1.5 hover:bg-[#B91C1C]/50 transition-colors">
            Join Free
          </button>
       
        </div>
         <button className="lg:hidden pr-0 p-2 rounded-lg text-slate-600 hover:bg-slate-50" onClick={() => setIsMenuOpen(true)}>
            <Image src="/toggle.png" 
              alt="toggle menu icon" 
              width={24} 
              height={24} 
              className="w-6 h-6" />
        </button>
      </div>
    
      <div 
        className={`fixed inset-0 bg-slate-950/60 z-[100] transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[101] shadow-2xl p-4 flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full text-slate-500 hover:bg-slate-100">
             <Image src="/close.svg" 
              alt="redtag logo" 
              width={124} 
              height={24} 
              className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="flex items-center justify-between p-3 text-base font-medium text-slate-800 rounded-xl hover:bg-slate-50 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-slate-100">
           <button className="text-red-600 text-sm font-semibold border-[2px] border-red-600 rounded-full px-5 py-1.5 hover:bg-white/10 transition-colors">
            Sign In
          </button>
          <button className="bg-red-600 text-white text-sm font-bold border-[2px] border-red-600 rounded-full px-5 py-1.5 hover:bg-[#B91C1C]/50 transition-colors">
            Join Free
          </button>
        </div>
      </aside>
      </div>
    </header>
  );
}