import { motion } from "framer-motion";
import coinhead from "../assets/small_coin3.png";
import coin2 from "../assets/small_coin2.png";
import tokenBg from "../assets/city.jpg";

const SPEC = [
  ["Token Name", "KAUDI"],
  ["Symbol", "KAUDI"],
  ["Blockchain", "BNB Smart Chain"],
  ["Token Standard", "BEP-20"],
  ["Total Supply", "25,000,000 KAUDI"],
  ["Decimals", "18"],
  ["Token Type", "Real Estate Tokenization"],
  ["Contract Address", "To Be Announced"],
];

export default function TokenDetails() {
  return (
    <section className="relative py-[85px] max-[650px]:py-[70px] font-[Inter] bg-black isolate" id="token-details">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <p className="mb-2.5 font-['Oswald'] text-[11px] uppercase tracking-[0.35em] text-[#C8861A]">Quick Stats</p>
          <h2 className="font-['Oswald'] text-[clamp(30px,4vw,48px)] font-normal uppercase leading-[1.08]"><span className="text-[#ffff]">Token </span> <span className="text-[#e8b949]">Details</span></h2>
        </motion.div>

        <div className="grid items-stretch gap-5 mt-[42px] min-[901px]:grid-cols-2 max-[650px]:mt-8">
          <motion.div
            className="overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] to-[#030303] rounded-[8px] border-[rgba(255,255,255,0.06)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] isolate border"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(232,185,73,0.10)" }}
          >
            <div className="flex items-center gap-3 px-[22px] min-h-[70px] font-[ border-b border-[rgba(255,255,255,0.06)]'Oswald'] text-[11px] uppercase tracking-[0.18em] text-[#e5e5e5] max-[650px]:min-h-16 max-[650px]:px-[18px] max-[650px]:text-[10px]">
              <motion.img src={coinhead} alt="KAUDI" width={28} animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="object-contain h-7 w-7" />
              <span>KAUDI Token Specification</span>
            </div>
            {SPEC.map(([key, value], index) => (
              <motion.div
                key={key}
                className="flex items-center justify-between gap-5 px-[22px] py-[17px] max-[650px]:px-[18px] max-[650px]:py-[14px] max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-[5px] text-[13px] border-b border-[rgba(255,255,255,0.04)] transition-colors"
                initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ x: 5, backgroundColor: "rgba(232,185,73,0.035)" }}
              >
                <span className="font-['Oswald'] uppercase tracking-[0.08em] text-[#777]">{key}</span>
                <span className={`max-w-[58%] text-right text-[#ddd] max-[650px]:max-w-[55%] max-[420px]:max-w-full max-[420px]:text-left ${key === "Contract Address" ? "text-[#e8b949]" : ""}`}>{value}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid gap-4 max-[900px]:grid-cols-2 max-[650px]:flex max-[650px]:flex-col">
            <motion.div
              className="overflow-hidden relative flex flex-col items-center justify-center p-[35px] min-h-[390px] max-[650px]:min-h-[350px] max-[650px]:px-5 max-[650px]:pb-[25px] text-center bg-cover bg-center rounded-[10px] border-[rgba(255,255,255,0.06)] isolate border"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${tokenBg})` }}
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,185,73,0.08),transparent_58%)] pointer-events-none" />
              <div className="z-10 relative flex items-center justify-center mb-2.5 h-[120px] w-[120px]">
                <img src={coin2} alt="KAUDI Token" width={110} className="object-contain h-[110px] w-[110px] drop-shadow-[0_0_16px_rgba(232,185,73,0.30)]" />
              </div>
              <motion.h3
                className="z-10 relative font-['Oswald'] text-[30px] uppercase tracking-[0.32em] text-[#e8b949] max-[650px]:text-[25px]"
                animate={{ textShadow: ["0 0 0 rgba(232,185,73,0)", "0 0 18px rgba(232,185,73,0.45)", "0 0 0 rgba(232,185,73,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >KAUDI</motion.h3>
              <p className="z-10 relative mt-2.5 max-w-[390px] text-xs leading-[1.7] text-[#8f8f8f]">
                BEP-20 token on BNB Smart Chain bridging real-world property with blockchain infrastructure.
              </p>
            </motion.div>

            <motion.div
              className="overflow-hidden relative px-[26px] py-[23px] max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center max-[650px]:px-5 bg-gradient-to-b from-[#090909] to-[#020202] rounded-[10px] border-[rgba(255,255,255,0.055)] isolate border"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(232,185,73,0.12)" }}
            >
              <p className="font-['Oswald'] text-[11px] uppercase tracking-[0.3em] text-[#8f8f8f]">Presale Price</p>
              <motion.p className="my-2 font-['Oswald'] text-[44px] font-bold leading-none text-[#e8b949] max-[650px]:text-[38px]" animate={{ scale: [1, 1.025, 1] }} transition={{ duration: 3, repeat: Infinity }}>$TBD</motion.p>
              <p className="text-xs text-[#8f8f8f]">Official price to be announced at presale launch.</p>
              <div className="flex flex-wrap items-center gap-[7px] mt-[17px] pt-[14px] text-[10px] text-[#6d6d6d] border-t border-[rgba(255,255,255,0.06)]">
                <span className="text-[#e8b949]">◆</span><span>Launch date TBA</span><span className="text-[#e8b949]">Official announcement soon</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
