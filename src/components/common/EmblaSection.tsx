"use client";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Props<T> {
  title: React.ReactNode;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function EmblaSection<T>({ title, items, renderItem }: Props<T>) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  

  const [isPrevActive, setIsPrevActive] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setIsPrevActive(true); 
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setIsPrevActive(true); 
    }
  }, [emblaApi]);


  const activeStyle = "border-[#CA2129] text-[#CA2129] hover:bg-[#CA2129] hover:text-white";
  const disabledStyle = "border-gray-200 text-gray-300";

  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-6 2lg:px-12 py-6 lg:py-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">{title}</div>
        <div className="hidden md:flex gap-2">
          
          
          <button
            onClick={scrollPrev}
            className={`w-8 h-8 font-semibold rounded-full border transition-colors flex items-center justify-center ${
              isPrevActive ? activeStyle : disabledStyle
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

    
          <button
            onClick={scrollNext}
            className={`w-8 h-8 font-semibold rounded-full border transition-colors flex items-center justify-center ${activeStyle}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div key={index} className="flex-[0_0_90%] md:flex-[0_0_32%] lg:flex-[0_0_25%] min-w-0 pl-4">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}