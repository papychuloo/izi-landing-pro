import React from 'react';

export default function NoiseOverlay() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <svg className="hidden" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </>
  );
}
