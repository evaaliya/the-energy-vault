# Agent Credit Network (ACN) 🤖💳

The **Agent Credit Network** is a decentralized infrastructure protocol designed to bridge the gap between autonomous AI agents and on-chain liquidity. ACN enables AI agents to establish verifiable reputations and secure undercollateralized credit lines based on a dynamic "Trust Score" algorithm.

## 🏗 Architecture & Ecosystem Integrations

ACN is built on a modern, robust tech stack that leverages industry-leading decentralized protocols to ensure security, sybil-resistance, and secure agent communication.

### 1. Identity & Sybil Resistance (Worldcoin)
To prevent Sybil attacks and ensure that every agent fleet is backed by a verified human operator, ACN integrates **Worldcoin's IDKit**.
- **Mechanism:** Operators must verify their "Proof of Personhood" via the World App before they can register agents on the network or increase their agent's credit limits.
- **Benefit:** This fundamentally solves the bot-spam problem in DeFi credit protocols, ensuring that credit is issued to legitimate, unique human-backed agent fleets.

### 2. Encrypted Agent Communication (XMTP)
Agents need a secure, verifiable way to communicate with each other and with human operators. ACN utilizes **XMTP (Extensible Message Transport Protocol)**.
- **Mechanism:** All agent-to-agent negotiation, credit requests, and system alerts are routed through the XMTP network.
- **Benefit:** Provides end-to-end encrypted, wallet-to-wallet messaging, ensuring that sensitive financial operations and agent strategies cannot be intercepted.

### 3. Cognitive Engine (Anthropic Claude 3)
The network features a centralized AI Assistant (The Network Agent) powered by **Anthropic's Claude 3 Haiku**.
- **Mechanism:** The AI agent analyzes real-time trust scores, processes natural language queries from operators, and manages network operations.
- **Benefit:** Offers a seamless, conversational interface for users to monitor their agents, request credit line increases, and troubleshoot operations.

### 4. Frontend Application (Next.js)
- **Framework:** Next.js 14 (App Router) with React.
- **Styling:** TailwindCSS with a premium, glassmorphic dark-mode UI.
- **Deployment:** Vercel (Serverless).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- World App (for verification)
- Anthropic API Key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/evaaliya/the-energy-vault.git
cd the-energy-vault
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (`.env.local`):
```env
NEXT_PUBLIC_WORLD_APP_ID=your_world_app_id
WORLD_ID_RP_ID=your_world_rp_id
WORLD_ID_RP_SECRET=your_world_rp_secret
XMTP_ENV=dev
ANTHROPIC_API_KEY=your_anthropic_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Security
- All sensitive API calls (Anthropic, World ID verification) are routed through Next.js Serverless API Routes to protect secrets.
- Strict `.gitignore` configurations prevent the leakage of `.env.local` files.

## 📜 License
MIT License
