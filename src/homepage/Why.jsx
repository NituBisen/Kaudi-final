import React from "react";
import Reveal from "../common/Reveal";

// Existing card background image
import cardBackground from "../assets/images/kaudi-card-bg.jpg";

const GOLD = "#D4AF37";

/* ------------------------------------------------------------------ */
/* Decorative geometric icons                                         */
/* ------------------------------------------------------------------ */

function CardIcon({ type }) {
  const common = {
    width: 20,
    height: 20,
    "aria-hidden": "true",
    style: {
      filter: `drop-shadow(0 0 4px ${GOLD}66)`,
    },
  };

  switch (type) {
    case "diamond-outline":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none">
          <rect
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="1"
            transform="rotate(45 12 12)"
            stroke={GOLD}
            strokeWidth="1.4"
          />
        </svg>
      );

    case "hexagon-outline":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none">
          <polygon
            points="12,2.5 20.5,7.5 20.5,16.5 12,21.5 3.5,16.5 3.5,7.5"
            stroke={GOLD}
            strokeWidth="1.4"
          />
        </svg>
      );

    case "ring-circle":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={GOLD}
            strokeWidth="1.4"
          />

          <circle
            cx="12"
            cy="12"
            r="3.4"
            fill={GOLD}
          />
        </svg>
      );

    case "solid-hexagon":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <polygon
            points="12,2.5 20.5,7.5 20.5,16.5 12,21.5 3.5,16.5 3.5,7.5"
            fill={GOLD}
          />
        </svg>
      );

    case "double-ring":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={GOLD}
            strokeWidth="1.4"
          />

          <circle
            cx="12"
            cy="12"
            r="5.2"
            stroke={GOLD}
            strokeWidth="1.4"
          />
        </svg>
      );

    default:
      return null;
  }
}


/* ------------------------------------------------------------------ */
/* Card data                                                          */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    number: "01",
    title: "FRACTIONAL ACCESS",
    description:
      "Participate in selected real-estate opportunities without acquiring an entire property.",
    icon: "diamond-outline",
    delay: 100,
  },
  {
    number: "02",
    title: "REAL-WORLD ASSETS",
    description:
      "Connect blockchain infrastructure with tangible, property-backed investment opportunities.",
    icon: "hexagon-outline",
    delay: 180,
  },
  {
    number: "03",
    title: "ON-CHAIN TRANSPARENCY",
    description:
      "Blockchain records give full visibility into token transfers, property allocation and distributions.",
    icon: "ring-circle",
    delay: 260,
  },
  {
    number: "04",
    title: "PORTFOLIO DIVERSIFICATION",
    description:
      "Access multiple property types and asset categories through one unified digital ecosystem.",
    icon: "solid-hexagon",
    delay: 340,
  },
  {
    number: "05",
    title: "DIGITAL INFRASTRUCTURE",
    description:
      "Manage eligible property-linked positions through a secure, digitally connected platform.",
    icon: "double-ring",
    delay: 420,
  },
  {
    number: "06",
    title: "GLOBAL VISION",
    description:
      "Build toward a multi-market ecosystem spanning real-estate and real-world asset opportunities.",
    icon: "hexagon-outline",
    delay: 500,
  },
];


/* ------------------------------------------------------------------ */
/* Feature Card                                                       */
/* ------------------------------------------------------------------ */

