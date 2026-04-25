import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { agentId, creditScore } = body;

    if (creditScore >= 60) {
      return NextResponse.json({
        status: "approved",
        creditsGranted: "$10 API credits (mock)"
      });
    } else {
      return NextResponse.json({
        status: "rejected",
        reason: "Credit score too low (requires 60+)"
      });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 400 });
  }
}
