type FlowCardProps = {
  title: string;
  bullets?: string[];
  tone?: "neutral" | "decision" | "action";
};

function FlowCard({ title, bullets, tone = "neutral" }: FlowCardProps) {
  const toneCls =
    tone === "decision"
      ? "border-amber-300/50 bg-amber-50"
      : tone === "action"
        ? "border-emerald-300/50 bg-emerald-50"
        : "border-zinc-200 bg-white";

  return (
    <div
      className={`w-full max-w-xl rounded-3xl border p-6 shadow-sm ${toneCls}`}
    >
      <div className="text-base font-semibold tracking-tight text-zinc-900">
        {title}
      </div>
      {bullets?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
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
      <div className="h-10 w-px bg-zinc-300" />
      <div className="-ml-[9px] mt-9 h-0 w-0 border-x-[9px] border-t-[12px] border-x-transparent border-t-zinc-300" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-5 py-10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            CEA Process Guide
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Account Distribution
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-zinc-600">
            Baseline flowchart for the home page. Scroll down to follow the
            process end-to-end.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="flex flex-col items-center">
          <FlowCard title="Save Excel list" tone="action" />
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
            bullets={["Low Balance Close-Out", "Maintain Pool", "Consumer Investments / IAP"]}
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
                bullets={["Letter of Authorization (eSign)", "Transfer to appropriate solution"]}
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
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto w-full max-w-3xl px-5 py-8 text-xs text-zinc-500">
          Version 0.1 — baseline flow. Next: make branch selection interactive
          and attach links/templates.
        </div>
      </footer>
    </div>
  );
}
