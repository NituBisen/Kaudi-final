import footerbg from "../assets/footerbg.jpeg";
import ctaImg from "../assets/cta_coin.png";

const goldBtn = "inline-flex items-center justify-center gap-2 rounded-[4px] border-2 border-[#d9a52e] bg-gradient-to-b from-[#f2cd6b] to-[#d9a52e] px-8 py-[13px] font-['Oswald'] text-xs font-semibold uppercase tracking-[0.08em] text-[#050505] transition duration-200 hover:-translate-y-px hover:brightness-110";
const outlineBtn = "inline-flex items-center justify-center gap-2 rounded-[4px] border-2 border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.025)] px-8 py-[13px] font-['Oswald'] text-xs font-semibold uppercase tracking-[0.08em] text-[#d9a52e] transition hover:border-[rgba(232,185,73,0.4)]";

export default function CTA() {
  return (
    <section
      className="py-[100px] max-[600px]:py-[85px] font-[Inter] text-center bg-cover bg-center border-y border-[rgba(255,255,255,0.035)]"
      style={{ backgroundImage: `linear-gradient(rgba(2,2,2,0.74),rgba(8,1,1,0.5)),url(${footerbg})` }}
    >
     <div className="mx-auto w-[92%] max-w-[1200px] text-center">
  <img
    src={ctaImg}
    alt="KAUDI"
    className="mx-auto mb-5 h-auto w-[64px] drop-shadow-[0_0_14px_rgba(232,185,73,0.25)]"
  />
  <p className="mb-2.5 font-['Oswald'] text-[11px] uppercase tracking-[0.35em] text-[#C8861A]">
    Enter the KAUDI Presale
  </p>
  <h2 className="font-['Oswald'] text-[clamp(34px,4.5vw,58px)] font-normal uppercase leading-[1.08]">
    <span className="text-white">Your Next </span>{" "}<br></br>
    <span className="text-[#ebae1f]">Real-World Asset</span>
    <br />
    <span className="text-white">Opportunity <br></br> Starts Here.</span>
  </h2>
  <p className="mx-auto my-5 mb-8 max-w-[520px] text-[15px] leading-[1.7] text-white">
    Get early access to KAUDI and be part of the future of blockchain-powered
    real estate participation.
  </p>
  <div className="flex flex-wrap justify-center gap-[14px]">
    <a href="#presale" className={goldBtn}>
      Buy KAUDI
    </a>
    <a href="#token-details" className={outlineBtn}>
      Read Whitepaper
    </a>
  </div>
</div>

    </section>
  );
}
