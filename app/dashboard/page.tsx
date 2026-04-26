"use client";

import Link from 'next/link';
import { useState } from 'react';
import WorldIdWidget from '@/components/WorldIdWidget';

export default function DashboardPage() {
  // State for MVP
  const [isWorldIdVerified, setIsWorldIdVerified] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // State for AI Chat
  const [askMessage, setAskMessage] = useState("");
  const [askResponse, setAskResponse] = useState<string | null>(null);
  const [isAsking, setIsAsking] = useState(false);
  
  // New Mock Metrics
  const agentsCount = 12;
  const creditsIssued = "$240";
  const activeConversations = 31;

  const handleRegisterAgent = async () => {
    if (!isWorldIdVerified) {
      alert("Please verify your humanity with World ID first!");
      return;
    }
    setIsRegistering(true);
    try {
      const res = await fetch("/api/agent/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          worldIdVerified: true,
          walletAddress: "0x123...abc",
          farcasterUsername: "@new_agent",
          agentEndpoint: "https://agent.com/api"
        })
      });
      const data = await res.json();
      alert(`Agent successfully registered! Agent ID: ${data.id}`);
    } catch (e) {
      console.error(e);
      alert("Failed to register agent");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Developer Dashboard</h1>
          <p className="text-slate-400 text-lg">Manage your autonomous agents and monitor treasury credit lines.</p>
        </div>
        <div>
          <button 
            onClick={handleRegisterAgent}
            disabled={isRegistering}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            {isRegistering ? "Registering..." : "Register Agent"}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* World ID Card */}
        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex flex-col justify-between">
          <div className="text-sm text-slate-400 mb-2 font-medium">World ID Status</div>
          <div className="flex flex-col gap-2">
            {isWorldIdVerified ? (
              <div className="flex items-center gap-3 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-400 leading-tight">Verified</div>
                  <div className="text-xs text-slate-500">Nullifier: 0x...a1b2</div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-lg font-bold text-slate-500 mb-2">Not Verified</div>
                <WorldIdWidget onVerify={() => setIsWorldIdVerified(true)} />
                <button 
                  onClick={() => setIsWorldIdVerified(true)}
                  className="w-full mt-2 py-2 text-xs font-medium text-slate-500 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-dashed border-slate-600"
                >
                  (Demo) Bypass Verification
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Agents Count Card */}
        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex flex-col justify-between">
          <div className="text-sm text-slate-400 mb-2 font-medium">Verified Agents</div>
          <div className="text-4xl font-black">{agentsCount}</div>
        </div>

        {/* Active Conversations Card */}
        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex flex-col justify-between">
          <div className="text-sm text-slate-400 mb-2 font-medium">Active Conversations</div>
          <div className="text-4xl font-black text-purple-400">{activeConversations}</div>
        </div>

        {/* Available Credits Card */}
        <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="text-sm text-slate-400 mb-2 font-medium relative z-10">Credits Issued</div>
          <div className="flex items-baseline gap-2 relative z-10">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {creditsIssued}
            </div>
          </div>
        </div>
      </div>

      {/* Ask Agent Section */}
      {isWorldIdVerified && (
        <div className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-4 text-white relative z-10 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Ask Network Agent (AI)
          </h3>
          <div className="flex gap-4 relative z-10">
            <input 
              type="text" 
              value={askMessage}
              onChange={(e) => setAskMessage(e.target.value)}
              placeholder="Ask the agent anything about its operations..."
              className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              onKeyDown={async (e) => {
                if (e.key === 'Enter' && askMessage.trim() && !isAsking) {
                  setIsAsking(true);
                  try {
                    const res = await fetch("/api/agent/chat", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ message: askMessage, creditScore: 100, useAI: true })
                    });
                    const data = await res.json();
                    setAskResponse(data.reply);
                    setAskMessage("");
                  } catch (e) {
                    console.error(e);
                  } finally {
                    setIsAsking(false);
                  }
                }
              }}
            />
            <button 
              onClick={async () => {
                if (!askMessage.trim()) return;
                setIsAsking(true);
                try {
                  const res = await fetch("/api/agent/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: askMessage, creditScore: 100, useAI: true })
                  });
                  const data = await res.json();
                  setAskResponse(data.reply);
                  setAskMessage("");
                } catch (e) {
                  console.error(e);
                } finally {
                  setIsAsking(false);
                }
              }}
              disabled={isAsking || !askMessage.trim()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]"
            >
              {isAsking ? "Thinking..." : "Ask Agent"}
            </button>
          </div>
          {askResponse && (
            <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl relative z-10">
              <div className="text-sm font-medium text-purple-100">🤖 Agent: {askResponse}</div>
            </div>
          )}
        </div>
      )}

      {/* Agents List Section */}
      <div className="pt-6">
        <h2 className="text-2xl font-bold mb-6">Your Registered Agents</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agent Card 1 */}
          <Link href="/agent/1" className="group p-6 bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-xl">🤖</div>
                <div>
                  <div className="font-bold text-xl group-hover:text-blue-400 transition-colors">DeFi Oracle Bot</div>
                  <div className="text-sm text-slate-400">@defi_oracle</div>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">Active</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <div className="text-xs text-slate-500 mb-1">Reputation Score</div>
                <div className="font-bold text-blue-400">85 / 100</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                <div className="text-xs text-slate-500 mb-1">Treasury Debt</div>
                <div className="font-bold text-green-400">$0.00</div>
              </div>
            </div>

            <div className="text-sm text-slate-400 mb-2 flex justify-between">
              <span>Credit Usage</span>
              <span>14k / 50k Tokens</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
