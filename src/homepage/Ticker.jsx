import React from "react";

// ============================================================
// DATA
// ============================================================

const TICKER_ITEMS = [
  "Real-World Asset Tokenization",
  "BNB Smart Chain",
  "25,000,000 KAUDI",
  "Fractional Property Ownership",
  "On-Chain Transparency",
  "Real Estate",
];

// ============================================================
// TICKER
// ============================================================

export default function Ticker() {
  return (
    <section className="w-full ticker-outer">
      <div className="mx-auto px-5 w-full max-w-[1450px] sm:px-8 md:px-10 lg:px-0">
        <div className="overflow-hidden relative w-full bg-black ticker-strip">
          <div className="ticker-track">
            <TickerGroup />
            <TickerGroup />
            <TickerGroup />
          </div>
        </div>
      </div>

      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`
        /* ======================================================
           OUTER WRAPPER
        ====================================================== */

        /* TICKER */
.ticker-outer {
  width: 100%;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .ticker-outer {
    padding-top: 5px !important;
    padding-bottom:10px !important;
  }
}

        /* ======================================================
           TICKER BOX
           Contained card, max-width 1300px, clipped corners.
        ====================================================== */

        .ticker-strip {
          height: 50px;

          border: 1px solid rgba(184, 134, 38, 0.16);
          border-radius: 10px;

          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 640px) {
          .ticker-strip {
            height: 50px;
          }
        }

        @media (min-width: 1024px) {
          .ticker-strip {
            height: 50px;
          }
        }

        /* ======================================================
           MARQUEE TRACK
           Three identical groups are rendered side by side; the
           track translates exactly -33.333% (one group width),
           so the loop point is invisible.
        ====================================================== */

        .ticker-track {
          display: flex;
          width: max-content;
          height: 100%;

          animation: ticker-scroll 32s linear infinite;
        }

        .ticker-strip:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-33.3333%);
          }
        }

        /* ======================================================
           TICKER GROUP / ITEMS
        ====================================================== */

        .ticker-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          height: 100%;
        }

       .ticker-item {
  display: inline-flex;
  align-items: center;

  padding: 0 18px;

  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;

  color: #DEDEDE;
}

        @media (min-width: 1024px) {
          .ticker-item {
            padding: 0 24px;
            font-size: 13px;
          }
        }

        @media (max-width: 639px) {
          .ticker-item {
            padding: 0 12px;
            font-size: 10px;
            letter-spacing: 2px;
          }
        }

        .ticker-dot {
          margin-left: 18px;

          color: #B88626;
          font-size: 12px;
        }

        @media (min-width: 1024px) {
          .ticker-dot {
            margin-left: 24px;
          }
        }

        @media (max-width: 639px) {
          .ticker-dot {
            margin-left: 12px;
            font-size: 10px;
          }
        }

        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// TICKER GROUP
// One full pass of all items; rendered 3x by the parent so the
// marquee can loop seamlessly with a -33.333% translation.
// ============================================================

function TickerGroup() {
  return (
    <div className="ticker-group" aria-hidden="true">
      {TICKER_ITEMS.map((item, index) => (
        <span key={index} className="ticker-item">
          {item}
          <span className="ticker-dot">·</span>
        </span>
      ))}
    </div>
  );
}