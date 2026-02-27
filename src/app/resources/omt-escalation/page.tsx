import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function OmtEscalationFormPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="OMT Escalation Form"
        subtitle="Reference table for the escalation form fields."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Table
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Copy these fields into the form. Right column is intentionally blank
            for OMT/FA completion.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {[
                  {
                    left: (
                      <>
                        <div className="font-semibold">Reason for Escalation:</div>
                        <div className="mt-1 font-semibold">
                          Potential Complaint, Suspicious Activity, Other Request
                        </div>
                      </>
                    ),
                    right: "",
                  },
                  { left: <div className="font-semibold">Lead CEA / Inherited from FA/Team:</div>, right: "" },
                  { left: <div className="font-semibold">Market / Office Name:</div>, right: "" },
                  { left: <div className="font-semibold">Client Name:</div>, right: "" },
                  { left: <div className="font-semibold">Account #:</div>, right: "" },
                  { left: <div className="font-semibold">Total AUM:</div>, right: "" },
                  {
                    left: (
                      <>
                        <div className="font-semibold">Notes:</div>
                        <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-700">
                          <li>Phone Call Details:</li>
                          <li>Product or Service involved:</li>
                          <li>Context of Escalation/Complaint/Suspicious Activity:</li>
                          <li>Client Callback Info:</li>
                          <li>Your Contact info if OMT/FA has inquiries:</li>
                        </ol>
                        <div className="mt-3 text-slate-700">
                          * Attach applicable email/written correspondence to this
                          escalation.
                        </div>
                      </>
                    ),
                    right: "",
                  },
                  { left: <div className="font-semibold">Outcome:</div>, right: "[For OMT to Complete]" },
                ].map((row, idx) => (
                  <tr key={idx} className="align-top">
                    <td className="w-2/3 border-b border-slate-200 px-4 py-4">
                      {row.left}
                    </td>
                    <td className="w-1/3 border-b border-slate-200 px-4 py-4 text-slate-700">
                      {row.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
