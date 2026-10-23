import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
  emblemOnly?: boolean;
}

/**
 * Official JAPEC Emblem Component
 * Renders the exact specification from Microsoft Excel:
 * 1) 'J' and 'C' in Broadway style font (size 36)
 * 2) 'APE' in Microsoft Yi Baiti style font (size 32)
 * 3) Inside a rectangular box with single thick black line border
 * 4) Inside rectangular box full of horizontal lines in blue color
 * 5) Color: RGB(32, 172, 172) (#20ACAC)
 */
export const JapecEmblem: React.FC<{
  width?: number | string;
  height?: number | string;
  className?: string;
}> = ({ width = 160, height = 48, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 drop-shadow-sm ${className}`}
      aria-label="JAPEC Official Logo"
    >
      {/* 3) Rectangular box with single thick line border in BLACK COLOR */}
      <rect
        x="1.5"
        y="1.5"
        width="237"
        height="69"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="2.5"
      />

      {/* 4) Inside rectangular box full of horizontal lines in blue color RGB(32, 172, 172) */}
      <g stroke="rgb(32, 172, 172)" strokeWidth="0.85" strokeOpacity="0.45">
        <line x1="2.5" y1="5.5" x2="237.5" y2="5.5" />
        <line x1="2.5" y1="8.5" x2="237.5" y2="8.5" />
        <line x1="2.5" y1="11.5" x2="237.5" y2="11.5" />
        <line x1="2.5" y1="14.5" x2="237.5" y2="14.5" />
        <line x1="2.5" y1="17.5" x2="237.5" y2="17.5" />
        <line x1="2.5" y1="20.5" x2="237.5" y2="20.5" />
        <line x1="2.5" y1="23.5" x2="237.5" y2="23.5" />
        <line x1="2.5" y1="26.5" x2="237.5" y2="26.5" />
        <line x1="2.5" y1="29.5" x2="237.5" y2="29.5" />
        <line x1="2.5" y1="32.5" x2="237.5" y2="32.5" />
        <line x1="2.5" y1="35.5" x2="237.5" y2="35.5" />
        <line x1="2.5" y1="38.5" x2="237.5" y2="38.5" />
        <line x1="2.5" y1="41.5" x2="237.5" y2="41.5" />
        <line x1="2.5" y1="44.5" x2="237.5" y2="44.5" />
        <line x1="2.5" y1="47.5" x2="237.5" y2="47.5" />
        <line x1="2.5" y1="50.5" x2="237.5" y2="50.5" />
        <line x1="2.5" y1="53.5" x2="237.5" y2="53.5" />
        <line x1="2.5" y1="56.5" x2="237.5" y2="56.5" />
        <line x1="2.5" y1="59.5" x2="237.5" y2="59.5" />
        <line x1="2.5" y1="62.5" x2="237.5" y2="62.5" />
        <line x1="2.5" y1="65.5" x2="237.5" y2="65.5" />
      </g>

      {/* 5) Letters 'J A P E C' in RGB(32, 172, 172) */}

      {/* 1) Letter 'J' in Broadway style font (size 36) */}
      {/* Heavy solid rectangular vertical stem on the right, curved bottom hook on the left */}
      <path
        d="M 47 16 
           H 58 
           V 47.5 
           C 58 51 54.5 53.5 48 53.5 
           C 40 53.5 33 52 28 46.5 
           C 26.5 45 26 43 26 40.5 
           C 26 38.5 27.5 37 29.5 37 
           C 31.5 37 32.5 38.5 32.5 40 
           C 32.5 43 36.5 50.5 45.5 50.5 
           C 48.5 50.5 49.5 48.5 49.5 45.5 
           V 16 
           Z"
        fill="rgb(32, 172, 172)"
      />

      {/* 2) Letter 'A' in Microsoft Yi Baiti style font (size 32) */}
      <path
        d="M 68 52 L 81 20 L 94 52"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <line
        x1="73"
        y1="39"
        x2="89"
        y2="39"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.2"
        strokeLinecap="square"
      />

      {/* 2) Letter 'P' in Microsoft Yi Baiti style font (size 32) */}
      <line
        x1="104"
        y1="20"
        x2="104"
        y2="52"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        d="M 104 20 H 117.5 C 124.5 20 127 23.5 127 28.5 C 127 33.5 124.5 37 117.5 37 H 104"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* 2) Letter 'E' in Microsoft Yi Baiti style font (size 32) */}
      <line
        x1="137"
        y1="20"
        x2="137"
        y2="52"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <line
        x1="137"
        y1="20"
        x2="157"
        y2="20"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <line
        x1="137"
        y1="36"
        x2="153"
        y2="36"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <line
        x1="137"
        y1="52"
        x2="157"
        y2="52"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="square"
      />

      {/* 1) Letter 'C' in Broadway style font (size 36) */}
      {/* Heavy solid crescent on the left, thin curling arches extending to the right */}
      <path
        d="M 186 16 
           C 173 16 167 23.5 167 34.5 
           C 167 45.5 173 53 186 53 
           Z"
        fill="rgb(32, 172, 172)"
      />
      <path
        d="M 186 16.5 C 196.5 16.5 204.5 18.5 206 25"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 186 52.5 C 196.5 52.5 204.5 50.5 206 44"
        stroke="rgb(32, 172, 172)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = false,
  emblemOnly = false,
}) => {
  const isDarkBg = variant === 'light'; // Light variant is used on dark backgrounds like footer

  const dimensions = {
    sm: { width: 125, height: 38, text: 'text-base', subtext: 'text-[9px]' },
    md: { width: 155, height: 46, text: 'text-lg', subtext: 'text-[10px]' },
    lg: { width: 185, height: 56, text: 'text-xl', subtext: 'text-xs' },
  }[size];

  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="JAPEC ENGINEERING Home"
    >
      {/* The Official JAPEC Rectangular Box Emblem */}
      <JapecEmblem width={dimensions.width} height={dimensions.height} />

      {!emblemOnly && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-display font-extrabold tracking-wider uppercase ${dimensions.text} ${
                isDarkBg ? 'text-white' : 'text-brand-navy'
              }`}
            >
              ENGINEERING
            </span>
          </div>
          {showTagline ? (
            <span
              className={`font-sans tracking-wider uppercase font-semibold mt-0.5 ${dimensions.subtext} ${
                isDarkBg ? 'text-brand-silver/80' : 'text-brand-graphite/80'
              }`}
            >
              Precision Dies &middot; Tooling &middot; Molding
            </span>
          ) : (
            <span
              className={`font-mono text-[9px] uppercase tracking-widest ${
                isDarkBg ? 'text-brand-silver/70' : 'text-brand-graphite/80'
              }`}
            >
              Rabale MIDC &middot; Navi Mumbai
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
