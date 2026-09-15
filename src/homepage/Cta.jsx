import React from "react";
import Reveal from "../common/Reveal";

// ============================================================
// ASSETS
// ============================================================

import heroBackground from "../assets/images/hero-city-bg.png";
import kaudiLogo from "../assets/images/kaudi-logo.png";

// ============================================================
// HERO SECTION
// ============================================================

export default function Hero() {
  return (
    <section className="overflow-hidden relative w-full min-h-screen hero-section">

      {/* ========================================================
          BACKGROUND IMAGE
      ======================================================== */}

      <div className="absolute inset-0 hero-background-wrap">
        <img
          src={heroBackground}
          alt="Dark nighttime city skyline representing the KAUDI ecosystem"
          className="object-cover object-center h-full w-full hero-background"
          draggable={false}
        />
      </div>


      {/* ========================================================
          DARK OVERLAY
      ======================================================== */}

      <div
        className="absolute inset-0 hero-overlay"
        style={{
          background:
            "linear-gradient(rgba(4,7,12,0.62), rgba(4,7,12,0.72))",
        }}
      />


      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="z-10 relative flex items-center justify-center min-h-screen w-full">

        <div className="flex flex-col items-center mx-auto px-[18px] py-24 w-full max-w-[1200px] text-center hero-content sm:px-8 md:px-[30px] lg:px-12">

          {/* ======================================================
              LOGO
          ====================================================== */}

          <Reveal delay={100}>
            <img
              src={kaudiLogo}
              alt="KAUDI"
              className="object-contain select-none hero-logo"
              draggable={false}
            />
          </Reveal>


          {/* ======================================================
              TAGLINE
          ====================================================== */}

          <Reveal delay={200}>
            <span className="hero-tagline">
              The Future Of Real Estate Is Digital
            </span>
          </Reveal>


          {/* ======================================================
              MAIN HEADING
          ====================================================== */}

          <Reveal delay={300}>
            <h1 className="mt-6 font-bold hero-heading uppercase sm:mt-8">

              <span className="block hero-heading-cream">
                Real Assets
              </span>

              <span className="block hero-heading-gold">
                Digital Access
              </span>

              <span className="block hero-heading-cream">
                Global Opportunity
              </span>

            </h1>
          </Reveal>


          {/* ======================================================
              DESCRIPTION
          ====================================================== */}

          <Reveal delay={400}>
            <p className="mt-6 hero-description sm:mt-7">

              <span className="hero-description-line">
                Building new infrastructure for property participation — tangible assets,
              </span>

              <span className="hero-description-line">
                blockchain technology, fractional digital access.
              </span>

            </p>
          </Reveal>


          {/* ======================================================
              TAGLINE BELOW DESCRIPTION
          ====================================================== */}

          <Reveal delay={500}>
            <p className="mt-5 hero-subtagline sm:mt-6">
              Own Less. Access More.
            </p>
          </Reveal>


          {/* ======================================================
              BUTTONS
          ====================================================== */}

          <Reveal delay={600}>
            <div className="flex flex-col items-center justify-center gap-4 mt-9 w-full hero-buttons sm:flex-row">

              {/* EXPLORE KAUDI */}

              <a
                href="#ecosystem"
                className="hero-btn-primary"
              >
                Explore KAUDI
              </a>


              {/* READ WHITEPAPER */}

              <a
                href="#whitepaper"
                className="hero-btn-secondary"
              >
                Read Whitepaper
              </a>

            </div>
          </Reveal>

        </div>
      </div>


      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           HERO SECTION
        ====================================================== */

        .hero-section {
          font-family:
            'Oswald',
            'Barlow Condensed',
            sans-serif;

          background-color:
            #05070C;
        }


        /* ======================================================
           BACKGROUND
        ====================================================== */

        .hero-background-wrap {
          overflow:
            hidden;
        }


        .hero-background {
          transform:
            scale(1.02);

          animation:
            hero-background-zoom
            14s ease-in-out
            infinite alternate;

          will-change:
            transform;
        }


        @keyframes hero-background-zoom {

          0% {
            transform:
              scale(1.02);
          }

          100% {
            transform:
              scale(1.08);
          }

        }


        .hero-overlay {
          transition:
            background 400ms ease;
        }


        /* ======================================================
           CONTENT
        ====================================================== */

        .hero-content {
          position:
            relative;
        }


        /* ======================================================
           LOGO
        ====================================================== */

        .hero-logo {
          height:
            auto;

          width:
            60px;

          cursor:
            pointer;

          animation:
            hero-logo-float
            4s ease-in-out infinite,

            hero-logo-glow
            3s ease-in-out infinite;

          transition:
            transform 300ms ease,
            filter 300ms ease;

          will-change:
            transform,
            filter;
        }


        .hero-logo:hover {
          transform:
            translateY(-5px)
            scale(1.05);

          filter:
            drop-shadow(
              0 0 8px
              rgba(245, 194, 64, 0.45)
            )
            drop-shadow(
              0 0 20px
              rgba(245, 194, 64, 0.25)
            );
        }


        @keyframes hero-logo-float {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-7px);
          }

        }


        @keyframes hero-logo-glow {

          0%,
          100% {
            filter:
              drop-shadow(
                0 0 0
                rgba(245, 194, 64, 0)
              );
          }

          50% {
            filter:
              drop-shadow(
                0 0 8px
                rgba(245, 194, 64, 0.28)
              )
              drop-shadow(
                0 0 18px
                rgba(245, 194, 64, 0.12)
              );
          }

        }


        @media (min-width: 480px) {

          .hero-logo {
            width:
              65px;
          }

        }


        @media (min-width: 768px) {

          .hero-logo {
            width:
              80px;
          }

        }


        @media (min-width: 1024px) {

          .hero-logo {
            width:
              90px;
          }

        }


        /* ======================================================
           TAGLINE
        ====================================================== */

        .hero-tagline {
          font-family:
            'Roboto',
            sans-serif;

          font-size:
            9px;

          font-weight:
            400;

          letter-spacing:
            2.25px;

          text-transform:
            uppercase;

          color:
            #FFFFFF;

          cursor:
            pointer;

          transition:
            color 250ms ease,
            letter-spacing 250ms ease,
            text-shadow 250ms ease;
        }


        .hero-tagline:hover {
          color:
            #F5C240;

          letter-spacing:
            2.7px;

          text-shadow:
            0 0 12px
            rgba(245, 194, 64, 0.35);
        }


        @media (min-width: 480px) {

          .hero-tagline {
            font-size:
              9px;

            letter-spacing:
              2.25px;
          }

        }


        @media (min-width: 768px) {

          .hero-tagline {
            font-size:
              9px;

            letter-spacing:
              2.25px;
          }

        }


        /* ======================================================
           HEADING
        ====================================================== */

        .hero-heading {
          font-size:
            clamp(44px, 12vw, 96px);

          font-family:
            'Oswald',
            sans-serif;

          font-weight:
            400;

          line-height:
            0.94;

          letter-spacing:
            -1px;

          cursor:
            pointer;

          transition:
            transform 350ms ease,
            filter 350ms ease;
        }


        .hero-heading:hover {
          transform:
            translateY(-3px);

          filter:
            drop-shadow(
              0 0 10px
              rgba(245, 194, 64, 0.18)
            );
        }


        .hero-heading-cream {
          color:
            #E2D9C8;

          transition:
            color 300ms ease,
            text-shadow 300ms ease;
        }


        .hero-heading:hover
        .hero-heading-cream {
          color:
            #F0E9DC;

          text-shadow:
            0 0 18px
            rgba(226, 217, 200, 0.12);
        }


        .hero-heading-gold {
          background:
            linear-gradient(
              100deg,
              #F5C240 6.17%,
              #C8861A 58.77%,
              #F5C240 93.83%
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          color:
            transparent;

          -webkit-text-fill-color:
            transparent;

          transition:
            filter 300ms ease;
        }


        .hero-heading:hover
        .hero-heading-gold {
          filter:
            drop-shadow(
              0 0 10px
              rgba(245, 194, 64, 0.32)
            );
        }


        @media (min-width: 640px) {

          .hero-heading {
            font-size:
              clamp(60px, 9vw, 96px);
          }

        }


        @media (min-width: 1024px) {

          .hero-heading {
            letter-spacing:
              -2px;
          }

        }


        /* ======================================================
           DESCRIPTION
        ====================================================== */

        .hero-description {
          font-family:
            'Roboto',
            sans-serif !important;

          font-size:
            clamp(12px, 1.5vw, 14px);

          line-height:
            1.6;

          width:
            100%;

          max-width:
            100%;

          box-sizing:
            border-box;

          overflow-wrap:
            break-word;

          word-wrap:
            break-word;

          color:
            #AAAAAA;

          cursor:
            default;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .hero-description:hover {
          color:
            #C5C5C5;

          transform:
            translateY(-2px);
        }


        .hero-description-line {
          display:
            block;

          width:
            100%;

          text-align:
            center;
        }


        /* ======================================================
           DESKTOP LINE BREAK
        ====================================================== */

        .hero-lg-break {
          display:
            none;
        }


        /* ======================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {

          .hero-description {
            width:
              100%;

            max-width:
              320px;

            font-size:
              12px;

            line-height:
              1.55;

            text-align:
              center;
          }


          .hero-lg-break {
            display:
              none;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (min-width: 361px)
        and (max-width: 479px) {

          .hero-description {
            width:
              100%;

            max-width:
              350px;

            font-size:
              12.5px;

            line-height:
              1.6;

            text-align:
              center;
          }


          .hero-lg-break {
            display:
              none;
          }

        }


        /* ======================================================
           SMALL TABLET
        ====================================================== */

        @media (min-width: 480px)
        and (max-width: 767px) {

          .hero-description {
            width:
              100%;

            max-width:
              400px;

            font-size:
              13px;

            line-height:
              1.6;

            text-align:
              center;
          }


          .hero-lg-break {
            display:
              none;
          }

        }


        /* ======================================================
           TABLET
        ====================================================== */

        @media (min-width: 768px)
        and (max-width: 1023px) {

          .hero-description {
            width:
              100%;

            max-width:
              400px;

            font-size:
              14px;

            line-height:
              1.6;

            text-align:
              center;
          }


          .hero-lg-break {
            display:
              none;
          }

        }


        /* ======================================================
           DESKTOP
        ====================================================== */

        @media (min-width: 1024px) {

          .hero-description {
            width:
              700px;

            max-width:
              700px;

            font-size:
              14px;

            line-height:
              28px;

            text-align:
              center;
          }


          .hero-lg-break {
            display:
              block;
          }

        }


        /* ======================================================
           SUBTAGLINE
        ====================================================== */

        .hero-subtagline {
          font-size:
            14px;

          font-weight:
            400;

          letter-spacing:
            1px;

          text-transform:
            uppercase;

          color:
            #F5C240;

          cursor:
            pointer;

          transition:
            transform 250ms ease,
            letter-spacing 250ms ease,
            text-shadow 250ms ease;
        }


        .hero-subtagline:hover {
          transform:
            translateY(-2px);

          letter-spacing:
            1.5px;

          text-shadow:
            0 0 12px
            rgba(245, 194, 64, 0.45);
        }


        @media (min-width: 768px) {

          .hero-subtagline {
            font-size:
              14px;
          }

        }


        /* ======================================================
           BUTTONS
        ====================================================== */

        .hero-btn-primary,
        .hero-btn-secondary {
          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          height:
            48px !important;

          padding:
            0 24px;

          border-radius:
            4px;

          font-family:
            'Roboto',
            sans-serif;

          font-size:
            12px;

          font-weight:
            600;

          letter-spacing:
            2px;

          text-transform:
            uppercase;

          text-decoration:
            none;

          white-space:
            nowrap;

          box-sizing:
            border-box;

          flex-shrink:
            0;

          cursor:
            pointer;

          transition:
            transform 250ms ease,
            box-shadow 250ms ease,
            background 250ms ease,
            border-color 250ms ease,
            filter 250ms ease;
        }


        /* ======================================================
           PRIMARY BUTTON — EXPLORE KAUDI
        ====================================================== */

        .hero-btn-primary {
          width:
            195px !important;

          min-width:
            195px !important;

          max-width:
            195px !important;

          flex:
            0 0 195px !important;

          height:
            48px !important;

          color:
            #14100A !important;

          background:
            linear-gradient(
              100deg,
              #C8861A 6.17%,
              #F5C240 93.83%
            ) !important;

          border:
            none !important;

          box-shadow:
            0 0 0
            rgba(245, 194, 64, 0);
        }


        .hero-btn-primary:hover,
        .hero-btn-primary:focus-visible {

          filter:
            brightness(1.08);

          transform:
            translateY(-3px)
            scale(1.02);

          box-shadow:
            0 8px 25px
            rgba(245, 194, 64, 0.22),

            0 0 18px
            rgba(245, 194, 64, 0.16);

          outline:
            none;
        }


        .hero-btn-primary:active {

          transform:
            translateY(0)
            scale(0.99);

          box-shadow:
            0 3px 10px
            rgba(245, 194, 64, 0.15);
        }


        /* ======================================================
           SECONDARY BUTTON — READ WHITEPAPER
        ====================================================== */

        .hero-btn-secondary {
          width:
            212px !important;

          min-width:
            212px !important;

          max-width:
            212px !important;

          flex:
            0 0 212px !important;

          height:
            48px !important;

          /* GOLD TEXT */
          color:
            #F5C240 !important;

          -webkit-text-fill-color:
            #F5C240 !important;

          background:
            transparent !important;

          border:
            0.77px solid
            #F5C24059 !important;

          box-shadow:
            inset 0 0 0
            rgba(245, 194, 64, 0);
        }


        /* ======================================================
           FORCE GOLD IN ALL STATES
        ====================================================== */

        .hero-buttons
        a.hero-btn-secondary,
        .hero-buttons
        a.hero-btn-secondary:link,
        .hero-buttons
        a.hero-btn-secondary:visited,
        .hero-buttons
        a.hero-btn-secondary:hover,
        .hero-buttons
        a.hero-btn-secondary:focus,
        .hero-buttons
        a.hero-btn-secondary:focus-visible,
        .hero-buttons
        a.hero-btn-secondary:active {

          color:
            #F5C240 !important;

          -webkit-text-fill-color:
            #F5C240 !important;

          text-decoration:
            none !important;
        }


        /* ======================================================
           SECONDARY HOVER
        ====================================================== */

        .hero-btn-secondary:hover,
        .hero-btn-secondary:focus-visible {

          color:
            #F5C240 !important;

          -webkit-text-fill-color:
            #F5C240 !important;

          background:
            rgba(245, 194, 64, 0.1) !important;

          border-color:
            rgba(245, 194, 64, 0.8) !important;

          transform:
            translateY(-3px)
            scale(1.02);

          box-shadow:
            0 8px 24px
            rgba(245, 194, 64, 0.12),

            0 0 16px
            rgba(245, 194, 64, 0.1);

          outline:
            none;
        }


        .hero-btn-secondary:active {

          color:
            #F5C240 !important;

          -webkit-text-fill-color:
            #F5C240 !important;

          transform:
            translateY(0)
            scale(0.99);
        }


        /* ======================================================
           BUTTON SHINE
        ====================================================== */

        .hero-btn-primary,
        .hero-btn-secondary {
          position:
            relative;

          overflow:
            hidden;
        }


        .hero-btn-primary::after,
        .hero-btn-secondary::after {

          content:
            "";

          position:
            absolute;

          top:
            0;

          left:
            -120%;

          width:
            70%;

          height:
            100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.22),
              transparent
            );

          transform:
            skewX(-20deg);

          transition:
            left 500ms ease;

          pointer-events:
            none;
        }


        .hero-btn-primary:hover::after,
        .hero-btn-secondary:hover::after {
          left:
            140%;
        }


        /* ======================================================
           RESPONSIVE BUTTONS — 361px TO 767px
           Keep both buttons consistent when layout stacks
        ====================================================== */

        @media (min-width: 361px) and (max-width: 767px) {

          .hero-buttons {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }

          .hero-buttons .hero-btn-primary {
            width: 195px !important;
            min-width: 195px !important;
            max-width: 195px !important;
            flex: 0 0 195px !important;
            height: 48px !important;
            min-height: 48px !important;
            max-height: 48px !important;
          }

          .hero-buttons .hero-btn-secondary {
            width: 212px !important;
            min-width: 212px !important;
            max-width: 212px !important;
            flex: 0 0 212px !important;
            height: 48px !important;
            min-height: 48px !important;
            max-height: 48px !important;
          }
        }


        /* ======================================================
           EXTRA SMALL MOBILE — UP TO 360px
           Keep both buttons at the same fixed height and
           preserve their intended widths
        ====================================================== */

        @media (max-width: 360px) {

          .hero-buttons {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }

          .hero-buttons .hero-btn-primary {
            width: 195px !important;
            min-width: 195px !important;
            max-width: 195px !important;
            flex: 0 0 195px !important;
            height: 48px !important;
            min-height: 48px !important;
            max-height: 48px !important;
          }

          .hero-buttons .hero-btn-secondary {
            width: 212px !important;
            min-width: 212px !important;
            max-width: 212px !important;
            flex: 0 0 212px !important;
            height: 48px !important;
            min-height: 48px !important;
            max-height: 48px !important;
          }
        }


        /* ======================================================
           HERO BUTTON CONTAINER
        ====================================================== */

        .hero-buttons {
          animation:
            hero-buttons-float
            5s ease-in-out infinite;
        }


        .hero-buttons .hero-btn-primary {
          width:
            195px !important;

          min-width:
            195px !important;

          max-width:
            195px !important;

          flex:
            0 0 195px !important;

          height:
            48px !important;
        }


        .hero-buttons .hero-btn-secondary {
          width:
            212px !important;

          min-width:
            212px !important;

          max-width:
            212px !important;

          flex:
            0 0 212px !important;

          height:
            48px !important;

          color:
            #F5C240 !important;

          -webkit-text-fill-color:
            #F5C240 !important;
        }


        @keyframes hero-buttons-float {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-2px);
          }

        }


        /* ======================================================
           SAFETY — NO HORIZONTAL OVERFLOW
        ====================================================== */

        .hero-content,
        .hero-heading,
        .hero-description {
          max-width:
            100%;
        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-background,
          .hero-logo,
          .hero-buttons {
            animation:
              none;
          }


          .hero-btn-primary,
          .hero-btn-secondary,
          .hero-logo,
          .hero-heading,
          .hero-heading-cream,
          .hero-heading-gold,
          .hero-description,
          .hero-subtagline,
          .hero-tagline {
            transition:
              none;
          }


          .hero-btn-primary:hover,
          .hero-btn-primary:focus-visible,
          .hero-btn-primary:active,
          .hero-btn-secondary:hover,
          .hero-btn-secondary:focus-visible,
          .hero-btn-secondary:active,
          .hero-heading:hover,
          .hero-description:hover,
          .hero-subtagline:hover,
          .hero-logo:hover {
            transform:
              none;
          }


          .hero-btn-primary::after,
          .hero-btn-secondary::after {
            display:
              none;
          }

        }

      `}</style>

    </section>
  );
}