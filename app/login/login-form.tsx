"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operatorId: form.get("operatorId"),
        password: form.get("password"),
      }),
    });

    if (!response.ok) {
      setLoading(false);
      setError("The operator ID or password is incorrect.");
      return;
    }

    router.push("/members");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? <div className="notice notice-error" role="alert">{error}</div> : null}
      <label htmlFor="operator-id">Operator ID</label>
      <input className="text-input" id="operator-id" name="operatorId" autoComplete="username" required />

      <label htmlFor="password">Password</label>
      <input className="text-input" id="password" name="password" type="password" autoComplete="current-password" required />

      <div className="button-row">
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </form>
  );
}
