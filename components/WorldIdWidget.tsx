"use client";

import { useState, useEffect } from "react";
import { IDKitRequestWidget, orbLegacy } from "@worldcoin/idkit";
import type { RpContext } from "@worldcoin/idkit";

export default function WorldIdWidget({ onVerify }: { onVerify: () => void }) {
  const [rpContext, setRpContext] = useState<RpContext | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch RP signature on mount
    fetch("/api/rp-signature", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action: "register-agent" }),
    })
      .then((res) => res.json())
      .then((rpSig) => {
        if (rpSig.sig) {
          setRpContext({
            rp_id: rpSig.rp_id || "rp_dummy_for_hackathon", // Use real RP ID if available
            nonce: rpSig.nonce,
            created_at: rpSig.created_at,
            expires_at: rpSig.expires_at,
            signature: rpSig.sig,
          });
        }
      })
      .catch((err) => console.error("Failed to fetch RP signature", err));
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={!rpContext}
        className="mt-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-sm font-semibold rounded-lg transition-colors border border-slate-600 w-full"
      >
        {rpContext ? "Verify with World ID" : "Loading Widget..."}
      </button>

      {rpContext && (
        <IDKitRequestWidget
          open={open}
          onOpenChange={setOpen}
          app_id={(process.env.NEXT_PUBLIC_WORLD_APP_ID as `app_${string}`) || "app_staging_123"} // Read from .env.local
          action="register-agent"
          rp_context={rpContext}
          allow_legacy_proofs={true}
          preset={orbLegacy({ signal: "agent-credit-network" })}
          handleVerify={async (result) => {
            const response = await fetch("/api/verify-proof", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                rp_id: rpContext.rp_id,
                idkitResponse: result,
              }),
            });

            if (!response.ok) {
              throw new Error("Backend verification failed");
            }
          }}
          onSuccess={() => {
            console.log("Successfully verified World ID");
            onVerify();
          }}
        />
      )}
    </>
  );
}
