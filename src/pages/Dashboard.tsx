const areas = [
  { tag: 'OVERVIEW', title: 'Dashboard', text: 'Run a clearly labelled synthetic example and inspect the resulting energy profile, key metrics and baseline-versus-optimiser comparison.' },
  { tag: 'SCENARIO DESIGN', title: 'Simulation Lab', text: 'Edit the 24-hour demand, solar, tariff and battery inputs, then run the Python engine against the scenario.' },
  { tag: 'RESULTS', title: 'Reports', text: 'Review interval-level outputs, tariff-cost breakdowns, energy-balance checks, assumptions and limitations. Export a report to CSV.' },
  { tag: 'ROBUSTNESS', title: 'Sensitivity analysis', text: 'Vary selected scenario inputs and compare how a chosen model outcome changes. These are user-defined stress cases, not probability ranges.' },
  { tag: 'REFERENCE', title: 'Energy Map', text: 'Browse Malaysian electricity data source metadata and official historical map references. The catalogue is contextual and does not feed the hourly scenario automatically.' },
  { tag: 'WORKSPACE', title: 'Settings', text: 'Customise dashboard sections and local workspace preferences. Profile and overview preferences are stored on the device.' },
];

export function Dashboard() {
  return (
    <div className="product-page">
      <section className="product-page-hero"><div className="product-container"><span className="product-kicker">INSIDE GRIDMIND</span><h1>A focused workspace for energy scenario analysis.</h1><p className="product-lead">The desktop app brings scenario inputs, engine results, reporting and reference material into one local-first workflow.</p><span className="product-status-note"><i className="meta-check" /> Windows desktop application · Python engine · React interface</span></div></section>
      <section className="product-section"><div className="product-container"><div className="product-section-heading"><span className="product-kicker">THE WORKSPACE</span><h2>Six areas, each with a clear job.</h2><p>These are the current desktop app areas, not separate cloud services.</p></div><div className="app-area-grid">{areas.map((area, index) => <article className="app-area-card" key={area.title}><span>{area.tag}</span><div className="app-area-index">0{index + 1}</div><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></div></section>
      <section className="product-section product-section-muted"><div className="product-container product-split"><div><span className="product-kicker">LOCAL-FIRST BY DESIGN</span><h2>Your scenario stays in your workspace.</h2><p className="product-body-copy">GridMind does not create user accounts or store scenarios in a cloud database. Scenario values and completed reports remain in app memory; selected workspace preferences are saved locally on the device.</p></div><div className="boundary-card"><strong>What the app does not do</strong><ul><li>Connect to live meters or inverters</li><li>Control physical batteries or grid equipment</li><li>Fetch live weather or electricity prices</li><li>Automatically turn national statistics into household inputs</li><li>Provide certified engineering or financial advice</li></ul></div></div></section>
    </div>
  );
}
