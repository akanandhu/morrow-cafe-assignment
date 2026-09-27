import type { SVGProps } from "react";

export default function ChevronRight({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={`block size-6 shrink-0 ${className}`} {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
