export default function CoffeeMark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-24 w-20 select-none sm:h-36 sm:w-32"
    >
      <div className="absolute top-0 left-[32%] h-[22%] w-[10%] -rotate-12 rounded-l-full border-l-2 border-contrast/50" />
      <div className="absolute top-[3%] left-[49%] h-[18%] w-[10%] rotate-12 rounded-l-full border-l-2 border-contrast/35" />
      <div className="absolute top-[37%] right-[7%] h-[28%] w-[26%] rotate-[-8deg] rounded-r-full border-[3px] border-contrast/75 sm:border-4" />
      <div className="absolute top-[28%] left-[12%] h-[44%] w-[61%] -rotate-6 rounded-b-[42%] rounded-t-[12%] border-[3px] border-contrast/80 bg-olive sm:border-4">
        <div className="absolute -top-0.75 -right-0.75 -left-0.75 h-[25%] rounded-[50%] border-[3px] border-contrast/80 bg-olive sm:-top-1 sm:-right-1 sm:-left-1 sm:border-4" />
        <span className="absolute inset-x-0 top-[34%] text-center font-sans text-lg font-bold leading-none text-contrast/85 sm:text-3xl">
          m.
        </span>
      </div>
      <div className="absolute top-[77%] left-[6%] h-[6%] w-[73%] -rotate-6 rounded-[50%] border-b-2 border-contrast/65" />
      <div className="absolute right-[7%] bottom-0 h-[18%] w-[16%] rotate-35 rounded-[50%] bg-contrast/75">
        <span className="absolute inset-y-[8%] left-[35%] w-[40%] rounded-l-full border-l-2 border-olive" />
      </div>
      <div className="absolute right-[29%] bottom-[1%] h-[15%] w-[13%] -rotate-25 rounded-[50%] bg-contrast/45">
        <span className="absolute inset-y-[8%] left-[35%] w-[40%] rounded-l-full border-l-2 border-olive" />
      </div>
    </div>
  );
}
