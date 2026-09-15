import cardbg from "../assets/hero-bg.png";

const STEPS = [
  ["Connect Your Wallet", "Connect your compatible crypto wallet to the KAUDI presale platform."],
  ["Select Payment", "Choose USDT as your preferred payment method for the presale."],
  ["Enter Amount", "Enter the amount you want to invest and review your KAUDI allocation."],
  ["Confirm & Receive", "Confirm the transaction and receive your KAUDI allocation according to the official presale terms."],
];

export default function HowToBuy() {
  return (
    <section className="py-[85px] max-[600px]:py-[70px] font-[Inter] bg-black border-y border-[rgba(255,255,255,0.035)]" id="how-to-buy">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <p className="mb-2.5 text-center font-['Oswald'] text-[11px] uppercase tracking-[0.35em] text-[#C8861A]">How to Participate</p>
        <h2 className="text-center font-['Oswald'] text-[clamp(30px,4vw,48px)] font-normal uppercase leading-[1.08]">
     <span className="text-[#ffff]">   Buy KAUDI in&nbsp;</span>     <span className="text-[#e8b949]">4 Easy Steps.</span>
        </h2>
        <div className="grid grid-cols-4 gap-[15px] mt-[42px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {STEPS.map(([title, text], i) => (
            <div
              key={title}
              className="overflow-hidden relative p-6 min-h-[165px] text-left bg-cover bg-center rounded-[8px] border-[rgba(255,255,255,0.055)] duration-300 group isolate border transition hover:-translate-y-1 hover:border-[rgba(232,185,73,0.28)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${cardbg})` }}
            >
              <div className="absolute inset-0 bg-black/50 -z-10" />
  
              <h3 className="mb-2.5 font-['Oswald'] text-[17px] uppercase tracking-[0.08em] text-[#e2d9c8]">{title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#c0b7b2c0] opacity-85">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
