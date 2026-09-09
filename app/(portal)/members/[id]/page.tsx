import Link from "next/link";
import { notFound } from "next/navigation";
import { members } from "@/lib/members";

type MemberPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ delayed?: string }>;
};

export default async function MemberPage({ params, searchParams }: MemberPageProps) {
  const { id } = await params;
  const query = await searchParams;
  const member = members[id];
  if (!member) notFound();

  return (
    <main className="page-shell">
      <div className="breadcrumbs">Home / Member Servicing / Member {member.id}</div>
      <h1 className="page-title">Member Profile</h1>
      <p className="page-description">Review member identity and deposit account summary.</p>

      {query.delayed === "true" ? (
        <div className="notice notice-success" role="status">
          <p className="notice-title">Request completed after delay</p>
          The member service responded successfully after a transient slowdown.
        </div>
      ) : null}

      {member.status === "Restricted Review" ? (
        <div className="notice notice-warning" role="alert">
          <p className="notice-title">Restricted member record</p>
          This record is subject to compliance review. All actions are logged.
        </div>
      ) : null}

      <section className="panel" aria-labelledby="identity-heading">
        <h2 className="panel-heading" id="identity-heading">Member Identity</h2>
        <div className="panel-body">
          <table className="data-table">
            <tbody>
              <tr><th>Member Number</th><td>{member.id}</td></tr>
              <tr><th>Member Name</th><td>{member.name}</td></tr>
              <tr><th>Status</th><td className={member.status === "Active" ? "status-active" : ""}>{member.status}</td></tr>
              <tr><th>Member Since</th><td>{member.joined}</td></tr>
              <tr><th>Home Branch</th><td>{member.branch}</td></tr>
              <tr><th>Telephone</th><td>{member.phone}</td></tr>
              <tr><th>Email</th><td>{member.email}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel" aria-labelledby="accounts-heading">
        <h2 className="panel-heading" id="accounts-heading">Deposit Accounts</h2>
        <div className="panel-body">
          <table className="data-table">
            <thead><tr><th>Account</th><th>Type</th><th>Available Balance</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>{member.savingsAccount}</td><td>Regular Savings</td><td className="money">{member.savingsBalance}</td><td>Open</td></tr>
              <tr><td>{member.checkingAccount}</td><td>Everyday Checking</td><td className="money">{member.checkingBalance}</td><td>Open</td></tr>
            </tbody>
          </table>
          <div className="button-row">
            <Link className="button" href={`/members/${member.id}/sub-account`}>Open New Sub-Account</Link>
            <Link className="button-secondary" href="/members">New Member Search</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
