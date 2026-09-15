import React from "react";
import Reveal from "../common/Reveal";

// ============================================================
// ASSETS
// ============================================================

import roadmapBackground from "../assets/images/roadmap-bg.png";

// ============================================================
// DATA
// ============================================================

const ROADMAP_ITEMS = [
  {
    date: "Q3 2026",
    phase: "FOUNDATION",
    isCurrent: true,
    items: [
      "Concept finalization",
      "Real-estate business model",
      "Property portfolio identification",
      "Tokenomics",
      "Whitepaper",
      "Brand identity",
      "BEP-20 smart contract development",
      "Smart contract testing",
    ],
  },
  {
    date: "Q3–Q4 2026",
    phase: "TECHNOLOGY",
    isCurrent: false,
    items: [
      "Legal structure assessment",
      "Wallet integration",
      "Investor dashboard",
      "Admin dashboard",
      "KYC/AML integration",
      "Security testing and audit",
    ],
  },
  {
    date: "Q4 2026",
    phase: "FIRST PROPERTY",
    isCurrent: false,
    items: [
      "First property onboarding",
      "Property valuation",
      "Legal documentation",
      "Token allocation",
      "Rental-income framework",
      "Investor onboarding",
    ],
  },
  {
    date: "Q1 2027",
    phase: "PLATFORM LAUNCH",
    isCurrent: false,
    items: [
      "Investor registration",
      "KYC verification",
      "Property marketplace",
      "KAUDI purchase functionality",
      "Portfolio tracking",
      "Rental distribution functionality",
      "Community launch",
    ],
  },
  {
    date: "Q2–Q3 2027",
    phase: "EXPANSION",
    isCurrent: false,
    items: [
      "Additional properties",
      "Commercial real estate",
      "Residential properties",
      "Hospitality assets",
      "International opportunities",
      "Strategic partnerships",
    ],
  },
  {
    date: "Q3–Q4 2027",
    phase: "LIQUIDITY",
    isCurrent: false,
    items: [
      "Compliant transfer infrastructure",
      "Secondary-market functionality",
      "Liquidity partnerships",
      "Advanced investor dashboard",
      "Property exit mechanisms",
    ],
  },
  {
    date: "2028+",
    phase: "GLOBAL EXPANSION",
    isCurrent: false,
    items: [
      "Multi-country property portfolio",
      "Global partnerships",
      "Institutional participation",
      "Additional asset classes",
      "Cross-border infrastructure",
    ],
  },
];

// ============================================================
// PROGRESS
// ============================================================

const PROGRESS_PERCENT = 18;

