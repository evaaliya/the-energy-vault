import { NextResponse } from "next/server";

// Mock XMTP chat endpoint for MVP
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, creditScore } = body;

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Agent response
    const reply = `🤖 Agent via XMTP: Received your message. Your current credit score is ${creditScore || 0}. ${
      (creditScore || 0) >= 60 ? "You are eligible for API credits." : "You need to improve your score to get credits."
    }`;

    return NextResponse.json({
      reply,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 400 });
  }
}
