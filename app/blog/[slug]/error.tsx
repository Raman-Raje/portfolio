'use client';

export default function BlogPostError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page" style={{ textAlign: 'center', paddingTop: '20vh' }}>
      <h1 style={{ fontSize: 24, marginBottom: 12 }}>Something went wrong</h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: 24 }}>
        This post could not be loaded.
      </p>
      <button
        onClick={reset}
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 12,
          padding: '8px 18px',
          border: '1px solid var(--border)',
          borderRadius: 6,
          background: 'transparent',
          color: 'var(--text)',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </main>
  );
}
