import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoffeeMark from "../components/CoffeeMark";
import ChevronRight from "../components/icons/ChevronRight";

export const metadata: Metadata = {
  title: "Page not found · Morrow Café",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <section aria-labelledby="not-found-heading" className="grid w-full items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-olive uppercase">404 · Page not found</p>
            <h1 id="not-found-heading" className="max-w-lg font-sans text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">This table<br />is empty.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">The page you’re looking for may have moved, or the link might be incorrect. Let’s get you back to Morrow.</p>
            <a href="/" className="group mt-8 inline-flex min-h-14 items-center gap-8 rounded-xl bg-olive px-6 py-4 text-base font-semibold text-contrast outline-offset-4 hover:bg-ink focus-visible:outline-2 focus-visible:outline-olive">
              Back to Morrow
              <ChevronRight className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
            </a>
          </div>
          <div aria-hidden="true" className="mx-auto flex aspect-square w-full max-w-56 items-center justify-center rounded-full bg-olive sm:max-w-72 md:mr-0 md:max-w-80">
            <CoffeeMark />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
