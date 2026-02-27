import Link from "next/link";

export function SiteHeader({
  title = "Account Distribution",
  subtitle = "Baseline flowchart and resources.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const linkCls =
    "rounded-full px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <header className="border-b border-slate-200 bg-[#0b1f3a] text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 py-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            CEA Process Guide
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
            {subtitle}
          </p>
        </div>

        <nav className="flex flex-wrap gap-2">
          <Link href="/" className={linkCls}>
            Home
          </Link>
          <Link href="/templates" className={linkCls}>
            Templates
          </Link>
          <Link href="/links" className={linkCls}>
            Links
          </Link>
          <Link href="/faq" className={linkCls}>
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
