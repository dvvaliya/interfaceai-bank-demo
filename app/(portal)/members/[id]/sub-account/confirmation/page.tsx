import { notFound } from "next/navigation";
import { members } from "@/lib/members";
import { ConfirmationAction } from "./confirmation-action";

type ConfirmationPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    accountType?: string;
    nickname?: string;
    deposit?: string;
    sourceAccount?: string;
  }>;
};

export default async function ConfirmationPage({ params, searchParams }: ConfirmationPageProps) {
  const { id } = await params;
  const member = members[id];
  if (!member || member.status === "Restricted Review") notFound();

  const values = await searchParams;
  const deposit = Number(values.deposit);
  const valid = Boolean(values.accountType && values.nickname && values.sourceAccount && Number.isFinite(deposit) && deposit >= 25);

  if (!valid) {
    return (
      <main className="page-shell">
        <h1 className="page-title">Review New Sub-Account</h1>
        <div className="notice notice-error" role="alert">
          <p className="notice-title">Validation Error</p>
          Required account information is missing or the opening deposit is below $25.00.
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="breadcrumbs">Home / Member {member.id} / Open Sub-Account / Review</div>
      <h1 className="page-title">Review New Sub-Account</h1>
      <p className="page-description">Verify all information before creating the account.</p>

      <section className="panel" aria-labelledby="review-heading">
        <h2 className="panel-heading" id="review-heading">Account Opening Summary</h2>
        <div className="panel-body">
          <table className="data-table">
            <tbody>
              <tr><th>Member</th><td>{member.name} ({member.id})</td></tr>
              <tr><th>Account Type</th><td>{values.accountType}</td></tr>
              <tr><th>Account Nickname</th><td>{values.nickname}</td></tr>
              <tr><th>Opening Deposit</th><td className="money">${deposit.toFixed(2)}</td></tr>
              <tr><th>Funding Account</th><td>{values.sourceAccount}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <ConfirmationAction memberId={member.id} />
    </main>
  );
}
