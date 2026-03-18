import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

type LinkItem = {
  label: string;
  href?: string;
  note?: string;
};

function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((it) => (
        <li key={it.label} className="rounded-2xl border border-slate-200 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-sm font-semibold text-slate-900">{it.label}</div>
            {it.href ? (
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                LINK REMOVED
              </div>
            ) : (
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                TBD
              </div>
            )}
          </div>
          {it.note ? (
            <div className="mt-2 text-sm leading-6 text-slate-700">{it.note}</div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="Resources"
        subtitle="Helpful links and reference material for the CEA process."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quick links
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            
          </p>

          <LinkList
            items={[
              {
                label: "Insurance QRG 3.pptx (reimbursements)",
              },
              {
                label: "Identity Verification",
              },
              {
                label: "Merrill Lynch Education Savings Account Distribution Form",
              },
              {
                label: "FINRA CE & MyLearning Tracking.xlsx",
              },
              {
                label: "Street Request.pdf (when order quantity < minimum)",
              },
              {
                label: "Low Balance Closeouts",
              },
              {
                label: "OMT Escalation Form",
                note: "Reference table page.",
              },
              {
                label: "Nonworking Number",
                note:
                  "Salesforce: New Task → assign to Kaitlyn Stern → Title: LexusNexxus (use if phone number doesn't work).",
              },
              {
                label: "HSA Guidelines",
                note: "Limits, fees, transfers, and BofA HSA setup instructions.",
              },
            ]}
          />

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Full reference
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              View the full document text (including the HSA Guidelines section)
              on its own page.
            </p>
            <div className="mt-4">
              <div className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-600">
                Link removed
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
