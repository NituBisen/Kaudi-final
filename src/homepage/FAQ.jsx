import React, { useState } from "react";
import Reveal from "../common/Reveal";

// ============================================================
// DATA
// ============================================================

const FAQS = [
  {
    question: "What is KAUDI?",
    answer:
      "KAUDI is a digital ecosystem that connects real-world property opportunities with blockchain infrastructure on BNB Smart Chain, enabling structured, eligible fractional participation.",
  },
  {
    question: "Does owning KAUDI mean I own property?",
    answer:
      "KAUDI represents digital participation linked to selected property opportunities under a structured framework. It is not direct legal title to real estate, and eligibility, rights and mechanisms are defined in the relevant documentation.",
  },
  {
    question: "How does property tokenization work?",
    answer:
      "Selected properties are assessed, structured and represented through blockchain-based tokens on BEP-20, allowing eligible participants to hold a digital position linked to that underlying asset.",
  },
  {
    question: "Who can participate?",
    answer:
      "Participation is intended for eligible individuals who complete the required KYC, AML and investor eligibility checks in accordance with applicable regulations.",
  },
  {
    question: "Will I receive rental income?",
    answer:
      "Eligible holders may receive property-linked rental distributions where applicable, subject to the specific property's structure, occupancy and the platform's distribution framework.",
  },
  {
    question: "How does KAUDI ensure transparency?",
    answer:
      "On-chain records provide visibility into token transfers, property allocation and distribution activity, giving participants a transparent, auditable view of platform activity.",
  },
  {
    question: "Can I transfer my KAUDI position?",
    answer:
      "Eligible positions may be transferred through approved mechanisms as they become available, subject to applicable regulations, platform rules and compliance requirements.",
  },
];

