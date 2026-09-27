import CoffeeMark from "./CoffeeMark";

const steps = [
  {
    number: "01",
    title: "Claim your offer",
    description:
      "Leave your name and mobile number. Your ₹150 offer is just a moment away.",
  },
  {
    number: "02",
    title: "Keep it handy",
    description:
      "Copy the code or save a screenshot. No app to download, no inbox to check.",
  },
  {
    number: "03",
    title: "Make yourself at home",
    description:
      "Come back to Morrow and show your code when you order. Here’s to another good day.",
  },
];

const ClaimSteps = () => {
  return (
    <section
      className="relative mx-5 rounded-3xl bg-olive text-contrast sm:mx-8 lg:mx-auto lg:max-w-7xl"
      aria-labelledby="how-heading"
    >
      <div className="absolute top-8 right-5 sm:top-10 sm:right-8 lg:right-12">
        <CoffeeMark />
      </div>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="mb-10 min-h-32 pr-24 sm:min-h-40 sm:pr-40 lg:mb-12 lg:pr-48">
          <p className="mb-4 text-sm font-medium tracking-[0.12em] text-contrast/80 uppercase">
            From this visit to the next
          </p>
          <h2
            id="how-heading"
            className="font-sans text-3xl leading-tight font-medium tracking-tight text-contrast sm:text-4xl"
          >
            A good reason to return.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-contrast/90 sm:text-lg">
            A little thank you, in three simple steps.
          </p>
        </div>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative grid grid-cols-[3rem_1fr] gap-x-5 md:block"
            >
              {step.number !== "03" && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 -bottom-6 left-6 w-px bg-contrast/25 md:top-6 md:-right-6 md:bottom-auto md:left-16 md:h-px md:w-auto lg:right-[-40px]"
                />
              )}
              <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-contrast/35 bg-olive font-sans text-base font-medium leading-none text-contrast">
                {step.number}
              </span>
              <div className="pt-1 md:pt-6">
                <h3 className="font-sans text-xl leading-snug font-semibold text-contrast">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-contrast/85">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ClaimSteps;
