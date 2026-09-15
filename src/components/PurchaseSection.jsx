import React, { useState } from "react";
import usdt from "../assets/usdt.png";
import coin1 from "../assets/small_coin1.png";

const FLOW = ["Tenant", "Property Manager", "Property Account", "Distribution Pool"];

export default function PurchaseSection() {
  const [payAmount, setPayAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("USDT");
  const [walletConnected, setWalletConnected] = useState(false);

  const handleBuy = () => {
    if (!walletConnected) return alert("Please connect your wallet first.");
    if (!payAmount && !getAmount) return alert("Please enter an amount.");
    alert("KAUDI purchase will be available after the official presale announcement.");
  };

  const goldBtn = "flex min-h-[54px] w-full items-center justify-center rounded-[5px] border border-[#d9a52e] bg-gradient-to-b from-[#f2cd6b] to-[#d9a52e] px-4 font-['Oswald'] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#050505] transition hover:-translate-y-px hover:brightness-110";
  const outlineBtn = "flex min-h-[54px] w-full items-center justify-center rounded-[5px] border border-[rgba(232,185,73,0.24)] bg-[rgba(255,255,255,0.02)] px-4 font-['Oswald'] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#e8b949] transition hover:-translate-y-px hover:bg-[rgba(232,185,73,0.05)]";

  return (
    <section className="relative py-[85px] max-[900px]:py-[75px] max-[600px]:py-[65px] font-[Inter] bg-black isolate" id="presale">
      <div className="grid items-center gap-[55px] mx-auto w-[92%] max-w-[1200px] min-[901px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] max-[1100px]:gap-10 max-[900px]:grid-cols-1">
        <div className="overflow-hidden relative bg-gradient-to-b from-[#0a0a0a] to-[#030303] rounded-[10px] border-[rgba(232,185,73,0.18)] shadow-[0_25px_70px_rgba(0,0,0,0.5)] isolate border">
          <div className="flex items-center justify-between px-6 min-h-[68px] max-[600px]:min-h-[60px] max-[600px]:px-[17px] border-b border-[rgba(232,185,73,0.08)]">
            <div className="flex items-center gap-2.5 font-['Oswald'] text-sm uppercase tracking-[0.14em] text-[#e5e5e5] max-[600px]:gap-2 max-[600px]:text-xs">
              <img src={coin1} alt="KAUDI" className="object-contain h-6 w-6 max-[600px]:h-[21px] max-[600px]:w-[21px]" />
              <span>Purchase Now</span>
            </div>
            <span className="px-2.5 py-1.5 font-[ rounded-full border-[rgba(232,185,73,0.2)] border'Oswald'] text-[8px] uppercase tracking-[0.15em] text-[#e8b949] max-[600px]:px-2 max-[600px]:py-1.5 max-[600px]:text-[7px] max-[400px]:hidden">KAUDI PRESALE</span>
          </div>

          <div className="p-6 max-[600px]:px-[17px] max-[600px]:pb-5 max-[600px]:pt-[21px] max-[400px]:px-[14px]">
            <div>
              <p className="mb-2.5 font-['Oswald'] text-[10px] uppercase tracking-[0.24em] text-[#C8861A]">You Can Buy With</p>
              <button
                type="button"
                className={`flex min-h-[56px] w-full items-center justify-between rounded-[6px] border px-[15px] transition ${selectedPayment === "USDT" ? "border-[rgba(232,185,73,0.35)] bg-[rgba(232,185,73,0.035)]" : "border-[rgba(255,255,255,0.06)]"}`}
                onClick={() => setSelectedPayment("USDT")}
              >
                <span className="flex items-center gap-2.5 font-['Oswald'] text-xs uppercase tracking-[0.08em] text-[#e7e7e7]">
                  <img src={usdt} alt="USDT" className="object-contain h-4 w-4" />
                  USDT
                </span>
                <span className="font-['Oswald'] text-[9px] uppercase tracking-[0.12em] text-[#e8b949]">✓ Selected</span>
              </button>
            </div>

            <div className="flex items-center justify-between my-5 px-[15px] min-h-[54px] font-[ bg-[rgba(255,255,255,0.015)] rounded-[6px] border-[rgba(255,255,255,0.055)] border'Oswald'] text-[11px] uppercase tracking-[0.15em] text-[#8f8f8f]">
              <span>KAUDI Presale Price</span><strong className="text-lg text-[#e8b949]">$TBD</strong>
            </div>

            {[
              ["Amount You Pay", "Enter USDT Amount", "USDT", payAmount, setPayAmount],
              ["Amount You Get", "Enter KAUDI Amount", "KAUDI", getAmount, setGetAmount],
            ].map(([label, placeholder, unit, value, setter]) => (
              <div key={label} className="mb-[18px]">
                <p className="mb-2.5 font-['Oswald'] text-[10px] uppercase tracking-[0.24em] text-[#C8861A]">{label}</p>
                <div className="overflow-hidden flex min-h-[58px] bg-[#070707] rounded-[6px] border-[rgba(255,255,255,0.07)] focus-within:border-[rgba(232,185,73,0.38)] border">
                  <input
                    type="number" min="0" step="any" value={value} onChange={(e) => setter(e.target.value)} placeholder={placeholder}
                    className="flex-1 px-4 placeholder:text-[#555] min-w-0 text-sm text-[#f5f5f5] bg-transparent outline-none"
                  />
                  <span className="flex items-center px-4 font-[ border-l border-[rgba(255,255,255,0.06)]'Oswald'] text-[10px] uppercase tracking-[0.12em] text-[#e8b949]">{unit}</span>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-6 max-[520px]:grid-cols-1">
              <button type="button" className={goldBtn} onClick={() => setWalletConnected((p) => !p)}>
                {walletConnected ? "✓ WALLET CONNECTED" : "CONNECT WALLET"}
              </button>
              <button type="button" className={outlineBtn} onClick={handleBuy}>BUY KAUDI</button>
            </div>

            <p className="mt-5 text-center text-[10px] leading-[1.6] text-[#E1E1E1]">
              Presale terms subject to official announcement. Token participation requires eligibility verification.
            </p>
          </div>
        </div>

       <div className="w-full max-w-[650px] max-[900px]:mx-auto -mt-[100px]">
  <p className="mb-2 font-['Oswald'] text-[11px] uppercase tracking-[0.35em] text-[#C8861A]">
    Presale Access
  </p>
  <h2 className="font-['Oswald'] text-[clamp(36px,5vw,60px)] font-normal uppercase leading-[1.05]">
 
    <span className="block text-white">ACCESS REAL ESTATE</span>
    <span className="block text-[#e8b949]">Through KAUDI.</span>
  </h2>
  <p className="mt-4 max-w-[560px] text-[14px] leading-[1.75] text-[#8f8f8f]">
    KAUDI brings real estate and blockchain together, creating a digital model
    for fractional participation in selected real-world property assets.
  </p>
          <div className="overflow-hidden relative mt-8 p-[22px] bg-gradient-to-b from-[#0D1018] to-[#030303] rounded-[10px] border-[rgba(232,185,73,0.14)] isolate border">
            <p className="mb-5 font-['Oswald'] text-[11px] uppercase tracking-[0.28em] text-[#C8861A]">Rental Income Flow</p>
            <div className="flex flex-wrap items-center gap-2 max-[600px]:grid max-[600px]:grid-cols-2">
              {FLOW.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex flex-1 items-center justify-center">
                    <span className="px-2.5 py-2.5 w-full text-center font-[ bg-[rgba(255,255,255,0.018)] rounded-[5px] border-[rgba(255,255,255,0.07)] border'Oswald'] text-[9px] uppercase tracking-[0.05em] text-[#bdbdbd]">{step}</span>
                  </div>
                  {index < FLOW.length - 1 && <span className="px-0.5 max-[600px]:hidden text-sm text-[rgba(232,185,73,0.45)]">→</span>}
                </React.Fragment>
              ))}
              <span className="px-0.5 max-[600px]:hidden text-sm text-[rgba(232,185,73,0.45)]">→</span>
              <div className="flex flex-1 items-center justify-center max-[600px]:col-span-2">
                <span className="px-2.5 py-2.5 w-full text-center font-[ bg-[rgba(232,185,73,0.035)] rounded-[5px] border-[rgba(232,185,73,0.25)] border'Oswald'] text-[9px] uppercase tracking-[0.05em] text-[#e8b949]">Token Holders</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5 p-4 bg-[#050505] rounded-[10px] border-[rgba(232,185,73,0.14)] border">
            <div className="flex items-center justify-center h-10 w-10 text-lg text-[#e8b949] shrink-0">⛓</div>
            <div className="flex-1 min-w-0">
              <p className="font-['Oswald'] text-[11px] uppercase tracking-[0.18em] text-[#fffffd]">Built on BNB Smart Chain</p>
              <p className="mt-1 text-[10px] leading-[1.5] text-[#8f8f8f]">BEP-20 · Transparent · Efficient On-Chain Transactions</p>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}
