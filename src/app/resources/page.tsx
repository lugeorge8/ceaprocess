import { SiteHeader } from "@/components/site-header";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Resources"
        subtitle="Add and maintain helpful links for the CEA process."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Links
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            (Placeholder) Add links to Salesforce views, OMT forms, Finder, CART,
            and internal documentation.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Tip: keep links grouped by step (Save Your List, CAP assignment,
            outreach, close-out, pool maintenance, CI/IAP).
          </div>
        </div>
      </main>
    </div>
  );
}
