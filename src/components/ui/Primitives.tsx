import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo${compact ? ' logo--compact' : ''}`}>
      <svg
        className="logo-mark"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3.5" y="3.5" width="25" height="25" rx="6" stroke="currentColor" strokeOpacity="0.28" />
        <path d="M9 9h14v14H9z" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M9 9l14 14M23 9 9 23" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="9" cy="9" r="2.4" fill="currentColor" fillOpacity="0.9" />
        <circle cx="23" cy="9" r="2.4" fill="currentColor" fillOpacity="0.62" />
        <circle cx="9" cy="23" r="2.4" fill="currentColor" fillOpacity="0.62" />
        <circle cx="23" cy="23" r="2.4" fill="currentColor" fillOpacity="0.38" />
      </svg>
      <span className="logo-type">
        Grid<span className="logo-accent">Mind</span>
      </span>
      {!compact && <span className="logo-sub">Energy Scenario Modelling</span>}
    </span>
  );
}

type ButtonProps = {
  to?: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'link';
  size?: 'md' | 'sm';
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <svg
        className="btn-icon"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </button>
  );
}

export function Badge({
  children,
  tone = 'neutral',
  dot = false,
}: {
  children: ReactNode;
  tone?: 'neutral' | 'green' | 'cyan' | 'amber' | 'blue';
  dot?: boolean;
}) {
  return (
    <span className={`badge badge--${tone}`}>
      {dot && <span className="badge-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

export function SimBadge({ label = 'Simulated data' }: { label?: string }) {
  return (
    <Badge tone="amber" dot>
      {label}
    </Badge>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  meta,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`section-head section-head--${align}`}>
      <div className="section-head-main">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {meta && <div className="section-head-meta">{meta}</div>}
    </div>
  );
}

export function Panel({
  children,
  className = '',
  as: Tag = 'section',
}: {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
}) {
  return <Tag className={`panel ${className}`.trim()}>{children}</Tag>;
}

export function PanelHead({
  title,
  sub,
  right,
}: {
  title: ReactNode;
  sub?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="panel-head">
      <div>
        <h3 className="panel-title">{title}</h3>
        {sub && <p className="panel-sub">{sub}</p>}
      </div>
      {right && <div className="panel-head-right">{right}</div>}
    </div>
  );
}

export function Note({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'amber';
}) {
  return (
    <p className={`note note--${tone}`}>
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </svg>
      <span>{children}</span>
    </p>
  );
}
