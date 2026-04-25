import { NextResponse } from "next/server";
import { signRequest } from "@worldcoin/idkit-core/signing";

export async function POST(request: Request) {
  try {
    const { action } = await request.json();

    // Use a mock signing key for the MVP if env var is missing
    const signingKeyHex = process.env.RP_SIGNING_KEY || "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

    const { sig, nonce, createdAt, expiresAt } = signRequest({
      signingKeyHex,
      action: action || "register-agent",
    });

    return NextResponse.json({
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
