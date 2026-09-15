import React from "react";
import Reveal from "../common/Reveal";

import propertyImage from "../assets/images/about-property.jpg";
import kaudiLogo from "../assets/logo/kaudi-logo12.png";

const TAGS = [
  "REAL ESTATE",
  "BLOCKCHAIN",
  "TOKENIZATION",
  "FRACTIONAL PARTICIPATION",
  "DIGITAL ACCESS",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* =====================================================
            LEFT SIDE — IMAGE
        ===================================================== */}

        <div className="about-media">
          <Reveal direction="left" delay={150}>
            <div className="about-image-wrap">

              {/* PROPERTY IMAGE */}
              <img
                src={propertyImage}
                alt="Modern real estate property interior"
                className="about-image"
                draggable="false"
              />

              {/* =================================================
                  ORIGINAL KAUDI LOGO
              ================================================= */}

              <div className="about-logo-badge">
                <img
                  src={kaudiLogo}
                  alt="KAUDI logo"
                  className="about-logo"
                  draggable="false"
                />
              </div>

              {/* =================================================
                  PORTFOLIO CARD
              ================================================= */}

              <div className="portfolio-card">
                <span className="portfolio-label">
                  PORTFOLIO VALUE
                </span>

                <span className="portfolio-value">
                  ₹2.5 Cr
                </span>

                <span className="portfolio-note">
                  Illustrative · Sunrise — Oceanview
                </span>
              </div>

            </div>
          </Reveal>
        </div>


        {/* =====================================================
            RIGHT SIDE — CONTENT
        ===================================================== */}

        <div className="about-content">

          {/* =====================================================
              SECTION LABEL
          ===================================================== */}

          <Reveal direction="up" delay={100}>
            <span className="about-label">
              01 — ABOUT KAUDI
            </span>
          </Reveal>


          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <Reveal direction="up" delay={200}>
            <h2 className="about-heading">

              <span className="heading-gold">
                REIMAGINING
              </span>

              <span className="heading-gold">
                ACCESS TO
              </span>

              <span className="heading-cream">
                REAL ESTATE
              </span>

            </h2>
          </Reveal>


          {/* =====================================================
              DESCRIPTION — ROW 1
          ===================================================== */}

          <Reveal direction="up" delay={300}>
            <p className="about-description">
              KAUDI is built at the intersection of Real Estate,
              Blockchain and Real-World Asset Tokenization. Our goal:
              a structured digital ecosystem where selected real-world
              properties are represented through blockchain
              infrastructure and made available for eligible fractional
              participation.
            </p>
          </Reveal>


          {/* =====================================================
              QUOTE — ROW 2
          ===================================================== */}

          <Reveal direction="up" delay={400}>
            <div className="about-quote">

              <span
                className="quote-line"
                aria-hidden="true"
              />

              <p className="quote-text">
                "Making Real Estate Accessible Through Blockchain-Powered Fractional Ownership."
              </p>

            </div>
          </Reveal>


          {/* =====================================================
              TAGS — ROW 3
          ===================================================== */}

          <Reveal direction="up" delay={500}>
            <div className="about-tags">

              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="about-tag"
                >
                  {tag}
                </span>
              ))}

            </div>
          </Reveal>

        </div>
      </div>


      {/* =======================================================
          CSS
      ======================================================= */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .about-section {
          width: 100%;
          min-height: 70vh;

          background: #000000;

          color: #ffffff;

          overflow: hidden;

          font-family:
            Inter,
            Arial,
            sans-serif;
        }


        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .about-container {
          width: 1300px;

          max-width:
            calc(100% - 40px);

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 760px)
            minmax(0, 1fr);

          column-gap: 80px;

          align-items: start;

          padding-top: 89px !important;

          padding-bottom: 80px !important;

          box-sizing: border-box;
        }


        /* =====================================================
           LEFT IMAGE AREA
        ===================================================== */

        .about-media {
          position: relative;

          width: 100%;
        }


        /* =====================================================
           IMAGE WRAPPER
        ===================================================== */

        .about-image-wrap {
          position: relative;

          width: 100%;

          height: 500px;

          animation:
            about-image-float
            6s
            ease-in-out
            infinite;
        }


        /* =====================================================
           PROPERTY IMAGE
        ===================================================== */

        .about-image {
          display: block;

          width: 608px;

          height: 400px;

          object-fit: cover;

          object-position: center;

          border-radius: 5px;

          user-select: none;

          cursor: pointer;

          transition:
            transform
            700ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 500ms ease,
            box-shadow 500ms ease;
        }


        /* =====================================================
           IMAGE HOVER
        ===================================================== */

        .about-image-wrap:hover .about-image {
          transform:
            scale(1.025);

          filter:
            brightness(1.05)
            contrast(1.03);

          box-shadow:
            0 0 35px
            rgba(
              245,
              194,
              64,
              0.12
            );
        }


        /* =====================================================
           IMAGE FLOAT ANIMATION
        ===================================================== */

        @keyframes about-image-float {

          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-5px);
          }

        }


        /* =====================================================
           ORIGINAL KAUDI LOGO
        ===================================================== */

        .about-logo-badge {
          position: absolute;

          top: -38px;

          left: -36px;

          width: 100px;

          height: 100px;

          z-index: 50;

          pointer-events: none;

          animation:
            kaudi-logo-float
            4s
            ease-in-out
            infinite,
            kaudi-logo-glow
            3s
            ease-in-out
            infinite;
        }


        .about-logo {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: contain;

          user-select: none;
        }


        /* =====================================================
           LOGO FLOAT
        ===================================================== */

        @keyframes kaudi-logo-float {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-7px)
              rotate(2deg);
          }

        }


        /* =====================================================
           LOGO GLOW
        ===================================================== */

        @keyframes kaudi-logo-glow {

          0%,
          100% {
            filter:
              drop-shadow(
                0 0 4px
                rgba(
                  245,
                  194,
                  64,
                  0.10
                )
              );
          }

          50% {
            filter:
              drop-shadow(
                0 0 14px
                rgba(
                  245,
                  194,
                  64,
                  0.28
                )
              );
          }

        }


        /* =====================================================
           PORTFOLIO CARD
        ===================================================== */

        .portfolio-card {
          position: absolute;

          right: -40px;

          bottom: -42px;

          width: 230px;

          min-height: 105px;

          padding:
            20px
            30px
            18px;

          display: flex;

          flex-direction: column;

          background: #090c14;

          border:
            1px solid
            rgba(
              184,
              134,
              38,
              0.32
            );

          border-radius: 5px;

          z-index: 40;

          box-shadow:
            0 20px 45px
            rgba(
              0,
              0,
              0,
              0.45
            );

          box-sizing: border-box;

          cursor: pointer;

          transition:
            transform
            350ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 300ms ease,
            box-shadow 350ms ease,
            background 300ms ease;
        }


        /* =====================================================
           PORTFOLIO CARD HOVER
        ===================================================== */

        .portfolio-card:hover {
          transform:
            translateY(-8px);

          border-color:
            rgba(
              245,
              194,
              64,
              0.65
            );

          background:
            #0c0f18;

          box-shadow:
            0 25px 55px
            rgba(
              0,
              0,
              0,
              0.55
            ),
            0 0 28px
            rgba(
              245,
              194,
              64,
              0.10
            );
        }


        .portfolio-label {
          font-family:
            "Roboto Mono",
            monospace;

          font-size: 10px;

          font-weight: 500;

          line-height: 1;

          letter-spacing: 2.5px;

          text-transform: uppercase;

          color: #C8861A;
        }


        .portfolio-value {
          margin-top: 10px;

          font-family:
            "Roboto",
            sans-serif;

          font-size: 37px;

          font-weight: 700;

          line-height: 1;

          color: #F5C240;

          transition:
            text-shadow 300ms ease,
            transform 300ms ease;
        }


        .portfolio-card:hover
        .portfolio-value {
          transform:
            translateX(3px);

          text-shadow:
            0 0 18px
            rgba(
              245,
              194,
              64,
              0.45
            );
        }


        .portfolio-note {
          margin-top: 8px;

          max-width: 250px;

          font-size: 14px;

          line-height: 20px;

          color: #6B6560;
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .about-content {
          width: 100%;

          padding-top: 0;
        }


        /* =====================================================
           SECTION LABEL
        ===================================================== */

        .about-label {
          display: block;

          font-family:
            "Roboto Mono",
            monospace;

          font-size: 11px;

          font-weight: 500;

          line-height: 1;

          letter-spacing: 2.6px;

          text-transform: uppercase;

          color: #C8861A;

          transition:
            letter-spacing 300ms ease,
            color 300ms ease;
        }


        .about-label:hover {
          letter-spacing: 3.2px;

          color: #F5C240;

          cursor: pointer;
        }


        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .about-heading {
          display: flex;

          flex-direction: column;

          margin:
            28px
            0
            0;

          padding: 0;

          font-family:
            "Oswald",
            "Barlow Condensed",
            Arial,
            sans-serif;

          font-size:
            clamp(
              40px,
              5vw,
              67px
            );

          font-weight: 400;

          line-height: .95;

          letter-spacing: -2px;

          text-transform: uppercase;
        }


        .heading-gold {
          display: block;

          background:
            linear-gradient(
              100deg,
              #F5C240 6.17%,
              #C8861A 58.77%,
              #F5C240 93.83%
            );

          background-clip: text;

          -webkit-background-clip: text;

          color: transparent;

          -webkit-text-fill-color:
            transparent;

          transition:
            filter 350ms ease,
            transform 350ms ease;
        }


        .heading-gold:hover {
          filter:
            drop-shadow(
              0 0 12px
              rgba(
                245,
                194,
                64,
                0.22
              )
            );

          transform:
            translateX(3px);

          cursor: pointer;
        }


        .heading-cream {
          display: block;

          color: #f2eee7;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .heading-cream:hover {
          color: #ffffff;

          transform:
            translateX(3px);

          cursor: pointer;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .about-description {
          display: block;

          width: 100%;

          max-width: 650px;

          margin:
            32px
            0
            0;

          font-size: 15px;

          font-weight: 400;

          line-height: 1.75;

          color: #8A8278;
        }


        /* =====================================================
           QUOTE
        ===================================================== */

        .about-quote {
          display: flex;

          align-items: flex-start;

          width: max-content;

          max-width: none;

          margin:
            28px
            0
            0;

          padding: 0;

          box-sizing: border-box;

          transition:
            transform 300ms ease;
        }


        .about-quote:hover {
          transform:
            translateX(4px);

          cursor: pointer;
        }


        .quote-line {
          width: 2px;

          min-width: 2px;

          height: 31px;

          margin-top: 3px;

          margin-right: 20px;

          background: #f5c240;

          box-shadow:
            0 0 8px
            rgba(
              245,
              194,
              64,
              0.25
            );

          transition:
            height 300ms ease,
            box-shadow 300ms ease;
        }


        .about-quote:hover
        .quote-line {
          height: 42px;

          box-shadow:
            0 0 14px
            rgba(
              245,
              194,
              64,
              0.5
            );
        }


        .quote-text {
          margin: 0;

          font-size: 15px;

          font-weight: 400;

          font-style: italic;

          line-height: 1.55;

          color: #C8B898;

          white-space: nowrap;

          transition:
            color 300ms ease;
        }


        .about-quote:hover
        .quote-text {
          color: #F0DCA8;
        }


        /* =====================================================
           TAGS — ONE ROW
           REDUCED GAP
           NEVER HIDE TAGS
        ===================================================== */

        .about-tags {
          display: flex;

          flex-direction: row;

          flex-wrap: nowrap;

          align-items: center;

          justify-content: flex-start;

          /*
            Reduced from 10px
          */
          gap: 4px;

          width: 100%;

          max-width: 650px;

          margin:
            28px
            0
            0;

          /*
            Do NOT use auto/hidden overflow.
          */
          overflow: visible;

          box-sizing: border-box;
        }


        /* =====================================================
           TAG
        ===================================================== */

        .about-tag {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          /*
            Keep each tag visible.
          */
          flex-shrink: 0;

          min-height: 39px;

          padding:
            0
            14px;

          background: transparent;

          border:
            1px solid
            rgba(
              184,
              134,
              38,
              0.30
            );

          border-radius: 5px;

          font-family:
            "Oswald",
            sans-serif;

          /*
            ORIGINAL FONT SIZE
          */
          font-size: 11px;

          font-weight: 500;

          line-height: 1;

          letter-spacing: 1.2px;

          text-transform: uppercase;

          white-space: nowrap;

          color: #8A8278;

          cursor: pointer;

          /*
            Never cut the tag text.
          */
          overflow: visible;

          text-overflow: clip;

          transition:
            transform 250ms ease,
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
        }


        /* =====================================================
           TAG HOVER
        ===================================================== */

        .about-tag:hover {
          transform:
            translateY(-4px);

          color: #F5C240;

          border-color:
            rgba(
              245,
              194,
              64,
              0.65
            );

          background:
            rgba(
              245,
              194,
              64,
              0.05
            );

          box-shadow:
            0 5px 18px
            rgba(
              245,
              194,
              64,
              0.10
            );
        }


        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {

          .about-container {
            width: 1300px;

            max-width:
              calc(100% - 40px);

            margin: 0 auto;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            column-gap: 60px;

            padding-top: 70px;

            padding-bottom: 110px;
          }


          .about-image-wrap {
            height: 470px;
          }


          .about-logo-badge {
            top: -34px;

            left: -28px;

            width: 92px;

            height: 92px;
          }


          .portfolio-card {
            right: -30px;

            bottom: -40px;
          }


          .about-heading {
            font-size:
              clamp(
                52px,
                5vw,
                76px
              );
          }


          .about-quote {
            width: max-content;

            max-width: none;
          }


          .quote-text {
            white-space: nowrap;
          }


          /* TAGS */

          .about-tags {
            flex-wrap: nowrap;

            gap: 4px;

            max-width: 650px;

            overflow: visible;
          }


          .about-tag {
            flex-shrink: 0;

            font-size: 11px;

            padding:
              0
              14px;

            white-space: nowrap;

            overflow: visible;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media
          (min-width: 768px)
          and
          (max-width: 1199px) {

          .about-container {
            width:
              min(
                1050px,
                calc(100% - 64px)
              );

            margin: 0 auto;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            column-gap: 40px;

            padding-top: 60px;

            padding-bottom: 100px;
          }


          .about-image-wrap {
            height: 420px;
          }


          .about-logo-badge {
            top: -30px;

            left: -22px;

            width: 82px;

            height: 82px;
          }


          .portfolio-card {
            width: 245px;

            min-height: 105px;

            right: -20px;

            bottom: -35px;

            padding: 18px 24px;
          }


          .portfolio-value {
            font-size: 31px;
          }


          .about-heading {
            margin-top: 22px;

            font-size:
              clamp(
                45px,
                6vw,
                68px
              );

            line-height: 0.9;

            letter-spacing: -1.5px;
          }


          .about-description {
            font-size: 14px;

            line-height: 1.7;
          }


          .quote-text {
            font-size: 15px;

            white-space: nowrap;
          }


          .about-quote {
            width: max-content;

            max-width: none;
          }


          /* =================================================
             TABLET TAGS
             ONE ROW
             NO HIDING
          ================================================= */

          .about-tags {
            flex-wrap: wrap;

            gap: 6px;

            max-width: 100%;

            overflow: visible;
          }


          .about-tag {
            flex-shrink: 0;

            min-height: 36px;

            padding:
              0
              8px;

            font-size: 11px;

            letter-spacing: 0.8px;

            white-space: nowrap;

            overflow: visible;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .about-container {
            width:
              calc(100% - 32px);

            max-width: none;

            margin: 0 auto;

            display: flex;

            flex-direction: column;

            align-items: center;

            gap: 80px;

            padding-top: 60px;

            padding-bottom: 90px;

            box-sizing: border-box;
          }


          /* CONTENT FIRST */

          .about-content {
            order: 1;

            width: 100%;

            max-width: 650px;

            display: flex;

            flex-direction: column;

            align-items: center;

            text-align: center;

            box-sizing: border-box;
          }


          /* IMAGE SECOND */

          .about-media {
            order: 2;

            width: 100%;

            max-width: 650px;

            box-sizing: border-box;
          }


          /* IMAGE */

          .about-image-wrap {
            width: 100%;

            height: auto;

            min-height: 300px;

            box-sizing: border-box;
          }


          .about-image {
            display: block;

            width: 100%;

            height: 300px;

            object-fit: cover;

            object-position: center;

            box-sizing: border-box;
          }


          /* LOGO */

          .about-logo-badge {
            top: -24px;

            left: -8px;

            width: 78px;

            height: 78px;
          }


          .about-logo {
            width: 100%;

            height: 100%;

            object-fit: contain;
          }


          /* PORTFOLIO CARD */

          .portfolio-card {
            width:
              min(
                270px,
                78%
              );

            min-height: 105px;

            right: 8px;

            bottom: -48px;

            padding:
              17px
              22px;

            box-sizing: border-box;
          }


          .portfolio-value {
            margin-top: 9px;

            font-size: 31px;
          }


          .portfolio-note {
            margin-top: 6px;

            font-size: 12px;

            line-height: 18px;
          }


          /* LABEL */

          .about-label {
            font-size: 10px;

            letter-spacing: 3px;

            text-align: center;
          }


          /* HEADING */

          .about-heading {
            width: 100%;

            max-width: 100%;

            margin-top: 20px;

            align-items: center;

            font-size:
              clamp(
                42px,
                12vw,
                65px
              );

            line-height: 0.91;

            letter-spacing: -1.5px;

            text-align: center;
          }


          /* DESCRIPTION */

          .about-description {
            width: 100%;

            max-width: 650px;

            margin-top: 28px;

            font-size: 14px;

            line-height: 1.75;

            text-align: center;

            overflow-wrap: break-word;
          }


          /* =================================================
             QUOTE — MOBILE
          ================================================= */

          .about-quote {
            width: 100%;

            max-width: 600px;

            margin-top: 26px;

            display: flex;

            align-items: flex-start;

            justify-content: center;

            text-align: center;

            box-sizing: border-box;
          }


          .quote-line {
            flex-shrink: 0;

            margin-right: 14px;

            min-height: 45px;

            height: auto;
          }


          .quote-text {
            max-width: 500px;

            font-size: 14px;

            line-height: 1.6;

            text-align: center;

            white-space: normal;
          }


          /* =================================================
             TAGS — ONE SINGLE ROW
             REDUCED GAP
             NOTHING HIDDEN
          ================================================= */

          .about-tags {
            width: 100%;

            max-width: 100%;

            display: flex;

            flex-direction: row;

            flex-wrap: wrap;

            align-items: center;

            justify-content: center;

            /*
              Responsive gap
            */
            gap: 6px;

            margin-top: 28px;

            /*
              Keep all tags visible and allow them
              to move naturally onto the next row.
            */
            overflow: visible;

            box-sizing: border-box;
          }


          .about-tag {
            flex-shrink: 0;

            min-height: 35px;

            padding:
              0
              8px;

            /*
              ORIGINAL FONT SIZE
            */
            font-size: 11px;

            letter-spacing: 0.8px;

            white-space: nowrap;

            overflow: visible;

            text-overflow: clip;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .about-container {
            width:
              calc(100% - 28px);

            padding-top: 50px;

            padding-bottom: 75px;

            gap: 75px;
          }


          .about-content {
            width: 100%;

            max-width: 100%;
          }


          .about-media {
            width: 100%;

            max-width: 100%;
          }


          .about-image-wrap {
            width: 100%;

            min-height: 250px;
          }


          .about-image {
            width: 100%;

            height: 250px;
          }


          /* LOGO */

          .about-logo-badge {
            top: -21px;

            left: -5px;

            width: 68px;

            height: 68px;
          }


          /* PORTFOLIO */

          .portfolio-card {
            width: 230px;

            min-height: 105px;

            right: 5px;

            bottom: -45px;

            padding: 16px 20px;
          }


          .portfolio-label {
            font-size: 8px;

            letter-spacing: 2px;
          }


          .portfolio-value {
            font-size: 28px;
          }


          .portfolio-note {
            font-size: 11px;

            line-height: 17px;
          }


          /* HEADING */

          .about-heading {
            width: 100%;

            font-size:
              clamp(
                40px,
                13vw,
                57px
              );

            text-align: center;
          }


          /* DESCRIPTION */

          .about-description {
            width: 100%;

            max-width: 100%;

            font-size: 13px;

            text-align: center;
          }


          /* QUOTE */

          .about-quote {
            width: 100%;

            justify-content: center;
          }


          .quote-text {
            font-size: 13px;

            text-align: center;

            white-space: normal;
          }


          /* =================================================
             TAGS
             ONE ROW
             SMALL GAP
             NO HIDING
          ================================================= */

          .about-tags {
            width: 100%;

            gap: 5px;

            justify-content: center;

            flex-wrap: wrap;

            overflow: visible;
          }


          .about-tag {
            flex-shrink: 0;

            min-height: 33px;

            padding:
              0
              6px;

            font-size: 11px;

            letter-spacing: 0.6px;

            white-space: nowrap;

            overflow: visible;
          }

        }


        /* =====================================================
           EXTRA SMALL
        ===================================================== */

        @media (max-width: 360px) {

          .about-container {
            width:
              calc(100% - 24px);
          }


          .about-logo-badge {
            top: -19px;

            left: -3px;

            width: 62px;

            height: 62px;
          }


          .portfolio-card {
            width: 215px;

            min-height: 100px;

            right: 0;
          }


          .about-heading {
            font-size: 39px;
          }


          .about-description {
            font-size: 12.5px;
          }


          .quote-text {
            font-size: 12.5px;

            white-space: normal;
          }


          /* =================================================
             TAGS
             ONE ROW
             NO HORIZONTAL SCROLL
             NO HIDING
          ================================================= */

          .about-tags {
            gap: 5px;

            overflow: visible;

            flex-wrap: wrap;

            justify-content: center;
          }


          .about-tag {
            flex-shrink: 0;

            padding:
              0
              5px;

            /*
              KEEP FONT SIZE
            */
            font-size: 11px;

            letter-spacing: 0.4px;

            white-space: nowrap;

            overflow: visible;
          }

        }


        /* =====================================================
           GLOBAL BOX SIZING
        ===================================================== */

        .about-section,
        .about-container,
        .about-content,
        .about-media,
        .about-image-wrap,
        .about-image,
        .about-description,
        .about-quote,
        .about-tags,
        .about-tag {
          box-sizing: border-box;
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .about-section *,
          .about-image-wrap,
          .about-logo-badge {

            animation: none !important;

            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
}