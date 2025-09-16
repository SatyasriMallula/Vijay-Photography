"use client";

export default function CurvedText() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 500 250" className="w-[90%] max-w-3xl">
        {/* Top straight word */}
        <text
          x="50%"
          y="60"
          textAnchor="middle"
          fill="#f5c2a0"
          fontSize="80"
          fontWeight="bold"
          letterSpacing="4px"
        >
          BLUEYE
        </text>

        {/* Curve Path for second word */}
        <path
          id="curve"
          d="M 50 180 Q 250 100 450 180"
          fill="transparent"
        />

        {/* Curved text */}
        <text
          fill="#f5c2a0"
          fontSize="92"
          fontWeight="bold"
          letterSpacing="4px"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            BLUEYE
          </textPath>
        </text>
      </svg>
    </div>
  );
}
