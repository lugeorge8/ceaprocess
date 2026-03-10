import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

const sections = [
  {
    title: "Process",
    href: "/process",
    desc: "Account Distribution flowchart (end-to-end).",
  },
  {
    title: "Templates",
    href: "/templates",
    desc: "Email/call templates and copy-paste text.",
  },
  {
    title: "Resources",
    href: "/resources",
    desc: "Forms, escalation links, and reference pages.",
  },
  {
    title: "FAQ",
    href: "/faq",
    desc: "Common questions + edge cases.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader
        title="CEA Process"
        subtitle="Neatly organized hub for the Account Distribution workflow, templates, and reference links."
      />

      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Start here
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">
            Account Distribution
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Use this site as the single source of truth. Everything is left-aligned
            and organized by what you need in the moment.
          </p>
          <div className="mt-6">
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-full bg-[#0aa6a6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Open the process →
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50"
            >
              <div className="text-lg font-semibold tracking-tight">{s.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">{s.desc}</div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Notes
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
            <li>Primary workflow lives on the Process page.</li>
            <li>Keep templates/resources/FAQ small and easy to scan.</li>
            <li>If something changes, update the site the same day.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
