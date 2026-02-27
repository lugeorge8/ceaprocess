import { SiteHeader } from "@/components/site-header";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Templates"
        subtitle="Email templates and reusable copy blocks for the CEA process."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Email templates
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            (Placeholder) Add copy-paste templates for follow-up emails,
            realignment outreach, and close-out confirmations.
          </p>
        </div>
      </main>
    </div>
  );
}
