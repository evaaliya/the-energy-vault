import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { rp_id, idkitResponse } = await request.json();

    // For Hackathon Demo: If no real app ID is configured, we bypass verification
    // and assume it's valid so the demo flows smoothly without setting up World App.
    if (!process.env.RP_SIGNING_KEY) {
      console.log("[MOCK] World ID verification successful");
      return NextResponse.json({ success: true });
    }

    const response = await fetch(
      `https://developer.world.org/api/v4/verify/${rp_id}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(idkitResponse),
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Verification failed" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
