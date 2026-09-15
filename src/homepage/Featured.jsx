import React from "react";
import Reveal from "../common/Reveal";

// NOTE: adjust these import paths/filenames to match your actual
// existing property image assets.
import sunriseImg from "../assets/images/sunrise-apartments.jpg";
import oceanviewImg from "../assets/images/oceanview-villas.jpg";
import harmonyImg from "../assets/images/harmony-office-complex.jpg";
import greenfieldImg from "../assets/images/greenfield-retail-center.jpg";
import internationalImg from "../assets/images/international-portfolio.jpg";

const GOLD = "#D4AF37";

const PROPERTIES = {
  sunrise: {
    area: "large",
    image: sunriseImg,
    alt: "Sunrise Apartments residential building exterior",
    category: "RESIDENTIAL · 20%",
    title: "SUNRISE APARTMENTS",
    allocation: "5,000,000 KAUDI",
    delay: 100,
    titleSize: "text-[20px] lg:text-[22px]",
  },

  oceanview: {
    area: "ocean",
    image: oceanviewImg,
    alt: "Oceanview Villas hospitality property",
    category: "HOSPITALITY · 40%",
    title: "OCEANVIEW VILLAS",
    allocation: "10,000,000 KAUDI",
    delay: 180,
    titleSize: "text-[16px] lg:text-[17px]",
  },

  harmony: {
    area: "harmony",
    image: harmonyImg,
    alt: "Harmony Office Complex commercial towers",
    category: "COMMERCIAL · 30%",
    title: "HARMONY OFFICE COMPLEX",
    allocation: "7,500,000 KAUDI",
    delay: 260,
    titleSize: "text-[16px] lg:text-[17px]",
  },

  greenfield: {
    area: "green",
    image: greenfieldImg,
    alt: "Greenfield Retail Center storefront interior",
    category: "RETAIL",
    title: "GREENFIELD RETAIL CTR.",
    allocation: null,
    delay: 340,
    titleSize: "text-[16px] lg:text-[17px]",
  },

  international: {
    area: "intl",
    image: internationalImg,
    alt: "International Portfolio skyline of city towers",
    category: "GLOBAL",
    title: "INTERNATIONAL PORTFOLIO",
    allocation: null,
    delay: 420,
    titleSize: "text-[16px] lg:text-[17px]",
  },
};


/* ============================================================
   PROPERTY CARD
============================================================ */

