import { Link } from 'react-router-dom';

const steps = [
  { n: '01', title: 'Build an hourly scenario', text: 'Provide aligned 24-hour demand, solar-generation and tariff inputs. Configure battery capacity, charge and discharge limits, efficiency and state-of-charge boundaries.' },
  { n: '02', title: 'Validate the inputs', text: 'GridMind checks the scenario for malformed values, inconsistent timestamps, energy-balance issues and configured battery or grid constraints before interpreting the result.' },
  { n: '03', title: 'Run the baseline', text: 'The reference strategy follows a self-consumption-first energy balance: solar serves demand, surplus can charge the battery, and remaining energy is exported or imported as applicable.' },
  { n: '04', title: 'Optimise battery dispatch', text: 'A discrete dynamic-programming search evaluates feasible battery actions across the supplied horizon to minimise modelled tariff cost. State of charge is discretised, so the result is approximate.' },
  { n: '05', title: 'Compare and report', text: 'Review costs, grid imports and exports, solar self-consumption, battery activity and validation flags. Export the completed scenario report as CSV or inspect sensitivity cases.' },
];

export function HowItWorks() {
  return (
    <div className="product-page">
      <section className="product-page-hero"><div className="product-container"><span className="product-kicker">HOW IT WORKS</span><h1>A clear path from scenario to comparison.</h1><p className="product-lead">GridMind keeps inputs, simulation, optimisation and reporting separate, so you can see what was modelled and why the result looks the way it does.</p><span className="product-status-note"><i className="meta-check" /> Desktop workflow · 24 hourly intervals · Scenario-based</span></div></section>
      <section className="product-section"><div className="product-container"><div className="product-section-heading"><span className="product-kicker">THE FIVE STEPS</span><h2>One scenario. Two strategies. A transparent result.</h2><p>The baseline and optimised run use the same scenario inputs, making the comparison easier to interpret.</p></div><div className="workflow-list">{steps.map(step => <article className="workflow-step" key={step.n}><span className="workflow-step-number">{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="workflow-step-mark">↗</span></article>)}</div></div></section>
      <section className="product-section product-section-muted"><div className="product-container product-split"><div><span className="product-kicker">WHAT THE MODEL USES</span><h2>Inputs you can inspect and change.</h2><p className="product-body-copy">The desktop Simulation Lab exposes the main scenario assumptions instead of hiding them behind a black-box score.</p></div><div className="input-chip-grid"><span>Hourly demand</span><span>Solar generation</span><span>Import tariffs</span><span>Export credits</span><span>Battery capacity</span><span>Power limits</span><span>Charge efficiency</span><span>State of charge</span><span>Optional grid caps</span><span>Optional PV derating</span></div></div></section>
      <section className="product-section"><div className="product-container product-note-grid"><div><span className="product-kicker">IMPORTANT DISTINCTION</span><h2>Modelled does not mean measured.</h2></div><div><p>GridMind uses supplied scenario values and a synthetic example profile. It does not currently ingest live smart-meter data or weather feeds. Results describe the scenario you entered; they are not a forecast, a utility bill or a guarantee of real-world savings.</p><Link className="product-text-link" to="/about">Read the limitations <span>→</span></Link></div></div></section>
    </div>
  );
}
