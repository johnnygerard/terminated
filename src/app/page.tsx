import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <section className="w-full border border-red-500/30 bg-black/40 p-6 shadow-sm ring-1 shadow-black/50 ring-red-500/20 backdrop-blur">
          <header className="space-y-2">
            <p className="font-mono text-xs tracking-[0.25em] text-zinc-400">
              SYSTEM DIAGNOSTICS
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              SERVER STATUS: <span className="text-red-400">TERMINATED</span>
            </h1>
            <p className="text-sm text-zinc-300">
              This site is a static status endpoint. No services are running.
            </p>
          </header>

          <div className="mt-6 grid gap-3 font-mono text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-red-500/15 pt-4">
              <span className="text-zinc-400">MODE</span>
              <span className="text-zinc-100">EXPORT / READ-ONLY</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-zinc-400">HEARTBEAT</span>
              <span className="text-red-400">OFFLINE</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-zinc-400">LAST EVENT</span>
              <span className="text-zinc-100">PROCESS HALT ACKNOWLEDGED</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-zinc-400">RETRY POLICY</span>
              <span className="text-zinc-100">DISABLED</span>
            </div>
          </div>

          <footer className="mt-6 border-t border-red-500/15 pt-4">
            <p className="text-xs text-zinc-400">
              If you expected this server to be online, verify deployment
              targets and DNS.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
