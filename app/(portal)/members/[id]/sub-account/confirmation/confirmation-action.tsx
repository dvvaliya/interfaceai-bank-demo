"use client";

import Link from "next/link";
import { useState } from "react";

export function ConfirmationAction({ memberId }: { memberId: string }) {
  const [showDialog, setShowDialog] = useState(false);
  const [created, setCreated] = useState(false);

  if (created) {
    return (
      <div className="notice notice-success" role="status">
        <p className="notice-title">Sub-account created</p>
        Confirmation number: TRN-{memberId}-001. This is a simulated transaction; no real account was created.
        <div className="button-row"><Link className="button" href={`/members/${memberId}`}>Return to Member</Link></div>
      </div>
    );
  }

  return (
    <>
      <div className="notice notice-warning">
        <p className="notice-title">Final approval required</p>
        Selecting Create Sub-Account performs a risky state-changing action and requires explicit operator confirmation.
      </div>
      <div className="button-row">
        <button className="button-danger" type="button" onClick={() => setShowDialog(true)}>Create Sub-Account</button>
        <Link className="button-secondary" href={`/members/${memberId}/sub-account`}>Back</Link>
      </div>

      {showDialog ? (
        <div className="modal-backdrop" role="presentation">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <h2 id="confirm-title">Confirm Irreversible Action</h2>
            <div className="modal-content">
              <p>You are about to create a new deposit account and transfer the opening deposit.</p>
              <p><strong>Do you have authorization to complete this action?</strong></p>
              <div className="button-row">
                <button className="button-danger" type="button" onClick={() => { setShowDialog(false); setCreated(true); }}>Yes, create account</button>
                <button className="button-secondary" type="button" onClick={() => setShowDialog(false)}>No, return to review</button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
