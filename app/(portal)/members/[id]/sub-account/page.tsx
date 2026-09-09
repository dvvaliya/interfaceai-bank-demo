import Link from "next/link";
import { notFound } from "next/navigation";
import { members } from "@/lib/members";

type SubAccountPageProps = { params: Promise<{ id: string }> };

export default async function SubAccountPage({ params }: SubAccountPageProps) {
  const { id } = await params;
  const member = members[id];
  if (!member) notFound();

  return (
    <main className="page-shell">
      <div className="breadcrumbs">Home / Member {member.id} / Open Sub-Account</div>
      <h1 className="page-title">Open Deposit Sub-Account</h1>
      <p className="page-description">Enter product and funding details. No account is created until final confirmation.</p>

      {member.status === "Restricted Review" ? (
        <div className="notice notice-error" role="alert">
          <p className="notice-title">Action unavailable</p>
          New account opening is blocked while this member is under compliance review.
          <div className="button-row"><Link className="button-secondary" href={`/members/${id}`}>Return to Member</Link></div>
        </div>
      ) : (
        <section className="panel" aria-labelledby="account-form-heading">
          <h2 className="panel-heading" id="account-form-heading">New Account Details</h2>
          <div className="panel-body">
            <form action={`/members/${id}/sub-account/confirmation`} method="get">
              <div className="form-grid">
                <label htmlFor="account-type">Account Type</label>
                <select className="select-input" id="account-type" name="accountType" required defaultValue="">
                  <option value="" disabled>Select a product</option>
                  <option value="Holiday Savings">Holiday Savings</option>
                  <option value="Emergency Savings">Emergency Savings</option>
                  <option value="Money Market">Money Market</option>
                </select>

                <label htmlFor="nickname">Account Nickname</label>
                <input className="text-input" id="nickname" name="nickname" maxLength={30} required />

                <label htmlFor="deposit">Opening Deposit</label>
                <div>
                  <input className="text-input" id="deposit" name="deposit" type="number" min="25" step="0.01" required />
                  <div className="field-note">Minimum opening deposit: $25.00</div>
                </div>

                <label htmlFor="source-account">Funding Account</label>
                <select className="select-input" id="source-account" name="sourceAccount" required>
                  <option value={member.checkingAccount}>{member.checkingAccount} - Checking</option>
                  <option value={member.savingsAccount}>{member.savingsAccount} - Savings</option>
                </select>
              </div>
              <div className="button-row">
                <button className="button" type="submit">Continue to Review</button>
                <Link className="button-secondary" href={`/members/${id}`}>Cancel</Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
