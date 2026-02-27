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
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#0aa6a6] underline"
              >
                Open
              </a>
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
            Source: uploaded doc. If you want these links regrouped by step
            (Save Your List, CAP assignment, outreach, etc.), tell me.
          </p>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-800">
            <span className="font-semibold">Note:</span> “Salesforce New Task → assign to Kaitlyn Stern…” is used
            if the phone number doesn’t work.
          </div>

          <LinkList
            items={[
              {
                label: "Insurance QRG 3.pptx (reimbursements)",
                href: "https://bankofamerica-my.sharepoint.com.mcas.ms/:p:/g/personal/adrian_larios_ml_com/IQBgLKO4BIoaT5bX-pQN66pPARkAPLcqUhHaXxlnPTI4ot8?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdhostclicktime=1772222296088&web=1&wdExp=TEAMS-TREATMENT",
              },
              {
                label: "Identity Verification",
                href: "https://bankofamerica-my.sharepoint.com/:b:/g/personal/mark_c_caubo_ml_com/IQCxgtS17xTxR6iWlaUnQpvMAUA_n-MybaShpTTftcFxHBc?e=YP7Hty",
              },
              {
                label: "Merrill Lynch Education Savings Account Distribution Form",
                href: "http://resourcecentral.bankofamerica.com/RetirementEducationPlanningDocuments/0873.pdf",
              },
              {
                label: "FINRA CE & MyLearning Tracking.xlsx",
                href: "https://bankofamerica.sharepoint.com.mcas.ms/:x:/r/sites/MG-PacificCoastCEAs-CO/_layouts/15/Doc.aspx?sourcedoc=%7B8BDDDCA5-A629-4CE8-A0E5-D1E53DFDFF74%7D&file=FINRA%20CE%20&%20MyLearning%20Tracking.xlsx=&action=default&mobileredirect=true",
              },
              {
                label: "Street Request.pdf (when order quantity < minimum)",
                href: "http://intranet.bankofamerica.com/GWMSContactCenter/Documents/99%20Markets/Street%20Request.pdf",
              },
              {
                label: "Low Balance Closeouts",
                href: "http://intranet.bankofamerica.com/GWMSContactCenter/Documents/Margin%20and%20Monetary%20Approvals/Customer%20Accounting/Low%20Balance%20Close%20outs%20and%20Charge%20Offs.pdf",
              },
              {
                label: "OMT Escalation Form",
                href: "/resources/omt-escalation",
                note: "Reference table page.",
              },
              {
                label: "Salesforce: New Task → assign to Kaitlyn Stern",
                note: "Title: LexusNexxus for nonworking numbers",
              },
              {
                label: "HSA Guidelines (relevant summary)",
                note:
                  "Merrill no longer offers HSAs. Clients can open a BofA Health Benefit Solutions HSA. Annual limits: $4,400 single / $8,750 family (+$1,000 if 55+). Fees: $50 annual custodial, $50 closeout/transfer out. Transfers out require liquidation to cash; in-kind not supported.",
              },
              {
                label: "Full HSA reference",
                href: "/resources/full#hsa-guidelines",
                note: "Full text and phone numbers.",
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
              <Link
                href="/resources/full"
                className="inline-flex items-center justify-center rounded-full bg-[#0aa6a6] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Open full reference
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
