/* =============================================================
   theme.ts
   Palette presets for dark/light × warm/cool/neutral, plus a
   single applyTheme() that writes CSS variables to :root.
   Used by:
     - ThemeProvider (on mount / state change)
     - the no-flash inline script in app/layout.tsx (stringified)
   ============================================================= */

export type Mode = 'dark' | 'light';
export type Tone = 'warm' | 'cool' | 'neutral';
export type Density = 'compact' | 'comfortable' | 'spacious';

export interface ThemeState {
  mode: Mode;
  tone: Tone;
  accent: string;
  serifHeadings: boolean;
  density: Density;
}

export const DEFAULT_THEME: ThemeState = {
  mode: 'dark',
  tone: 'warm',
  accent: '#e2a14d',
  serifHeadings: true,
  density: 'comfortable',
};

export const STORAGE_KEY = 'portfolio-theme';

interface Palette {
  bg: string;
  bg2: string;
  border: string;
  border2: string;
  text: string;
  dim: string;
  mute: string;
}

export const PALETTES: Record<Tone, Record<Mode, Palette>> = {
  warm: {
    dark:  { bg: '#14120f', bg2: '#1c1a17', border: '#2a2723', border2: '#353128',
             text: '#ece7df', dim: '#a8a298', mute: '#6e6a62' },
    light: { bg: '#faf6ec', bg2: '#f1ebd9', border: '#e1d9c2', border2: '#cdc4a9',
             text: '#2a261f', dim: '#6c6657', mute: '#8d877a' },
  },
  cool: {
    dark:  { bg: '#0e1116', bg2: '#161a21', border: '#252a33', border2: '#323845',
             text: '#e6e9ef', dim: '#9aa1ad', mute: '#646b78' },
    light: { bg: '#f4f6fa', bg2: '#e9edf4', border: '#dadfe9', border2: '#c5cbd9',
             text: '#1a1f29', dim: '#5a6271', mute: '#8a92a1' },
  },
  neutral: {
    dark:  { bg: '#111111', bg2: '#191919', border: '#262626', border2: '#333333',
             text: '#ebebeb', dim: '#a5a5a5', mute: '#6b6b6b' },
    light: { bg: '#fafafa', bg2: '#efefef', border: '#dfdfdf', border2: '#cccccc',
             text: '#1a1a1a', dim: '#5e5e5e', mute: '#8a8a8a' },
  },
};

const PAD_MAP: Record<Density, string> = {
  compact: '64px', comfortable: '96px', spacious: '128px',
};
const GAP_MAP: Record<Density, string> = {
  compact: '44px', comfortable: '64px', spacious: '88px',
};

function hexToRgba(hex: string, a: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export function applyTheme(t: ThemeState): void {
  if (typeof document === 'undefined') return;
  const r = document.documentElement.style;
  const p = PALETTES[t.tone][t.mode];

  r.setProperty('--bg', p.bg);
  r.setProperty('--bg-2', p.bg2);
  r.setProperty('--border', p.border);
  r.setProperty('--border-2', p.border2);
  r.setProperty('--text', p.text);
  r.setProperty('--text-dim', p.dim);
  r.setProperty('--text-mute', p.mute);

  r.setProperty('--accent', t.accent);
  r.setProperty('--accent-soft', hexToRgba(t.accent, t.mode === 'light' ? 0.16 : 0.12));

  r.setProperty('--heading-family', t.serifHeadings ? 'var(--serif)' : 'var(--sans)');
  r.setProperty('--pad-y', PAD_MAP[t.density]);
  r.setProperty('--gap', GAP_MAP[t.density]);

  document.body.classList.toggle('light-mode', t.mode === 'light');
}

/**
 * Returns an IIFE string to be inlined in <head> before any React renders.
 * Reads localStorage + applies CSS variables synchronously so the page
 * never flashes the wrong theme.
 */
export function noFlashScript(): string {
  const defaultsJson = JSON.stringify(DEFAULT_THEME);
  const palettesJson = JSON.stringify(PALETTES);
  const padJson = JSON.stringify(PAD_MAP);
  const gapJson = JSON.stringify(GAP_MAP);

  return `
(function(){
  try {
    var DEFAULTS = ${defaultsJson};
    var PALS = ${palettesJson};
    var PAD = ${padJson};
    var GAP = ${gapJson};
    var raw = localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
    var t = DEFAULTS;
    if (raw) { try { t = Object.assign({}, DEFAULTS, JSON.parse(raw)); } catch(e){} }
    var p = (PALS[t.tone] || PALS.warm)[t.mode] || PALS.warm.dark;
    var r = document.documentElement.style;
    r.setProperty('--bg', p.bg);
    r.setProperty('--bg-2', p.bg2);
    r.setProperty('--border', p.border);
    r.setProperty('--border-2', p.border2);
    r.setProperty('--text', p.text);
    r.setProperty('--text-dim', p.dim);
    r.setProperty('--text-mute', p.mute);
    r.setProperty('--accent', t.accent);
    var h = t.accent.replace('#','');
    var R = parseInt(h.substr(0,2),16), G = parseInt(h.substr(2,2),16), B = parseInt(h.substr(4,2),16);
    var a = t.mode === 'light' ? 0.16 : 0.12;
    r.setProperty('--accent-soft', 'rgba('+R+','+G+','+B+','+a+')');
    r.setProperty('--heading-family', t.serifHeadings ? 'var(--serif)' : 'var(--sans)');
    r.setProperty('--pad-y', PAD[t.density]);
    r.setProperty('--gap', GAP[t.density]);
    if (t.mode === 'light') {
      document.documentElement.setAttribute('data-mode', 'light');
    }
  } catch(e) {}
})();
`.trim();
}
