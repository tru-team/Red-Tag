import React from "react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  highlight?: boolean;
}

const STATS: Stat[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36" fill="none">
<path d="M28.465 8.04936L13.5175 0.271858C12.9175 -0.0356424 12.22 -0.0881421 11.59 0.144358L8.50747 1.26936C7.73497 1.54686 7.47247 2.49936 7.97497 3.14436L15.5875 12.7369L8.07247 15.4669L3.56497 12.7219C3.09997 12.4369 2.52997 12.3844 2.01247 12.5644L0.789973 13.0144C0.0849726 13.2694 -0.215027 14.1019 0.167473 14.7469L4.18747 21.6319C5.35747 23.6344 7.79497 24.5119 9.96997 23.7169L10.9375 23.3644L40.8175 12.4894C43 11.6944 44.1175 9.28686 43.33 7.10436C42.5425 4.92186 40.1275 3.80436 37.945 4.59186L28.465 8.04936ZM2.97997 30.8569C1.65247 30.8569 0.579973 31.9294 0.579973 33.2569C0.579973 34.5844 1.65247 35.6569 2.97997 35.6569H41.38C42.7075 35.6569 43.78 34.5844 43.78 33.2569C43.78 31.9294 42.7075 30.8569 41.38 30.8569H2.97997Z" fill="#00537A"/>
</svg>
    ),
    value: "2.4M+",
    label: "Trips booked",
  },
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
<path d="M19.2 38.4C29.805 38.4 38.4 29.805 38.4 19.2C38.4 8.595 29.805 0 19.2 0C8.595 0 0 8.595 0 19.2C0 29.805 8.595 38.4 19.2 38.4ZM12.405 24.1425C13.935 26.2425 16.41 27.6 19.2 27.6C21.99 27.6 24.465 26.2425 25.995 24.1425C26.58 23.34 27.705 23.16 28.5075 23.745C29.31 24.33 29.49 25.455 28.905 26.2575C26.7225 29.25 23.19 31.2 19.2 31.2C15.21 31.2 11.6775 29.25 9.495 26.2575C8.91 25.455 9.09 24.33 9.8925 23.745C10.695 23.16 11.82 23.34 12.405 24.1425ZM10.8 15.6C10.8 14.2725 11.8725 13.2 13.2 13.2C14.5275 13.2 15.6 14.2725 15.6 15.6C15.6 16.9275 14.5275 18 13.2 18C11.8725 18 10.8 16.9275 10.8 15.6ZM25.2 13.2C26.5275 13.2 27.6 14.2725 27.6 15.6C27.6 16.9275 26.5275 18 25.2 18C23.8725 18 22.8 16.9275 22.8 15.6C22.8 14.2725 23.8725 13.2 25.2 13.2Z" fill="#FEFEFE"/>
</svg>
    ),
    value: "98%",
    label: "One-time satisfaction",
    highlight: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
<path d="M19.2 0C21.96 0 24.36 1.5525 25.5675 3.8325C28.035 3.075 30.825 3.675 32.775 5.625C34.725 7.575 35.325 10.3725 34.5675 12.8325C36.8475 14.04 38.4 16.44 38.4 19.2C38.4 21.96 36.8475 24.36 34.5675 25.5675C35.325 28.035 34.725 30.825 32.775 32.775C30.825 34.725 28.0275 35.325 25.5675 34.5675C24.36 36.8475 21.96 38.4 19.2 38.4C16.44 38.4 14.04 36.8475 12.8325 34.5675C10.365 35.325 7.575 34.725 5.625 32.775C3.675 30.825 3.075 28.0275 3.8325 25.5675C1.5525 24.36 0 21.96 0 19.2C0 16.44 1.5525 14.04 3.8325 12.8325C3.075 10.365 3.675 7.575 5.625 5.625C7.575 3.675 10.3725 3.075 12.8325 3.8325C14.04 1.5525 16.44 0 19.2 0ZM14.4 16.8C15.7275 16.8 16.8 15.7275 16.8 14.4C16.8 13.0725 15.7275 12 14.4 12C13.0725 12 12 13.0725 12 14.4C12 15.7275 13.0725 16.8 14.4 16.8ZM26.4 24C26.4 22.6725 25.3275 21.6 24 21.6C22.6725 21.6 21.6 22.6725 21.6 24C21.6 25.3275 22.6725 26.4 24 26.4C25.3275 26.4 26.4 25.3275 26.4 24ZM25.275 15.675C25.98 14.97 25.98 13.83 25.275 13.1325C24.57 12.435 23.43 12.4275 22.7325 13.1325L13.125 22.725C12.42 23.43 12.42 24.57 13.125 25.2675C13.83 25.965 14.97 25.9725 15.6675 25.2675L25.275 15.675Z" fill="#00537A"/>
</svg>
    ),
    value: "$180",
    label: "Avg. savings per booking",
  },
];

export default function TrustBar() { 
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-6 2lg:px-12 py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row  lg:items-center gap-2 mb-4 justify-between">
        <h2 className="text-[32px] text-left font-medium text-[#00537A]">Trusted by Canadian Travellers</h2>
        <p className="text-[16px] text-[#414042] ml-auto max-w-fulltext-right leading-snug hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nisl aliquet, pharetra dui quis, euismod metus.
        </p>
      </div>
      <div className="grid grid-cols-1 3xs:grid-cols-3 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl p-4 lg:p-8 flex flex-col items-center justify-center gap-3 ${
              stat.highlight
                ? "bg-[#CA2129] text-white shadow-lg shadow-red-200"
                : "bg-[#F2F3F3] text-gray-700 border border-[#F2F3F3] hover:bg-[#E0E0E0] hover:border-[#E0E0E0] transition-colors"
            }`}
          >
            <div className={stat.highlight ? "text-white" : "text-gray-500"}>
              {stat.icon}
            </div>
            <div className="text-center">
              <p className={`text-[24px] md:text-[32px] font-bold ${stat.highlight ? "text-white" : "text-black"}`}>
                {stat.value}
              </p>
              <p className={`text-sm mt-0.5 ${stat.highlight ? "text-white/80" : "text-[#808080]"}`}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