function FeatureCard({
  number,
  title,
  description,
  icon,
}) {
  return (
    <div
      className="overflow-hidden relative why-kaudi-card group"
      style={{
        width: "100%",
        height: "208px",

        /* UPDATED BORDER */
        border: "1px solid #F5C2400F",

        /* UPDATED SHADOW */
        boxShadow: "0px 3px 2px 0px #F5C2401A",

        boxSizing: "border-box",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(245,194,64,0.8)";

        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(212,175,55,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor =
          "#F5C2400F";

        e.currentTarget.style.boxShadow =
          "0px 3px 2px 0px #F5C2401A";
      }}
    >

      {/* ==========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <div
        className="absolute inset-0 kaudi-card-background"
        style={{
          backgroundImage: `url(${cardBackground})`,
        }}
      />


      {/* ==========================================================
          IMAGE OVERLAY
      ========================================================== */}

      <div
        className="z-[1] absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.80)",
        }}
      />


      {/* ==========================================================
          EXTRA DARK BOTTOM OVERLAY
      ========================================================== */}

      <div
        className="z-[2] absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.72) 100%)",
        }}
      />


      {/* ==========================================================
          CONTENT
      ========================================================== */}

      <div
        className="z-10 relative flex flex-col justify-between p-6 w-full h-full sm:p-7"
        style={{
          boxSizing: "border-box",
        }}
      >

        {/* TOP */}

        <div className="flex items-start justify-between">

          <span className="text-[11px] kaudi-card-number">
            {number}
          </span>

          <div className="kaudi-card-icon">
            <CardIcon type={icon} />
          </div>

        </div>


        {/* BOTTOM */}

        <div className="kaudi-card-content">

          <h3 className="mb-2 text-[17px] font-normal leading-snug kaudi-card-title uppercase lg:text-[17px]">
            {title}
          </h3>

          <p className="max-w-[90%] text-[13px] leading-[1.6] kaudi-card-description">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export default function WhyKaudi() {
  return (
    <section
      id="ecosystem"
      className="px-6 w-full sm:px-10 lg:py-20"
      style={{
        backgroundColor: "#05070C",
      }}
      aria-labelledby="why-kaudi-heading"
    >

      <div className="mx-auto w-full max-w-[1300px]">

        {/* ==========================================================
            TOP CONTENT
        ========================================================== */}

        <div className="grid grid-cols-1 gap-8 mb-14 mb-20 why-kaudi-top md:gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <Reveal delay={100}>
              <p className="mb-4 text-[11px] why-kaudi-label uppercase">
                02 — Why Kaudi
              </p>
            </Reveal>


            <Reveal delay={200}>
              <h2
                id="why-kaudi-heading"
                className="leading-[0.95] why-kaudi-heading uppercase"
              >
                The Kaudi
                <br />
                Advantage
              </h2>
            </Reveal>

          </div>


          {/* RIGHT CONTENT */}

          <div className="justify-end lg:flex">

            <Reveal delay={300}>

              {/* =================================================
                  PARAGRAPH MOVED DOWN
              ================================================= */}

              <p className="max-w-[334px] text-[16px] leading-[1.6] why-kaudi-description lg:pt-30">
                Traditional real estate involves high capital
                requirements, complex processes and limited
                liquidity. KAUDI introduces a digital framework
                that removes those barriers.
              </p>

            </Reveal>

          </div>

        </div>


        {/* ==========================================================
            FEATURE GRID
        ========================================================== */}

        <div className="why-kaudi-grid">

          {FEATURES.map((feature) => (
            <Reveal
              key={feature.number}
              delay={feature.delay}
            >
              <FeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </Reveal>
          ))}

        </div>

      </div>


      {/* ============================================================
          CSS
      ============================================================ */}

      <style>{`

        /* ==========================================================
           REMOVE HORIZONTAL PAGE OVERFLOW
        ========================================================== */

        html,
        body {
          overflow-x: hidden !important;
        }


        /* ==========================================================
           GRID
        ========================================================== */

        .why-kaudi-grid {
          display: grid;

          grid-template-columns: 1fr;

          width: 100%;

          gap: 0;

          margin: 0;

          padding: 0;
        }


        /* ==========================================================
           TOP LABEL
        ========================================================== */

        .why-kaudi-label {
          font-family:
            "Roboto Mono",
            monospace;

          color: #C8861A;

          letter-spacing: 2.6px;

          cursor: pointer;

          transition:
            color 300ms ease,
            letter-spacing 300ms ease,
            text-shadow 300ms ease;
        }


        .why-kaudi-label:hover {
          color: #F5C240;

          letter-spacing: 3.2px;

          text-shadow:
            0 0 12px
            rgba(
              245,
              194,
              64,
              0.3
            );
        }


        /* ==========================================================
           HEADING
        ========================================================== */

        .why-kaudi-heading {
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

          -webkit-text-fill-color:
            transparent;

          font-family:
            "Oswald",
            "Barlow Condensed",
            sans-serif;

          font-weight: 400;

          font-size:
            clamp(
              48px,
              6vw,
              68px
            );

          cursor: pointer;

          transition:
            transform 350ms ease,
            filter 350ms ease,
            letter-spacing 350ms ease;
        }


        .why-kaudi-heading:hover {
          transform:
            translateY(-3px);

          filter:
            drop-shadow(
              0 0 18px
              rgba(
                245,
                194,
                64,
                0.22
              )
            );

          letter-spacing: -0.5px;
        }


        /* ==========================================================
           DESCRIPTION
        ========================================================== */

        .why-kaudi-description {
          color: #8A8278;

          font-family:
            "Roboto",
            sans-serif;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .why-kaudi-description:hover {
          color: #B8A98C;

          transform:
            translateX(-3px);
        }


        /* ==========================================================
           CARD
        ========================================================== */

        .why-kaudi-card {
          /*
            BASE BORDER
          */
          border:
            1px solid
            #F5C2400F !important;

          /*
            BASE SHADOW
          */
          box-shadow:
            0px 3px 2px 0px
            #F5C2401A !important;

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 300ms ease,
            box-shadow 350ms ease;
        }


        .why-kaudi-card:hover {
          transform:
            translateY(-7px);
        }


        /* ==========================================================
           CARD BACKGROUND IMAGE
        ========================================================== */

        .kaudi-card-background {
          background-size: cover;

          background-position: center;

          transition:
            transform 700ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 500ms ease;
        }


        .why-kaudi-card:hover
        .kaudi-card-background {
          transform:
            scale(1.07);

          filter:
            brightness(1.12)
            contrast(1.04);
        }


        /* ==========================================================
           CARD NUMBER
        ========================================================== */

        .kaudi-card-number {
          color: #D4AF37;

          font-family:
            "Roboto Mono",
            monospace;

          letter-spacing: 2px;

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 250ms ease,
            text-shadow 250ms ease;
        }


        .why-kaudi-card:hover
        .kaudi-card-number {
          color: #F5C240;

          transform:
            translateX(3px);

          text-shadow:
            0 0 10px
            rgba(
              245,
              194,
              64,
              0.5
            );
        }


        /* ==========================================================
           CARD ICON
        ========================================================== */

        .kaudi-card-icon {
          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          transition:
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 300ms ease;
        }


        .why-kaudi-card:hover
        .kaudi-card-icon {
          transform:
            rotate(8deg)
            scale(1.18);

          filter:
            drop-shadow(
              0 0 8px
              rgba(
                245,
                194,
                64,
                0.45
              )
            );
        }


        /* ==========================================================
           CARD TITLE
        ========================================================== */

        .kaudi-card-title {
          color: #FFFFFF;

          letter-spacing: 0.6px;

          font-family:
            "Oswald",
            "Barlow Condensed",
            sans-serif;

          font-weight: 400;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease,
            letter-spacing 300ms ease;
        }


        .why-kaudi-card:hover
        .kaudi-card-title {
          color: #F5C240;

          transform:
            translateX(3px);

          letter-spacing: 0.9px;
        }


        /* ==========================================================
           CARD DESCRIPTION
        ========================================================== */

        .kaudi-card-description {
          color: #7F7F7F;

          font-family:
            "Roboto",
            sans-serif;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .why-kaudi-card:hover
        .kaudi-card-description {
          color: #A9A29A;

          transform:
            translateX(2px);
        }


        /* ==========================================================
           DESKTOP
        ========================================================== */

        @media (min-width: 1400px) {

          .why-kaudi-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );

            width: 100%;
          }


          .why-kaudi-grid > * {
            width: 100%;

            height: 208px;

            min-width: 0;

            box-sizing: border-box;
          }


          .why-kaudi-card {
            width: 100% !important;

            max-width: none !important;

            height: 208px !important;
          }

        }


        /* ==========================================================
           TABLET
        ========================================================== */

        @media
          (min-width: 768px)
          and
          (max-width: 1399px) {

          .why-kaudi-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            width: 100%;
          }


          .why-kaudi-grid > * {
            width: 100%;

            height: 208px;

            min-width: 0;

            box-sizing: border-box;
          }


          .why-kaudi-card {
            width: 100% !important;

            max-width: none !important;

            height: 208px !important;
          }

        }


        /* ==========================================================
           MOBILE
           CENTER ALL TOP CONTENT
        ========================================================== */

        @media (max-width: 767px) {

          .why-kaudi-top {
            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            width: 100%;

            text-align: center;
          }


          .why-kaudi-top >
          div:first-child {
            width: 100%;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            text-align: center;
          }


          .why-kaudi-top >
          div:first-child p {
            width: 100%;

            text-align: center;
          }


          .why-kaudi-top >
          div:first-child h2 {
            width: 100%;

            text-align: center;
          }


          .why-kaudi-top >
          div:last-child {
            width: 100%;

            display: flex;

            justify-content: center;

            align-items: center;

            text-align: center;
          }


          .why-kaudi-top >
          div:last-child p {
            width: 100%;

            max-width: 500px;

            margin-left: auto;

            margin-right: auto;

            text-align: center;
          }


          /* FEATURE GRID */

          .why-kaudi-grid {
            grid-template-columns: 1fr;

            width: 100%;

            justify-items: center;
          }


          .why-kaudi-grid > * {
            width: 100%;

            max-width: 399px;

            height: 208px;

            margin-left: auto;

            margin-right: auto;

            box-sizing: border-box;
          }


          .why-kaudi-card {
            width: 100% !important;

            max-width: 399px !important;

            height: 208px !important;
          }


          /* Mobile card hover */

          .why-kaudi-card:hover {
            transform:
              translateY(-5px);
          }

        }


        /* ==========================================================
           SMALL MOBILE
        ========================================================== */

        @media (max-width: 480px) {

          .why-kaudi-top {
            width: 100%;

            align-items: center;

            text-align: center;
          }


          .why-kaudi-top >
          div:first-child,
          .why-kaudi-top >
          div:last-child {
            width: 100%;

            align-items: center;

            justify-content: center;

            text-align: center;
          }


          .why-kaudi-top >
          div:last-child p {
            width: 100%;

            max-width:
              calc(
                100vw - 40px
              );

            margin-left: auto;

            margin-right: auto;

            text-align: center;
          }


          .why-kaudi-grid > * {
            width: 100%;

            max-width:
              calc(
                100vw - 32px
              );

            margin-left: auto;

            margin-right: auto;
          }


          .why-kaudi-card {
            width: 100% !important;

            max-width:
              calc(
                100vw - 32px
              ) !important;

            height: 208px !important;
          }


          .why-kaudi-heading {
            font-size:
              clamp(
                43px,
                12vw,
                62px
              );
          }

        }


        /* ==========================================================
           NO HORIZONTAL OVERFLOW
        ========================================================== */

        section#ecosystem {
          overflow-x: hidden;
          overflow-y: hidden;
        }


        .why-kaudi-top,
        .why-kaudi-grid,
        .why-kaudi-card {
          box-sizing: border-box;

          max-width: 100%;
        }


        /* ==========================================================
           REDUCED MOTION
        ========================================================== */

        @media (prefers-reduced-motion: reduce) {

          .why-kaudi-card,
          .kaudi-card-background,
          .kaudi-card-icon,
          .kaudi-card-title,
          .kaudi-card-description,
          .why-kaudi-heading,
          .why-kaudi-description,
          .why-kaudi-label {
            transition:
              none !important;
          }

        }

      `}</style>
    </section>
  );
}