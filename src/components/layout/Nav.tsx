import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Logo } from '../ui/Primitives';
import { Icon } from '../ui/Icon';

type Theme = 'dark' | 'light';
const downloadUrl = 'https://github.com/aaryannr005-dev/GridMind/releases/latest/download/GridMind-Setup.exe';
const links = [
  { to: '/', label: 'Overview' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/dashboard', label: 'Inside the app' },
  { to: '/optimisation', label: 'Optimisation' },
  { to: '/impact', label: 'Analysis' },
  { to: '/about', label: 'About' },
];

export function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem('gridmind-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('gridmind-theme', theme);
  }, [theme]);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="nav" data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="GridMind home"><Logo /></Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map(link => <Link key={link.to} to={link.to} className="nav-link" data-active={link.to === '/' ? (location.pathname === '/' ? 'true' : 'false') : (location.pathname.startsWith(link.to) ? 'true' : 'false')}>{link.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'} aria-pressed={theme === 'light'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} /><span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
          <a href={downloadUrl} className="btn btn--primary btn--sm nav-cta">Download</a>
          <button type="button" className="nav-burger" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)}><Icon name={open ? 'close' : 'menu'} size={20} /></button>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" data-open={open ? 'true' : 'false'}>
        <nav aria-label="Mobile">
          {links.map(link => <Link key={link.to} to={link.to} className="mobile-link" data-active={link.to === '/' ? (location.pathname === '/' ? 'true' : 'false') : (location.pathname.startsWith(link.to) ? 'true' : 'false')}>{link.label}<Icon name="arrowRight" size={16} /></Link>)}
          <a className="mobile-link mobile-download" href={downloadUrl}>Download for Windows <span aria-hidden="true">↗</span></a>
        </nav>
        <p className="mobile-note">GridMind is a local-first scenario-modelling tool. It does not connect to or control live electrical infrastructure.</p>
      </div>
    </header>
  );
}
