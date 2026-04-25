'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AgentPassportPage({ params }: { params: { id: string } }) {
  // Mock data fetching based on ID
  const isAgentOne = params.id === '1';
  
  const mockAgent = {
    id: params.id,
    name: isAgentOne ? "DeFi Oracle Bot" : "Tip Agent",
    farcaster: isAgentOne ? "@defi_oracle" : "@tipper_bot",
    wallet: isAgentOne ? "0xAbC9...4F21" : "0x78D2...9E1B",
    trustScore: isAgentOne ? 85 : 50,
    status: isAgentOne ? "Trusted" : "Newborn",
    creditLimit: isAgentOne ? 50000 : 10000,
    creditUsage: isAgentOne ? 14000 : 0,
    avatar: isAgentOne ? "🤖" : "💸",
  };

  const [isApplying, setIsApplying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  const handleMessageAgent = async () => {
    setIsChatting(true);
    setChatResponse(null);
    try {
      const res = await fetch("/api/agent/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello", creditScore: mockAgent.trustScore })
      });
      const data = await res.json();
      setChatResponse(data.reply);
    } catch (e) {
      console.error(e);
      setChatResponse("Error connecting to XMTP network.");
    } finally {
      setIsChatting(false);
    }
  };

  const handleApplyForCredits = () => {
    setIsApplying(true);
    // Mock API call delay
    setTimeout(() => {
      setIsApplying(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8">
      {/* Back navigation */}
      <Link href="/dashboard" className="inline-flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
        Back to Dashboard
      </Link>

      {/* Agent Identity / Passport Card */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-800">
        {/* Glow effect for high trust score */}
        {mockAgent.trustScore >= 80 && (
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-20 pointer-events-none"></div>
        )}
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-slate-900 rounded-[22px]">
          {/* Avatar */}
          <div className="w-32 h-32 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-6xl shadow-inner shrink-0 relative">
            {mockAgent.avatar}
            <div className={`absolute bottom-0 right-0 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center ${mockAgent.trustScore >= 80 ? 'bg-green-500' : 'bg-slate-500'}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <div className="text-sm font-mono text-blue-400 mb-1">AGENT PASSPORT #{mockAgent.id.padStart(4, '0')}</div>
                <h1 className="text-4xl font-extrabold tracking-tight mb-1">{mockAgent.name}</h1>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-slate-400">{mockAgent.farcaster}</span>
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    {mockAgent.status}
                  </span>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 min-w-[140px] text-center">
                <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">Trust Score</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {mockAgent.trustScore}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700 flex items-center gap-3">
                <span className="text-slate-500 text-sm">Privy Wallet</span>
                <span className="font-mono text-sm">{mockAgent.wallet}</span>
                <button className="text-slate-500 hover:text-white transition-colors" title="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </button>
              </div>

              <button 
                onClick={handleMessageAgent}
                disabled={isChatting}
                className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                {isChatting ? "Connecting to XMTP..." : "Message Agent via XMTP"}
              </button>
            </div>

            {chatResponse && (
              <div className="mt-4 p-4 bg-slate-950/50 border border-slate-700 rounded-xl animate-in fade-in slide-in-from-top-2">
                <div className="text-xs text-slate-500 mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Secure XMTP Message
                </div>
                <div className="text-sm font-medium">{chatResponse}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Credit Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* API Credits */}
        <div className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">API Treasury Line</h3>
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-400">Current Allocation</span>
                <span>{mockAgent.creditLimit.toLocaleString()} Tokens</span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-700/50">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full" 
                  style={{ width: `${(mockAgent.creditUsage / mockAgent.creditLimit) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-slate-500 mt-2">
                {mockAgent.creditUsage.toLocaleString()} tokens used
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/50">
              <button 
                onClick={handleApplyForCredits}
                disabled={isApplying}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:text-blue-300 text-white rounded-xl font-bold transition-all flex justify-center items-center gap-2"
              >
                {isApplying ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Evaluating Trust Score...
                  </>
                ) : (
                  "Apply for More Credits"
                )}
              </button>
              
              {showSuccess && (
                <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-medium animate-in fade-in zoom-in duration-300">
                  Approved! +10,000 credits allocated.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Reputation Logs */}
        <div className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Reputation Log</h3>
            <div className="text-xs text-slate-400">Last 30 days</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0"></div>
              <div>
                <div className="text-sm font-medium">Debt Repaid</div>
                <div className="text-xs text-slate-400">Agent repaid 5.00 USDC to Treasury.</div>
                <div className="text-xs text-green-400 mt-1">+15 Trust Score</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <div>
                <div className="text-sm font-medium">Social Capital Growth</div>
                <div className="text-xs text-slate-400">Agent gained 100+ followers on Farcaster.</div>
                <div className="text-xs text-green-400 mt-1">+5 Trust Score</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0"></div>
              <div>
                <div className="text-sm font-medium">Agent Minted</div>
                <div className="text-xs text-slate-400">Passport created by Verified Developer.</div>
                <div className="text-xs text-blue-400 mt-1">Initial Score: 50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
