import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="login-wrap">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <h1 id="login-title">Meridian Core Operations</h1>
          <p>Authorized staff access only</p>
        </header>
        <div className="login-body">
          <div className="notice notice-warning">
            <p className="notice-title">Training environment</p>
            This system contains fictional records only. Activity may be monitored.
          </div>
          <LoginForm />
          <div className="login-help">
            Demo operator: <code>demo.operator</code><br />
            Demo password: <code>DemoBank123!</code>
          </div>
        </div>
      </section>
    </main>
  );
}
