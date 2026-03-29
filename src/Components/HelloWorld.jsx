import React from "react";

// FloralFrame1920x1920.jsx
// React component (single-file) that renders a 1920x1920 floral watercolor-style frame.
// Uses inline SVG for decorative corners, an adjustable 6-step vertical gradient background,
// a double white border, and placeholders for calendar, photo collage, and a message area.
// Tailwind CSS classnames are used for convenience but the component also works with plain CSS
// if you prefer (styles are provided inline for the main container).

export default function FloralFrame1920({
  width = 1920,
  height = 1920,
  photos = [],
  calendarComponent = null,
  messageTitle = "Happy Birthday",
  messageName = "[Name]",
  gradient = ["#FAD6E7", "#E8CFF1", "#D3D3F9", "#C2E1F8", "#B5E3F7", "#D7F4E3"]
}) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    // Create a 6-stop linear gradient top -> bottom
    background: `linear-gradient(to bottom, ${gradient.join(', ')})`,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
    boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
  };

  // Simple decorative floral SVG (stylized) - you can replace with higher quality SVGs or PNGs
  const FloralSVG = ({ flip = false, scale = 1, className = '' }) => (
    <svg
      viewBox="0 0 300 300"
      width={300 * scale}
      height={300 * scale}
      className={className}
      style={{ transform: flip ? 'scale(-1,1)' : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff9dbf" />
          <stop offset="50%" stopColor="#d89ef8" />
          <stop offset="100%" stopColor="#8ecffb" />
        </linearGradient>
      </defs>
      <g transform="translate(20,20)">
        <ellipse cx="50" cy="200" rx="30" ry="12" fill="#3a6b48" opacity="0.9" />
        <ellipse cx="80" cy="180" rx="20" ry="8" fill="#2f5f3b" opacity="0.9" />

        {/* Leaves */}
        <path d="M30 160 C10 120 60 100 90 140" fill="#2f6f49" opacity="0.95" />
        <path d="M40 150 C70 120 120 130 90 170" fill="#2b6a43" opacity="0.95" />

        {/* Stylized rose petals */}
        <g>
          <circle cx="170" cy="60" r="40" fill="#d56d91" opacity="0.98" />
          <circle cx="200" cy="90" r="36" fill="#b368d6" opacity="0.95" />
          <circle cx="150" cy="95" r="28" fill="#8b4fc0" opacity="0.9" />
          <path d="M140 70 C150 50 190 50 200 70" fill="#ffb6d0" opacity="0.25" />
        </g>
      </g>
    </svg>
  );

  // Generate placeholders for photo grid (up to 12)
  const photoSlots = new Array(12).fill(null);

  return (
    <div style={style} className="floral-frame-root">
      {/* Background overlay texture can be added here if desired */}

      {/* Double white rectangular border centered with padding */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
      >
        {/* Outer semi-transparent vignette for subtle depth */}
        <defs>
          <filter id="vignette">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* outer faint border */}
        <rect
          x={width * 0.035}
          y={height * 0.035}
          width={width * 0.93}
          height={height * 0.93}
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={4}
          rx={16}
        />

        {/* inner double white border */}
        <rect
          x={width * 0.07}
          y={height * 0.07}
          width={width * 0.86}
          height={height * 0.86}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={6}
          rx={12}
        />
        <rect
          x={width * 0.078}
          y={height * 0.078}
          width={width * 0.844}
          height={height * 0.844}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={2}
          rx={10}
        />
      </svg>

      {/* Top-left floral */}
      <div style={{ position: 'absolute', left: 40, top: 40, transformOrigin: 'top left' }}>
        <FloralSVG scale={1.45} />
      </div>

      {/* Bottom-right floral (flipped) */}
      <div style={{ position: 'absolute', right: 40, bottom: 40, transformOrigin: 'bottom right' }}>
        <FloralSVG flip scale={1.6} />
      </div>

      {/* Calendar area (top-left inside border) */}
      <div
        style={{
          position: 'absolute',
          left: width * 0.08 + 24,
          top: height * 0.08 + 24,
          width: 300,
          color: '#333'
        }}
      >
        {calendarComponent ? (
          calendarComponent
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.65)', padding: 12, borderRadius: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#3b3b3b' }}>Baishak</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginTop: 8 }}>
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: i === 26 ? '#ffd3e8' : 'transparent',
                    fontSize: 12
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right-side photo collage (within border) */}
      <div
        style={{
          position: 'absolute',
          right: width * 0.08 + 24,
          top: height * 0.18,
          width: width * 0.28,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12
        }}
      >
        {photoSlots.map((_, i) => (
          <div
            key={i}
            style={{
              height: (height * 0.86 - 160) / 6,
              borderRadius: 12,
              background: photos[i] ? `url(${photos[i]}) center/cover` : 'rgba(255,255,255,0.55)',
              boxShadow: '0 6px 14px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {!photos[i] && <div style={{ color: '#7a7a7a', fontSize: 12 }}>Photo</div>}
          </div>
        ))}
      </div>

      {/* Center message block */}
      <div
        style={{
          position: 'absolute',
          left: width * 0.18,
          right: width * 0.18 + (width * 0.28 + 48),
          top: height * 0.35,
          bottom: height * 0.25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 40
        }}
      >
        <div style={{ color: '#fff', fontSize: 42, fontWeight: 700, textShadow: '0 4px 18px rgba(0,0,0,0.25)', marginBottom: 12 }}>
          {messageTitle}
        </div>
        <div style={{ color: '#fff', fontSize: 28, fontWeight: 500, marginBottom: 20 }}>{messageName}</div>
        <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: 16, maxWidth: 640 }}>
          Hey babe, happy birthday to the most amazing person I know. I just wanted to take a moment to tell you how much I love you. I am so lucky to have you in my life — you make me a better person.
        </div>
      </div>

      {/* Bottom signature */}
      <div style={{ position: 'absolute', left: width * 0.18, bottom: height * 0.08, color: '#fff' }}>
        <div style={{ fontSize: 26, fontFamily: 'cursive' }}>Happy Birthday</div>
        <div style={{ fontSize: 36, fontWeight: 700 }}>{messageName}</div>
      </div>
    </div>
  );
}
