"use client";
import { useState } from "react";
import { FILTERS } from "../utils/data";

export default function FilterPills() {
  const [active, setActive] = useState("All inclusive");

  return (
    <section className="border-b border-gray-100 mx-auto max-w-[1920px]">
      <div className="max-w-full mx-auto px-4 md:px-6 2lg:px-12 py-3 flex  gap-2 whitespace-nowrap overflow-auto">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === f
                ? "bg-white text-[#292A2D] border-[#CA2129]"
                : "bg-white text-[#292A2D] border-gray-200 hover:border-[#CA2129] hover:text-[#292A2D]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </section>
  );
}