// ============================================================
// FAQ SECTION
// ============================================================

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-black faq-section"
    >
      <div className="mx-auto px-5 px-12 w-full max-w-[1400px] sm:px-8 md:px-10 lg:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] xl:gap-20">

          {/* ====================================================
              LEFT COLUMN
          ==================================================== */}

          <div className="flex flex-col items-start">

            <Reveal delay={100}>
              <span className="faq-label">
                07 — FAQ
              </span>
            </Reveal>


            <Reveal delay={200}>
              <h2 className="mt-3 font-bold faq-heading uppercase">

                <span className="block">
                  Common
                </span>

                <span className="block">
                  Questions
                </span>

              </h2>
            </Reveal>


            <Reveal delay={300}>
              <p className="mt-5 max-w-[500px] faq-description sm:mt-6">
                Answers about the KAUDI ecosystem, tokenization model,
                participation process and compliance approach.
              </p>
            </Reveal>


            <Reveal delay={400}>
              <div className="mt-8 faq-disclaimer sm:mt-10">

                <div className="faq-disclaimer-inner">

                  <span className="faq-disclaimer-title">
                    Disclaimer
                  </span>

                  <p className="faq-disclaimer-body">
                    Properties, portfolio figures and token allocations are
                    illustrative examples subject to formal onboarding, legal
                    documentation and finalization.
                  </p>

                </div>

              </div>
            </Reveal>

          </div>


          {/* ====================================================
              RIGHT COLUMN — ACCORDION
          ==================================================== */}

          <div className="flex flex-col w-full max-w-[700px]">

            {FAQS.map((faq, index) => {

              const isOpen = index === openIndex;

              const panelId =
                `faq-panel-${index}`;

              const buttonId =
                `faq-button-${index}`;

              return (

                <Reveal
                  delay={150 + index * 70}
                  key={faq.question}
                >

                  <div
                    className={`faq-item ${
                      isOpen
                        ? "faq-item--open"
                        : ""
                    }`}
                  >

                    <h3 className="faq-item-heading">

                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          toggleFaq(index)
                        }
                        className="faq-question"
                      >

                        <span>
                          {faq.question}
                        </span>

                        <span
                          className={`faq-icon ${
                            isOpen
                              ? "faq-icon--open"
                              : ""
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>

                      </button>

                    </h3>


                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="faq-answer-wrap"
                      style={{
                        gridTemplateRows:
                          isOpen
                            ? "1fr"
                            : "0fr",
                      }}
                    >

                      <div className="faq-answer-inner">

                        <p className="faq-answer">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </Reveal>

              );
            })}

          </div>

        </div>

      </div>


      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`

        /* ======================================================
           FAQ SECTION
        ====================================================== */

        .faq-section {

          font-family:
            'Oswald',
            'Barlow Condensed',
            sans-serif;

          overflow-x: hidden;
        }


        /* ======================================================
           LABEL / HEADING / DESCRIPTION
        ====================================================== */

        .faq-label {

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


        .faq-label:hover {

          color: #F5C240;

          letter-spacing: 3.2px;

          transform:
            translateY(-2px);

          text-shadow:
            0 0 14px
            rgba(245,194,64,0.4);
        }


        .faq-heading {

          font-size:
            clamp(44px, 6.5vw, 67px);

          font-family:
            'Oswald',
            sans-serif;

          font-weight: 400;

          line-height: 0.94;

          letter-spacing: -1px;

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

          cursor: pointer;

          transition:
            transform 400ms
              cubic-bezier(0.22,1,0.36,1),
            filter 400ms ease,
            letter-spacing 400ms ease;
        }


        .faq-heading:hover {

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

          .faq-heading {
            letter-spacing: -1.5px;
          }

        }


        .faq-description {

          font-family:
            'Roboto',
            sans-serif;

          font-size: 14px;

          line-height: 1.6;

          color: #8A8278;

          cursor: pointer;

          transition:
            color 300ms ease,
            transform 300ms ease;
        }


        .faq-description:hover {

          color: #B8B0A5;

          transform:
            translateX(4px);
        }


        @media (min-width: 640px) {

          .faq-description {
            font-size: 14px;
          }

        }


        /* ======================================================
           DISCLAIMER BOX
        ====================================================== */

        .faq-disclaimer {

          position: relative;

          width: 360px;
          max-width: 100%;

          border-radius: 6px;

          border: 0.77px solid;

          border-image-source:
            linear-gradient(
              137.51deg,
              #000000 -0.94%,
              #F5C240 23.02%,
              #000000 54.63%,
              #F5C240 94.4%
            );

          border-image-slice: 1;

          cursor: pointer;

          transition:
            transform 350ms
              cubic-bezier(0.22,1,0.36,1),
            box-shadow 350ms ease;
        }


        .faq-disclaimer:hover {

          transform:
            translateY(-5px);

          box-shadow:
            0 12px 28px
            rgba(0,0,0,0.4),
            0 0 22px
            rgba(245,194,64,0.08);
        }


        .faq-disclaimer::before {

          content: "";

          position: absolute;

          inset: 0;

          z-index: 0;

          border-radius: inherit;

          padding: 1px;

          background:
            linear-gradient(
              137.51deg,
              #000000 -0.94%,
              #F5C240 23.02%,
              #000000 54.63%,
              #F5C240 94.4%
            );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite:
            xor;

          mask-composite:
            exclude;

          pointer-events: none;
        }


        .faq-disclaimer-inner {

          position: relative;

          z-index: 1;

          border-radius: inherit;

          background: #080B10;

          padding: 14px 20px;
        }


        @media (min-width: 640px) {

          .faq-disclaimer {
            width: 490px;
          }

          .faq-disclaimer-inner {
            padding: 14px 25px;
          }

        }


        .faq-disclaimer-title {

          display: inline-block;

          font-family:
            'Roboto',
            monospace;

          font-size: 10px;

          font-weight: 400;

          letter-spacing: 2.5px;

          text-transform: uppercase;

          color: #C8861A;

          cursor: pointer;

          transition:
            color 250ms ease,
            letter-spacing 250ms ease;
        }


        .faq-disclaimer:hover
        .faq-disclaimer-title {

          color: #F5C240;

          letter-spacing: 3px;
        }


        .faq-disclaimer-body {

          margin-top: 6px;

          font-family:
            'Roboto',
            sans-serif;

          font-size: 12px;

          line-height: 1.6;

          color: #6B6560;

          transition:
            color 250ms ease;
        }


        .faq-disclaimer:hover
        .faq-disclaimer-body {

          color: #817A73;
        }


        @media (min-width: 640px) {

          .faq-disclaimer-body {
            font-size: 12px;
          }

        }


        /* ======================================================
           ACCORDION ITEM
        ====================================================== */

        .faq-item-heading {

          margin: 0;
        }


        .faq-item {

          border-bottom:
            1px solid
            rgba(255,255,255,0.08);

          transition:
            border-color 300ms ease;
        }


        .faq-item:hover {

          border-bottom-color:
            rgba(245,194,64,0.28);
        }


        .faq-item--open {

          border-bottom-color:
            rgba(245,194,64,0.4);
        }


        .faq-item:last-child {

          border-bottom: none;
        }


        /* ======================================================
           QUESTION BUTTON
        ====================================================== */

        .faq-question {

          position: relative;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          width: 100%;

          padding: 24px 0;

          background: transparent;

          border: none;

          text-align: left;

          cursor: pointer;

          transition:
            padding-left 300ms ease,
            padding-right 300ms ease,
            background 300ms ease;
        }


        .faq-question:hover {

          padding-left: 6px;

          padding-right: 4px;

          background:
            linear-gradient(
              90deg,
              rgba(245,194,64,0.035),
              transparent
            );
        }


        .faq-question span:first-child {

          display: inline-block;

          font-family:
            'Roboto',
            sans-serif;

          font-size: 15px;

          font-weight: 400;

          letter-spacing: 0.2px;

          color: #E2D9C8;

          cursor: pointer;

          transition:
            color 250ms ease,
            transform 300ms ease,
            letter-spacing 300ms ease;
        }


        .faq-question:hover
        span:first-child {

          color: #F5F1E8;

          transform:
            translateX(3px);

          letter-spacing:
            0.35px;
        }


        .faq-item--open
        .faq-question
        span:first-child {

          color: #F5C240;
        }


        @media (min-width: 640px) {

          .faq-question span:first-child {
            font-size: 15px;
          }

        }


        /* ======================================================
           FAQ ICON
        ====================================================== */

        .faq-icon {

          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          width: 24px;

          height: 24px;

          font-size: 22px;

          font-weight: 300;

          line-height: 1;

          color: #F5C240;

          cursor: pointer;

          transform:
            rotate(0deg)
            scale(1);

          transition:
            transform 350ms
              cubic-bezier(0.22,1,0.36,1),
            color 250ms ease,
            text-shadow 250ms ease;
        }


        .faq-question:hover
        .faq-icon {

          transform:
            rotate(90deg)
            scale(1.12);

          text-shadow:
            0 0 12px
            rgba(245,194,64,0.4);
        }


        .faq-icon--open {

          transform:
            rotate(135deg)
            scale(1.05);
        }


        .faq-question:hover
        .faq-icon--open {

          transform:
            rotate(135deg)
            scale(1.15);
        }


        /* ======================================================
           ANSWER PANEL
        ====================================================== */

        .faq-answer-wrap {

          display: grid;

          grid-template-rows: 0fr;

          transition:
            grid-template-rows 420ms
            cubic-bezier(0.22,1,0.36,1);
        }


        .faq-answer-inner {

          overflow: hidden;
        }


        .faq-answer {

          margin: 0;

          padding-bottom: 24px;

          padding-right: 44px;

          max-width: 640px;

          font-family:
            'Inter',
            sans-serif;

          font-size: 14.5px;

          line-height: 1.65;

          color: #9C9690;

          opacity: 0;

          transform:
            translateY(-8px);

          transition:
            opacity 300ms ease,
            transform 400ms
              cubic-bezier(0.22,1,0.36,1),
            color 250ms ease;
        }


        .faq-item--open
        .faq-answer {

          opacity: 1;

          transform:
            translateY(0);
        }


        .faq-item:hover
        .faq-answer {

          color: #AAA39C;
        }


        @media (min-width: 640px) {

          .faq-answer {
            font-size: 15.5px;
          }

        }


        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .faq-section {

            width: 100%;
          }


          .faq-question {

            gap: 12px;
          }


          .faq-question:hover {

            padding-left: 4px;
            padding-right: 2px;
          }


          .faq-answer {

            padding-right: 30px;
          }

        }


        /* ======================================================
           SAFETY: NO HORIZONTAL OVERFLOW
        ====================================================== */

        .faq-disclaimer,
        .faq-question,
        .faq-answer {

          max-width: 100%;

          box-sizing: border-box;
        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .faq-label,
          .faq-heading,
          .faq-description,
          .faq-disclaimer,
          .faq-disclaimer-title,
          .faq-disclaimer-body,
          .faq-item,
          .faq-question,
          .faq-question span:first-child,
          .faq-icon,
          .faq-answer-wrap,
          .faq-answer {

            transition: none !important;

            animation: none !important;
          }

        }

      `}</style>
    </section>
  );
}