export interface AgentPassport {
  id: string;
  wallet: string;
  verified_human: boolean;
  farcasterUsername?: string;
  agentEndpoint?: string;
  created_at: string;
  credit_score: number;
  status: "pending" | "approved" | "rejected";
}

// In-memory mock database for the MVP
export const agentPassports: Record<string, AgentPassport> = {};

export function createAgentPassport(data: Partial<AgentPassport>): AgentPassport {
  const id = data.id || `agent_${Math.random().toString(36).substring(7)}`;
  const passport: AgentPassport = {
    id,
    wallet: data.wallet || "0x...",
    verified_human: data.verified_human || false,
    farcasterUsername: data.farcasterUsername,
    agentEndpoint: data.agentEndpoint,
    created_at: new Date().toISOString(),
    credit_score: data.credit_score || 0,
    status: data.status || "pending"
  };
  
  agentPassports[id] = passport;
  return passport;
}
