"use client";

interface LogoIconProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function LogoIcon({ size = 40, className = "", showText = false }: LogoIconProps) {
  return (
    <div className={`relative flex items-center gap-3 shrink-0 select-none ${className}`}>
      {/* High-Tech Vector SVG Cyber Emblem (Zero latency, 100% reliable) */}
      <div
        className="relative flex items-center justify-center rounded-xl overflow-hidden bg-[#061022] border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(0,240,255,0.5)]"
        style={{ width: size, height: size }}
      >
        <svg
          width={size * 0.7}
          height={size * 0.7}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]"
          aria-label="CyDroid Cyber Emblem"
        >
          <defs>
            <linearGradient id="cydroidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#1d70f6" />
              <stop offset="100%" stopColor="#09b2d4" />
            </linearGradient>
          </defs>

          {/* Outer glowing circuit hex ring */}
          <polygon
            points="20,2 35,10 35,30 20,38 5,30 5,10"
            fill="none"
            stroke="url(#cydroidGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner Cyber C Emblem */}
          <path
            d="M 27 13 C 24 10, 15 10, 13 14 C 11 18, 11 22, 13 26 C 15 30, 24 30, 27 27"
            fill="none"
            stroke="url(#cydroidGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Center Core AI Node */}
          <circle cx="20" cy="20" r="2.5" fill="#00f0ff" />
          <circle cx="27" cy="13" r="1.5" fill="#00f0ff" />
          <circle cx="27" cy="27" r="1.5" fill="#00f0ff" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="text-sm font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
            CYDROID
          </span>
          <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-muted-foreground mt-1">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
