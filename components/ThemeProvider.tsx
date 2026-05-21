'use client';

/* =============================================================
   ThemeProvider
   - Holds theme state (mode, tone, accent, serifHeadings, density)
   - Persists to localStorage under STORAGE_KEY
   - On every change, writes CSS variables to :root via applyTheme()
   - Exposes useTheme() for consumers (toggle button, tweaks panel)
   ============================================================= */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import {
  DEFAULT_THEME,
  STORAGE_KEY,
  applyTheme,
  type ThemeState,
} from '@/lib/theme';

interface ThemeContextValue {
  theme: ThemeState;
  setTheme: (patch: Partial<ThemeState>) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Start with defaults — the inline no-flash script has already set the
  // CSS variables synchronously, so first paint matches. We sync state
  // from localStorage on mount.
  const [theme, setThemeState] = useState<ThemeState>(DEFAULT_THEME);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setThemeState({ ...DEFAULT_THEME, ...parsed });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Apply CSS variables whenever theme changes (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    } catch {
      /* ignore */
    }
  }, [theme, hydrated]);

  const setTheme = useCallback((patch: Partial<ThemeState>) => {
    setThemeState((prev) => ({ ...prev, ...patch }));
  }, []);

  const toggleMode = useCallback(() => {
    setThemeState((prev) => ({
      ...prev,
      mode: prev.mode === 'dark' ? 'light' : 'dark',
    }));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
