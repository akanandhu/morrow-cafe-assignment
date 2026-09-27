import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Loading() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 pt-5 pb-14 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10 lg:pb-20">
        <p role="status" className="sr-only">Loading Morrow Café…</p>
        <div aria-hidden="true" className="grid gap-8 motion-safe:animate-pulse lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <div className="mb-8 h-9 w-3/4 rounded-full bg-olive/10" />
            <div className="h-14 w-full rounded-lg bg-olive/10 sm:h-20" />
            <div className="mt-3 h-14 w-4/5 rounded-lg bg-olive/10 sm:h-20" />
            <div className="mt-8 h-5 w-full rounded bg-olive/10" />
            <div className="mt-3 h-5 w-4/5 rounded bg-olive/10" />
            <div className="mt-10 aspect-video rounded-2xl bg-olive/10" />
          </div>
          <div className="self-start rounded-2xl bg-surface p-6 sm:p-8">
            <div className="h-5 w-2/3 rounded bg-olive/10" />
            <div className="mt-6 h-20 w-1/2 rounded-lg bg-olive/10" />
            <div className="my-8 border-t-2 border-dashed border-olive/20" />
            <div className="mb-8 h-8 w-3/4 rounded bg-olive/10" />
            <div className="mb-3 h-4 w-24 rounded bg-olive/10" />
            <div className="mb-6 h-14 rounded-xl bg-olive/10" />
            <div className="mb-3 h-4 w-32 rounded bg-olive/10" />
            <div className="mb-8 h-14 rounded-xl bg-olive/10" />
            <div className="h-14 rounded-xl bg-olive/20" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
