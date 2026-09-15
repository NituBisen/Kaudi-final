import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// ============================================================
// ASSETS
// ============================================================

import kaudiLogo from "../assets/brand.png";

// ============================================================
// DATA
// ============================================================

const FOOTER_COLUMNS = [
  {
    heading: "Ecosystem",
    links: [
      { label: "RWA Ecosystem", href: "#ecosystem" },
      { label: "Properties", href: "#properties" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Tokenomics", href: "#tokenomics" },
    ],
  },

  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "#contact" },
    ],
  },

  {
    heading: "Resources",
    links: [
      { label: "Whitepaper", href: "#whitepaper" },
      { label: "Documentation", href: "#documentation" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

// ============================================================
// SOCIAL ICONS
// ============================================================

const SOCIAL_ICONS = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/",
  },

  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com/",
  },

  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    href: "https://x.com/",
  },

  {
    icon: FaTelegramPlane,
    label: "Telegram",
    href: "https://t.me/",
  },

  {
    icon: FaDiscord,
    label: "Discord",
    href: "https://discord.com/",
  },
];

// ============================================================
// FOOTER
// ============================================================

export default function Footer() {
  return (
    <footer className="w-full bg-[#05070A] footer-root">

      <div className="mx-auto px-5 pb-[60px] pt-[70px] w-full max-w-[1600px] sm:px-10 lg:px-20">

        {/* ====================================================
            TOP FOOTER CONTENT
        ==================================================== */}

        <div className="footer-grid">

          {/* ==================================================
              BRAND COLUMN
          ================================================== */}

          <div className="footer-brand">

            {/* LOGO */}

            <img
              src={kaudiLogo}
              alt="KAUDI"
              className="object-contain select-none footer-logo"
              draggable={false}
            />


            {/* DESCRIPTION */}

            <p className="footer-description">
              Real Assets. Digital Access. Global
              <br />
              Opportunity.
              <br />
              BEP-20 · BNB Smart Chain · 25,000,000
              <br />
              KAUDI
            </p>


            {/* ==================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="footer-socials">

              {SOCIAL_ICONS.map(
                ({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-link"
                  >
                    <Icon className="footer-social-icon" />
                  </a>
                )
              )}

            </div>

          </div>


          {/* ==================================================
              LINK COLUMNS
          ================================================== */}

          <div className="footer-nav-wrapper">

            {FOOTER_COLUMNS.map((column) => (
              <nav
                key={column.heading}
                className="footer-nav"
                aria-label={column.heading}
              >

                {/* FOOTER HEADING */}

                <h3 className="footer-heading">
                  {column.heading}
                </h3>


                {/* FOOTER LINKS */}

                <ul className="footer-links">

                  {column.links.map((link) => (
                    <li key={link.label}>

                      <a
                        href={link.href}
                        className="footer-link"
                      >
                        {link.label}
                      </a>

                    </li>
                  ))}

                </ul>

              </nav>
            ))}

          </div>

        </div>


        {/* ====================================================
            GOLDEN DIVIDER
        ==================================================== */}

        <div
          className="footer-divider"
          aria-hidden="true"
        />


        {/* ====================================================
            BOTTOM FOOTER
        ==================================================== */}

        <div className="footer-bottom">

          <span className="footer-bottom-text">
            © 2026 KAUDI. All rights reserved.
          </span>

          <span className="footer-bottom-text footer-bottom-tagline">
            Own Less. Access More.
          </span>

        </div>

      </div>


      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           FOOTER ROOT
        ====================================================== */

        .footer-root {
          font-family: 'Inter', sans-serif;

          border-top:
            1px solid
            rgba(255, 255, 255, 0.06);

          position: relative;

          overflow-x: hidden;
        }


        /* ======================================================
           MAIN FOOTER GRID
        ====================================================== */

        .footer-grid {
          display: grid;

          grid-template-columns:
            2fr 1fr 1fr 1fr;

          gap: 60px;

          align-items: start;
        }


        /* ======================================================
           BRAND COLUMN
        ====================================================== */

        .footer-brand {
          display: flex;

          flex-direction: column;

          align-items: flex-start;
        }


        /* ======================================================
           LOGO
        ====================================================== */

        .footer-logo {
          height: auto;

          width: 115px;

          cursor: pointer;

          transition:
            transform 350ms ease,
            filter 350ms ease;
        }


        .footer-logo:hover {
          transform:
            translateY(-4px)
            scale(1.04);

          filter:
            drop-shadow(
              0 0 8px
              rgba(245, 194, 64, 0.35)
            )
            drop-shadow(
              0 0 18px
              rgba(245, 194, 64, 0.16)
            );
        }


        @media (min-width: 768px) {

          .footer-logo {
            width: 120px;
          }

        }


        @media (min-width: 1024px) {

          .footer-logo {
            width: 130px;
          }

        }


        /* ======================================================
           DESCRIPTION
        ====================================================== */

        .footer-description {
          max-width: 260px;

          margin-top: 20px;

          font-size: 13px;

          line-height: 1.65;

          font-weight: 400;

          font-family: 'Roboto', sans-serif;

          color: #B8B8B8;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .footer-description:hover {
          color: #D0D0D0;

          transform:
            translateY(-2px);
        }


        @media (min-width: 1024px) {

          .footer-description {
            max-width: 260px;

            font-size: 13px;
          }

        }


        /* ======================================================
           SOCIAL ICONS
        ====================================================== */

        .footer-socials {
          display: flex;

          align-items: center;

          gap: 16px;

          margin-top: 24px;
        }


        .footer-social-link {
          width: 42px;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #FFFFFF;

          text-decoration: none;

          border:
            1px solid
            rgba(245, 194, 64, 0.35);

          border-radius: 50%;

          background:
            rgba(245, 194, 64, 0.04);

          cursor: pointer;

          transition:
            transform 300ms ease,
            color 300ms ease,
            border-color 300ms ease,
            background 300ms ease,
            box-shadow 300ms ease;
        }


        .footer-social-link:hover,
        .footer-social-link:focus-visible {
          color: #F5C240;

          transform:
            translateY(-5px)
            scale(1.08);

          border-color: #F5C240;

          background:
            rgba(245, 194, 64, 0.08);

          box-shadow:
            0 0 10px
            rgba(245, 194, 64, 0.35),

            0 0 22px
            rgba(245, 194, 64, 0.12);

          outline: none;
        }


        .footer-social-link:active {
          transform:
            translateY(-2px)
            scale(0.96);
        }


        .footer-social-icon {
          width: 19px;

          height: 19px;

          display: block;

          transition:
            transform 300ms ease;
        }


        .footer-social-link:hover
        .footer-social-icon {
          transform:
            rotate(4deg);
        }


        /* ======================================================
           NAVIGATION WRAPPER
        ====================================================== */

        .footer-nav-wrapper {
          display: contents;
        }


        .footer-nav {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          transition:
            transform 300ms ease;
        }


        /* ======================================================
           COLUMN HEADINGS
        ====================================================== */

        .footer-heading {
          margin: 0;

          font-family:
            'Oswald',
            sans-serif;

          font-size: 12px;

          font-weight: 400;

          letter-spacing: 2.26px;

          text-transform: uppercase;

          color: #F5C240;

          cursor: pointer;

          transition:
            letter-spacing 250ms ease,
            text-shadow 250ms ease,
            transform 250ms ease;
        }


        .footer-heading:hover {
          letter-spacing: 2.7px;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 10px
            rgba(245, 194, 64, 0.4);
        }


        /* ======================================================
           LINKS
        ====================================================== */

        .footer-links {
          display: flex;

          flex-direction: column;

          margin-top: 28px;

          gap: 14px;

          list-style: none;

          padding: 0;
        }


        .footer-link {
          position: relative;

          font-size: 13px;

          font-family:
            'Roboto',
            sans-serif;

          font-weight: 400;

          line-height: 1.5;

          color: #B8B8B8;

          text-decoration: none;

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 250ms ease,
            letter-spacing 250ms ease,
            text-shadow 250ms ease;
        }


        .footer-link::after {
          content: "";

          position: absolute;

          left: 0;

          bottom: -4px;

          width: 0;

          height: 1px;

          background: #F5C240;

          transition:
            width 280ms ease;
        }


        .footer-link:hover,
        .footer-link:focus-visible {
          color: #F5C240;

          transform:
            translateX(5px);

          letter-spacing: 0.2px;

          text-shadow:
            0 0 8px
            rgba(245, 194, 64, 0.25);

          outline: none;
        }


        .footer-link:hover::after,
        .footer-link:focus-visible::after {
          width: 100%;
        }


        @media (min-width: 1024px) {

          .footer-link {
            font-size: 13px;
          }

        }


        /* ======================================================
           GOLDEN DIVIDER
        ====================================================== */

        .footer-divider {
          height: 1px;

          width: 100%;

          margin-top: 70px;

          margin-bottom: 30px;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0) 0%,
              #F5C240 50%,
              rgba(0, 0, 0, 0) 100%
            );

          transform-origin: center;

          animation:
            footer-divider-glow
            4s ease-in-out infinite;
        }


        @keyframes footer-divider-glow {

          0%,
          100% {
            opacity: 0.65;

            filter:
              drop-shadow(
                0 0 0
                rgba(245, 194, 64, 0)
              );
          }


          50% {
            opacity: 1;

            filter:
              drop-shadow(
                0 0 7px
                rgba(245, 194, 64, 0.45)
              );
          }

        }


        @media (max-width: 767px) {

          .footer-divider {
            margin-top: 45px;

            margin-bottom: 24px;
          }

        }


        /* ======================================================
           BOTTOM ROW
        ====================================================== */

        .footer-bottom {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 16px;
        }


        .footer-bottom-text {
          font-family:
            'Roboto Mono',
            monospace;

          font-weight: 400;

          font-size: 10px;

          letter-spacing: 0.5px;

          color: #FFFFFF;

          transition:
            color 250ms ease,
            transform 250ms ease,
            text-shadow 250ms ease;
        }


        .footer-bottom-text:hover {
          color: #F5C240;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 8px
            rgba(245, 194, 64, 0.3);

          cursor: pointer;
        }


        @media (min-width: 640px) {

          .footer-bottom-text {
            font-size: 13px;
          }

        }


        .footer-bottom-tagline {
          color: #FFFFFF;
        }


        /* ======================================================
           SAFETY
        ====================================================== */

        .footer-grid,
        .footer-description,
        .footer-bottom {
          max-width: 100%;
        }


        /* ======================================================
           MOBILE — 720px AND BELOW
        ====================================================== */

        @media (max-width: 720px) {

          .footer-root {
            width: 100%;

            overflow-x: hidden;
          }


          .footer-root > div {
            padding-left: 24px;

            padding-right: 24px;

            padding-top: 70px;

            padding-bottom: 70px;
          }


          /* ================================================
             MOBILE BRAND CONTENT
          ================================================ */

          .footer-grid {
            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: flex-start;

            width: 100%;

            gap: 0;

            text-align: center;
          }


          .footer-brand {
            width: 100%;

            display: flex;

            flex-direction: column;

            align-items: center;

            text-align: center;
          }


          /* ================================================
             MOBILE LOGO
          ================================================ */

          .footer-logo {
            width: 130px;

            height: auto;
          }


          /* ================================================
             MOBILE DESCRIPTION
          ================================================ */

          .footer-description {
            width: 100%;

            max-width: 280px;

            margin-top: 24px;

            font-size: 16px;

            line-height: 1.6;

            text-align: center;
          }


          /* ================================================
             MOBILE SOCIAL ICONS
          ================================================ */

          .footer-socials {
            width: 100%;

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 14px;

            margin-top: 28px;

            padding-left: 0;
          }


          .footer-social-link {
            width: 38px;

            height: 38px;
          }


          .footer-social-icon {
            width: 17px;

            height: 17px;
          }


          /* ================================================
             MOBILE NAVIGATION

             Ecosystem + Company
             -------------------
             Resources
          ================================================ */

          .footer-nav-wrapper {
            width: 100%;

            display: grid !important;

            grid-template-columns: 1fr 1fr;

            column-gap: 20px;

            row-gap: 40px;

            margin-top: 50px;

            align-items: start;
          }


          /* ================================================
             ECOSYSTEM
          ================================================ */

          .footer-nav:nth-child(1) {
            grid-column: 1;

            grid-row: 1;

            display: flex;

            flex-direction: column;

            align-items: center;

            text-align: center;

            width: 100%;
          }


          /* ================================================
             COMPANY
          ================================================ */

          .footer-nav:nth-child(2) {
            grid-column: 2;

            grid-row: 1;

            display: flex;

            flex-direction: column;

            align-items: center;

            text-align: center;

            width: 100%;
          }


          /* ================================================
             RESOURCES
          ================================================ */

          .footer-nav:nth-child(3) {
            grid-column: 1 / -1;

            grid-row: 2;

            display: flex;

            flex-direction: column;

            align-items: center;

            text-align: center;

            width: 100%;
          }


          /* ================================================
             MOBILE HEADINGS
          ================================================ */

          .footer-heading {
            margin: 0;

            text-align: center;

            font-size: 12px;
          }


          /* ================================================
             MOBILE LINKS
          ================================================ */

          .footer-nav .footer-links {
            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            text-align: center;

            margin-top: 20px;

            gap: 12px;

            width: 100%;
          }


          .footer-link {
            text-align: center;

            font-size: 13px;
          }


          /* ================================================
             MOBILE DIVIDER
          ================================================ */

          .footer-divider {
            width: calc(100% - 80px);

            margin-top: 60px;

            margin-bottom: 30px;

            margin-left: auto;

            margin-right: auto;

            background:
              linear-gradient(
                90deg,
                rgba(0, 0, 0, 0),
                #F5C240 50%,
                rgba(0, 0, 0, 0)
              );
          }


          /* ================================================
             MOBILE COPYRIGHT
          ================================================ */

          .footer-bottom {
            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            width: 100%;

            gap: 10px;

            text-align: center;
          }


          .footer-bottom-text {
            font-size: 12px;

            text-align: center;

            white-space: nowrap;
          }


          .footer-bottom-tagline {
            display: block;
          }

        }


        /* ======================================================
           VERY SMALL SCREENS
        ====================================================== */

        @media (max-width: 360px) {

          .footer-root > div {
            padding-left: 16px;

            padding-right: 16px;
          }


          .footer-logo {
            width: 115px;
          }


          .footer-description {
            max-width: 260px;

            font-size: 14px;
          }


          .footer-socials {
            gap: 10px;
          }


          .footer-social-link {
            width: 34px;

            height: 34px;
          }


          .footer-social-icon {
            width: 15px;

            height: 15px;
          }


          .footer-nav-wrapper {
            column-gap: 8px;

            margin-top: 45px;
          }


          .footer-heading {
            font-size: 11px;

            letter-spacing: 1.8px;
          }


          .footer-link {
            font-size: 12px;
          }


          .footer-nav .footer-links {
            gap: 10px;

            margin-top: 18px;
          }


          .footer-divider {
            width: calc(100% - 50px);

            margin-top: 55px;
          }


          .footer-bottom-text {
            font-size: 10px;
          }

        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .footer-divider {
            animation: none;
          }


          .footer-logo,
          .footer-social-link,
          .footer-social-icon,
          .footer-heading,
          .footer-link,
          .footer-description,
          .footer-bottom-text {
            transition: none;
          }


          .footer-logo:hover,
          .footer-social-link:hover,
          .footer-social-link:focus-visible,
          .footer-social-link:active,
          .footer-heading:hover,
          .footer-link:hover,
          .footer-link:focus-visible,
          .footer-description:hover,
          .footer-bottom-text:hover {
            transform: none;
          }


          .footer-link::after {
            transition: none;
          }

        }

      `}</style>

    </footer>
  );
}