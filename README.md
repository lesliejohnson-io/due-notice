# Due Notice — Loan Servicing Payment App

A high-fidelity interactive prototype of a mobile loan servicing and payment experience, rendered in a simulated iPhone frame in the browser. Due Notice explores what a modern, trust-forward student loan payment app could feel like — from authentication through payment confirmation — with particular attention to the high-stakes moments where clarity and reassurance matter most.

**Live demo:** _[add your deployed URL here]_

**Demo credentials:** The login screen is pre-filled; tap **Sign In** (or use the biometric simulation) and enter any 6-digit code on the 2FA screen.

## Features

**Authentication**
- Email/password login with show/hide password toggle
- Simulated biometric sign-in (scanning → success states)
- Two-factor authentication with 6-digit code entry and "remember this device" option

**Dashboard**
- At-a-glance loan portfolio with balances, interest rates, and due dates
- Loan status indicators (current, due soon, overdue) across federal and private loans
- Quick entry into the payment flow

**Multi-Step Payment Flow**
- Select one or more loans to pay in a single transaction
- Per-loan payment amounts with minimum payment defaults
- Payment date selection and bank account choice
- Pay yourself or route a payment request to an authorized guest payor
- Review, disclosure agreement, and confirmation with reference number

**Guest Payors**
- Invite family members or others to help with payments
- Granular permission controls per payor
- Add and remove payors from within the app

**Payment History**
- Full transaction history with completed / pending / failed filtering

**Notifications & Account**
- Configurable payment reminders (7 / 3 / 1 days out) and confirmation alerts
- Account management view
- Light and dark mode throughout

## Tech Stack

- **React 18 + TypeScript** — single-file application architecture (`src/app/App.tsx`)
- **Vite** — dev server and build tooling
- **Tailwind CSS** — styling, with a shadcn/ui component library (Radix primitives)
- **lucide-react** — iconography
- **Motion** — animation

The phone frame (Dynamic Island, hardware buttons, home indicator) is rendered entirely in CSS — no device emulator required.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Entire application: screens, views, mock data
│   └── components/
│       └── ui/              # shadcn/ui component library
├── imports/                 # Screen assets
├── styles/                  # Tailwind, theme, and font styles
└── main.tsx                 # Entry point
```

## Design Notes

All data is mocked in-app — there is no backend, and no real financial information is collected or transmitted. The prototype focuses on interaction design for moments of financial anxiety: clear payment confirmation, explicit disclosures, status transparency, and the ability to safely delegate payments to trusted people.

## License

This is a portfolio/demonstration project. All product names, data, and personas are fictional.
