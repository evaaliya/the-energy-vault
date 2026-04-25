import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { worldIdVerified, walletAddress, farcasterUsername, agentEndpoint, xmtpReachable } = body;

    let score = 0;
    if (worldIdVerified) score += 20;
    if (walletAddress) score += 20;
    if (farcasterUsername) score += 20;
    if (xmtpReachable) score += 20;
    if (agentEndpoint) score += 20;

    return NextResponse.json({
      creditScore: score,
      eligible: score >= 60
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to score agent" }, { status: 400 });
  }
}
