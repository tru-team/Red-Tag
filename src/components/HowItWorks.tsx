interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "Step 1",
    label: "Step 1",
    title: "Describe your trip",
    description:
      "Type naturally - budget, dates, who's travelling, the vibe you want. No forms to fill out.",
  },
  {
    number: "Step 2",
    label: "Step 2",
    title: "AI finds the deals",
    description:
      "Redtag scans live inventory across flights, hotels, and packages to surface your best options.",
  },
  {
    number: "Step 3",
    label: "Step 3",
    title: "Book in one click",
    description:
      "Confirm your pick, enter payment once, and your itinerary lands in your inbox instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-6 2lg:px-12 py-6 lg:py-12">
      <h2 className="text-[32px] font-medium text-[#00537A] mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STEPS.map((step, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-4">
            <span className="inline-block bg-[#498128] text-white text-[14px] font-bold px-7 py-1 rounded-full mb-3">
              {step.label}
            </span>
            <h3 className="font-bold text-[#292A2D] text-base mb-2">{step.title}</h3>
            <p className="text-sm text-[#414042] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
