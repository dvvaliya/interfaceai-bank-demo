import Link from "next/link";
import { redirect } from "next/navigation";
import { RestrictedDialog } from "./restricted-dialog";

type ResultPageProps = {
  searchParams: Promise<{ memberId?: string }>;
};

export default async function MemberResultPage({ searchParams }: ResultPageProps) {
  const memberId = (await searchParams).memberId?.trim() ?? "";

  if (!/^\d{5}$/.test(memberId)) {
    return <ResultMessage kind="error" title="Validation Error" message="Member Number must contain exactly five digits." />;
  }

  if (memberId === "12345" || memberId === "24680") {
    redirect(`/members/${memberId}`);
  }

  if (memberId === "77777") {
    await new Promise((resolve) => setTimeout(resolve, 3500));
    redirect("/members/77777?delayed=true");
  }

  if (memberId === "33333") {
    return (
      <main className="page-shell">
        <div className="breadcrumbs">Home / Member Servicing / Inquiry / Result</div>
        <h1 className="page-title">Member Inquiry Result</h1>
        <RestrictedDialog />
      </main>
    );
  }

  if (memberId === "55555") {
    return <ResultMessage kind="error" title="Access Denied" message="Your operator role does not permit access to this member record. Reference code: ACL-403." />;
  }

  if (memberId === "88888") {
    return <ResultMessage kind="warning" title="Session Expired" message="Your servicing session expired while processing the request. Sign in again before retrying." signIn />;
  }

  if (memberId === "50000") {
    return <ResultMessage kind="error" title="Application Error" message="The core member service is currently unavailable. Reference code: CORE-500. Do not resubmit until service is restored." />;
  }

  return <ResultMessage kind="warning" title="No Member Found" message={`No member record matched number ${memberId}. Verify the number and try again.`} />;
}

function ResultMessage({
  kind,
  title,
  message,
  signIn = false,
}: {
  kind: "error" | "warning";
  title: string;
  message: string;
  signIn?: boolean;
}) {
  return (
    <main className="page-shell">
      <div className="breadcrumbs">Home / Member Servicing / Inquiry / Result</div>
      <h1 className="page-title">Member Inquiry Result</h1>
      <p className="page-description">The lookup did not return a member detail page.</p>
      <div className={`notice notice-${kind}`} role="alert">
        <p className="notice-title">{title}</p>
        {message}
      </div>
      <div className="button-row">
        <Link className="button" href={signIn ? "/login" : "/members"}>{signIn ? "Return to Sign In" : "Return to Member Inquiry"}</Link>
      </div>
    </main>
  );
}
