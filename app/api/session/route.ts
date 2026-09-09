import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { operatorId?: string; password?: string };

  if (body.operatorId !== "demo.operator" || body.password !== "DemoBank123!") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("meridian_session", "demo-session", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete("meridian_session");
  return response;
}
