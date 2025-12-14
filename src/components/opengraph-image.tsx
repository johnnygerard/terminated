import type { FC } from "react";

export const OpenGraphImage: FC = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto flex min-h-screen items-center justify-center px-6 py-16">
        <section className="aspect-1200/630 w-300 max-w-full border border-red-500/30 bg-black/40 p-10 shadow-sm ring-1 shadow-black/50 ring-red-500/20 backdrop-blur">
          <header className="space-y-3">
            <p className="font-mono text-xs tracking-[0.25em] text-zinc-400">
              SYSTEM DIAGNOSTICS
            </p>
            <h1 className="text-6xl font-semibold tracking-tight">
              <span className="text-red-400">TERMINATED</span>
            </h1>
            <p className="font-mono text-sm tracking-wide text-zinc-300">
              SERVER STATUS ENDPOINT
            </p>
          </header>

          <div className="mt-10 flex items-baseline justify-between gap-6 border-t border-red-500/15 pt-6 font-mono text-base">
            <span className="text-zinc-400">HEARTBEAT</span>
            <span className="text-red-400">OFFLINE</span>
          </div>
        </section>
      </div>
    </main>
  );
};
