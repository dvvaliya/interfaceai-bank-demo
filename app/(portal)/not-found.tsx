import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <h1 className="page-title">Page Not Found</h1>
      <div className="notice notice-error">The requested servicing page or member record does not exist.</div>
      <Link className="button" href="/members">Return to Member Inquiry</Link>
    </main>
  );
}