function PropertyCard({ property }) {
  const {
    image,
    alt,
    category,
    title,
    allocation,
    titleSize,
  } = property;

  return (
    <article
      className="overflow-hidden relative property-card h-full bg-black rounded-[4px] group"
      style={{
        border: "1px solid rgba(184,134,38,0.12)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(245,194,64,0.65)";

        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(245,194,64,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor =
          "rgba(184,134,38,0.12)";

        e.currentTarget.style.boxShadow = "none";
      }}
    >

      {/* ========================================================
          IMAGE
      ======================================================== */}

      <img
        src={image}
        alt={alt}
        draggable="false"
        className="object-cover property-image h-full w-full"
      />


      {/* ========================================================
          DARK BOTTOM GRADIENT
      ======================================================== */}

      <div
        className="absolute inset-0 property-overlay pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)",
        }}
      />


      {/* ========================================================
          EXTRA HOVER GLOW
      ======================================================== */}

      <div className="absolute inset-0 property-hover-glow pointer-events-none" />


      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="absolute bottom-0 left-0 right-0 property-content p-4 lg:p-5">

        {/* CATEGORY */}
        <span
          className="inline-block property-category mb-2 font-mono uppercase"
          style={{
            color: "#F5C240",
            fontSize: "10px",
            letterSpacing: "1.2px",
            border: "1px solid rgba(212,175,55,0.5)",
            padding: "3px 8px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        >
          {category}
        </span>


        {/* TITLE */}
        <h3
          className={`${titleSize} property-title mb-1 uppercase leading-snug`}
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            letterSpacing: "0.4px",
            fontFamily:
              "'Oswald', 'Barlow Condensed', sans-serif",
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          {title}
        </h3>


        {/* ALLOCATION */}
        {allocation && (
          <p
            className="property-allocation text-[11px]"
            style={{
              color: "#C8861A",
              letterSpacing: "0.3px",
              cursor: "pointer",
            }}
          >
            {allocation}
          </p>
        )}

      </div>
    </article>
  );
}


/* ============================================================
   MAIN SECTION
============================================================ */

export default function Properties() {
  return (
    <section
      id="properties"
      className="px-5 px-[10px] w-full sm:px-8 lg:py-20"
      style={{
        backgroundColor: "#000000",
      }}
      aria-labelledby="featured-properties-heading"
    >

      <div className="mx-auto w-full max-w-[1300px]">


        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col items-start justify-between gap-6 properties-header mb-8 mb-12 md:mb-10 lg:flex-row">


          {/* ====================================================
              LEFT HEADER
          ==================================================== */}

          <div className="properties-header-left lg:w-[55%]">

            <Reveal delay={100}>
              <p
                className="properties-label mb-3 text-[11px] uppercase"
                style={{
                  color: "#C8861A",
                  letterSpacing: "2.6px",
                  fontFamily:
                    '"Roboto Mono", monospace',
                  cursor: "pointer",
                }}
              >
                03 — Featured Properties
              </p>
            </Reveal>


            <Reveal delay={200}>
              <h2
                id="featured-properties-heading"
                className="properties-heading leading-[1.02] uppercase"
              >
                Tokenized
                <br />
                Real Estate
              </h2>
            </Reveal>

          </div>


          {/* ====================================================
              RIGHT HEADER
          ==================================================== */}

          <div className="properties-header-right w-[38%] lg:pt-25">

            <Reveal delay={300}>
              <p
                className="properties-description max-w-[400px] text-[13px] leading-[1.6] text-right text-[15px] leading-[1.7] lg:ml-auto"
                style={{
                  color: "#9C9690",
                  cursor: "pointer",
                }}
              >
                Selected property opportunities across multiple
                real-estate categories, each with a dedicated
                KAUDI allocation.
              </p>
            </Reveal>

          </div>

        </div>


        {/* ======================================================
            PROPERTY GRID
        ====================================================== */}

        <div className="kaudi-properties-grid">

          {Object.entries(PROPERTIES).map(
            ([key, property]) => (

              <div
                key={key}
                className="kaudi-property-item"
                style={{
                  gridArea: property.area,
                }}
              >

                <Reveal delay={property.delay}>
                  <PropertyCard property={property} />
                </Reveal>

              </div>

            )
          )}

        </div>

      </div>


      {/* =========================================================
          CSS
      ========================================================= */}

      <style>{`

        /* =======================================================
           BASE PROPERTY GRID
        ======================================================= */

        .kaudi-properties-grid {
          display: grid;

          gap: 14px;

          grid-template-columns: 1fr;

          grid-template-areas:
            "large"
            "ocean"
            "harmony"
            "green"
            "intl";

          grid-template-rows:
            320px
            240px
            240px
            240px
            240px;
        }


        .kaudi-properties-grid > * {
          min-height: 0;
        }


        .kaudi-properties-grid > div,
        .kaudi-properties-grid > div > * {
          height: 100%;
        }


        /* =======================================================
           PROPERTY CARD
        ======================================================= */

        .property-card {

          cursor: pointer;

          transform: translateY(0);

          transition:
            transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 300ms ease,
            box-shadow 400ms ease;
        }


        .property-card:hover {

          transform: translateY(-7px);

        }


        /* =======================================================
           IMAGE
        ======================================================= */

        .property-image {

          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          user-select: none;

          cursor: pointer;

          transform: scale(1);

          transition:
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 600ms ease;
        }


        .property-card:hover .property-image {

          transform: scale(1.07);

          filter:
            brightness(1.08)
            contrast(1.04);
        }


        /* =======================================================
           OVERLAY
        ======================================================= */

        .property-overlay {

          transition:
            opacity 400ms ease;
        }


        .property-card:hover .property-overlay {

          opacity: 0.82;
        }


        /* =======================================================
           GOLD HOVER GLOW
        ======================================================= */

        .property-hover-glow {

          opacity: 0;

          background:
            radial-gradient(
              circle at 50% 100%,
              rgba(245,194,64,0.15),
              transparent 60%
            );

          transition:
            opacity 500ms ease;
        }


        .property-card:hover .property-hover-glow {

          opacity: 1;
        }


        /* =======================================================
           PROPERTY CONTENT
        ======================================================= */

        .property-content {

          transform: translateY(0);

          transition:
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }


        .property-card:hover .property-content {

          transform: translateY(-5px);
        }


        /* =======================================================
           CATEGORY
        ======================================================= */

        .property-category {

          cursor: pointer;

          transition:
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            transform 250ms ease,
            box-shadow 250ms ease;
        }


        .property-card:hover .property-category {

          color: #FFE08A !important;

          border-color:
            rgba(245,194,64,0.8) !important;

          background:
            rgba(245,194,64,0.08);

          box-shadow:
            0 0 12px rgba(245,194,64,0.10);

          transform: translateY(-2px);
        }


        /* =======================================================
           TITLE
        ======================================================= */

        .property-title {

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease,
            letter-spacing 300ms ease,
            text-shadow 300ms ease;
        }


        .property-card:hover .property-title {

          color: #F5C240 !important;

          transform: translateX(3px);

          letter-spacing: 0.8px;

          text-shadow:
            0 0 14px rgba(245,194,64,0.18);
        }


        /* =======================================================
           ALLOCATION
        ======================================================= */

        .property-allocation {

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease,
            text-shadow 300ms ease;
        }


        .property-card:hover .property-allocation {

          color: #F5C240 !important;

          transform: translateX(3px);

          text-shadow:
            0 0 10px rgba(245,194,64,0.25);
        }


        /* =======================================================
           HEADER LABEL
        ======================================================= */

        .properties-label {

          transition:
            color 300ms ease,
            letter-spacing 300ms ease,
            text-shadow 300ms ease;
        }


        .properties-label:hover {

          color: #F5C240 !important;

          letter-spacing: 3.2px;

          text-shadow:
            0 0 12px rgba(245,194,64,0.25);
        }


        /* =======================================================
           HEADER HEADING
        ======================================================= */

        .properties-heading {

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

          font-family:
            "Oswald",
            "Barlow Condensed",
            sans-serif;

          font-weight: 400;

          font-size:
            clamp(34px, 5.5vw, 67px);

          cursor: pointer;

          transition:
            transform 350ms ease,
            filter 350ms ease,
            letter-spacing 350ms ease;
        }


        .properties-heading:hover {

          transform: translateY(-4px);

          filter:
            drop-shadow(
              0 0 18px
              rgba(245,194,64,0.20)
            );

          letter-spacing: -0.5px;
        }


        /* =======================================================
           DESCRIPTION
        ======================================================= */

        .properties-description {

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .properties-description:hover {

          color: #B5ADA2 !important;

          transform: translateX(-3px);
        }


        /* =======================================================
           TABLET
        ======================================================= */

        @media (min-width: 768px) {

          .kaudi-properties-grid {

            gap: 16px;

            grid-template-columns:
              1fr
              1fr;

            grid-template-areas:
              "large large"
              "ocean harmony"
              "green intl";

            grid-template-rows:
              minmax(260px, auto)
              220px
              200px;
          }

        }


        /* =======================================================
           DESKTOP
        ======================================================= */

        @media (min-width: 1200px) {

          .kaudi-properties-grid {

            display: grid;

            gap: 16px;

            grid-template-columns:
              1fr
              1fr
              1fr;

            grid-template-rows:
              300px
              300px
              190px;

            grid-template-areas:
              "large large ocean"
              "large large harmony"
              "green intl .";
          }


          .kaudi-properties-grid
            > div[style*="large"] {

            height: 420px;
          }


          .kaudi-properties-grid
            > div[style*="ocean"] {

            height: 300px;
          }


          .kaudi-properties-grid
            > div[style*="harmony"] {

            height: 300px;
          }

        }


        /* =======================================================
           MOBILE
           CENTER ALL HEADER CONTENT
        ======================================================= */

        @media (max-width: 767px) {

          .properties-header {

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            width: 100%;

            text-align: center;
          }


          .properties-header-left {

            width: 100% !important;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            text-align: center;
          }


          .properties-header-left p {

            width: 100%;

            text-align: center;
          }


          .properties-header-left h2 {

            width: 100%;

            text-align: center;

            margin-left: auto;
            margin-right: auto;
          }


          .properties-header-right {

            width: 100% !important;

            display: flex;

            align-items: center;

            justify-content: center;

            text-align: center;

            padding-top: 0 !important;
          }


          .properties-header-right p {

            width: 100%;

            max-width: 500px;

            margin-left: auto !important;
            margin-right: auto !important;

            text-align: center;
          }


          /* PROPERTY GRID */

          .kaudi-properties-grid {

            width: 100%;

            justify-items: center;

            align-items: stretch;
          }


          .kaudi-property-item {

            width: 100%;

            max-width: 500px;

            margin-left: auto;
            margin-right: auto;
          }


          /* Slightly smaller mobile hover */

          .property-card:hover {

            transform: translateY(-5px);
          }

        }


        /* =======================================================
           SMALL MOBILE
        ======================================================= */

        @media (max-width: 480px) {

          .properties-header {

            width: 100%;

            align-items: center;

            text-align: center;
          }


          .properties-header-left {

            width: 100% !important;

            align-items: center;

            text-align: center;
          }


          .properties-header-left p {

            width: 100%;

            text-align: center;
          }


          .properties-header-left h2 {

            width: 100%;

            text-align: center;

            font-size:
              clamp(
                34px,
                11vw,
                52px
              ) !important;
          }


          .properties-header-right {

            width: 100% !important;

            align-items: center;

            justify-content: center;

            text-align: center;
          }


          .properties-header-right p {

            width: calc(100vw - 40px);

            max-width: 420px;

            margin-left: auto !important;
            margin-right: auto !important;

            text-align: center;
          }


          .kaudi-property-item {

            width: 100%;

            max-width:
              calc(100vw - 32px);

            margin-left: auto;
            margin-right: auto;
          }


          .property-title {

            font-size: 26px !important;
          }

        }


        /* =======================================================
           EXTRA SMALL DEVICES
        ======================================================= */

        @media (max-width: 375px) {

          .properties-header-left h2 {

            font-size:
              clamp(
                32px,
                10.5vw,
                48px
              ) !important;
          }


          .properties-header-right p {

            width: calc(100vw - 28px);

            font-size: 13px !important;

            line-height: 1.65 !important;
          }


          .kaudi-property-item {

            max-width:
              calc(100vw - 24px);
          }


          .property-title {

            font-size: 23px !important;
          }

        }


        /* =======================================================
           PREVENT HORIZONTAL OVERFLOW
        ======================================================= */

        #properties {

          overflow-x: hidden;
        }


        .properties-header,
        .properties-header-left,
        .properties-header-right,
        .kaudi-properties-grid,
        .kaudi-property-item,
        .property-card {

          box-sizing: border-box;
        }


        /* =======================================================
           REDUCED MOTION
        ======================================================= */

        @media (prefers-reduced-motion: reduce) {

          .property-card,
          .property-image,
          .property-content,
          .property-category,
          .property-title,
          .property-allocation,
          .properties-label,
          .properties-heading,
          .properties-description {

            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
}