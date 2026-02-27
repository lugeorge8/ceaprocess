import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function OmtEscalationFormPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="OMT Escalation Form"
        subtitle="Escalation form reference table (placeholder)."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Table
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            (Placeholder) Paste the OMT escalation form table content here.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                    Field
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                    What to enter
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    field: "Client / Account",
                    enter: "(TBD)",
                    notes: "Account identifiers / household context.",
                  },
                  {
                    field: "Issue category",
                    enter: "(TBD)",
                    notes: "Pick the closest category.",
                  },
                  {
                    field: "Summary",
                    enter: "(TBD)",
                    notes: "One-line problem statement.",
                  },
                  {
                    field: "Details",
                    enter: "(TBD)",
                    notes: "What you tried + timestamps + outcomes.",
                  },
                  {
                    field: "Attachments",
                    enter: "(TBD)",
                    notes: "Screenshots / exports if needed.",
                  },
                ].map((row) => (
                  <tr key={row.field}>
                    <td className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                      {row.field}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">
                      {row.enter}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-slate-700">
            If you send me the actual table (screenshot or paste), I’ll replace
            this placeholder with the real fields.
          </div>

          <div className="mt-6">
            <Link
              href="/resources"
              className="text-sm font-semibold text-[#0aa6a6] underline"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
