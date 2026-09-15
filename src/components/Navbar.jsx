import { useState } from "react";
import brand from "../assets/brand.png";

const LINKS = [
  { label: "Presale", href: "#presale" },
  { label: "Token Details", href: "#token-details" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Features", href: "#features" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-[100] fixed inset-x-0 top-0 font-[Inter] bg-[rgba(0,0,0,0.88)] border-b border-[rgba(232,185,73,0.1)] backdrop-blur-[14px]">
      <div className="flex items-center justify-between gap-6 mx-auto h-[72px] w-[92%] max-w-[1200px]">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={brand} alt="KAUDI" height={30} className="block max-w-full" />
        </a>

        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col gap-[18px] border-b border-[rgba(232,185,73,0.12)] bg-[#030303] px-6 py-5 min-[861px]:static min-[861px]:flex min-[861px]:flex-row min-[861px]:gap-[34px] min-[861px]:border-0 min-[861px]:bg-transparent min-[861px]:p-0`}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['Oswald'] text-[13px] uppercase tracking-[0.2em] text-[#d7d7d7] transition-colors duration-200 hover:text-[#e8b949]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#presale"
          className="hidden items-center justify-center gap-2 px-6 py-2.5 font-[ bg-gradient-to-b from-[#f2cd6b] to-[#d9a52e] rounded-[4px] border-2 border-[#d9a52e]'Oswald'] text-[13px] font-semibold uppercase tracking-[0.08em] text-[#050505] transition duration-200 hover:-translate-y-px hover:brightness-110 min-[861px]:inline-flex"
        >
          Buy KAUDI
        </a>

        <button
          className="block min-[861px]:hidden text-2xl text-[#e8b949] bg-transparent border-0 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
