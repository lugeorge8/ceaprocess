"use client";

import { useState } from "react";

type FlowCardProps = {
  title: string;
  bullets?: string[];
  tone?: "neutral" | "decision" | "action";
};

function FlowCard({ title, bullets, tone = "neutral" }: FlowCardProps) {
  const toneCls =
    tone === "decision"
      ? "border-amber-300/40 bg-amber-50"
      : tone === "action"
        ? "border-[#0aa6a6]/35 bg-[#e6f7f7]"
        : "border-slate-200 bg-white";

  return (
    <div
      className={`w-full max-w-xl rounded-3xl border p-6 shadow-sm ${toneCls}`}
    >
      <div className="text-base font-semibold tracking-tight text-slate-900">
        {title}
      </div>
      {bullets?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function DownArrow() {
  return (
    <div className="my-4 flex w-full max-w-xl items-center justify-center">
      <div className="h-10 w-px bg-slate-300" />
      <div className="-ml-[9px] mt-9 h-0 w-0 border-x-[9px] border-t-[12px] border-x-transparent border-t-slate-300" />
    </div>
  );
}

function ToggleDetails({ steps }: { steps: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/70 bg-white/65 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white"
        aria-expanded={open}
      >
        {open ? "Hide details" : "Show details"}
        <span className="text-slate-400">▾</span>
      </button>

      {open ? (
        <div className="mt-3 rounded-3xl border border-slate-300/60 bg-white/70 p-5 text-sm leading-6 text-slate-700 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Steps
          </div>
          <ol className="mt-3 list-decimal space-y-1 pl-5">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-[#0b1f3a] text-white">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-5 py-10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            CEA Process Guide
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Account Distribution
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-white/75">
            Baseline flowchart for the home page. Scroll down to follow the
            process end-to-end.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col items-center gap-4 lg:max-w-none lg:flex-row lg:items-start lg:justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-[#0aa6a6]/35 bg-[#e6f7f7] p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="text-base font-semibold tracking-tight text-slate-900">
                  Save Your List
                </div>

                <ToggleDetails
                  steps={[
                    "Open PMAC in CEW",
                    "Find the Resources tab and open CART (Client Account Redistribution Tool)",
                    "Find the Domain ID that was assigned the accounts in the top left. If none show up under your FA ID, go to Finder → Domain and ensure new Producer IDs are selected",
                    "Go to Distribution Detail",
                    "Set the start/end period to ensure you download the appropriate distributions",
                    "On the right side of the page, click the green X page to download the current table as an excel sheet",
                  ]}
                />
              </div>
            </div>
            <div className="hidden lg:block lg:w-[420px]" />
          </div>
          <DownArrow />

          <FlowCard title="Split accounts in team" tone="action" />
          <DownArrow />

          <FlowCard
            title="Assign Action Plan CAP to accounts"
            bullets={["Can assign all at once", "Only click save once"]}
            tone="action"
          />
          <DownArrow />

          <FlowCard
            title="Prep outreach"
            bullets={[
              "Check Finder to view holdings",
              "Check New Holdings View to see annuities / PE / hedge funds / alts",
              "Determine if Low-Bal Close-Out, Maintain Pool, or CI/IAP",
            ]}
          />
          <DownArrow />

          <FlowCard
            title="Decision: choose path"
            bullets={[
              "Low Balance Close-Out",
              "Maintain Pool",
              "Consumer Investments / IAP",
            ]}
            tone="decision"
          />

          {/* Branches stacked vertically (scroll-down) */}
          <div className="mt-10 flex w-full flex-col items-center gap-10">
            <div className="flex w-full flex-col items-center">
              <FlowCard
                title="Low Balance Close-Out"
                bullets={["Submit form to OMT", "Final outcome update"]}
              />
              <DownArrow />
              <FlowCard title="Follow up email" tone="action" />
            </div>

            <div className="flex w-full flex-col items-center">
              <FlowCard
                title="Maintain Pool"
                bullets={[
                  "Outreach to client to inform account realignment",
                  "Document calls on Salesforce",
                  "Follow-up email on realignment",
                ]}
              />
              <DownArrow />
              <FlowCard title="Follow up email" tone="action" />
            </div>

            <div className="flex w-full flex-col items-center">
              <FlowCard
                title="Consumer Investments / IAP"
                bullets={[
                  "Letter of Authorization (eSign)",
                  "Transfer to appropriate solution",
                ]}
              />
              <DownArrow />
              <FlowCard title="Follow up email" tone="action" />
            </div>
          </div>

          <div className="mt-12 flex w-full max-w-xl flex-col items-center">
            <DownArrow />
            <FlowCard
              title="Per outbound attempt"
              bullets={["Update Action Plan item(s)", "Log call in Salesforce notes"]}
              tone="action"
            />
            <DownArrow />
            <FlowCard
              title="Assign CEA (3–8 outbounds) if no final outcome by 2nd outreach"
              tone="action"
            />
          </div>

          {/* Placeholder sections */}
          <section className="mt-16 w-full max-w-xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Templates
              </div>
              <div className="mt-2 text-base font-semibold">Email templates</div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                (Placeholder) Add copy-paste templates for follow-up emails,
                realignment outreach, and close-out confirmations.
              </p>
            </div>
          </section>

          <section className="mt-6 w-full max-w-xl">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Links
              </div>
              <div className="mt-2 text-base font-semibold">Quick links</div>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                (Placeholder) Add links to Salesforce views, OMT form, Finder,
                and internal documentation.
              </p>
            </div>
          </section>

          <section className="mt-6 w-full max-w-xl">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                FAQ
              </div>
              <div className="mt-2 text-base font-semibold">Common questions</div>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                (Placeholder) Add FAQs like: when to close-out vs maintain pool,
                what counts as “final outcome”, and how many outbounds before
                assigning CEA.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-3xl px-5 py-8 text-xs text-zinc-500">
          Version 0.1 — baseline flow. Next: make branch selection interactive
          and attach links/templates.
        </div>
      </footer>
    </div>
  );
}
