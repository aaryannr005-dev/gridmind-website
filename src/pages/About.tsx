import { Button, Note, Panel, PanelHead, SectionHead, SimBadge } from '../components/ui/Primitives';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../components/ui/Icon';

const objectives = [
  {
    number: '01',
    title: 'Model the community as one system',
    body: 'Represent generation, demand, storage and grid exchange in a single, inspectable model rather than isolated device dashboards.',
  },
  {
    number: '02',
    title: 'Coordinate storage with forecasts',
    body: 'Demonstrate a dispatch policy that responds to expected surplus, expected demand, state of charge and tariff conditions.',
  },
  {
    number: '03',
    title: 'Evaluate performance honestly',
    body: 'Compare optimisation against a conventional baseline using consistent inputs, and state clearly what is simulated.',
  },
  {
    number: '04',
    title: 'Leave a clean integration path',
    body: 'Keep data, decision and interface layers separate so real meters, weather feeds and stronger algorithms can be added later.',
  },
];

const projectDetails = [
  { label: 'Project', value: 'GridMind', note: 'Community energy optimisation prototype' },
  {
    label: 'Institution',
    value: 'Universiti Teknologi Malaysia',
    note: 'Student engineering project',
  },
  {
    label: 'Technology',
    value: 'React + TypeScript + Vite',
    note: 'Responsive web dashboard',
  },
  {
    label: 'Model scope',
    value: 'Solar · load · battery · grid',
    note: 'Community-scale energy assets',
  },
  {
    label: 'Simulation',
    value: 'Deterministic, 15-minute data',
    note: '24 h · 7 d · 30 d analysis horizons',
  },
  {
    label: 'Status',
    value: 'Prototype demonstration',
    note: 'No live grid or hardware control',
  },
];

