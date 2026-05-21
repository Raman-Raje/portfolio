/* Reusable social icon set, used by Hero. */

interface SocialLink {
  href: string;
  label: string;
  svg: React.ReactNode;
}

const GitHubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.66.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.11V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z" />
  </svg>
);

const MediumIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12c0 3.54-2.95 6.4-6.59 6.4S.36 15.54.36 12s2.95-6.4 6.59-6.4S13.54 8.46 13.54 12zm7.2 0c0 3.33-1.48 6.04-3.3 6.04S14.14 15.33 14.14 12s1.48-6.04 3.3-6.04S20.74 8.67 20.74 12zM24 12c0 2.98-.52 5.39-1.16 5.39s-1.16-2.41-1.16-5.39.52-5.39 1.16-5.39S24 9.02 24 12z" />
  </svg>
);

const SubstackIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/Raman-Raje',                      label: 'GitHub',   svg: GitHubIcon },
  { href: 'https://www.linkedin.com/in/raman-shinde-562950b2/',  label: 'LinkedIn', svg: LinkedInIcon },
  { href: 'https://medium.com/@raman.shinde15',                  label: 'Medium',   svg: MediumIcon },
  { href: 'https://substack.com/@ramanshinde',                   label: 'Substack', svg: SubstackIcon },
];
