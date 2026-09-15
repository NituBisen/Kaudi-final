import React, { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";

// ============================================================
// ASSETS
// ============================================================

import tokenomicsImage from "../assets/images/tokenomics.png";

import sunriseApartmentsImage from "../assets/icons/sunrise-apartments.png";
import harmonyOfficeImage from "../assets/icons/harmony-office.png";
import oceanviewVillasImage from "../assets/icons/oceanview-villas.png";
import greenfieldRetailImage from "../assets/icons/greenfield-retail.png";

// ============================================================
// DATA
// ============================================================

const TOKEN_DETAILS = [
  { label: "Token Name", value: "KAUDI" },
  { label: "Symbol", value: "KAUDI" },
  { label: "Network", value: "BNB Smart Chain" },
  { label: "Standard", value: "BEP-20" },
  { label: "Total Supply", value: "25,000,000" },
  { label: "Decimals", value: "18" },
];

const PORTFOLIO_ITEMS = [
  {
    title: "Sunrise Apartments",
    percentage: 20,
    image: sunriseApartmentsImage,
  },
  {
    title: "Harmony Office",
    percentage: 30,
    image: harmonyOfficeImage,
  },
  {
    title: "Oceanview Villas",
    percentage: 40,
    image: oceanviewVillasImage,
  },
  {
    title: "Greenfield Retail",
    percentage: 10,
    image: greenfieldRetailImage,
  },
];
// ============================================================
// TOKENOMICS SECTION
// ============================================================

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="w-full bg-black tokenomics-section"
    >
      <div className="mx-auto px-5 py-8 w-full max-w-[1300px] sm:px-8 md:px-10 lg:px-12">

        {/* ====================================================
            MAIN TOKENOMICS CONTENT
        ==================================================== */}

        <div className="grid grid-cols-1 gap-14 gap-12 lg:grid-cols-[52%_48%] xl:gap-16">

          {/* ====================================================
              LEFT — EYEBROW / HEADING / ILLUSTRATION
          ==================================================== */}

          <div className="flex flex-col items-start order-1">

            <Reveal delay={100}>
              <span className="tok-label">
                05 — Tokenomics
              </span>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-3 font-bold tok-heading uppercase">
                <span className="block tok-heading-gold">
                  25,000,000
                </span>

                <span className="block tok-heading-cream">
                  KAUDI Tokens
                </span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 w-full tok-image-wrap sm:mt-10">
                <img
                  src={tokenomicsImage}
                  alt="KAUDI token distribution: 60% property-backed asset, 10% ecosystem and rewards, 10% liquidity, 8% treasury and operations, 5% marketing, 5% team and advisors, 2% development"
                  className="w-[528px] h-[559px] tok-image"
                  draggable={false}
                />
              </div>
            </Reveal>

          </div>


          {/* ====================================================
              RIGHT — DESCRIPTION + TOKEN DETAILS CARD
          ==================================================== */}

          <div className="flex flex-col order-2 tok-right-content">

            <Reveal delay={200}>
              <p className="max-w-[560px] tok-description">
                KAUDI's strategic token distribution, powering
                real-world asset participation, ecosystem growth, liquidity,
                technology development, operations, partnerships, and
                long-term sustainable expansion across the platform.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-8 w-full tok-card sm:mt-10">

                {/* CENTERED TOKEN DETAILS HEADING */}

                <h3 className="tok-card-heading">
                  Token Details
                </h3>

                <dl className="mt-6 tok-rows sm:mt-8">

                  {TOKEN_DETAILS.map((row) => (
                    <div
                      key={row.label}
                      className="tok-row"
                    >
                      <dt className="tok-row-label">
                        {row.label}
                      </dt>

                      <dd className="tok-row-value">
                        {row.value}
                      </dd>
                    </div>
                  ))}

                </dl>

              </div>
            </Reveal>

          </div>
        </div>


        {/* ====================================================
            ILLUSTRATIVE PORTFOLIO SUBSECTION
        ==================================================== */}

        <div className="tok-portfolio-block lg:mt-10">

          <Reveal delay={100}>
            <h3 className="tok-portfolio-heading">
              Illustrative Portfolio
            </h3>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 tok-portfolio-card sm:mt-8">

              <div className="tok-portfolio-grid">

                {PORTFOLIO_ITEMS.map((item, index) => (
                  <PortfolioItem
                    key={item.title}
                    item={item}
                    index={index}
                  />
                ))}

              </div>

            </div>
          </Reveal>

        </div>

      </div>


      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           MAIN SECTION
        ====================================================== */

        .tokenomics-section {
          font-family: 'Oswald', sans-serif;
          overflow-x: hidden;
        }


        /* ======================================================
           LABEL
        ====================================================== */

        .tok-label {
          display: inline-block;

          font-family: 'Roboto Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 2.6px;
          text-transform: uppercase;
          color: #C8861A;

          cursor: pointer;

          transition:
            color 300ms ease,
            letter-spacing 300ms ease,
            text-shadow 300ms ease,
            transform 300ms ease;
        }


        .tok-label:hover {
          color: #F5C240;

          letter-spacing: 3.2px;

          transform: translateY(-2px);

          text-shadow:
            0 0 14px
            rgba(245, 194, 64, 0.4);
        }


        /* ======================================================
           HEADING
        ====================================================== */

        .tok-heading {
          font-family: 'Oswald', sans-serif;

          font-size:
            clamp(34px, 5.8vw, 68px);

          line-height: 0.98;

          font-weight: 400;

          letter-spacing: -1px;

          cursor: pointer;

          transition:
            transform 400ms
              cubic-bezier(0.22, 1, 0.36, 1),
            filter 400ms ease,
            letter-spacing 400ms ease;
        }


        .tok-heading:hover {
          transform: translateY(-4px);

          filter:
            drop-shadow(
              0 0 18px
              rgba(245, 194, 64, 0.2)
            );

          letter-spacing: -1.5px;
        }


        @media (min-width: 1024px) {

          .tok-heading {
            letter-spacing: -1.5px;
          }

        }


        /* ======================================================
           GOLD GRADIENT HEADING
        ====================================================== */

        .tok-heading-gold {

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


        .tok-heading:hover .tok-heading-gold {

          filter:
            drop-shadow(
              0 0 12px
              rgba(245, 194, 64, 0.28)
            );
        }


        /* ======================================================
           CREAM HEADING
        ====================================================== */

        .tok-heading-cream {
          color: #E2D9C8;

          transition:
            color 300ms ease;
        }


        .tok-heading:hover .tok-heading-cream {
          color: #F2EBDD;
        }


        /* ======================================================
           IMAGE
        ====================================================== */

        .tok-image-wrap {

          max-width: 560px;

          overflow: hidden;

          border-radius: 8px;

          cursor: pointer;

          transform: translateY(0);

          transition:
            transform 500ms
              cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 500ms ease;
        }


        .tok-image {

          display: block;

          object-fit: contain;

          transform: scale(1);

          transition:
            transform 800ms
              cubic-bezier(0.22, 1, 0.36, 1),
            filter 500ms ease;
        }


        .tok-image-wrap:hover {

          transform: translateY(-7px);

          box-shadow:
            0 18px 40px
            rgba(0, 0, 0, 0.45),
            0 0 25px
            rgba(245, 194, 64, 0.1);
        }


        .tok-image-wrap:hover .tok-image {

          transform: scale(1.035);

          filter:
            brightness(1.06)
            contrast(1.03);
        }


        /* ======================================================
           DESCRIPTION
        ====================================================== */

        .tok-description {

          font-family: 'Roboto', sans-serif;

          font-size: 16px;

          line-height: 1.7;

          width: 502px;

          color: #8A8278;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .tok-description:hover {

          color: #B7AFA4;

          transform: translateX(4px);
        }


        /* ======================================================
           RIGHT SIDE ALIGNMENT
        ====================================================== */

        .tok-right-content {
          padding-top: 80px;
        }


        /* ======================================================
           TOKEN DETAILS CARD
        ====================================================== */

        .tok-card {

          width: 490px;

          min-height: 480px;

          box-sizing: border-box;

          border-radius: 12px;

          border: 1px solid;

          border-image-source:
            linear-gradient(
              137.51deg,
              #000000 -0.94%,
              #F5C240 23.02%,
              #000000 54.63%,
              #F5C240 94.4%
            );

          border-image-slice: 1;

          background: #0A0907;

          padding: 32px 24px;

          cursor: pointer;

          transform: translateY(0);

          transition:
            transform 450ms
              cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 450ms ease,
            background 400ms ease;
        }


        .tok-card:hover {

          transform: translateY(-7px);

          background: #0D0B08;

          box-shadow:
            0 18px 40px
            rgba(0, 0, 0, 0.45),
            0 0 25px
            rgba(245, 194, 64, 0.08);
        }


        /* ======================================================
           CARD HEADING — CENTER
        ====================================================== */

        .tok-card-heading {

          margin: 0;

          font-family: 'Roboto', monospace;

          font-size: 28px;

          font-weight: 400;

          line-height: 1.1;

          text-transform: uppercase;

          color: #F5C240;

          text-align: center;

          cursor: pointer;

          transition:
            transform 300ms ease,
            text-shadow 300ms ease;
        }


        .tok-card:hover .tok-card-heading {

          transform: scale(1.025);

          text-shadow:
            0 0 15px
            rgba(245, 194, 64, 0.35);
        }


        /* ======================================================
           TOKEN DETAIL ROWS
        ====================================================== */

        .tok-rows {
          margin: 0;
        }


        .tok-row {

          display: flex;

          align-items: baseline;

          justify-content: space-between;

          gap: 16px;

          padding-bottom: 16px;

          margin-bottom: 16px;

          border-bottom:
            1px solid
            rgba(245, 194, 64, 0.45);

          cursor: pointer;

          transition:
            border-color 300ms ease,
            transform 300ms ease,
            padding-left 300ms ease,
            padding-right 300ms ease;
        }


        .tok-row:hover {

          transform: translateX(4px);

          padding-left: 4px;

          padding-right: 4px;

          border-bottom-color:
            rgba(245, 194, 64, 0.8);
        }


        .tok-row:last-child {

          margin-bottom: 0;

          padding-bottom: 0;

          border-bottom: none;
        }


        @media (min-width: 640px) {

          .tok-row {

            padding-bottom: 20px;

            margin-bottom: 20px;
          }

        }


        /* ======================================================
           TOKEN DETAIL LABEL
        ====================================================== */

        .tok-row-label {

          margin: 0;

          font-family: 'Roboto', sans-serif;

          font-size: 16px;

          font-weight: 300;

          color: #FFFFFF;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 250ms ease;
        }


        .tok-row:hover .tok-row-label {
          color: #F2EBDD;
        }


        /* ======================================================
           TOKEN DETAIL VALUE
        ====================================================== */

       .tok-row-value {

  margin: 0;

  font-family: monospace;

  font-size: 16px;

  font-weight: 300;

  text-align: right;

  color: #FFFFFF;

  white-space: nowrap;

  cursor: pointer;

  transition:
    color 250ms ease,
    text-shadow 250ms ease;
}


        .tok-row:hover .tok-row-value {

          color: #F5C240;

          text-shadow:
            0 0 10px
            rgba(245, 194, 64, 0.3);
        }


        /* ======================================================
           ILLUSTRATIVE PORTFOLIO — HEADING
        ====================================================== */

        .tok-portfolio-heading {

          font-family:
            'Rboto',
            monospace;

          font-size:
            clamp(20px, 2.6vw, 28px);

          font-weight: 400;

          letter-spacing: 0.9px;

          text-transform: uppercase;

          color: #F5C240;

          cursor: pointer;

          transition:
            transform 300ms ease,
            letter-spacing 300ms ease,
            text-shadow 300ms ease;
        }


        .tok-portfolio-heading:hover {

          transform: translateX(4px);

          letter-spacing: 1.3px;

          text-shadow:
            0 0 14px
            rgba(245, 194, 64, 0.35);
        }


        /* ======================================================
           PORTFOLIO CONTAINER
        ====================================================== */

        .tok-portfolio-card {

          width: 100%;

          max-width: 100%;

          border-radius: 8px;

          border: 1px solid;

          border-image-source:
            linear-gradient(
              137.51deg,
              #000000 -0.94%,
              #F5C240 23.02%,
              #000000 54.63%,
              #F5C240 94.4%
            );

          border-image-slice: 1;

          background: #0B0906;

          padding: 24px;

          cursor: pointer;

          transition:
            transform 450ms
              cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 450ms ease;
        }


        .tok-portfolio-card:hover {

          transform: translateY(-6px);

          box-shadow:
            0 18px 40px
            rgba(0, 0, 0, 0.4),
            0 0 24px
            rgba(245, 194, 64, 0.08);
        }


        @media (min-width: 640px) {

          .tok-portfolio-card {
            padding: 36px;
          }

        }


        @media (min-width: 1024px) {

          .tok-portfolio-card {
            padding: 60px;
          }

        }


        /* ======================================================
           PORTFOLIO GRID
        ====================================================== */

        .tok-portfolio-grid {

          display: grid;

          grid-template-columns: 1fr;

          row-gap: 28px;
        }


        @media (min-width: 768px) {

          .tok-portfolio-grid {

            grid-template-columns:
              1fr 1fr;

            column-gap: 48px;

            row-gap: 40px;
          }

        }


        @media (min-width: 1024px) {

          .tok-portfolio-grid {

            column-gap: 64px;

            row-gap: 48px;
          }

        }


        /* ======================================================
           PORTFOLIO ITEM
        ====================================================== */

        .tok-portfolio-item {

          display: flex;

          align-items: center;

          gap: 16px;

          min-width: 0;

          cursor: pointer;

          transform: translateY(0);

          transition:
            transform 400ms
              cubic-bezier(0.22, 1, 0.36, 1);
        }


        .tok-portfolio-item:hover {

          transform:
            translateY(-5px);
        }


        @media (min-width: 640px) {

          .tok-portfolio-item {
            gap: 20px;
          }

        }


        /* ======================================================
           PORTFOLIO IMAGE
        ====================================================== */

        .tok-portfolio-image {

          flex-shrink: 0;

          width: 90px;

          height: 65px;

          border-radius: 4px;

          object-fit: cover;

          cursor: pointer;

          transform: scale(1);

          transition:
            transform 500ms
              cubic-bezier(0.22, 1, 0.36, 1),
            filter 400ms ease,
            box-shadow 400ms ease;
        }


        .tok-portfolio-item:hover .tok-portfolio-image {

          transform:
            scale(1.06);

          filter:
            brightness(1.08)
            contrast(1.03);

          box-shadow:
            0 0 16px
            rgba(245, 194, 64, 0.12);
        }


        @media (min-width: 640px) {

          .tok-portfolio-image {

            width: 105px;

            height: 74px;
          }

        }


        @media (min-width: 1024px) {

          .tok-portfolio-image {

            width: 120px;

            height: 82px;
          }

        }


        /* ======================================================
           PORTFOLIO CONTENT
        ====================================================== */

        .tok-portfolio-content {

          flex: 1 1 auto;

          min-width: 0;
        }


        /* ======================================================
           PORTFOLIO TOP
        ====================================================== */

        .tok-portfolio-top {

          display: flex;

          align-items: baseline;

          justify-content: space-between;

          gap: 12px;
        }


        /* ======================================================
           PORTFOLIO TITLE
        ====================================================== */

        .tok-portfolio-title {

          margin: 0;

          font-family:
            'Roboto',
            sans-serif;

          font-size: 18px;

          font-weight: 400;

          color: #FFFFFF;

          overflow: hidden;

          text-overflow: ellipsis;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .tok-portfolio-item:hover .tok-portfolio-title {

          color: #F5C240;

          transform:
            translateX(3px);
        }


        @media (min-width: 640px) {

          .tok-portfolio-title {
            font-size: 18px;
          }

        }


        @media (min-width: 1024px) {

          .tok-portfolio-title {
            font-size: 20px;
          }

        }


        /* ======================================================
           PORTFOLIO PERCENTAGE
        ====================================================== */

        .tok-portfolio-percentage {

          flex-shrink: 0;

          font-family:
            'Roboto',
            monospace;

          font-size: 18px;

          font-weight: 400;

          color: #FFFFFF;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease,
            text-shadow 300ms ease;
        }


        .tok-portfolio-item:hover
        .tok-portfolio-percentage {

          color: #F5C240;

          transform:
            scale(1.08);

          text-shadow:
            0 0 12px
            rgba(245, 194, 64, 0.35);
        }


        @media (min-width: 640px) {

          .tok-portfolio-percentage {
            font-size: 18px;
          }

        }


        @media (min-width: 1024px) {

          .tok-portfolio-percentage {
            font-size: 18px;
          }

        }


        /* ======================================================
           PROGRESS BAR
        ====================================================== */

        .tok-progress-track {

          margin-top: 10px;

          width: 100%;

          height: 5px;

          border-radius: 999px;

          background: #3A3937;

          overflow: hidden;

          cursor: pointer;

          transition:
            height 250ms ease,
            background 250ms ease;
        }


        .tok-portfolio-item:hover
        .tok-progress-track {

          height: 6px;

          background: #44413D;
        }


        @media (min-width: 640px) {

          .tok-progress-track {
            margin-top: 12px;
          }

        }


        /* ======================================================
           PROGRESS FILL
        ====================================================== */

        .tok-progress-fill {

          height: 100%;

          width: 0%;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #D4AF37 0%,
              #F5C240 100%
            );

          transition:
            width 1100ms
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ),
            filter 300ms ease;
        }


        .tok-portfolio-item:hover
        .tok-progress-fill {

          filter:
            brightness(1.15);

          box-shadow:
            0 0 10px
            rgba(245, 194, 64, 0.3);
        }


        /* ======================================================
           SAFETY: NO HORIZONTAL OVERFLOW
        ====================================================== */

        .tok-image-wrap,
        .tok-card,
        .tok-description,
        .tok-portfolio-card,
        .tok-portfolio-item {

          max-width: 100%;

          box-sizing: border-box;
        }


        /* ======================================================
           RESPONSIVE RIGHT SIDE
        ====================================================== */

        @media (max-width: 1023px) {

          .tok-right-content {
            padding-top: 0;
          }


          .tok-right-content .tok-card {
            min-height: auto;
          }

        }


        /* ======================================================
           MOBILE CARD
        ====================================================== */

        @media (max-width: 639px) {

          .tok-card {

            width: 100%;

            max-width: 500px;

            padding: 32px 24px;

            min-height: auto;
          }


          .tok-description {
            width: 100%;
          }


          .tok-image {

            width: 100%;

            max-width: 528px;

            height: auto;
          }

        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .tok-label,
          .tok-heading,
          .tok-heading-gold,
          .tok-heading-cream,
          .tok-image-wrap,
          .tok-image,
          .tok-description,
          .tok-card,
          .tok-card-heading,
          .tok-row,
          .tok-row-label,
          .tok-row-value,
          .tok-portfolio-heading,
          .tok-portfolio-card,
          .tok-portfolio-item,
          .tok-portfolio-image,
          .tok-portfolio-title,
          .tok-portfolio-percentage,
          .tok-progress-track,
          .tok-progress-fill {

            transition: none !important;

            animation: none !important;
          }

        }

      `}</style>
    </section>
  );
}


// ============================================================
// PORTFOLIO ITEM
// ============================================================

function PortfolioItem({ item }) {

  const itemRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);


  useEffect(() => {

    const node = itemRef.current;

    if (!node) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

            observer.disconnect();
          }

        },
        {
          threshold: 0.3,
        }
      );


    observer.observe(node);


    return () =>
      observer.disconnect();

  }, []);


  return (

    <div
      className="tok-portfolio-item"
      ref={itemRef}
    >

      <img
        src={item.image}
        alt={item.title}
        className="tok-portfolio-image"
        draggable={false}
      />


      <div className="tok-portfolio-content">

        <div className="tok-portfolio-top">

          <p className="tok-portfolio-title">
            {item.title}
          </p>


          <span className="tok-portfolio-percentage">
            {item.percentage}%
          </span>

        </div>


        <div
          className="tok-progress-track"
          role="progressbar"
          aria-valuenow={item.percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${item.title} allocation: ${item.percentage}%`}
        >

          <div
            className="tok-progress-fill"
            style={{
              width: isVisible
                ? `${item.percentage}%`
                : "0%",
            }}
          />

        </div>

      </div>

    </div>
  );
}