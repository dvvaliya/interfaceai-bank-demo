import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "./logout-button";

export default async function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = (await cookies()).get("meridian_session");
  if (session?.value !== "demo-session") {
    redirect("/login");
  }

  return (
    <>
      <div className="top-strip" />
      <header className="masthead">
        <div>
          <p className="brand-name">Meridian Core Operations</p>
          <div className="brand-subtitle">Member servicing workstation</div>
        </div>
        <div className="operator-box">
          <span>Operator: DEMO.OPERATOR | Branch 002</span>
          <LogoutButton />
        </div>
      </header>
      <nav className="nav-bar" aria-label="Primary navigation">
        <Link href="/members">Member Inquiry</Link>
        <Link href="/members">Account Services</Link>
        <Link href="/members">Transaction Research</Link>
        <Link href="/members">Administration</Link>
      </nav>
      {children}
      <footer className="footer">
        Meridian Core Operations v7.4.12 | Fictional training environment | No real financial data
      </footer>
    </>
  );
}
