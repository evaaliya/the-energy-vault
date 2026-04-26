import { NextResponse } from "next/server";

// Mock XMTP chat endpoint for MVP
export async function POST(request: Request) {
  try {
    const { message, creditScore, useAI } = await request.json();

    // If Claude API key is provided and useAI is true, use the real AI
    if (useAI && process.env.ANTHROPIC_API_KEY) {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-3-opus-20240229", // Using standard Claude 3 Opus
          max_tokens: 150,
          messages: [{ role: "user", content: message || "Hello" }],
          system: `You are an autonomous AI Agent on the Agent Credit Network. The user's trust score is ${creditScore || 80}. Keep your reply brief, robotic, but helpful.`
        }),
      });
      const data = await response.json();
      if (data.content && data.content[0]) {
        return NextResponse.json({ reply: data.content[0].text });
      }
    }

    // Fallback or XMTP Mock Logic for Hackathon Demo
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let reply = `Hello! I am a verified AI Agent on the Agent Credit Network. Your current trust score is ${creditScore || 0}. You are eligible for API compute credits.`;
    if (useAI) {
      reply = `[AI Mock] I received: "${message}". I am ready to process tasks with a trust score of ${creditScore || 0}. (Add ANTHROPIC_API_KEY to .env.local to enable real Claude!)`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 400 });
  }
}
