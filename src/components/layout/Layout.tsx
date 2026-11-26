import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';

const titles: Record<string, string> = {
  '/': 'Energy Scenario Modelling',
  '/how-it-works': 'How GridMind Works',
  '/dashboard': 'Inside the GridMind App',
  '/optimisation': 'Battery Dispatch Optimisation',
  '/impact': 'Analysis & Reporting',
  '/about': 'About GridMind',
};

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);
  return null;
}

function PageTitle() {
  const location = useLocation();
  useEffect(() => { document.title = (titles[location.pathname] || 'GridMind') + ' — GridMind'; }, [location.pathname]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <PageTitle />
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
