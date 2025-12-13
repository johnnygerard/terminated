import type { Metadata } from "next";
import Link from "next/link";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const NotFound: FC = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <section className="w-full border border-red-500/30 bg-black/40 p-6 shadow-sm ring-1 shadow-black/50 ring-red-500/20 backdrop-blur">
          <header className="space-y-2">
            <p className="font-mono text-xs tracking-[0.25em] text-zinc-400">
              ROUTE RESOLUTION
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              SIGNAL LOST: <span className="text-red-400">404</span>
            </h1>
            <p className="text-sm text-zinc-300">
              The address you requested does not map to a static route.
            </p>
          </header>

          <div className="mt-6 grid gap-3 font-mono text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-red-500/15 pt-4">
              <span className="text-zinc-400">STATUS</span>
              <span className="text-red-400">NOT FOUND</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-zinc-400">AVAILABLE</span>
              <span className="text-zinc-100">/</span>
            </div>
          </div>

          <footer className="mt-6 border-t border-red-500/15 pt-4">
            <Link className="font-mono text-sm" href="/">
              Return to Home
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
