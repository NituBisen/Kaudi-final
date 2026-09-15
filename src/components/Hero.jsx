 
import Countdown from "./Countdown";
import small_coin1 from "../assets/small_coin1.png";

const STATS = [
  { value: "25M", label: "Total Supply" },
  { value: "$TBD", label: "Presale Price" },
  { value: "BEP-20", label: "Token Standard" },
  { value: "18", label: "Decimals" },
];

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-[4px] border-2 px-8 py-[13px] font-['Oswald'] text-xs font-semibold uppercase tracking-[0.08em] transition duration-200";

const goldBtn = `${btnBase} border-[#d9a52e] bg-gradient-to-b from-[#f2cd6b] to-[#d9a52e] text-[#050505] hover:-translate-y-px hover:brightness-110`;

const outlineBtn = `${btnBase} border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.025)] text-[#d9a52e] hover:border-[rgba(232,185,73,0.4)]`;

export default function Hero() {
  return (
    <>
      {/* =====================================================
          COIN ANIMATION
      ====================================================== */}
      <style>{`
        /* Main coin movement */
        @keyframes kaudiCoinFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-9px) rotate(0.5deg);
          }
        }

        /* Soft golden glow */
        @keyframes kaudiCoinGlow {
          0%,
          100% {
            opacity: 0.75;
          }

          50% {
            opacity: 1;
          }
        }

        /* Very subtle outer ring movement */
        @keyframes kaudiRing {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.28;
          }

          50% {
            transform: scale(1.035);
            opacity: 0.5;
          }
        }

        .kaudi-coin {
          animation:
            kaudiCoinFloat 5s ease-in-out infinite,
            kaudiCoinGlow 3.5s ease-in-out infinite;
          will-change: transform, filter;
        }

        .kaudi-ring {
          animation: kaudiRing 5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .kaudi-coin,
          .kaudi-ring {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="top"
        className="overflow-hidden relative min-h-screen bg-black bg-[url( isolate'./assets/texture.png')]
          bg-cover bg-[center_right] bg-no-repeat
          px-0
          pt-[105px] pb-[55px]
          font-[Inter]

          max-[900px]:pt-[105px]
          max-[900px]:pb-[50px]

          max-[600px]:pt-[95px]
          max-[600px]:pb-[40px]
        "
      >
        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}
        <div
          className="absolute inset-0 bg-[radial-gradient(600px_340px_at_78%_30%,rgba(232,185,73,0.045),transparent_70%),radial-gradient(500px_300px_at_10%_80%,rgba(232,185,73,0.018),transparent_70%)] pointer-events-none"
        />

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}
        <div
          className="z-10 relative mx-auto w-[92%] max-w-[1200px]"
        >
          <div
            className="grid items-center min-[901px]:grid-cols-[1fr_0.75fr] min-[901px]:gap-[40px] max-[900px]:grid-cols-1 max-[900px]:gap-0"
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="z-20 relative">
              {/* Badge */}
              <span
                className="relative inline-flex items-center gap-2 mb-[22px] px-4 py-[7px] font-[ bg-[rgba(232,185,73,0.025)] rounded-full border-[rgba(232,185,73,0.3)] border'Oswald']
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#e8b949]

                  max-[600px]:mb-[18px]
                  max-[600px]:px-3
                  max-[600px]:py-[6px]
                  max-[600px]:text-[9px]
                  max-[600px]:tracking-[0.18em]
                "
              >
                <span className="absolute left-2 h-2 w-2 bg-[#e8b949] rounded-full animate-ping" />

                <span className="absolute left-2 h-2 w-2 bg-[#e8b949] rounded-full" />

                <span className="pl-3">
                  Public Presale · BEP-20 · BNB Smart Chain
                </span>
              </span>

              {/* Heading */}
              <h1
                className="font-['Oswald']
                  text-[clamp(46px,6.5vw,84px)]
                  font-normal
                  uppercase
                  leading-[0.98]

                  max-[900px]:max-w-[700px]

                  max-[600px]:text-[clamp(42px,13vw,60px)]
                  max-[600px]:leading-[1]
                "
              >
                <span className="text-white">Real Estate</span>

                <span
                  className="block text-transparent bg-gradient-to-r from-[#c8861a] via-[#ffe08a] to-[#c8861a] bg-clip-text"
                >
                  On-Chain
                </span>

                <span className="text-white">Accessible</span>
              </h1>

              {/* =================================================
                  MOBILE COIN
              ================================================= */}
              <div
                className="hidden max-[900px]:block max-[900px]:relative max-[900px]:z-10 max-[900px]:mx-auto max-[900px]:mt-[8px] max-[900px]:w-full max-[900px]:max-w-[480px] max-[600px]:max-w-[390px] max-[420px]:max-w-[340px]"
              >
                {/* Fixed coin stage */}
                <div
                  className="relative flex items-center justify-center h-[310px] w-full max-[600px]:h-[265px] max-[420px]:h-[225px] max-[360px]:h-[205px]"
                >
                  {/* Glow behind coin */}
                  <div
                    className="absolute left-1/2 top-1/2 h-[280px] w-[280px] max-[600px]:h-[240px] max-[600px]:w-[240px] max-[420px]:h-[210px] max-[420px]:w-[210px] bg-[radial-gradient(circle,rgba(232,185,73,0.20)_0%,rgba(232,185,73,0.08)_42%,transparent_72%)] rounded-full -translate-x-1/2 -translate-y-1/2 kaudi-ring"
                  />

                  {/* Coin */}
                  <img
                    src={small_coin1}
                    alt="KAUDI"
                    className="z-10 object-contain relative block w-[25%] max-w-[130px] max-[600px]:w-[35%] max-[420px]:w-[78%] max-[360px]:w-[82%] kaudi-coin drop-shadow-[0_0_50px_rgba(232,185,73,0.72)]"
                  />
                </div>

                {/* MOBILE COUNTDOWN — directly below coin */}
                <div
                  className="z-20 relative flex justify-center mt-[-2px] w-full"
                >
                  <Countdown />
                </div>
              </div>

              {/* Description */}
              <p
                className="my-[20px] mb-7 max-w-[460px] max-[900px]:mt-[25px] max-[900px]:max-w-[650px] max-[600px]:my-[22px] max-[600px]:mb-6 max-[600px]:max-w-[95%] max-[600px]:text-[14px] max-[600px]:leading-[1.65] max-[420px]:my-[18px] max-[420px]:text-[13px] max-[420px]:leading-[1.6] text-[15px] leading-[1.7] text-[#8f8f8f]"
              >
                Tokenizing real-world real estate through blockchain — giving
                eligible investors a simpler way to participate in selected
                property opportunities.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-wrap gap-[14px] max-[600px]:gap-[10px] max-[420px]:flex-col max-[420px]:w-full"
              >
                <a
                  href="#presale"
                  className={`
                    ${goldBtn}

                    max-[600px]:px-6
                    max-[600px]:py-3

                    max-[420px]:w-full
                  `}
                >
                  Buy KAUDI
                </a>

                <a
                  href="#token-details"
                  className={`
                    ${outlineBtn}

                    max-[600px]:px-6
                    max-[600px]:py-3

                    max-[420px]:w-full
                  `}
                >
                  ▶ Read Whitepaper
                </a>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 gap-3 mt-[42px] min-[901px]:grid-cols-4 max-[900px]:mt-[35px] max-[600px]:mt-[30px] max-[600px]:gap-2 max-[360px]:gap-2"
              >
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="px-[18px] py-4 min-w-0 max-[600px]:px-3 max-[600px]:py-3 max-[360px]:px-2 max-[360px]:py-[11px] bg-gradient-to-b from-[rgba(255,255,255,0.018)] to-transparent rounded-[6px] border-[rgba(255,255,255,0.055)] border"
                  >
                    <div
                      className="font-['Oswald']
                        text-[26px]
                        font-semibold
                        text-[#e8b949]

                        max-[600px]:text-[22px]
                        max-[360px]:text-[20px]
                      "
                    >
                      {s.value}
                    </div>

                    <div
                      className="mt-[5px] font-['Oswald']
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#8f8f8f]

                        max-[600px]:text-[8px]
                        max-[600px]:tracking-[0.15em]

                        max-[360px]:text-[7px]
                      "
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                DESKTOP RIGHT SIDE
            ================================================= */}
            <div
              className="relative flex flex-col items-center justify-center min-h-[550px] max-[900px]:hidden"
            >
              {/* Fixed coin area */}
              <div
                className="relative flex items-center justify-center h-[455px] w-full"
              >
                {/* Golden glow */}
                <div
                  className="absolute left-1/2 top-1/2 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(232,185,73,0.20)_0%,rgba(232,185,73,0.08)_40%,transparent_52%)] rounded-full -translate-x-1/2 -translate-y-1/2 kaudi-ring"
                />

                {/* Outer subtle ring */}
                <div
                  className="absolute left-1/2 top-1/3 h-[305px] w-[305px] rounded-full border-[rgba(232,185,73,0.10)] -translate-x-1/2 -translate-y-1/2 border kaudi-ring"
                />

                {/* Coin */}
                <img
                  src={small_coin1}
                  alt="KAUDI"
                  className="z-10 object-contain relative block w-[min(430px,45%)] kaudi-coin -mt-[100px] drop-shadow-[0_0_45px_rgba(232,185,73,0.78)]"
                />
              </div>

              {/* =================================================
                  DESKTOP COUNTDOWN
                  Fixed separate area below coin
              ================================================= */}
              <div
                className="z-20 relative flex items-start justify-center mt-[5px] min-h-[100px] w-full"
              >
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 