export function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-dash" aria-hidden="true" />
            About the project
          </p>
          <h1>A community-scale answer to a system-level problem.</h1>
          <p className="page-lead">
            GridMind began with a straightforward observation: communities are adding
            solar and batteries faster than they are adding the intelligence to
            coordinate them. The project is a working demonstration of what that
            coordination layer could look like.
          </p>
          <div className="page-head-meta">
            <SimBadge label="Student engineering project" />
            <span className="page-meta-item">Universiti Teknologi Malaysia</span>
            <span className="page-meta-item">Competition prototype</span>
          </div>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container split split--wide">
          <Reveal className="split-copy">
            <SectionHead
              eyebrow="The problem"
              title="Local generation is growing. Local coordination is not."
              lead="A rooftop array and a home battery are individually useful. Without a shared decision layer, they respond to local conditions and miss the larger opportunity: matching the community's generation, storage and demand as one system."
            />
            <p className="body-copy">
              The result is a familiar pattern. Midday solar surplus is exported for
              little value while the evening peak is imported at the highest tariff. The
              battery cycles on a fixed schedule or sits idle. The community has the
              assets of a modern energy system but operates them one device at a time.
            </p>
            <p className="body-copy">
              GridMind addresses that gap at the neighbourhood level — where diversity of
              demand, shared storage and a single grid connection make coordination
              worthwhile.
            </p>
          </Reveal>

          <Reveal delay={80} className="split-panel">
            <div className="problem-diagram">
              <div className="problem-diagram-row">
                <span className="pd-label">Midday</span>
                <div className="pd-track">
                  <span className="pd-fill pd-fill--solar" style={{ width: '86%' }} />
                </div>
                <span className="pd-value">Solar surplus</span>
              </div>
              <div className="problem-diagram-row">
                <span className="pd-label">Evening</span>
                <div className="pd-track">
                  <span className="pd-fill pd-fill--demand" style={{ width: '74%' }} />
                </div>
                <span className="pd-value">Demand peak</span>
              </div>
              <div className="problem-diagram-divider" />
              <div className="problem-diagram-callout">
                <span className="pd-dot" />
                <p>
                  Without coordination, these two curves never meet. GridMind exists to
                  connect them.
                </p>
              </div>
              <p className="problem-diagram-note">
                Schematic illustration of a typical daily mismatch — not measured data.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Technology"
              title="Three layers, deliberately separated."
              lead="The prototype is built as a pipeline of small, replaceable parts. The simulation is a data adapter, the dispatch heuristic is a decision service, and the interface only reads a typed contract."
            />
          </Reveal>

          <div className="tech-grid">
            <Reveal>
              <article className="tech-card">
                <span className="tech-index">LAYER 01</span>
                <h3>Data</h3>
                <p>
                  A deterministic simulator produces solar generation, community demand
                  and tariff conditions. In a pilot, this layer would be replaced by
                  weather services, smart-meter reads and inverter telemetry.
                </p>
                <p className="tech-foot">Today: seeded simulation</p>
              </article>
            </Reveal>
            <Reveal delay={60}>
              <article className="tech-card">
                <span className="tech-index">LAYER 02</span>
                <h3>Decision</h3>
                <p>
                  A documented rule-based dispatcher decides when to charge, discharge,
                  import or export. It respects capacity, power, reserve and efficiency
                  constraints, and exposes a pure input/output contract.
                </p>
                <p className="tech-foot">Today: transparent heuristic</p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="tech-card">
                <span className="tech-index">LAYER 03</span>
                <h3>Interface</h3>
                <p>
                  The dashboard renders the current state, historical window and
                  comparison metrics. It contains no energy logic — only presentation of
                  the model's output.
                </p>
                <p className="tech-foot">Today: React dashboard</p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <Panel className="tech-note-panel">
              <PanelHead title="What exists, and what does not" sub="An explicit project status." />
              <div className="status-columns">
                <div>
                  <p className="status-heading status-heading--yes">
                    <Icon name="check" size={15} /> Working today
                  </p>
                  <ul className="status-list">
                    <li>Deterministic community energy simulation</li>
                    <li>Rule-based battery and grid dispatch</li>
                    <li>Interactive dashboard with three horizons</li>
                    <li>Baseline comparison and performance metrics</li>
                    <li>Responsive, accessible interface</li>
                  </ul>
                </div>
                <div>
                  <p className="status-heading status-heading--no">
                    <Icon name="close" size={15} /> Not yet implemented
                  </p>
                  <ul className="status-list status-list--muted">
                    <li>Trained forecasting or AI models</li>
                    <li>Live metering, inverter or grid connections</li>
                    <li>Automated control of physical hardware</li>
                    <li>Pilot validation against measured data</li>
                    <li>Market or regulatory integration</li>
                  </ul>
                </div>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Objectives"
              title="What the project set out to demonstrate."
              lead="Four goals guided the build. They are ordered by what a reviewer should be able to verify, not by what is easiest to claim."
            />
          </Reveal>
          <div className="objective-grid">
            {objectives.map((objective, index) => (
              <Reveal key={objective.number} delay={index * 50}>
                <div className="objective-card">
                  <span className="objective-number">{objective.number}</span>
                  <h3>{objective.title}</h3>
                  <p>{objective.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--line">
        <div className="container split">
          <Reveal className="split-copy">
            <SectionHead
              eyebrow="Smart cities"
              title="A neighbourhood is the right unit of experimentation."
              lead="City-scale energy systems are difficult to pilot end to end. A community is large enough to matter and small enough to instrument, model and evaluate."
            />
            <ul className="check-list">
              <li>
                <Icon name="check" size={15} />
                Shared assets and a single grid connection make coordination tangible
              </li>
              <li>
                <Icon name="check" size={15} />
                Interfaces can be tested against real meters without city-wide deployment
              </li>
              <li>
                <Icon name="check" size={15} />
                Results can inform larger smart-city planning with evidence rather than assumption
              </li>
            </ul>
            <Note>
              GridMind is a competition prototype. It is not a certified energy-management
              product and must not be used to control real electrical infrastructure.
            </Note>
          </Reveal>

          <Reveal delay={80} className="split-panel">
            <div className="future-panel">
              <p className="eyebrow">Roadmap</p>
              <ol className="roadmap">
                <li data-status="done">
                  <span>Prototype</span>
                  Simulation, dashboard, dispatch policy
                </li>
                <li data-status="next">
                  <span>Instrument</span>
                  Connect metered load and inverter data
                </li>
                <li data-status="next">
                  <span>Forecast</span>
                  Replace synthetic profiles with forecast models
                </li>
                <li data-status="later">
                  <span>Pilot</span>
                  Monitored community trial and validation
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--line" id="team">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Project profile"
              title="A clear snapshot of what GridMind is today."
              lead="GridMind is a student engineering prototype from Universiti Teknologi Malaysia. It models community-scale solar, demand, battery storage and grid exchange in a labelled simulation, then visualises the results through a React dashboard."
              meta={<span className="mono-tag">current build</span>}
            />
          </Reveal>

          <div className="team-grid">
            {projectDetails.map((slot, index) => (
              <Reveal key={slot.label} delay={index * 40}>
                <div className="team-card">
                  <span className="team-label">{slot.label}</span>
                  <span className="team-value">{slot.value}</span>
                  <span className="team-note">{slot.note}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="section-footnote">
            <span aria-hidden="true">↳</span> Team names, supervisor details and the
            official competition category are not published in the current repository.
          </p>

          <div className="inline-cta">
            <p>See how the system behaves before reading the team details.</p>
            <Button to="/dashboard" size="sm">
              Open the dashboard
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
