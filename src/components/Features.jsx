const FEATURES = [
  ["🏛", "Real Estate Access", "Participate in selected real estate opportunities through a blockchain-powered model designed for eligible investors."],
  ["⬡", "Fractional Participation", "Designed to make eligible property participation more accessible through digital tokenization — reducing traditional entry barriers."],
  ["💰", "Rental Income Potential", "Eligible rental distributions may be incorporated according to the applicable property and legal structure for each onboarded asset."],
  ["📈", "Property Value Potential", "A model designed around selected real-estate assets and their potential long-term appreciation, tied to underlying property valuation."],
];

export default function Features() {
  return (
    <section className="py-[85px] max-[600px]:py-[70px] font-[Inter] bg-black" id="features">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <p className="mb-2.5 font-['Oswald'] text-[11px] uppercase tracking-[0.35em] text-[#C8861A]">Built Around Real-World Assets</p>
        <h2 className="font-['Oswald'] text-[clamp(30px,4vw,48px)] font-normal uppercase leading-[1.08]"><span className="text-[#ffff]">What Makes</span> <span className="text-[#e8b949]">KAUDI Different.</span></h2>
        <div className="grid grid-cols-2 gap-4 mt-[42px] max-[650px]:grid-cols-1">
          {FEATURES.map(([icon, title, text]) => (
            <div key={title} className="flex gap-5 p-7 bg-gradient-to-b from-[#090909] to-[#030303] rounded-[8px] border-[rgba(255,255,255,0.055)] duration-300 group border transition hover:-translate-y-1 hover:border-[rgba(232,185,73,0.25)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-center h-11 w-11 text-[19px] text-[#e8b949] bg-[rgba(232,185,73,0.035)] rounded-[8px] border-[rgba(232,185,73,0.28)] shrink-0 border">{icon}</div>
              <div>
                <h3 className="mb-2.5 font-['Oswald'] text-base uppercase tracking-[0.12em] text-white">{title}</h3>
                <p className="text-[13px] leading-[1.7] text-[#8f8f8f]">{text}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-5 p-7 max-[650px]:col-auto min-[651px]:col-span-2 bg-gradient-to-b from-[#090909] to-[#030303] rounded-[8px] border-[rgba(255,255,255,0.055)] duration-300 border transition hover:-translate-y-1 hover:border-[rgba(232,185,73,0.25)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-center h-11 w-11 text-white bg-[rgba(232,185,73,0.035)] rounded-[8px] border-[rgba(232,185,73,0.28)] shrink-0 border">⛓</div>
            <div>
              <h3 className="mb-2.5 font-['Oswald'] text-base uppercase tracking-[0.12em]">Built on BNB Smart Chain</h3>
              <p className="text-[13px] leading-[1.7] text-[#8f8f8f]">KAUDI is designed as a BEP-20 token on BNB Smart Chain, enabling transparent and efficient on-chain transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
