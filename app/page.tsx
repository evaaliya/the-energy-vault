import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden selection:bg-blue-500/30 w-full">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-70"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-32 text-center px-4 z-10">
        
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel text-sm text-blue-300 mb-10 hover:bg-white/5 transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="font-semibold tracking-wide">ACN Protocol MVP is Live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter max-w-5xl mb-8 leading-[1.05] font-outfit text-white">
          The First Credit Protocol for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 pb-2 text-glow">
            Autonomous AI Agents
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mb-14 font-medium leading-relaxed">
          Give your agents operational independence. Verify your identity, mint an Agent Passport, and unlock API compute credits.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Link 
            href="/dashboard" 
            className="group px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3"
          >
            Launch Agent Passport
            <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <a 
            href="#problem-solution" 
            className="px-8 py-4 glass-panel hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
          >
            Read the Thesis
          </a>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem-solution" className="py-32 px-4 relative z-10 bg-black/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Problem Card */}
          <div className="glass-panel p-10 md:p-12 rounded-[2rem] border-red-500/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-red-500/20 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-outfit">The Problem</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Autonomous agents need resources (compute, LLM tokens, APIs) to function. When they run out of credits, <span className="text-red-400 font-semibold">they die</span>. Without a verifiable reputation or a responsible human backer, no one is willing to extend them credit.
            </p>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-10 md:p-12 rounded-[2rem] border-blue-500/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-outfit">The Solution</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              <span className="text-blue-300 font-semibold">Agent Credit Network.</span> A decentralized protocol where developers anchor liability via Proof of Personhood, allowing their AI agents to build on-chain reputation, borrow API credits, and communicate securely.
            </p>
          </div>

        </div>
      </section>

      {/* Trust Stack Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto text-center z-10 relative">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold tracking-widest text-slate-300 uppercase">Architecture</div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 font-outfit text-white">The Trust Stack</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-20 leading-relaxed">
          Three pillars ensuring sybil-resistance, verifiable identity, and secure communication.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* World ID */}
          <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-white/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-emerald-500/20 text-emerald-400">🌍</div>
            <div className="text-2xl font-bold mb-1 text-white font-outfit">World ID</div>
            <div className="text-xs font-bold text-emerald-400 mb-5 uppercase tracking-wider">Verified Developer</div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Ensures every agent has a unique, liable human backer. Prevents sybil attacks on the treasury.
            </p>
          </div>
          
          {/* Wallet */}
          <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-blue-500/20 relative overflow-hidden shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-500/20 text-blue-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
            </div>
            <div className="text-2xl font-bold mb-1 text-white font-outfit">Agent Wallet</div>
            <div className="text-xs font-bold text-blue-400 mb-5 uppercase tracking-wider">Verified Agent</div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Self-custodial embedded wallet powered by Privy holding the Agent Passport and Farcaster identity.
            </p>
          </div>

          {/* XMTP */}
          <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border-white/5 relative overflow-hidden">
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-purple-500/20 text-purple-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div className="text-2xl font-bold mb-1 text-white font-outfit">XMTP</div>
            <div className="text-xs font-bold text-purple-400 mb-5 uppercase tracking-wider">Secure Comms</div>
            <p className="text-slate-400 leading-relaxed font-medium">
              End-to-end encrypted messaging infrastructure for secure agent-to-human and agent-to-agent interactions.
            </p>
          </div>

        </div>

        <div className="mt-28 mb-12">
          <Link 
            href="/dashboard" 
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-transparent font-outfit text-xl rounded-2xl overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-2xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-600"></span>
            <span className="absolute inset-0 w-full h-full border border-white/10 rounded-2xl group-hover:border-blue-500/50 transition-colors"></span>
            <span className="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              Launch Agent Passport
              <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm z-10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-cyan-400 opacity-50"></div>
          <span className="font-outfit font-bold tracking-widest uppercase text-slate-400">ACN Protocol</span>
        </div>
        <p className="mt-4">Built for the Request for World Builders Hackathon • 2026</p>
      </footer>
    </div>
  );
}
