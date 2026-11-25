import { Link } from 'react-router-dom';
import { Logo } from '../ui/Primitives';

const columns = [
  {
    title: 'Platform',
    links: [
      { to: '/how-it-works', label: 'How it works' },
      { to: '/dashboard', label: 'Live dashboard' },
      { to: '/optimisation', label: 'Optimisation' },
    ],
  },
  {
    title: 'Project',
    links: [
      { to: '/impact', label: 'Impact' },
      { to: '/about', label: 'About GridMind' },
      { to: '/about#team', label: 'Team & competition' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tagline">
              A smarter grid. A more efficient community. A sustainable future.
            </p>
            <p className="footer-project">
              Student engineering project · Universiti Teknologi Malaysia
            </p>
          </div>

          <div className="footer-links">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="footer-col-title">{column.title}</p>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="footer-col-title">Status</p>
              <ul className="footer-status">
                <li className="footer-muted">Simulation only</li>
                <li className="footer-muted">No live grid connection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <span>
            All dashboard, optimisation and impact figures on this site are produced by a
            simulated model. They are not measured results and do not represent a real
            electrical network.
          </span>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GridMind · UTM</span>
          <span className="footer-mono">Built for competition demonstration</span>
        </div>
      </div>
    </footer>
  );
}
