import React, { useState } from "react";
import Reveal from "../common/Reveal";

// ============================================================
// ASSETS
// ============================================================
// Replace this path with the actual location of your existing
// handshake / property image.

import howItWorksImage from "../assets/images/how-it-works.png";

// ============================================================
// DATA
// ============================================================

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore available tokenized property opportunities on the platform.",
    delay: 100,
  },
  {
    number: "02",
    title: "Verify",
    description: "Complete KYC, AML and investor eligibility requirements.",
    delay: 180,
  },
  {
    number: "03",
    title: "Select",
    description:
      "Choose an eligible property opportunity that aligns with your goals.",
    delay: 260,
  },
  {
    number: "04",
    title: "Participate",
    description: "Acquire corresponding KAUDI positions through the platform.",
    delay: 340,
  },
  {
    number: "05",
    title: "Track",
    description: "Monitor your property-linked portfolio digitally in real time.",
    delay: 420,
  },
  {
    number: "06",
    title: "Distribute",
    description:
      "Eligible holders may receive property-linked rental distributions.",
    delay: 500,
  },
  {
    number: "07",
    title: "Transfer",
    description:
      "Transfer eligible positions through approved mechanisms, subject to regulations.",
    delay: 580,
  },
];

const STATS = [
  { value: "7", label: "Steps" },
  { value: "KYC", label: "Required" },
  { value: "100%", label: "On-Chain" },
];

