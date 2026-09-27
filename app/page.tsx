import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cafeCoffee from "../public/cafe1.webp";
import ClaimSteps from "../components/ClaimSteps";
import Hero from "../components/Hero";
import ChevronUpRight from "../components/icons/ChevronUpRight";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClaimSteps />
        <section
          aria-labelledby="cafe-heading"
          className="mx-auto grid w-full max-w-7xl items-center gap-9 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:px-12 lg:py-24"
        >
          <figure className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-sage">
            <Image
              src={cafeCoffee}
              alt="Three freshly made coffees with latte art, nestled among green plants on a wooden table"
              fill
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 52vw, (min-width: 768px) calc((100vw - 96px) / 2), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover"
              placeholder="blur"
            />
          </figure>
          <div>
            <p className="mb-6 text-sm font-semibold tracking-[0.14em] text-olive uppercase">
              Stay a little longer
            </p>
            <h2
              id="cafe-heading"
              className="font-sans text-4xl leading-[1.1] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Some things
              <br />
              are better
              <br />
              <span className="text-olive">unhurried.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              The first sip. The catch-up that turns into an afternoon. The
              table you always come back to.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              We’re glad Morrow is part of your day. Here’s a little something
              for the next one.
            </p>
            <a
              href="#claim"
              className="group mt-8 inline-flex min-h-12 items-center gap-7 border-b border-ink pb-2 text-lg font-semibold outline-offset-8 focus-visible:outline-2 focus-visible:outline-olive"
            >
              Make your next visit a little sweeter{" "}
              <ChevronUpRight className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
