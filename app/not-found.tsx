import Link from 'next/link';
import { TopNav } from '@/components/TopNav';

export default function NotFound() {
  return (
    <>
      <TopNav />
      <main className="page" style={{ textAlign: 'center', paddingTop: '15vh' }}>
        <h1 style={{ fontSize: 48, marginBottom: 8 }}>404</h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: 24 }}>
          This page does not exist.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            padding: '8px 18px',
            border: '1px solid var(--border)',
            borderRadius: 6,
            color: 'var(--accent)',
          }}
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
