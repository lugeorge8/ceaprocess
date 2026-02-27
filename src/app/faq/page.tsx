import { SiteHeader } from "@/components/site-header";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="FAQ"
        subtitle="Common questions and edge cases for the CEA process."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Common questions
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            (Placeholder) Add FAQs like: when to close-out vs maintain pool,
            what counts as “final outcome”, and how many outbounds before
            assigning CEA.
          </p>
        </div>
      </main>
    </div>
  );
}
