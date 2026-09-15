import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ============================================================
// ASSETS
// ============================================================

import kaudiLogo from "../assets/logo/kaudi-logo.png";

// ============================================================
// DATA
// ============================================================

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Properties", href: "#properties" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Faq", href: "#faq" },
];

// ============================================================
// NAVBAR
// ============================================================

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the mobile menu if the viewport grows back to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="z-50 mx-auto max-w-[1350px] navbar-root">

      <div className="relative w-full navbar-bar">

        <div className="flex items-center justify-between mx-auto px-5 h-[64px] w-full max-w-[1350px] sm:px-8 md:px-10 lg:px-12">

          {/* ==============================================
              LOGO
          ============================================== */}

          <a
            href="#home"
            className="flex items-center navbar-logo shrink-0"
            aria-label="KAUDI home"
          >
            <img
              src={kaudiLogo}
              alt="KAUDI"
              draggable={false}
              className="object-contain h-auto w-[100px] select-none sm:w-[115px] lg:w-[128px]"
            />
          </a>


          {/* ==============================================
              DESKTOP NAVIGATION
          ============================================== */}

          <nav
            className="hidden items-center navbar-links lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </a>
            ))}
          </nav>


          {/* ==============================================
              DESKTOP BUTTONS
          ============================================== */}

          <div className="hidden items-center gap-3 shrink-0 lg:flex xl:gap-4">

            <a
              href="#whitepaper"
              className="navbar-btn-secondary"
            >
              Whitepaper
            </a>

            {/* BUY NOW */}
            <Link
              to="/presale"
              className="navbar-btn-primary"
            >
              Buy Now
            </Link>

          </div>


          {/* ==============================================
              HAMBURGER (MOBILE / TABLET)
          ============================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative flex flex-col items-center justify-center gap-[6px] h-10 w-10 navbar-hamburger shrink-0 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-mobile-menu"
          >

            <span
              className={`navbar-hamburger-line ${
                isMenuOpen
                  ? "navbar-hamburger-line--top-open"
                  : ""
              }`}
            />

            <span
              className={`navbar-hamburger-line ${
                isMenuOpen
                  ? "navbar-hamburger-line--mid-open"
                  : ""
              }`}
            />

            <span
              className={`navbar-hamburger-line ${
                isMenuOpen
                  ? "navbar-hamburger-line--bottom-open"
                  : ""
              }`}
            />

          </button>

        </div>

      </div>


      {/* ==================================================
          MOBILE MENU PANEL
      ================================================== */}

      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-panel lg:hidden ${
          isMenuOpen
            ? "navbar-mobile-panel--open"
            : ""
        }`}
      >

        <nav
          className="flex flex-col px-6 pt-2"
          aria-label="Mobile primary"
        >

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="navbar-mobile-link"
            >
              {link.label}
            </a>
          ))}

        </nav>


        <div className="flex flex-col gap-3 px-6 pb-8 pt-4">

          {/* WHITEPAPER */}

          <a
            href="#whitepaper"
            onClick={closeMenu}
            className="w-full navbar-btn-secondary"
          >
            Whitepaper
          </a>


          {/* BUY NOW */}
          <Link
            to="/presale"
            onClick={closeMenu}
            className="w-full navbar-btn-primary"
          >
            Buy Now
          </Link>

        </div>

      </div>


      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           ROOT / BAR BACKGROUND
        ====================================================== */

        .navbar-root {
          font-family:
            'Roboto',
            sans-serif;
        }


        .navbar-bar {
          background:
            #000000 !important;

          border-bottom:
            none !important;

          box-shadow:
            none !important;
        }


        /* ======================================================
           DESKTOP NAV LINKS
        ====================================================== */

        .navbar-links {
          gap:
            clamp(
              20px,
              2.6vw,
              42px
            );
        }


        .navbar-link {
          font-size: 13px;

          font-weight: 400;

          letter-spacing: 2px;

          text-transform: uppercase;

          color: #DFDFDF;

          text-decoration: none;

          white-space: nowrap;

          transition:
            color 220ms ease;
        }


        .navbar-link:hover,
        .navbar-link:focus-visible {
          color:
            #F5C240;

          outline: none;
        }


        /* ======================================================
           BUTTONS
        ====================================================== */

        .navbar-btn-secondary,
        .navbar-btn-primary {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          height: 35px;

          border-radius: 4px;

          font-size: 12px;

          font-weight: 500;

          letter-spacing: 2px;

          text-transform: uppercase;

          text-decoration: none;

          white-space: nowrap;

          transition:
            transform 200ms ease,
            box-shadow 200ms ease,
            background 200ms ease,
            border-color 200ms ease,
            color 200ms ease;
        }


        /* ======================================================
           SECONDARY BUTTON
        ====================================================== */

        .navbar-btn-secondary {
          width: 134px;

          color:
            #F5C240;

          background:
            transparent;

          border:
            1px solid
            rgba(
              184,
              134,
              38,
              0.55
            );
        }


        .navbar-btn-secondary:hover,
        .navbar-btn-secondary:focus-visible {
          color:
            #FFE08A;

          border-color:
            rgba(
              245,
              194,
              64,
              0.9
            );

          background:
            rgba(
              184,
              134,
              38,
              0.08
            );

          outline: none;
        }


        /* ======================================================
           PRIMARY BUTTON
        ====================================================== */

        .navbar-btn-primary {
          width: 99px;

          color:
            #14100A;

          background:
            linear-gradient(
              90deg,
              #C8861A 0%,
              #F5C240 50%,
              #C8861A 100%
            );
        }


        .navbar-btn-primary:hover,
        .navbar-btn-primary:focus-visible {
          filter:
            brightness(1.08);

          transform:
            translateY(-1px);

          outline: none;
        }


        .navbar-btn-secondary:active,
        .navbar-btn-primary:active {
          transform:
            translateY(0);
        }


        /* ======================================================
           HAMBURGER
        ====================================================== */

        .navbar-hamburger-line {
          display: block;

          height: 2px;

          width: 22px;

          background:
            #F5C240;

          border-radius: 2px;

          transition:
            transform 250ms ease,
            opacity 200ms ease;
        }


        .navbar-hamburger-line--top-open {
          transform:
            translateY(8px)
            rotate(45deg);
        }


        .navbar-hamburger-line--mid-open {
          opacity: 0;
        }


        .navbar-hamburger-line--bottom-open {
          transform:
            translateY(-8px)
            rotate(-45deg);
        }


        /* ======================================================
           MOBILE MENU PANEL
        ====================================================== */

        .navbar-mobile-panel {
          overflow: hidden;

          max-height: 0;

          width: 100%;

          background:
            #000000 !important;

          border-bottom:
            none !important;

          transition:
            max-height 320ms ease;
        }


        .navbar-mobile-panel--open {
          max-height:
            520px;
        }


        /* ======================================================
           MOBILE MENU LINKS
        ====================================================== */

        .navbar-mobile-link {
          padding:
            14px 4px;

          font-size: 14px;

          font-weight: 500;

          letter-spacing: 2px;

          text-transform: uppercase;

          color:
            #E5E5E5;

          text-decoration: none;

          text-align: left;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );

          transition:
            color 200ms ease;
        }


        .navbar-mobile-link:last-child {
          border-bottom:
            none;
        }


        .navbar-mobile-link:hover,
        .navbar-mobile-link:focus-visible {
          color:
            #F5C240;

          outline: none;
        }


        /* ======================================================
           SMOOTH SCROLLING
        ====================================================== */

        html {
          scroll-behavior:
            smooth;
        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior:
              auto;
          }


          .navbar-link,
          .navbar-btn-secondary,
          .navbar-btn-primary,
          .navbar-hamburger-line,
          .navbar-mobile-panel,
          .navbar-mobile-link {
            transition:
              none;
          }


          .navbar-btn-secondary:hover,
          .navbar-btn-primary:hover,
          .navbar-btn-secondary:active,
          .navbar-btn-primary:active {
            transform:
              none;
          }

        }

      `}</style>

    </header>
  );
}