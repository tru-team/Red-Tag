
import SearchCard from "@/src/components/SearchCard";
import { getBannerContent } from "../services/contentful";

export default async function Hero() {
  const data:any = await getBannerContent();
  return (
    <section
      className="relative min-h-[700px] flex flex-col bg-cover bg-center bg-[url(/herobanner.jpg)]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
  
      <div className="mx-auto max-w-[1920px] relative z-10 flex-col lg:flex-row flex-1 flex items-center px-4 md:px-6 2lg:px-12 pt-28 md:pt-32 lg:pt-20 pb-10 w-full gap-12">

        <div className="flex-1 text-white w-full">
          <div className="inline-flex items-center text-black text-medium gap-2 bg-white backdrop-blur-sm border border-white rounded-full px-3 py-1 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-[#CA2129] rounded-full animate-pulse" />
            {data?.badgeText}
          </div>
          <h1 className=" text-[40px] xs:text-5xl 2xl:text-6xl 4xl:text-7xl 7xl:text-[96px] font-semibold leading-tight mb-4">
            {data?.heading?.split(",")[0]?.trim()},<br />
             {data?.heading?.split(",")[1]?.trim()}{" "}
            <span className="text-[#FFD193] animate-pulse">{data?.headingHighlight}</span>
          </h1>
          <p className="text-white text-[14px] lg:text-xl leading-relaxed max-w-3xl">
            {data?.subheading}
          </p>
        </div>

        <div className="w-full lg:max-w-[62%] 2lg:max-w-2xl shrink-0">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
