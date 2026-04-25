import { NextResponse } from "next/server";
import { createAgentPassport } from "@/lib/agent-passport";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { worldIdVerified, walletAddress, farcasterUsername, agentEndpoint } = body;

    const passport = createAgentPassport({
      verified_human: worldIdVerified,
      wallet: walletAddress,
      farcasterUsername,
      agentEndpoint,
      status: "pending",
      credit_score: 0
    });

    return NextResponse.json(passport);
  } catch (error) {
    return NextResponse.json({ error: "Failed to register agent" }, { status: 400 });
  }
}
