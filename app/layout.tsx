import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Credit Network",
  description: "The trust layer and API-credit treasury for autonomous agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-[#030712] text-slate-200">
        <header className="w-full border-b border-white/5 p-4 md:px-8 flex justify-between items-center bg-[#030712]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="font-outfit font-black text-xl tracking-tight text-white flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400"></div>
            Agent Credit Network
          </div>
          <nav className="flex gap-6 text-sm font-semibold">
            <a href="/" className="text-slate-400 hover:text-white transition-colors">Home</a>
            <a href="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</a>
          </nav>
        </header>
        <main className="flex-1 w-full flex flex-col relative">
          {children}
        </main>
      </body>
    </html>
  );
}