// ============================================================
// ROADMAP SECTION
// ============================================================

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="roadmap-section"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.72)
        ), url(${roadmapBackground})`,
      }}
    >
      {/* ====================================================
          1300PX CENTERED CONTENT
      ==================================================== */}

      <div className="roadmap-container">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <Reveal delay={100}>
          <span className="roadmap-label">
            06 — Roadmap
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="roadmap-heading uppercase">
            <span className="block roadmap-heading-gold">
              Building The
            </span>

            <span className="block roadmap-heading-cream">
              KAUDI Ecosystem
            </span>
          </h2>
        </Reveal>

        {/* ====================================================
            TIMELINE
        ==================================================== */}

        <div className="relative mt-16 roadmap-timeline sm:mt-20">

          <div
            className="roadmap-line"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-5 sm:gap-6 lg:gap-7">

            {ROADMAP_ITEMS.map((item, index) => (

              <Reveal
                delay={120 + index * 90}
                key={item.date}
              >
                <li className="relative roadmap-row">

                  {/* ==================================================
                      TIMELINE NODE
                  ================================================== */}

                  <span
                    className={`roadmap-node ${
                      item.isCurrent
                        ? "roadmap-node--current"
                        : ""
                    }`}
                    aria-hidden="true"
                  />

                  {/* ==================================================
                      ROADMAP CARD
                  ================================================== */}

                  <div
                    className={`roadmap-card ${
                      item.isCurrent
                        ? "roadmap-card--current"
                        : ""
                    }`}
                  >

                    {/* CARD HEADER */}

                    <div className="roadmap-card-header">

                      <span className="roadmap-date">
                        {item.date}
                      </span>

                      {item.isCurrent && (
                        <span className="roadmap-badge roadmap-badge--current">
                          <span aria-hidden="true">
                            ✦
                          </span>

                          Current
                        </span>
                      )}

                      <span className="roadmap-phase">
                        {item.phase}
                      </span>

                    </div>

                    {/* TASK TAGS */}

                    <div className="roadmap-tags">

                      {item.items.map((task) => (

                        <span
                          key={task}
                          className="roadmap-tag"
                        >
                          {task}
                        </span>

                      ))}

                    </div>

                  </div>

                </li>

              </Reveal>

            ))}

          </ol>

        </div>

        {/* ====================================================
            BOTTOM PROGRESS TIMELINE
        ==================================================== */}

        <Reveal delay={200}>

          <div className="mt-6 roadmap-progress sm:mt-8">

            <div
              className="roadmap-progress-track"
              role="progressbar"
              aria-valuenow={PROGRESS_PERCENT}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Overall roadmap progress"
            >

              <div
                className="roadmap-progress-fill"
                style={{
                  width: `${PROGRESS_PERCENT}%`,
                }}
              />

            </div>

            <div className="roadmap-progress-labels">
              <span>Q3 2026</span>
              <span>2028+</span>
            </div>

          </div>

        </Reveal>

      </div>

      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           ROADMAP SECTION
           
           FULL WIDTH BACKGROUND
        ====================================================== */

        .roadmap-section {
          position: relative;

          width: 100%;
          max-width: none;

          margin: 0;

          overflow: hidden;

          font-family:
            'Oswald',
            'Barlow Condensed',
            sans-serif;

          background-color: #000000;

          background-repeat: no-repeat;

          /* FULL BACKGROUND */
          background-size: cover;

          background-position: center center;
        }


        /* ======================================================
           1300PX CONTENT CONTAINER
        ====================================================== */

        .roadmap-container {
          position: relative;

          width: 1300px;

          max-width: calc(100% - 40px);

          margin: 0 auto;

          padding-top: 20px;
          padding-bottom: 20px;

          box-sizing: border-box;

          z-index: 10;
        }


        /* ======================================================
           LABEL / HEADING
        ====================================================== */

        .roadmap-label {
          display: inline-block;

          font-family:
            'Roboto Mono',
            monospace;

          font-size: 11px;

          font-weight: 400;

          letter-spacing: 2.6px;

          text-transform: uppercase;

          color: #C8861A;

          cursor: pointer;

          transition:
            color 300ms ease,
            letter-spacing 300ms ease,
            transform 300ms ease,
            text-shadow 300ms ease;
        }


        .roadmap-label:hover {
          color: #F5C240;

          letter-spacing: 3.2px;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 14px
            rgba(245,194,64,0.4);
        }


        .roadmap-heading {
          margin-top: 12px;

          font-size:
            clamp(34px, 6vw, 67px);

          line-height: 0.96;

          font-weight: 400;

          letter-spacing: -1px;

          cursor: pointer;

          transition:
            transform 400ms
              cubic-bezier(0.22, 1, 0.36, 1),
            filter 400ms ease,
            letter-spacing 400ms ease;
        }


        .roadmap-heading:hover {
          transform:
            translateY(-4px);

          filter:
            drop-shadow(
              0 0 18px
              rgba(245,194,64,0.22)
            );

          letter-spacing:
            -1.5px;
        }


        @media (min-width: 1024px) {

          .roadmap-heading {
            letter-spacing: -2px;
          }

        }


        /* ======================================================
           GOLD GRADIENT HEADING
        ====================================================== */

        .roadmap-heading-gold {
          background:
            linear-gradient(
              100deg,
              #F5C240 6.17%,
              #C8861A 58.77%,
              #F5C240 93.83%
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          -webkit-text-fill-color: transparent;

          transition:
            filter 400ms ease;
        }


        .roadmap-heading:hover
        .roadmap-heading-gold {

          filter:
            drop-shadow(
              0 0 12px
              rgba(245,194,64,0.28)
            );
        }


        .roadmap-heading-cream {
          color: #E2D9C8;

          transition:
            color 300ms ease;
        }


        .roadmap-heading:hover
        .roadmap-heading-cream {
          color: #F0E8DA;
        }


        /* ======================================================
           TIMELINE
        ====================================================== */

        .roadmap-timeline {
          padding-left: 34px;
        }


        @media (min-width: 640px) {

          .roadmap-timeline {
            padding-left: 40px;
          }

        }


        /* ======================================================
           TIMELINE LINE
        ====================================================== */

        .roadmap-line {
          position: absolute;

          top: 8px;

          bottom: 8px;

          left: 6px;

          width: 2px;

          background:
            linear-gradient(
              180deg,
              rgba(245,194,64,0.2),
              rgba(212,175,55,0.65),
              rgba(245,194,64,0.2)
            );

          box-shadow:
            0 0 8px
            rgba(245,194,64,0.08);
        }


        @media (min-width: 640px) {

          .roadmap-line {
            left: 8px;
          }

        }


        /* ======================================================
           TIMELINE NODE
        ====================================================== */

        .roadmap-node {
          position: absolute;

          top: 26px;

          left: -34px;

          height: 14px;

          width: 14px;

          border-radius: 9999px;

          background:
            radial-gradient(
              75.01% 75.01% at 28.14% 16.78%,
              #EAEAEA 0%,
              #FFE7A8 22.12%,
              #FECF55 45.68%,
              #FEB700 73.08%,
              #A77800 90.39%,
              #513A00 99.04%
            );

          border: none;

          box-shadow:
            inset 0 0 0 4px #0A0907;

          cursor: pointer;

          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }


        .roadmap-row:hover .roadmap-node {

          transform:
            scale(1.25);

          box-shadow:
            inset 0 0 0 3px #0A0907,
            0 0 12px
            rgba(245,194,64,0.65);
        }


        @media (min-width: 640px) {

          .roadmap-node {

            left: -40px;

            height: 16px;

            width: 16px;

            box-shadow:
              inset 0 0 0 4px #0A0907;
          }

        }


        /* ======================================================
           CURRENT NODE
        ====================================================== */

        .roadmap-node--current {

          background:
            radial-gradient(
              75.01% 75.01% at 28.14% 16.78%,
              #EAEAEA 0%,
              #FFE7A8 22.12%,
              #FECF55 45.68%,
              #FEB700 73.08%,
              #A77800 90.39%,
              #513A00 99.04%
            );

          border: none;

          box-shadow:
            inset 0 0 0 4px #0A0907,
            0 0 0 5px
              rgba(245,194,64,0.18),
            0 0 18px
              rgba(245,194,64,0.65);

          animation:
            roadmap-pulse 2.4s
            ease-in-out infinite;
        }


        @keyframes roadmap-pulse {

          0%,
          100% {

            box-shadow:
              inset 0 0 0 4px #0A0907,
              0 0 0 5px
                rgba(245,194,64,0.18),
              0 0 18px
                rgba(245,194,64,0.65);

          }

          50% {

            box-shadow:
              inset 0 0 0 4px #0A0907,
              0 0 0 8px
                rgba(245,194,64,0.1),
              0 0 28px
                rgba(245,194,64,0.9);

          }

        }


        /* ======================================================
           ROADMAP CARD
           
           PREMIUM MATTE / FROSTED GLASS EFFECT
        ====================================================== */

        .roadmap-card {

          position: relative;

          overflow: hidden;

          border-radius: 16px;

          background: rgba(10,12,16,0.28);

          border-top:
            0.77px solid
            #F5C24014;

          padding: 20px 18px;

          cursor: pointer;

          transform:
            translateY(0)
            translateX(0);

          transition:
            transform 400ms
              cubic-bezier(0.22,1,0.36,1),
            border-color 300ms ease,
            box-shadow 400ms ease,
            background 300ms ease;

          isolation: isolate;
        }


        /* ======================================================
           FROSTED GLASS BLUR LAYER
           Keeps the background image blurred while the
           card content remains sharp. Stacked at z-index: 0
           within the card's isolated stacking context, with
           content pinned above it at z-index: 1.
        ====================================================== */

        .roadmap-card::before {

          content: "";

          position: absolute;

          inset: 0;

          background:
            rgba(10,12,16,0.28);

          -webkit-backdrop-filter:
            blur(25px);

          backdrop-filter:
            blur(25px);

          border-radius: inherit;

          pointer-events: none;

          z-index: 0;
        }


        /* ======================================================
           CARD CONTENT — PINNED ABOVE THE BLUR LAYER
        ====================================================== */

        .roadmap-card > * {

          position: relative;

          z-index: 1;
        }


        .roadmap-card:hover {

          transform:
            translateY(-5px)
            translateX(4px);

          border-color:
            rgba(245,194,64,0.48);

          background:
            rgba(10,12,16,0.32);

          box-shadow:
            0 14px 32px
            rgba(0,0,0,0.4),
            0 0 24px
            rgba(245,194,64,0.08);
        }


        @media (min-width: 640px) {

          .roadmap-card {
            padding: 20px 24px;
          }

        }


        @media (min-width: 1024px) {

          .roadmap-card {
            padding: 20px 24px;
          }

        }


        /* ======================================================
           CURRENT CARD
        ====================================================== */

        .roadmap-card--current {

          border-color:
            rgba(212,175,55,0.65);

          box-shadow:
            0 0 32px
            rgba(212,175,55,0.14);

          animation:
            current-card-glow 3s
            ease-in-out infinite;
        }


        @keyframes current-card-glow {

          0%,
          100% {

            box-shadow:
              0 0 32px
              rgba(212,175,55,0.14);

          }

          50% {

            box-shadow:
              0 0 42px
              rgba(212,175,55,0.22);

          }

        }


        .roadmap-card--current:hover {

          border-color:
            rgba(245,194,64,0.85);

          box-shadow:
            0 18px 38px
            rgba(0,0,0,0.45),
            0 0 32px
            rgba(245,194,64,0.14);
        }


        /* ======================================================
           CARD HEADER
        ====================================================== */

        .roadmap-card-header {

          display: flex;

          flex-wrap: wrap;

          align-items: center;

          gap: 12px;
        }


        .roadmap-date {

          font-family:
            'Roboto',
            monospace;

          font-size: 12px;

          font-weight: 400;

          letter-spacing: 1.2px;

          color: #F5C240;

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 250ms ease,
            text-shadow 250ms ease;
        }


        .roadmap-date:hover {

          color: #FFE08A;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 10px
            rgba(245,194,64,0.4);
        }


        @media (min-width: 640px) {

          .roadmap-date {
            font-size: 12px;
          }

        }


        .roadmap-phase {

          font-family:
            'Roboto',
            sans-serif;

          font-size: 12px;

          font-weight: 400;

          color: #E8E0D0;

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 250ms ease;
        }


        .roadmap-phase:hover {

          color: #F5C240;

          transform:
            translateX(3px);
        }


        @media (min-width: 640px) {

          .roadmap-phase {
            font-size: 12px;
          }

        }


        /* ======================================================
           CURRENT BADGE
        ====================================================== */

        .roadmap-badge {

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding: 4px 12px;

          border-radius: 4px;

          font-family:
            'JetBrains Mono',
            'IBM Plex Mono',
            ui-monospace,
            monospace;

          font-size: 10px;

          font-weight: 600;

          letter-spacing: 1.5px;

          text-transform: uppercase;

          cursor: pointer;

          transition:
            transform 300ms ease,
            background 300ms ease,
            box-shadow 300ms ease;
        }


        .roadmap-badge--current {

          color: #F5C240;

          background: #F5C24026;

          border-top:
            0.77px solid
            #F5C2404D;

          animation:
            badge-pulse 2s
            ease-in-out infinite;
        }


        .roadmap-badge--current:hover {

          transform:
            translateY(-2px)
            scale(1.04);

          background:
            rgba(245,194,64,0.16);

          box-shadow:
            0 0 15px
            rgba(245,194,64,0.15);
        }


        @keyframes badge-pulse {

          0%,
          100% {
            box-shadow:
              0 0 0
              rgba(245,194,64,0);
          }

          50% {
            box-shadow:
              0 0 14px
              rgba(245,194,64,0.12);
          }

        }


        /* ======================================================
           TASK TAGS
        ====================================================== */

        .roadmap-tags {

          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 18px;
        }


        @media (min-width: 640px) {

          .roadmap-tags {
            margin-top: 22px;
          }

        }


        .roadmap-tag {

          display: inline-flex;

          align-items: center;

          padding: 8px 14px;

          border-radius: 6px;

          border:
            1px solid
            rgba(212,175,55,0.16);

          background:
            rgba(8,8,8,0.42);

          -webkit-backdrop-filter:
            blur(20px);

          backdrop-filter:
            blur(20px);

          font-family:
            'Roboto',
            sans-serif;

          font-size: 10px;

          font-weight: 400;

          line-height: 1;

          color: #DCDCDC;

          white-space: nowrap;

          cursor: pointer;

          transform:
            translateY(0);

          transition:
            transform 280ms
              cubic-bezier(0.22,1,0.36,1),
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
        }


        .roadmap-tag:hover {

          transform:
            translateY(-3px);

          color: #F5C240;

          border-color:
            rgba(245,194,64,0.38);

          background:
            rgba(245,194,64,0.07);

          box-shadow:
            0 5px 14px
            rgba(245,194,64,0.08);
        }


        @media (min-width: 640px) {

          .roadmap-tag {
            font-size: 11px;
          }

        }


        /* ======================================================
           BOTTOM PROGRESS TIMELINE
        ====================================================== */

        .roadmap-progress-track {

          position: relative;

          height: 4px;

          width: 100%;

          border-radius: 999px;

          background:
            rgba(212,175,55,0.2);

          overflow: hidden;

          cursor: pointer;

          transition:
            height 250ms ease,
            box-shadow 300ms ease;
        }


        .roadmap-progress-track:hover {

          height: 6px;

          box-shadow:
            0 0 14px
            rgba(245,194,64,0.12);
        }


        .roadmap-progress-fill {

          height: 100%;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #C8861A 0%,
              #F5C240 100%
            );

          transform-origin:
            left center;

          animation:
            progress-glow 2.5s
            ease-in-out infinite;

          transition:
            width 700ms
              cubic-bezier(0.16,1,0.3,1),
            filter 300ms ease;
        }


        .roadmap-progress-track:hover
        .roadmap-progress-fill {

          filter:
            brightness(1.15);

          box-shadow:
            0 0 12px
            rgba(245,194,64,0.4);
        }


        @keyframes progress-glow {

          0%,
          100% {
            filter:
              brightness(1);
          }

          50% {
            filter:
              brightness(1.12);
          }

        }


        .roadmap-progress-labels {

          display: flex;

          justify-content: space-between;

          margin-top: 10px;

          font-family:
            'JetBrains Mono',
            'IBM Plex Mono',
            ui-monospace,
            monospace;

          font-size: 11px;

          letter-spacing: 1px;

          color: #9C9690;
        }


        .roadmap-progress-labels span {

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 250ms ease;
        }


        .roadmap-progress-labels span:hover {

          color: #F5C240;

          transform:
            translateY(-2px);
        }


        /* ======================================================
           SAFETY
        ====================================================== */

        .roadmap-timeline,
        .roadmap-card,
        .roadmap-tags,
        .roadmap-progress-track {

          max-width: 100%;

          box-sizing: border-box;
        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 1199px) {

          .roadmap-container {
            width: 100%;
            max-width: calc(100% - 40px);

            margin: 0 auto;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .roadmap-section {
            background-position: center center;
          }

          .roadmap-container {
            width: 100%;
            max-width: calc(100% - 32px);

            margin: 0 auto;

            padding-top: 20px;
            padding-bottom: 20px;
          }

          .roadmap-timeline {
            padding-left: 34px;
          }

          .roadmap-card {
            width: 100%;
          }

          .roadmap-tags {
            gap: 8px;
          }

          .roadmap-tag {
            padding: 7px 10px;
            font-size: 9px;
          }

        }


        /* ======================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .roadmap-container {
            max-width: calc(100% - 28px);
          }

          .roadmap-heading {
            font-size: clamp(34px, 11vw, 52px);
          }

          .roadmap-card {
            padding: 18px 16px;
          }

          .roadmap-tags {
            gap: 7px;
          }

          .roadmap-tag {
            padding: 7px 9px;
            font-size: 8.5px;
          }

        }


        /* ======================================================
           EXTRA SMALL
        ====================================================== */

        @media (max-width: 360px) {

          .roadmap-container {
            max-width: calc(100% - 24px);
          }

          .roadmap-timeline {
            padding-left: 32px;
          }

          .roadmap-node {
            left: -32px;
          }

          .roadmap-line {
            left: 5px;
          }

          .roadmap-card {
            padding: 16px 13px;
          }

          .roadmap-tag {
            padding: 6px 8px;
            font-size: 8px;
          }

        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .roadmap-node--current,
          .roadmap-card--current,
          .roadmap-badge--current,
          .roadmap-progress-fill {

            animation: none !important;
          }


          .roadmap-label,
          .roadmap-heading,
          .roadmap-card,
          .roadmap-node,
          .roadmap-date,
          .roadmap-phase,
          .roadmap-badge,
          .roadmap-tag,
          .roadmap-progress-track,
          .roadmap-progress-fill,
          .roadmap-progress-labels span {

            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
}