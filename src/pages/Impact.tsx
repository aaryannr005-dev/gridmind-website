import { Link } from 'react-router-dom';

const metrics = [
  ['Tariff cost', 'Import charges minus export credits over the scenario window.'],
  ['Grid imports and exports', 'Energy exchanged with the grid under each strategy.'],
  ['Solar self-consumption', 'The share of generated solar used directly or routed into the battery.'],
  ['Peak grid import', 'The highest modelled import power across the scenario.'],
  ['Battery activity', 'Charge, discharge, throughput and equivalent cycle indicators.'],
  ['Validation checks', 'Energy balance, battery constraints, grid caps and tariff calculations.'],
];

export function Impact() {
  return (
    <div className="product-page">
      <section className="product-page-hero"><div className="product-container"><span className="product-kicker">ANALYSIS & REPORTING</span><h1>Understand the trade-offs behind every result.</h1><p className="product-lead">GridMind reports modelled costs and energy flows, checks whether the scenario is internally consistent, and makes it easier to compare the baseline with optimised dispatch.</p><span className="product-status-note"><i className="meta-check" /> Scenario outputs · Validation · CSV export</span></div></section>
      <section className="product-section"><div className="product-container"><div className="product-section-heading"><span className="product-kicker">WHAT YOU CAN REVIEW</span><h2>More than one headline number.</h2><p>Each metric describes a different part of the scenario. A favourable change in one does not automatically mean every other objective improved.</p></div><div className="analysis-grid">{metrics.map((item, index) => <article className="analysis-card" key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div></div></section>
      <section className="product-section product-section-muted"><div className="product-container product-split"><div><span className="product-kicker">SENSITIVITY ANALYSIS</span><h2>Test how assumptions affect the outcome.</h2><p className="product-body-copy">Sensitivity analysis varies a selected input dimension and reports how the chosen outcome changes across the tested values. The sweep is a user-defined stress test, not a probability distribution or forecast.</p></div><div className="boundary-card"><strong>Reporting tools</strong><ul><li>Baseline and optimised strategy comparison</li><li>Tariff cost breakdown</li><li>Interval-level energy and battery outputs</li><li>Energy-balance and constraint validation</li><li>Reproducibility fingerprint and model notes</li><li>CSV report export</li><li>Saved comparison snapshots on the device</li></ul></div></div></section>
      <section className="product-section"><div className="product-container product-note-grid"><div><span className="product-kicker">NO UNSUPPORTED IMPACT CLAIMS</span><h2>Scenario analysis, not a measured pilot.</h2></div><div><p>GridMind does not currently calculate verified carbon reductions, measure real-world household savings or monitor a live electricity network. Results are derived from the values and assumptions in each scenario. They should be treated as model outputs, not environmental certification or financial advice.</p><Link className="product-text-link" to="/about">See all current limitations <span>→</span></Link></div></div></section>
    </div>
  );
}
