import { NextResponse } from "next/server";
import { signRequest } from "@worldcoin/idkit-core/signing";

export async function POST(request: Request) {
  try {
    const { action } = await request.json();

    // Use real signing key from env if available
    const signingKeyHex = process.env.WORLD_ID_RP_SECRET || process.env.RP_SIGNING_KEY || "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
    const rp_id = process.env.WORLD_ID_RP_ID || "rp_dummy_for_hackathon";

    const { sig, nonce, createdAt, expiresAt } = signRequest({
      signingKeyHex,
      action: action || "register-agent",
    });

    return NextResponse.json({
      rp_id,
      sig,
      nonce,
      created_at: createdAt,
      expires_at: expiresAt,
    });
  } catch (error) {
    console.error("RP Signature Error:", error);
    return NextResponse.json({ error: "Failed to generate signature" }, { status: 500 });
  }
}
