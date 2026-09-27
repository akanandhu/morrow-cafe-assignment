import ClaimForm from "./ClaimForm";

const Coupon = () => {
  return (
    <aside
      id="claim"
      aria-labelledby="claim-heading"
      className="relative min-w-0 scroll-mt-6 self-start lg:col-start-2 lg:row-span-2 lg:row-start-1"
    >
      <div className="rounded-t-2xl bg-surface px-6 pt-6 pb-7 mask-[radial-gradient(circle_at_bottom_left,transparent_13px,#000_14px),radial-gradient(circle_at_bottom_right,transparent_13px,#000_14px)] mask-intersect sm:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-olive">
          <span className="font-semibold tracking-widest uppercase">
            A treat from Morrow
          </span>
          <span className="rounded-full border border-olive/25 px-3 py-1 text-xs tracking-wide uppercase">
            Next visit
          </span>
        </div>
        <p className="flex flex-wrap items-baseline gap-x-3 font-sans text-ink">
          <span className="text-6xl leading-none font-semibold tracking-[-0.065em] sm:text-7xl">
            ₹150
          </span>
          <span className="text-2xl font-medium tracking-tight">OFF</span>
        </p>
        <p className="mt-3 text-base text-muted">
          Good coffee. A little extra on us.
        </p>
      </div>
      <div className="relative rounded-b-2xl bg-surface px-6 pt-7 pb-6 mask-[radial-gradient(circle_at_top_left,transparent_13px,#000_14px),radial-gradient(circle_at_top_right,transparent_13px,#000_14px)] mask-intersect sm:px-8 sm:pb-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 border-t-2 border-dashed border-olive/25"
        />
        <ClaimForm>
          <h2
            id="claim-heading"
            className="font-sans text-3xl leading-tight font-semibold tracking-[-0.04em]"
          >
            Make it yours.
          </h2>
          <p className="mt-3 mb-6 text-base leading-relaxed text-muted">
            Just your name and number. Your offer code will appear right here.
          </p>
        </ClaimForm>
      </div>
    </aside>
  );
};

export default Coupon;
