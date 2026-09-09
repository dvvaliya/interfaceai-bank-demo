# Meridian Core Operations

A deliberately small, legacy-styled banking back-office application used as a safe target for the Interface AI computer-use automation project. All data and credentials are fictional.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and sign in with:

```text
Operator ID: demo.operator
Password: DemoBank123!
```

## Test scenarios

| Member number | Result |
| --- | --- |
| `12345` | Successful member lookup |
| `24680` | Successful member lookup |
| `99999` | Member not found |
| `55555` | Permission denied |
| `77777` | Slow response, then success |
| `33333` | Unexpected review dialog |
| `88888` | Session expired |
| `50000` | Simulated application error |

An empty or malformed member number produces a validation error. A successful member lookup can continue through a sub-account form to a review screen and a risky final confirmation.

## Deploy

Import this repository into Vercel. No environment variables or database are required.

## Scope

This repository currently contains only the fake target application. LLM discovery, Playwright automation, artifact recording, deterministic replay, and operator handoff will be added as a separate layer.
