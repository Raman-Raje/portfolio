'use client';

import { useTheme } from './ThemeProvider';
import type { Mode, Tone, Density } from '@/lib/theme';
import styles from './TweaksPanel.module.css';

const ACCENTS = ['#e2a14d', '#7aa2f7', '#7dcfa3', '#f08a8a', '#c4a3ff'];

export function TweaksPanel({ onClose }: { onClose: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <aside className={styles.panel}>
      <header className={styles.head}>
        <span className={styles.title}>Customize</span>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>
      </header>

      <Section label="Mode">
        <Radio<Mode>
          value={theme.mode}
          options={[
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
          ]}
          onChange={(v) => setTheme({ mode: v })}
        />
      </Section>

      <Section label="Background tone">
        <Radio<Tone>
          value={theme.tone}
          options={[
            { value: 'warm', label: 'Warm' },
            { value: 'cool', label: 'Cool' },
            { value: 'neutral', label: 'Neutral' },
          ]}
          onChange={(v) => setTheme({ tone: v })}
        />
      </Section>

      <Section label="Accent">
        <div className={styles.swatches}>
          {ACCENTS.map((c) => (
            <button
              type="button"
              key={c}
              className={`${styles.swatch} ${theme.accent === c ? styles.swatchActive : ''}`}
              style={{ background: c }}
              onClick={() => setTheme({ accent: c })}
              aria-label={`Accent ${c}`}
            />
          ))}
        </div>
      </Section>

      <Section label="Headings">
        <Toggle
          label="Serif"
          value={theme.serifHeadings}
          onChange={(v) => setTheme({ serifHeadings: v })}
        />
      </Section>

      <Section label="Density">
        <Radio<Density>
          value={theme.density}
          options={[
            { value: 'compact', label: 'Compact' },
            { value: 'comfortable', label: 'Comfy' },
            { value: 'spacious', label: 'Roomy' },
          ]}
          onChange={(v) => setTheme({ density: v })}
        />
      </Section>
    </aside>
  );
}

/* --- small internal primitives --- */

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionLabel}>{label}</div>
      {children}
    </div>
  );
}

interface RadioOpt<T extends string> { value: T; label: string }
function Radio<T extends string>({
  value, options, onChange,
}: { value: T; options: RadioOpt<T>[]; onChange: (v: T) => void }) {
  return (
    <div className={styles.radio}>
      {options.map((opt) => (
        <button
          type="button"
          key={opt.value}
          className={`${styles.radioBtn} ${value === opt.value ? styles.radioActive : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button type="button" className={styles.toggle} onClick={() => onChange(!value)}>
      <span className={`${styles.toggleTrack} ${value ? styles.toggleOn : ''}`}>
        <span className={styles.toggleKnob}></span>
      </span>
      <span className={styles.toggleLabel}>{label}</span>
    </button>
  );
}
