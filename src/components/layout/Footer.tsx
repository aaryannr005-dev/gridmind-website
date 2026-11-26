import { Link } from 'react-router-dom';
import { Logo } from '../ui/Primitives';

const downloadUrl = 'https://github.com/aaryannr005-dev/GridMind/releases/latest/download/GridMind-Setup.exe';
const columns = [
  { title: 'Explore', links: [{ to: '/how-it-works', label: 'How it works' }, { to: '/dashboard', label: 'Inside the app' }, { to: '/optimisation', label: 'Optimisation' }] },
  { title: 'Understand', links: [{ to: '/impact', label: 'Analysis & reporting' }, { to: '/about', label: 'About GridMind' }] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand"><Logo /><p className="footer-tagline">Model energy decisions. Understand the trade-offs.</p><p className="footer-project">A student-built energy scenario modelling project.</p></div>
          <div className="footer-links">
            {columns.map(column => <div key={column.title}><p className="footer-col-title">{column.title}</p><ul>{column.links.map(link => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}</ul></div>)}
            <div><p className="footer-col-title">Get GridMind</p><ul><li><a href={downloadUrl}>Windows download ↗</a></li><li><a href="https://github.com/aaryannr005-dev/GridMind">Source repository ↗</a></li></ul></div>
          </div>
        </div>
        <div className="footer-disclaimer"><span>GridMind produces scenario-based estimates. It is not connected to live meters or electrical infrastructure, does not control hardware, and does not guarantee real-world savings.</span></div>
        <div className="footer-bottom"><span>© 2026 GridMind</span><span className="footer-mono">Energy scenario modelling · Desktop application</span></div>
      </div>
    </footer>
  );
}
