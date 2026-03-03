import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader title="" subtitle="" />
      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        {/* intentionally blank */}
      </main>
    </div>
  );
}
