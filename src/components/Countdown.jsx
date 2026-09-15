 
import { useEffect, useState } from "react";

const UNITS = ["Days", "Hours", "Minutes", "Seconds"];

function pad(n) {
  return String(n).padStart(2, "0");
}

const TARGET_DATE = null;

function getTimeLeft() {
  if (!TARGET_DATE) return [0, 0, 0, 0];

  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  return [days, hours, minutes, seconds];
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    if (!TARGET_DATE) return;

    const id = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative px-[30px] pb-6 pt-[30px] w-full max-w-[560px] max-[600px]:px-5 font-[Inter] text-center bg-gradient-to-b from-[#0b0b0b] to-[#030303] rounded-[10px] border-[rgba(232,185,73,0.22)] shadow-[0_25px_70px_rgba(0,0,0,0.65),inset_0_0_35px_rgba(232,185,73,0.018)] isolate border backdrop-blur-[6px]"
    >
      <p
        className="mb-[22px] font-['Oswald']
          text-sm
          uppercase
          tracking-[0.3em]
          text-[#e6e6e6]
        "
      >
        KAUDI Public Presale Starts In
      </p>

      <div className="flex justify-center gap-[14px] max-[520px]:gap-2">
        {UNITS.map((u, i) => (
          <div
            key={u}
            className="flex flex-col items-center gap-2.5"
          >
            <div className="flex items-center gap-3 max-[520px]:gap-1.5">
              <div
                className="flex items-center justify-center h-[88px] w-[110px] max-[900px]:h-[66px] max-[900px]:w-[82px] max-[520px]:h-[52px] max-[520px]:w-[64px] bg-[#0D1018]; rounded-[6px] border-[rgba(232,185,73,0.22)] shadow-[0_0_25px_rgba(232,185,73,0.15),inset_0_1px_0_rgba(232,185,73,0.06),0_4px_24px_rgba(0,0,0,0.65)] border"
              >
                <span
                  className="font-['Oswald']
                    text-[54px]
                    font-bold
                    leading-none
                    text-[#e8b949]
                    drop-shadow-[0_0_20px_rgba(232,185,73,0.4)]
                    max-[900px]:text-[40px]
                    max-[520px]:text-[34px]
                  "
                >
                  {pad(time[i])}
                </span>
              </div>

              {i < UNITS.length - 1 && (
                <span
                  className="font-['Oswald']
                    text-[34px]
                    font-bold
                    leading-none
                    text-[rgba(232,185,73,0.45)]
                    max-[900px]:text-[26px]
                    max-[520px]:text-[20px]
                  "
                >
                  :
                </span>
              )}
            </div>

            <span
              className="font-['Oswald']
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#8f8f8f]
              "
            >
              {u}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-[#6d6d6d]">
        Presale launch date will be announced officially
      </p>
    </div>
  );
}
 
