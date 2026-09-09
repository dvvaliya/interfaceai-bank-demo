"use client";

import Link from "next/link";
import { useState } from "react";

export function RestrictedDialog() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <div className="notice notice-warning" role="status">
        Record access was cancelled. No member information was displayed.
      </div>
    );
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="restricted-title">
        <h2 id="restricted-title">Restricted Record Warning</h2>
        <div className="modal-content">
          <p>This member record has an active compliance review flag.</p>
          <p>Access is logged. Confirm that you have a valid business reason before continuing.</p>
          <div className="button-row">
            <Link className="button-danger" href="/members/33333">Continue and record access</Link>
            <button className="button-secondary" type="button" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </section>
    </div>
  );
}
