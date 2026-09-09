export default function MemberSearchPage() {
  return (
    <main className="page-shell">
      <div className="breadcrumbs">Home / Member Servicing / Inquiry</div>
      <h1 className="page-title">Member Inquiry</h1>
      <p className="page-description">Locate a member record by its five-digit member number.</p>

      <section className="panel" aria-labelledby="search-heading">
        <h2 className="panel-heading" id="search-heading">Search Criteria</h2>
        <div className="panel-body">
          <form action="/members/result" method="get">
            <div className="form-grid">
              <label htmlFor="member-number">Member Number</label>
              <div>
                <input
                  className="text-input"
                  id="member-number"
                  name="memberId"
                  inputMode="numeric"
                  maxLength={5}
                  aria-describedby="member-number-help"
                />
                <div className="field-note" id="member-number-help">Enter exactly five digits.</div>
              </div>
            </div>
            <div className="button-row">
              <button className="button" type="submit">Search</button>
              <button className="button-secondary" type="reset">Clear</button>
            </div>
          </form>
        </div>
      </section>

      <section className="panel" aria-labelledby="scenarios-heading">
        <h2 className="panel-heading" id="scenarios-heading">Training Scenario Reference</h2>
        <div className="panel-body">
          <table className="data-table scenario-table">
            <thead><tr><th>Member Number</th><th>Simulated Result</th></tr></thead>
            <tbody>
              <tr><td><code>12345</code></td><td>Active member found</td></tr>
              <tr><td><code>99999</code></td><td>Member not found</td></tr>
              <tr><td><code>55555</code></td><td>Permission denied</td></tr>
              <tr><td><code>77777</code></td><td>Slow response, then member found</td></tr>
              <tr><td><code>33333</code></td><td>Unexpected restricted-record dialog</td></tr>
              <tr><td><code>88888</code></td><td>Session expired</td></tr>
              <tr><td><code>50000</code></td><td>Application error</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
