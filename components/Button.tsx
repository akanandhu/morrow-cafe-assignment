import type { ComponentProps, ReactNode } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  contentAlign?: "center" | "between";
};

export default function Button({
  children,
  startAdornment,
  endAdornment,
  contentAlign = "center",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`group inline-flex min-h-14 cursor-pointer items-center gap-3 rounded-xl bg-olive px-5 py-4 text-base font-semibold text-contrast outline-offset-4 transition-colors enabled:hover:bg-ink focus-visible:outline-2 focus-visible:outline-olive disabled:cursor-not-allowed disabled:opacity-70 motion-safe:enabled:active:scale-[0.99] sm:text-lg ${contentAlign === "between" ? "justify-between" : "justify-center"} ${className}`}
    >
      {startAdornment != null && (
        <span className="inline-flex shrink-0 items-center">{startAdornment}</span>
      )}
      <span className="min-w-0">{children}</span>
      {endAdornment != null && (
        <span className="inline-flex shrink-0 items-center">{endAdornment}</span>
      )}
    </button>
  );
}
