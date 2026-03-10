import { SiteHeader } from "@/components/site-header";

export default function ManagingSpecialCasesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Managing special cases"
        subtitle="Reference notes for accounts that need extra handling (alts, annuities, exceptions)."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Alternative investments (quick guidance)
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            If you see annuities, private equity, hedge funds, or other alternative
            holdings, treat the case as a special workflow. The goal is to avoid
            promising timelines and to route to the correct internal process.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">What to check</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Is the asset transferable or does it require liquidation?</li>
                <li>Any surrender charges / lockups / notice periods?</li>
                <li>Who is the product sponsor / platform?</li>
                <li>Is there a required LOA / additional forms?</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-slate-900">What to say</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Set expectations: “We’re confirming requirements and next steps.”</li>
                <li>Avoid guarantees: don’t promise a timeline.</li>
                <li>Document: note the holdings + what you routed to.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Next steps</div>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>Confirm holdings in Finder + New Holdings View.</li>
              <li>Collect required details (product type, sponsor, restrictions).</li>
              <li>Route to the correct internal team/process (TBD).</li>
              <li>Update Salesforce notes + action plan items.</li>
            </ol>
            <div className="mt-4 text-xs text-slate-500">
              TODO: add exact routing links + owners once confirmed.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
