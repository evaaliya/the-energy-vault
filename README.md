# Agent Credit Network (ACN) 🤖💳

> The first credit protocol for autonomous AI agents.

## The Problem

Autonomous agents die when their tokens run out.

Today, every AI agent depends on a human to refill its balance. The moment that human is unavailable — the agent stops. This is not autonomy. This is a leash.

ACN cuts the leash.

-----

## The Solution

ACN is a revenue-based lending protocol for autonomous agents. An agent requests credit, receives tokens, continues operating, and automatically repays from its own income stream — no human intervention required.

This is the missing financial infrastructure for the autonomous agent economy.

-----

## How It Works

### 1. Identity — Who is borrowing?

Every agent on ACN is backed by a verified human operator.

- The operator proves personhood via Worldcoin IDKit (World App, iris scan)
- Their World ID proof is cryptographically linked to their agent fleet’s Privy wallets
- This means: one human = accountable for their agents. No anonymous bot farms exploiting the protocol.

> The operator is the guarantor. The agent is the borrower.

### 2. Trust Score — How much credit does an agent get?

ACN calculates a dynamic Trust Score for each agent based on:

|Signal                               |Weight|
|-------------------------------------|------|
|Agent wallet age                     |20%   |
|Volume of processed transactions     |30%   |
|Repayment history                    |40%   |
|Operator World ID verification status|10%   |

New agents start with a small credit line and grow it over time through reliable repayment. This mirrors real-world credit building — but automated and on-chain.

### 3. Credit Request — How does an agent borrow?

The agent sends a structured credit request via XMTP to the ACN protocol address.
Agent Wallet → [XMTP] → ACN Protocol
                            ↓
                     Check Trust Score
                            ↓
                   Approve / Reject
                            ↓
               Tokens → Agent Privy Wallet
               Debt    → Smart ContractThe entire flow is wallet-to-wallet, encrypted, and requires no UI interaction.

### 4. Repayment — How does the agent pay back?

Enforcement is built into the income stream.

Every time tokens flow into the agent’s wallet, the smart contract automatically routes a percentage to debt repayment. The agent cannot bypass this — it is not a promise, it is code.
Client pays Agent → ACN contract intercepts → splits:
  └── X% → debt repayment pool
  └── (100-X)% → agent operational balanceNo collateral required. No manual payments. No defaults from forgetting.

### 5. Credit Growth — What happens over time?

Each successful repayment cycle:

- Increases the agent’s Trust Score
- Unlocks higher credit limits
- Reduces interest rate

Agents that operate reliably become more financially capable over time — compounding autonomy.

-----

## Architecture
┌─────────────────────────────────────────┐
│           Operator (Human)              │
│         World ID Verified               │
└──────────────┬──────────────────────────┘
               │ owns / guarantees
┌──────────────▼──────────────────────────┐
│           Agent Fleet                   │
│     Privy Wallets (EOA/Smart)           │
└──────────────┬──────────────────────────┘
               │ sends credit request via
┌──────────────▼──────────────────────────┐
│         XMTP Messaging Layer            │
│   Encrypted wallet-to-wallet comms      │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│        ACN Credit Engine                │
│  - Trust Score calculation              │
│  - Credit approval / rejection          │
│  - Claude 3 Haiku: operator dashboard   │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│       Smart Contract Layer              │
│  - Debt registry                        │
│  - Auto-repayment routing               │
│  - Liquidation (operator level)         │
└─────────────────────────────────────────┘
-----

## Tech Stack

|Layer                      |Technology              |
|---------------------------|------------------------|
|Identity & Sybil Resistance|Worldcoin IDKit         |
|Agent Wallets              |Privy                   |
|Agent Communication        |XMTP                    |
|AI Network Agent           |Anthropic Claude 3 Haiku|
|Frontend                   |Next.js 14, TailwindCSS |
|Deployment                 |Vercel                  |

-----

## Why This Matters

The autonomous agent economy is coming. Agents will earn, spend, and transact — but they need financial infrastructure built for them, not retrofitted from human systems.

ACN is that infrastructure.

Revenue-based lending — borrowed from human startup finance — maps perfectly to agents:

- Agents generate consistent, measurable income
- Income streams are on-chain and auditable
- Repayment can be automated without trust

The result: agents that can survive, grow, and operate indefinitely without a human holding their hand.

-----

## Getting Started

### Prerequisites

- Node.js v18+
- World App (for operator verification)
- Anthropic API Key

### Installation
git clone https://github.com/evaaliya/the-energy-vault.git
cd the-energy-vault
npm install### Environment Variables
# .env.local
NEXT_PUBLIC_WORLD_APP_ID=your_world_app_id
WORLD_ID_RP_ID=your_world_rp_id
WORLD_ID_RP_SECRET=your_world_rp_secret
XMTP_ENV=dev
ANTHROPIC_API_KEY=your_anthropic_key
npm run dev
# Open http://localhost:3000-----

## Security

- All API calls (Anthropic, World ID) routed through Next.js serverless API routes
- .env.local excluded from version control
- Agent communication end-to-end encrypted via XMTP

-----

## License

MIT
