import ChevronRight from "./icons/ChevronRight";
import Coupon from "./Coupon";
import Image from "next/image";
import cafeInterior from "../public/cafe2.webp"

const Hero = () => {
  return (
    <section
      className="mx-auto grid max-w-7xl gap-8 px-5 pt-5 pb-14 sm:px-8 sm:pt-8 lg:grid-cols-[1.2fr_1fr] lg:gap-x-12 lg:gap-y-8 lg:px-12 lg:pt-10 lg:pb-20 motion-safe:animate-hero-reveal"
      aria-labelledby="offer-heading"
    >
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-sage px-4 py-2 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />A
          little thank you for your next visit
        </p>
        <h1
          id="offer-heading"
          className="font-sans text-[clamp(3.25rem,6.2vw,5.25rem)] leading-[1.04] font-semibold tracking-[-0.055em]"
        >
          Your next visit.
          <br />
          <span className="text-olive">More sweeter.</span>
        </h1>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-muted sm:text-xl">
          Come back for your favourites. Enjoy ₹150 off your next visit to
          Morrow Café — our little way of saying thanks.
        </p>
        <a
          href="#claim"
          className="group mt-7 flex min-h-14 items-center justify-between rounded-xl bg-olive px-6 py-4 text-lg font-medium text-paper outline-offset-4 transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-olive lg:hidden"
        >
          Claim ₹150 OFF{" "}
          <ChevronRight className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
        </a>
      </div>

      <Coupon />

      <figure className="min-w-0 lg:col-start-1 lg:row-start-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-sage">
          <Image
            src={cafeInterior}
            alt="A welcoming café interior with leafy plants, wooden tables, and a coffee bar"
            fill
            sizes="(min-width: 1280px) 620px, (min-width: 1024px) 52vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="object-cover"
            preload
            placeholder="blur"
          />
        </div>
        <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-muted">
          <span>Room for one more conversation.</span>
          <span className="shrink-0">Make yourself at home.</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default Hero;
