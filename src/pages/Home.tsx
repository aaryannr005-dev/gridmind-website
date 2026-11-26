import { Link } from 'react-router-dom';

const downloadUrl = 'https://github.com/aaryannr005-dev/GridMind/releases/latest/download/GridMind-Setup.exe';

export function Home() {
  return (
    <>
      <section className="product-hero">
        <div className="product-container product-hero-grid">
          <div className="product-hero-copy">
            <span className="product-kicker"><span className="kicker-dot" /> ENERGY SCENARIO MODELLING</span>
            <h1>Make better energy decisions <span>before you make them real.</span></h1>
            <p className="product-lead">GridMind is a local-first energy scenario simulator that helps you explore how solar generation, electricity demand, battery storage and tariffs work together.</p>
            <div className="product-actions">
              <a className="product-button product-button-primary" href={downloadUrl}>Download for Windows <span aria-hidden="true">↗</span></a>
              <Link className="product-button product-button-secondary" to="/how-it-works">See how it works <span aria-hidden="true">→</span></Link>
            </div>
            <div className="product-hero-meta">
              <span><i className="meta-check" /> Desktop application</span>
              <span><i className="meta-check" /> Scenario-based analysis</span>
              <span><i className="meta-check" /> No live hardware control</span>
            </div>
          </div>
          <div className="product-preview-wrap">
            <div className="product-preview-label">PRODUCT OVERVIEW <span>ILLUSTRATIVE UI</span></div>
            <div className="product-window">
              <div className="product-window-top"><span className="window-lights"><i /><i /><i /></span><span>GridMind · Energy workspace</span><span className="window-status">LOCAL</span></div>
              <div className="product-window-body">
                <aside className="product-window-sidebar">
                  <div className="window-brand"><b>G</b><span>GridMind</span></div>
                  <span className="window-nav active">Overview</span>
                  <span className="window-nav">Simulation Lab</span>
                  <span className="window-nav">Reports</span>
                  <span className="window-nav">Energy Map</span>
                  <span className="window-nav">Settings</span>
                </aside>
                <div className="product-window-main">
                  <div className="window-heading"><div><small>WORKSPACE / OVERVIEW</small><h3>Energy scenario</h3></div><span className="window-tag">SAMPLE VIEW</span></div>
                  <div className="window-cards">
                    <div className="window-card"><small>SCENARIO INPUTS</small><strong>Solar · Demand</strong><span>Tariffs · Battery</span></div>
                    <div className="window-card"><small>STRATEGIES</small><strong>Baseline</strong><span>Optimised dispatch</span></div>
                    <div className="window-card"><small>RESULTS</small><strong>Energy flows</strong><span>Costs · Constraints</span></div>
                  </div>
                  <div className="window-chart">
                    <div className="window-chart-head"><span>INTERVAL ENERGY PROFILE</span><span>ILLUSTRATIVE</span></div>
                    <svg viewBox="0 0 520 160" role="img" aria-label="Decorative example of energy profile curves, not real data">
                      <defs><linearGradient id="solarFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#35c99a" stopOpacity=".28"/><stop offset="1" stopColor="#35c99a" stopOpacity="0"/></linearGradient></defs>
                      {[35,70,105,140].map(y => <line key={y} x1="0" x2="520" y1={y} y2={y} stroke="currentColor" opacity=".12" />)}
                      <path d="M0 138 C55 137 75 118 115 85 S190 20 245 28 S315 95 360 120 S450 137 520 138 L520 160 L0 160Z" fill="url(#solarFill)" />
                      <path d="M0 138 C55 137 75 118 115 85 S190 20 245 28 S315 95 360 120 S450 137 520 138" fill="none" stroke="#35c99a" strokeWidth="3" />
                      <path d="M0 105 C55 92 75 84 115 92 S190 113 245 105 S315 78 360 67 S450 70 520 86" fill="none" stroke="#65aef5" strokeWidth="3" />
                    </svg>
                    <div className="window-chart-legend"><span><i className="legend-solar" /> Solar generation</span><span><i className="legend-demand" /> Electricity demand</span></div>
                  </div>
                  <p className="window-disclaimer">Conceptual interface preview. Values and curves are not live readings.</p>
                </div>
              </div>
            </div>
            <p className="preview-caption">A visual guide to the desktop workspace, not a live connection.</p>
          </div>
        </div>
      </section>

      <section className="product-trust-strip">
        <div className="product-container trust-grid">
          <div><strong>01</strong><span>Build a scenario</span></div>
          <div><strong>02</strong><span>Compare strategies</span></div>
          <div><strong>03</strong><span>Inspect the results</span></div>
          <div><strong>04</strong><span>Export a report</span></div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <span className="product-kicker">THE WORKFLOW</span>
            <h2>From energy inputs to clearer decisions.</h2>
            <p>GridMind turns a defined energy scenario into a set of transparent, comparable model outputs. It is designed to help people understand trade-offs, not to operate electrical equipment.</p>
          </div>
          <div className="product-feature-grid">
            <article className="product-feature-card"><span className="feature-number">01 / INPUT</span><div className="feature-icon">↗</div><h3>Define the scenario</h3><p>Enter hourly solar generation, electricity demand, import tariffs, export credits and battery settings for a 24-hour scenario.</p><Link to="/how-it-works">Explore scenario setup <span>→</span></Link></article>
            <article className="product-feature-card"><span className="feature-number">02 / DECISION</span><div className="feature-icon">⌁</div><h3>Compare dispatch strategies</h3><p>Compare a self-consumption-first baseline with an approximate cost-optimised battery dispatch schedule.</p><Link to="/optimisation">Understand optimisation <span>→</span></Link></article>
            <article className="product-feature-card"><span className="feature-number">03 / ANALYSIS</span><div className="feature-icon">▥</div><h3>Understand the outcome</h3><p>Review modelled energy flows, tariff costs, battery activity, constraint checks and sensitivity results.</p><Link to="/impact">Explore analysis tools <span>→</span></Link></article>
          </div>
        </div>
      </section>

      <section className="product-section product-section-muted">
        <div className="product-container product-split">
          <div>
            <span className="product-kicker">BUILT AROUND TRANSPARENCY</span>
            <h2>Every result has assumptions behind it. GridMind keeps them visible.</h2>
            <p className="product-body-copy">The optimiser works on the inputs you provide. Results are estimates for that scenario, not guaranteed savings or measured performance. Reports include assumptions, limitations and validation checks so the numbers can be interpreted in context.</p>
            <Link className="product-text-link" to="/about">Read the model boundaries <span>→</span></Link>
          </div>
          <div className="principle-list">
            <div><span>01</span><div><strong>Local-first workflow</strong><p>Scenario data and completed reports are handled within the desktop app; there is no account or cloud database.</p></div></div>
            <div><span>02</span><div><strong>Inspectable calculations</strong><p>Compare the same scenario inputs across the baseline and optimiser.</p></div></div>
            <div><span>03</span><div><strong>Honest limitations</strong><p>No live meter feed, weather forecast or physical battery control.</p></div></div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-cta">
            <div><span className="product-kicker">GET STARTED</span><h2>Explore your energy scenarios with GridMind.</h2><p>Download the current Windows desktop build and test it with a clearly labelled example or your own scenario inputs.</p></div>
            <a className="product-button product-button-primary" href={downloadUrl}>Download GridMind <span aria-hidden="true">↗</span></a>
          </div>
          <p className="product-fineprint">GridMind is a modelling and decision-support application. It is not a live energy-management system and must not be used to control real electrical infrastructure.</p>
        </div>
      </section>
    </>
  );
}
