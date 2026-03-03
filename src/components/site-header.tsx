export function SiteHeader({
  title = "Account Distribution",
  subtitle = "Baseline flowchart and resources.",
}: {
  title?: string;
  subtitle?: string;
}) {
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

        {/* nav intentionally removed */}
      </div>
    </header>
  );
}
