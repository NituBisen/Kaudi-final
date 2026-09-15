import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import heroBackground from "../assets/images/hero-bg.png";

// ============================================================
// DATA
// ============================================================

const STATS = [
  { value: "25M", label: "Total Supply" },
  { value: "BEP-20", label: "Standard" },
  { value: "RWA", label: "Asset Class" },
];

// ============================================================
// HERO SECTION
// ============================================================

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden relative mx-auto min-h-screen bg-[#05070C] hero-section"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* ========================================================
          BACKGROUND OVERLAY
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none hero-overlay" />

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="z-10 relative flex items-center mx-auto px-6 min-h-screen max-w-[1300px] hero-content-wrap sm:px-8 md:px-12 lg:px-33">
        <div className="flex flex-col w-full max-w-[520px] hero-content-col sm:py-5 lg:py-0">

          {/* ======================================================
              BADGE
          ====================================================== */}

          <Reveal direction="up" delay={100}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#F5C2400D] rounded-sm border-[#F5C24033] hero-badge-wrap hero-badge border backdrop-blur-sm sm:mb-8">
              <span className="h-[6px] w-[6px] bg-[#F5C240] rounded-full shadow-[0_0_8px_rgba(245,194,64,0.85)] shrink-0" />

              <span className="text-[10px] font-normal tracking-[2px] text-[#F5C240] roboto hero-badge-text sm:text-[9px]">
                BEP-20 · BNB SMART CHAIN · 25,000,000 KAUDI
              </span>
            </div>
          </Reveal>

          {/* ======================================================
              HEADING
          ====================================================== */}

          <Reveal direction="up" delay={200}>
            <h1 className="font-normal text-[#E2D9C8] oswald hero-heading uppercase">
              <span className="block">
                Real Assets
              </span>

              <span className="block hero-gold-text">
                Digital
              </span>

              <span className="block">
                Access
              </span>
            </h1>
          </Reveal>

          {/* ======================================================
              DESCRIPTION
          ====================================================== */}

          <Reveal direction="up" delay={300}>
            <p className="mt-6 hero-description sm:mt-7">
              KAUDI tokenizes selected real-world properties on BNB Smart Chain —
              bringing fractional ownership, on-chain transparency and blockchain
              infrastructure to real estate.
            </p>
          </Reveal>

          {/* ======================================================
              TAGLINE
          ====================================================== */}

          <Reveal direction="up" delay={400}>
            <p className="mt-5 text-[14px] font-normal tracking-[1.5px] text-[#F5C240] oswald sm:mt-6">
              Own Less. Access More.
            </p>
          </Reveal>

          {/* ======================================================
              BUTTONS
          ====================================================== */}

          <Reveal direction="up" delay={500}>
            <div className="hero-buttons">

              {/* ==================================================
                  BUY NOW
              ================================================== */}

              <Link
                to="/presale"
                className="hero-buy-btn"
              >
                Buy Now
              </Link>

              {/* ==================================================
                  EXPLORE ECOSYSTEM
              ================================================== */}

              <a
                href="#ecosystem"
                className="hero-explore-btn"
              >
                <span className="hero-explore-text">
                  Explore Ecosystem
                </span>

                <span
                  aria-hidden="true"
                  className="hero-explore-arrow"
                >
                  →
                </span>
              </a>

            </div>
          </Reveal>

          {/* ======================================================
              STATS
          ====================================================== */}

          <Reveal direction="up" delay={600}>
            <div className="flex flex-wrap items-start gap-x-10 gap-y-5 mt-12 w-full hero-stats">

              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col hero-stat"
                >
                  <span className="hero-stat-value">
                    {stat.value}
                  </span>

                  <span className="hero-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}

            </div>
          </Reveal>

        </div>
      </div>

      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           BACKGROUND IMAGE
        ====================================================== */

        .hero-section {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center right;
        }


        /* ======================================================
           DESKTOP / TABLET OVERLAY
        ====================================================== */

        .hero-overlay {
          background: linear-gradient(
            90deg,
            rgba(4, 6, 12, 0.86) 0%,
            rgba(4, 6, 12, 0.55) 38%,
            rgba(4, 6, 12, 0.05) 62%,
            rgba(4, 6, 12, 0) 100%
          );
        }


        /* ======================================================
           MOBILE — MORE DARK OVERLAY
        ====================================================== */

        @media (max-width: 767px) {

          .hero-section {
            background-position: 70% center;
          }

          .hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(4, 6, 12, 0.82) 0%,
              rgba(4, 6, 12, 0.72) 50%,
              rgba(4, 6, 12, 0.88) 100%
            ) !important;

            opacity: 1 !important;
          }

        }


        /* ======================================================
           SMALL MOBILE — EXTRA DARK
        ====================================================== */

        @media (max-width: 480px) {

          .hero-section {
            background-position: 78% top;
          }

          .hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(4, 6, 12, 0.85) 0%,
              rgba(4, 6, 12, 0.75) 50%,
              rgba(4, 6, 12, 0.90) 100%
            ) !important;

            opacity: 1 !important;
          }

        }


        /* ======================================================
           CONTENT
        ====================================================== */

        .hero-content-col {
          align-items: flex-start;
          text-align: left;
        }


        @media (max-width: 767px) {

          .hero-content-col {
            align-items: center;
            text-align: center;

            margin-left: auto;
            margin-right: auto;
          }

        }


        /* ======================================================
           HEADING
        ====================================================== */

        .hero-heading {
          font-family: 'Oswald', sans-serif;

          font-size: clamp(38px, 10.5vw, 90px);

          line-height: 0.98;
          letter-spacing: -1px;
        }


        @media (min-width: 375px) {

          .hero-heading {
            font-size: clamp(42px, 10vw, 90px);
          }

        }


        @media (min-width: 480px) {

          .hero-heading {
            font-size: clamp(48px, 9vw, 90px);
          }

        }


        @media (min-width: 555px) {

          .hero-heading {
            font-size: clamp(52px, 9vw, 90px);
          }

        }


        @media (min-width: 640px) {

          .hero-heading {
            font-size: clamp(58px, 8.5vw, 90px);
          }

        }


        @media (min-width: 768px) {

          .hero-heading {
            font-size: clamp(64px, 8vw, 90px);
          }

        }


        @media (min-width: 1024px) {

          .hero-heading {
            font-size: clamp(72px, 7vw, 90px);

            letter-spacing: -2px;
          }

        }


        @media (min-width: 1200px) {

          .hero-heading {
            font-size: 90px;
          }

        }


        /* ======================================================
           GOLD TEXT
        ====================================================== */

        .hero-gold-text {
          background: linear-gradient(
            90deg,
            #C8861A 0%,
            #F5C240 30%,
            #FFE08A 50%,
            #F5C240 70%,
            #C8861A 100%
          );

          background-clip: text;
          -webkit-background-clip: text;

          color: transparent;
          -webkit-text-fill-color: transparent;
        }


        /* ======================================================
           DESCRIPTION
        ====================================================== */

        .hero-description {
          display: block;

          width: 100%;
          max-width: 350px;

          box-sizing: border-box;

          margin-left: auto;
          margin-right: auto;

          font-family: 'Roboto', sans-serif !important;

          font-weight: 400;

          font-size: 14px;

          line-height: 1.6;

          color: #A7A7A7;

          overflow-wrap: break-word;
          word-break: normal;

          text-align: left;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .hero-description:hover {
          color: #C5C5C5;

          transform: translateY(-2px);
        }


        /* ======================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {

          .hero-description {
            width: 100%;
            max-width: 310px;

            margin-left: auto;
            margin-right: auto;

            font-size: 12px;

            line-height: 1.55;

            text-align: left;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (min-width: 361px) and (max-width: 479px) {

          .hero-description {
            width: 100%;
            max-width: 340px;

            margin-left: auto;
            margin-right: auto;

            font-size: 12.5px;

            line-height: 1.6;

            text-align: left;
          }

        }


        /* ======================================================
           SMALL TABLET
        ====================================================== */

        @media (min-width: 480px) and (max-width: 767px) {

          .hero-description {
            width: 100%;
            max-width: 400px;

            margin-left: auto;
            margin-right: auto;

            font-size: 13.5px;

            line-height: 1.6;

            text-align: left;
          }

        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (min-width: 768px) and (max-width: 1023px) {

          .hero-description {
            width: 100%;
            max-width: 440px;

            margin-left: auto;
            margin-right: auto;

            font-size: 15px;

            line-height: 1.6;

            text-align: left;
          }

        }


        /* ======================================================
           LG / LAPTOP
        ====================================================== */

        @media (min-width: 1024px) {

          .hero-description {
            width: 480px !important;
            max-width: 480px !important;

            margin-left: auto;
            margin-right: auto;

            font-family: 'Roboto', sans-serif !important;

            font-size: 15px;

            line-height: 28px;

            text-align: left !important;
          }

        }


        /* ======================================================
           BADGE
        ====================================================== */

        .hero-badge-wrap {
          max-width: 100%;
        }


        @media (max-width: 400px) {

          .hero-badge-wrap {
            align-items: flex-start;
          }

          .hero-badge-text {
            white-space: normal;
            text-align: left;
          }

        }


        /* ======================================================
           BUTTON CONTAINER
        ====================================================== */

        .hero-buttons {

          width: 100%;

          display: flex;

          flex-direction: row;

          align-items: center;

          justify-content: flex-start;

          gap: 16px;

          margin-top: 36px;

          box-sizing: border-box;
        }


        /* ======================================================
           COMMON BUTTON
        ====================================================== */

        .hero-buy-btn,
        .hero-explore-btn {

          display: inline-flex !important;

          align-items: center;

          justify-content: center;

          gap: 8px;

          height: 51px !important;

          min-height: 51px !important;

          max-height: 51px !important;

          padding: 0 !important;

          margin: 0 !important;

          border-radius: 4px;

          box-sizing: border-box;

          font-family: 'Roboto', sans-serif !important;

          font-size: 12px;

          letter-spacing: 1.5px;

          text-transform: uppercase;

          text-decoration: none !important;

          white-space: nowrap;

          flex-grow: 0 !important;

          flex-shrink: 0 !important;

          flex-basis: auto !important;
        }


        /* ======================================================
           BUY NOW
           110px × 51px
        ====================================================== */

        .hero-buy-btn,
        .hero-buy-btn:link,
        .hero-buy-btn:visited,
        .hero-buy-btn:hover,
        .hero-buy-btn:focus,
        .hero-buy-btn:active {

          width: 110px !important;

          min-width: 110px !important;

          max-width: 110px !important;

          flex: 0 0 110px !important;

          height: 51px !important;

          min-height: 51px !important;

          max-height: 51px !important;

          padding-left: 0 !important;

          padding-right: 0 !important;

          font-weight: 700 !important;

          color: #07090C !important;

          -webkit-text-fill-color: #07090C !important;

          background: linear-gradient(
            100deg,
            #C8861A 6.17%,
            #F5C240 93.83%
          );

          border: none;

          box-shadow:
            0 0 24px rgba(245, 194, 64, 0.25);

          cursor: pointer;

          transition:
            transform 200ms ease,
            box-shadow 200ms ease,
            filter 200ms ease;
        }


        /* ======================================================
           BUY NOW HOVER
        ====================================================== */

        .hero-buy-btn:hover,
        .hero-buy-btn:focus-visible {

          transform: translateY(-3px);

          filter: brightness(1.08);

          box-shadow:
            0 8px 25px rgba(245, 194, 64, 0.3),
            0 0 18px rgba(245, 194, 64, 0.2);

          outline: none;
        }


        .hero-buy-btn:active {
          transform: translateY(0);
        }


        /* ======================================================
           EXPLORE ECOSYSTEM
           200px × 51px
        ====================================================== */

        .hero-explore-btn,
        .hero-explore-btn:link,
        .hero-explore-btn:visited,
        .hero-explore-btn:hover,
        .hero-explore-btn:focus,
        .hero-explore-btn:focus-visible,
        .hero-explore-btn:active {

          width: 200px !important;

          min-width: 200px !important;

          max-width: 200px !important;

          flex: 0 0 200px !important;

          height: 51px !important;

          min-height: 51px !important;

          max-height: 51px !important;

          padding-left: 0 !important;

          padding-right: 0 !important;

          display: inline-flex !important;

          align-items: center;

          justify-content: center;

          gap: 8px;

          box-sizing: border-box;

          font-family: 'Roboto', sans-serif !important;

          font-size: 12px !important;

          font-weight: 300 !important;

          letter-spacing: 1.5px;

          text-transform: uppercase;

          text-decoration: none !important;

          color: #FFFFFF !important;

          -webkit-text-fill-color: #FFFFFF !important;

          background: rgba(11, 14, 22, 0.35);

          border: 1px solid rgba(184, 134, 38, 0.5);

          cursor: pointer;

          transition:
            transform 200ms ease,
            background 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease;
        }


        /* ======================================================
           EXPLORE TEXT + ARROW
           FORCE WHITE
        ====================================================== */

        .hero-explore-btn .hero-explore-text,
        .hero-explore-btn .hero-explore-arrow {

          color: #FFFFFF !important;

          -webkit-text-fill-color: #FFFFFF !important;

          background: none !important;

          background-image: none !important;

          background-clip: initial !important;

          -webkit-background-clip: initial !important;
        }


        /* ======================================================
           EXPLORE HOVER
        ====================================================== */

        .hero-explore-btn:hover {

          transform: translateY(-3px);

          background: rgba(11, 14, 22, 0.55);

          border-color: rgba(245, 194, 64, 0.8);

          box-shadow:
            0 8px 25px rgba(245, 194, 64, 0.12),
            0 0 18px rgba(245, 194, 64, 0.08);

          outline: none;
        }


        .hero-explore-btn:hover .hero-explore-text,
        .hero-explore-btn:hover .hero-explore-arrow,
        .hero-explore-btn:focus .hero-explore-text,
        .hero-explore-btn:focus .hero-explore-arrow,
        .hero-explore-btn:active .hero-explore-text,
        .hero-explore-btn:active .hero-explore-arrow {

          color: #FFFFFF !important;

          -webkit-text-fill-color: #FFFFFF !important;
        }


        .hero-explore-btn:active {
          transform: translateY(0);
        }


        /* ======================================================
           MOBILE BUTTONS
        ====================================================== */

        @media (max-width: 767px) {

          .hero-buttons {

            align-items: center;

            justify-content: center;

            flex-direction: column;

            gap: 14px;
          }


          /* BUY NOW — 110PX */

          .hero-buy-btn {

            width: 110px !important;

            min-width: 110px !important;

            max-width: 110px !important;

            flex: 0 0 110px !important;

            height: 51px !important;
          }


          /* EXPLORE — 200PX */

          .hero-explore-btn {

            width: 200px !important;

            min-width: 200px !important;

            max-width: 200px !important;

            flex: 0 0 200px !important;

            height: 51px !important;
          }

        }


        /* ======================================================
           STATS
        ====================================================== */

        .hero-stats {
          justify-content: flex-start;
        }


        @media (max-width: 767px) {

          .hero-stats {
            justify-content: center;
          }

        }


        .hero-stat {

          align-items: flex-start;

          cursor: pointer;

          transition:
            transform 250ms ease;
        }


        .hero-stat:hover {
          transform: translateY(-3px);
        }


        @media (max-width: 767px) {

          .hero-stat {
            align-items: center;
          }

        }


        .hero-stat-value {

          font-family:
            'Oswald',
            'Barlow Condensed',
            sans-serif;

          font-size: 22px;

          font-weight: 700;

          line-height: 1;

          color: #F5C240;

          text-align: left;

          transition:
            text-shadow 250ms ease,
            transform 250ms ease;
        }


        .hero-stat:hover .hero-stat-value {

          transform: scale(1.05);

          text-shadow:
            0 0 12px rgba(245, 194, 64, 0.4);
        }


        @media (max-width: 767px) {

          .hero-stat-value {
            text-align: center;
          }

        }


        @media (min-width: 640px) {

          .hero-stat-value {
            font-size: 24px;
          }

        }


        .hero-stat-label {

          margin-top: 6px;

          font-family:
            'JetBrains Mono',
            'IBM Plex Mono',
            ui-monospace,
            monospace;

          font-size: 10px;

          font-weight: 500;

          letter-spacing: 2px;

          text-transform: uppercase;

          text-align: left;

          color: #7C879C;

          transition:
            color 250ms ease;
        }


        .hero-stat:hover .hero-stat-label {
          color: #A5ADBA;
        }


        @media (max-width: 767px) {

          .hero-stat-label {
            text-align: center;
          }

        }


        @media (min-width: 640px) {

          .hero-stat-label {
            font-size: 11px;
          }

        }


        /* ======================================================
           SAFE CONTENT WIDTH
        ====================================================== */

        .hero-content-wrap {

          max-width: 100%;

          box-sizing: border-box;
        }


        .hero-section {
          height: auto;
        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-buy-btn,
          .hero-explore-btn,
          .hero-stat,
          .hero-stat-value,
          .hero-stat-label,
          .hero-description {

            transition: none;
          }


          .hero-buy-btn:hover,
          .hero-buy-btn:focus-visible,
          .hero-buy-btn:active,
          .hero-explore-btn:hover,
          .hero-explore-btn:focus-visible,
          .hero-explore-btn:active,
          .hero-stat:hover,
          .hero-description:hover {

            transform: none;
          }

        }

      `}</style>
    </section>
  );
}