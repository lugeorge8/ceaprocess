import { SiteHeader } from "@/components/site-header";

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Links"
        subtitle="Quick links to Salesforce views, tools, and internal docs."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quick links
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            (Placeholder) Add links to Salesforce views, OMT form, Finder, and
            internal documentation.
          </p>
        </div>
      </main>
    </div>
  );
}
