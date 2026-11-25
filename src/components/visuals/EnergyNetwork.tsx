const links = [
  {
    id: 'solar',
    d: 'M214 76 C282 80 244 158 254 206',
    color: '#35f0a4',
    delay: 0,
    duration: 3.2,
  },
  {
    id: 'homes',
    d: 'M406 76 C338 80 376 158 366 206',
    color: '#22d3ee',
    delay: 0.7,
    duration: 3.6,
  },
  {
    id: 'battery',
    d: 'M214 464 C282 460 244 382 254 334',
    color: '#4b8cff',
    delay: 1.3,
    duration: 4,
  },
  {
    id: 'grid',
    d: 'M406 464 C338 460 376 382 366 334',
    color: '#8bd8ff',
    delay: 0.4,
    duration: 3.4,
  },
];

function SolarGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <rect x="5" y="11" width="30" height="17" rx="1.5" />
      <path d="M14.8 11v17M25.2 11v17M5 19.5h30M11 28v4M29 28v4" />
    </g>
  );
}

function HomeGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 19 20 8l14 11" />
      <path d="M9.5 17v15h21V17" />
      <path d="M16 32v-8h8v8" />
      <path d="M31 15v-4h3v7" />
    </g>
  );
}

function BatteryGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <rect x="5" y="13" width="25" height="15" rx="2" />
      <path d="M34 18v5" />
      <path d="M10 18v5M15.5 18v5M21 18v5" />
    </g>
  );
}

function GridGlyph() {
  return (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7 9 33M20 7l11 26" />
      <path d="M13.5 20h13M10.5 27h19M20 7v26M15 14h10" />
      <path d="M5 33h30" />
    </g>
  );
}

export function EnergyNetwork() {
  return (
    <figure className="network">
      <div className="network-frame">
        <svg viewBox="0 0 620 540" role="img" aria-labelledby="network-title">
          <title id="network-title">
            Illustration of a neighbourhood energy network coordinating solar panels,
            homes, battery storage and the utility grid.
          </title>
          <defs>
            <radialGradient id="net-hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#35f0a4" stopOpacity="0.16" />
              <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="net-hub-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0d1a22" />
              <stop offset="100%" stopColor="#070d13" />
            </linearGradient>
            <pattern id="net-dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="1.4" cy="1.4" r="1" fill="#7c8ca3" fillOpacity="0.16" />
            </pattern>
          </defs>

          <rect x="0" y="0" width="620" height="540" fill="url(#net-dots)" opacity="0.75" />
          <circle cx="310" cy="270" r="238" fill="url(#net-hub-glow)" />
          <circle cx="310" cy="270" r="198" className="net-orbit" />
          <circle cx="310" cy="270" r="150" className="net-orbit net-orbit--inner" />

          {links.map((link) => (
            <g key={link.id}>
              <path d={link.d} className="net-link-base" />
              <path
                d={link.d}
                className="net-link-flow"
                style={{
                  stroke: link.color,
                  animationDelay: `${link.delay}s`,
                  animationDuration: `${link.duration}s`,
                }}
              />
            </g>
          ))}

          <g className="net-hub">
            <circle cx="310" cy="270" r="76" className="net-hub-core" stroke="#35f0a4" strokeOpacity="0.36" />
            <circle cx="310" cy="270" r="76" className="net-hub-pulse" />
            <path d="M310 194a76 76 0 0 1 65.8 38" className="net-hub-arc" />
            <path d="M310 346a76 76 0 0 1-65.8-38" className="net-hub-arc" />
            <text x="310" y="262" textAnchor="middle" className="net-hub-title">
              GRIDMIND
            </text>
            <text x="310" y="280" textAnchor="middle" className="net-hub-sub">
              COORDINATOR
            </text>
            <circle cx="310" cy="296" r="2.6" fill="#35f0a4" />
          </g>

          <g className="net-card">
            <rect x="18" y="30" width="196" height="92" rx="12" />
            <g transform="translate(32 46)" style={{ color: '#35f0a4' }}>
              <SolarGlyph />
            </g>
            <text x="84" y="58" className="net-card-title">Solar array</text>
            <text x="84" y="76" className="net-card-value">420 kW capacity</text>
            <text x="84" y="94" className="net-card-sub">Rooftop + community</text>
          </g>

          <g className="net-card">
            <rect x="406" y="30" width="196" height="92" rx="12" />
            <g transform="translate(420 46)" style={{ color: '#22d3ee' }}>
              <HomeGlyph />
            </g>
            <text x="472" y="58" className="net-card-title">Residential load</text>
            <text x="472" y="76" className="net-card-value">120 households</text>
            <text x="472" y="94" className="net-card-sub">Morning + evening peaks</text>
          </g>

          <g className="net-card">
            <rect x="18" y="418" width="196" height="92" rx="12" />
            <g transform="translate(32 434)" style={{ color: '#4b8cff' }}>
              <BatteryGlyph />
            </g>
            <text x="84" y="446" className="net-card-title">Battery storage</text>
            <text x="84" y="464" className="net-card-value">600 kWh · 250 kW</text>
            <text x="84" y="482" className="net-card-sub">Charge / discharge control</text>
          </g>

          <g className="net-card">
            <rect x="406" y="418" width="196" height="92" rx="12" />
            <g transform="translate(420 434)" style={{ color: '#8bd8ff' }}>
              <GridGlyph />
            </g>
            <text x="472" y="446" className="net-card-title">Utility grid</text>
            <text x="472" y="464" className="net-card-value">Import / export</text>
            <text x="472" y="482" className="net-card-sub">Peak-aware coordination</text>
          </g>
        </svg>
      </div>
      <figcaption>
        Illustrative network topology. Values shown elsewhere in the dashboard are
        generated by the simulation model.
      </figcaption>
    </figure>
  );
}
