"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import CoffeeMark from "../components/CoffeeMark";
import ChevronRight from "../components/icons/ChevronRight";

export default function ErrorPage({ reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [retrying, startTransition] = useTransition();

  function retry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <section aria-labelledby="error-heading" className="grid w-full items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-olive uppercase">A small interruption</p>
            <h1 tabIndex={-1} id="error-heading" className="max-w-lg font-sans text-4xl leading-tight font-semibold tracking-tight outline-offset-4 focus-visible:outline-2 focus-visible:outline-olive sm:text-6xl">Let’s give that<br />another try.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">We couldn’t load this page. Try again, or head back to Morrow to start fresh.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button onClick={retry} disabled={retrying}>
                <span role="status">{retrying ? "Trying again…" : "Try again"}</span>
              </Button>
              <a href="/" className="inline-flex min-h-12 items-center font-semibold text-olive underline underline-offset-4 outline-offset-4 focus-visible:outline-2 focus-visible:outline-olive">Back to Morrow</a>
            </div>
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