// ============================================================
// HOW IT WORKS SECTION
// ============================================================

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full bg-[#05070C] hiw-section">
      <div className="mx-auto px-5 py-10 w-full max-w-[1400px] sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-14 gap-16 lg:grid-cols-2 xl:gap-20">
          {/* ====================================================
              LEFT — STEPS LIST
          ==================================================== */}

          <ol className="flex flex-col order-2 hiw-steps lg:order-1">
            {STEPS.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <Reveal delay={step.delay} key={step.number}>
                  <li>
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={isActive}
                      className={`hiw-step w-full text-left ${
                        isActive ? "hiw-step--active" : ""
                      }`}
                    >
                      <span className="hiw-step-number">{step.number}</span>

                      <span className="hiw-step-body">
                        <span className="hiw-step-title">{step.title}</span>
                        <span className="hiw-step-description">
                          {step.description}
                        </span>
                      </span>

                      {isActive && (
                        <span className="hiw-step-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                    </button>
                  </li>
                </Reveal>
              );
            })}
          </ol>

          {/* ====================================================
              RIGHT CONTENT
          ==================================================== */}

          <div className="flex flex-col order-1 lg:order-2">
            <Reveal delay={100}>
              <span className="hiw-label">04 — How It Works</span>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-3 font-bold hiw-heading uppercase">
                <span className="block">7 Steps To</span>
                <span className="block">Participate</span>
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 max-w-[500px] hiw-description">
                KAUDI simplifies the journey from a real-world property to a
                digitally managed investment opportunity through a
                structured seven-step process.
              </p>
            </Reveal>

            {/* STATISTIC CARDS */}

            <Reveal delay={400}>
              <div className="grid grid-cols-3 gap-3 mt-8 mt-10 hiw-stats sm:gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="hiw-stat-card">
                    <span className="hiw-stat-value">{stat.value}</span>
                    <span className="hiw-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* BOTTOM IMAGE */}

            <Reveal delay={500}>
              <div className="mt-8 hiw-image-wrap sm:mt-10">
                <img
                  src={howItWorksImage}
                  alt="Handshake in front of a tokenized property, representing the participation process"
                  className="object-cover h-[220px] w-full hiw-image sm:h-[240px] lg:h-[255px]"
                  draggable={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ========================================================
          CUSTOM CSS
      ======================================================== */}

      <style>{`
        .hiw-section {
          font-family: 'Oswald', 'Barlow Condensed', sans-serif;
        }

        /* ======================================================
           LABEL / HEADING / DESCRIPTION
        ====================================================== */

        .hiw-label {
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  color: #C8861A;
}

       .hiw-heading {
  font-size: clamp(36px, 5.8vw, 67px);
  font-weight: 400;
  line-height: 0.96;
  letter-spacing: -1px;

  background: linear-gradient(
    100deg,
    #F5C240 6.17%,
    #C8861A 58.77%,
    #F5C240 93.83%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 1024px) {
  .hiw-heading {
    letter-spacing: -2px;
  }
}

       .hiw-description {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  width: 380px;

  color: #D1D1D1;
}

@media (min-width: 640px) {
  .hiw-description {
    font-size: 14px;
  }
}
        /* ======================================================
           STATISTIC CARDS
        ====================================================== */

        .hiw-stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  padding: 10px;

  border-radius: 6px;

  border-top: 0.77px solid #F5C2404D;

  background: rgba(10, 12, 20, 0.6);

  box-shadow: 0px 4px 4px 0px #F5C24033;

  text-align: center;

  transition: box-shadow 220ms ease, border-color 220ms ease;
}

@media (min-width: 640px) {
  .hiw-stat-card {
    height: 90px;
  }
}

.hiw-stat-card:hover {
  border-top-color: rgba(245, 194, 64, 0.7);
  box-shadow: 0px 4px 4px 0px #F5C24033;
}

.hiw-stat-value {
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #F5C240;
  font-family: 'Oswald', sans-serif;
}

@media (min-width: 640px) {
  .hiw-stat-value {
    font-size: 28px;
  }
}

        .hiw-stat-label {
          margin-top: 6px;

          font-family: 'Roboto Mono', monospace;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;

          color: #CFCFCF;
        }

        @media (min-width: 640px) {
          .hiw-stat-label {
            font-size: 10px;
          }
        }

        /* ======================================================
           BOTTOM IMAGE
        ====================================================== */

        .hiw-image-wrap {
          overflow: hidden;
          border-radius: 6px;
        }

        .hiw-image {
          display: block;
          transition: transform 500ms ease;
        }

        .hiw-image-wrap:hover .hiw-image {
          transform: scale(1.02);
        }

        /* ======================================================
           STEPS LIST
        ====================================================== */

        .hiw-steps {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .hiw-step {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 20px;

          padding: 22px 16px;

          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(184, 134, 38, 0.16);
          border-radius: 4px;

          cursor: pointer;

          transition: background 220ms ease, border-color 220ms ease;
        }

        .hiw-step:last-child {
          border-bottom: none;
        }

        .hiw-step:hover .hiw-step-number {
          color: #FFE08A;
        }

        .hiw-step:hover .hiw-step-title {
          color: #FFFFFF;
        }

        .hiw-step--active {
          background: rgba(184, 134, 38, 0.08);
          border: 1px solid rgba(184, 134, 38, 0.35);
          border-bottom: 1px solid rgba(184, 134, 38, 0.35);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .hiw-step-number {
          flex-shrink: 0;

          font-size: 24px;
          font-weight: 700;
          line-height: 1;

          color: #C8861A;

          transition: color 220ms ease;
        }

        @media (min-width: 1024px) {
          .hiw-step-number {
            font-size: 22px;
          }
        }

        .hiw-step--active .hiw-step-number {
          color: #F5C240;
        }

        .hiw-step-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hiw-step-title {
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.5px;
          text-transform: uppercase;

          color: #E7E9EE;

          transition: color 220ms ease;
        }

        @media (min-width: 1024px) {
          .hiw-step-title {
            font-size: 15px;
          }
        }

        .hiw-step--active .hiw-step-title {
          color: #F5C240;
        }

        .hiw-step-description {
          font-family: 'Roboto', sans-serif;
          font-size: 13px;
          line-height: 1.5;

          color: #A7A7A7;
        }

        @media (min-width: 1024px) {
          .hiw-step-description {
            font-size: 13px;
          }
        }

        .hiw-step-arrow {
          margin-left: auto;
          align-self: center;
          flex-shrink: 0;

          font-size: 18px;
          color: #F5C240;
        }

        /* ======================================================
           SAFETY: NO HORIZONTAL OVERFLOW
        ====================================================== */

        .hiw-steps,
        .hiw-stat-card,
        .hiw-image-wrap {
          max-width: 100%;
        }

        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .hiw-step,
          .hiw-stat-card,
          .hiw-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}