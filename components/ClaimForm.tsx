"use client";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Button from "./Button";
import ChevronRight from "./icons/ChevronRight";
import { normalizePhone, validateClaim } from "../lib/claim";

type ClaimState =
  | { status: "idle" }
  | { status: "invalid"; errors: ReturnType<typeof validateClaim> }
  | { status: "submitting" }
  | { status: "error"; message: string }
  | { status: "success"; code: string };

type CopyState =
  | { status: "idle" }
  | { status: "copying" }
  | { status: "copied" }
  | { status: "error"; message: string };

function focusClaimResult(node: HTMLDivElement | null) {
  node?.focus();
}

export default function ClaimForm({ children }: { children: ReactNode }) {
  const [claim, setClaim] = useState<ClaimState>({ status: "idle" });
  const [clipboard, setClipboard] = useState<CopyState>({ status: "idle" });
  const errors = claim.status === "invalid" ? claim.errors : {};

  useEffect(() => {
    if (clipboard.status !== "copied") return;
    const timer = setTimeout(() => setClipboard({ status: "idle" }), 2000);
    return () => clearTimeout(timer);
  }, [clipboard.status]);

  function clearFieldError(event: ChangeEvent<HTMLInputElement>) {
    const field = event.currentTarget.name as "name" | "phone";
    setClaim((current) => {
      if (current.status !== "invalid" || !current.errors[field])
        return current;
      const remaining = { ...current.errors };
      delete remaining[field];
      return Object.keys(remaining).length
        ? { status: "invalid", errors: remaining }
        : { status: "idle" };
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (claim.status === "submitting" || claim.status === "success") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "");
    const nextErrors = validateClaim(name, phone);
    if (Object.keys(nextErrors).length) {
      setClaim({ status: "invalid", errors: nextErrors });
      (
        form.elements.namedItem(
          nextErrors.name ? "name" : "phone",
        ) as HTMLInputElement
      )?.focus();
      return;
    }

    setClaim({ status: "submitting" });
    try {
      const response = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: normalizePhone(phone) }),
        signal: AbortSignal.timeout(12000),
      });
      const result = await response.json();
      if (
        !response.ok ||
        result?.success !== true ||
        typeof result.claimCode !== "string" ||
        !/^MORROW-[A-Z0-9]{4,12}$/.test(result.claimCode)
      )
        throw new Error("claim failed");
      setClaim({ status: "success", code: result.claimCode });
    } catch {
      setClaim({
        status: "error",
        message:
          "We couldn’t claim your offer. Check your connection and try again.",
      });
    }
  }

  async function copy() {
    if (claim.status !== "success" || clipboard.status === "copying") return;
    setClipboard({ status: "copying" });
    try {
      await navigator.clipboard.writeText(claim.code);
      setClipboard({ status: "copied" });
    } catch {
      setClipboard({
        status: "error",
        message:
          "Copy isn’t available. Select the code above or take a screenshot.",
      });
    }
  }
  const inputClasses =
    "h-14 w-full min-w-0 rounded-xl border border-ink/25 bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-olive focus:outline-2 focus:outline-offset-2 focus:outline-olive aria-invalid:border-red-700";

  if (claim.status === "success")
    return (
      <div
        ref={focusClaimResult}
        tabIndex={-1}
        aria-label="Your offer has been claimed"
        className="text-center motion-safe:animate-claim-reveal outline-offset-8 focus-visible:outline-2 focus-visible:outline-olive"
      >
        <div
          className="mx-auto mb-5 grid size-14 place-items-center rounded-full bg-olive text-contrast"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block size-6"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>
        <h2
          id="claim-heading"
          className="font-sans text-3xl font-semibold tracking-tight"
          role="status"
        >
          ₹150 off, claimed.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Show this code at Morrow Café on your next visit.
        </p>
        <div className="my-6 rounded-xl border border-dashed border-ink/30 bg-sage/60 px-3 py-5 text-center font-mono text-lg tracking-wide break-all select-all sm:text-2xl">
          {claim.code}
        </div>
        {clipboard.status === "error" && (
          <p role="alert" className="mb-4 text-sm leading-relaxed text-red-800">
            {clipboard.message}
          </p>
        )}
        <Button
          className="w-full"
          onClick={copy}
          disabled={clipboard.status === "copying"}
          endAdornment={clipboard.status === "copied" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block size-5 shrink-0"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block size-5 shrink-0"
            >
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" />
            </svg>
          )}
        >
          <span aria-live="polite">
            {clipboard.status === "copying"
              ? "Copying…"
              : clipboard.status === "copied"
                ? "Copied!"
                : "Copy your code"}
          </span>
        </Button>
        <p className="mt-4 border-t border-ink/15 pt-4 text-sm leading-relaxed text-muted">
          Demo code · Café redemption is not connected yet.
        </p>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      noValidate
      aria-busy={claim.status === "submitting"}
      className="space-y-6"
    >
      <div>{children}</div>
      <div>
        <label htmlFor="name" className="mb-2 block text-base font-medium">
          Your name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          onChange={clearFieldError}
          placeholder="What should we call you?"
          maxLength={80}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses}
        />
        {errors.name && (
          <p
            className="mt-2 text-sm leading-relaxed text-red-800"
            id="name-error"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-base font-medium">
          Phone number
        </label>
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 left-4 border-r border-ink/25 pr-3 text-base text-muted"
          >
            +91
          </span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            onChange={clearFieldError}
            placeholder="Mobile number"
            maxLength={20}
            required
            aria-invalid={!!errors.phone}
            aria-describedby={`phone-hint${errors.phone ? " phone-error" : ""}`}
            className={`${inputClasses} pl-19`}
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted" id="phone-hint">
          Your 10-digit Indian mobile number.
        </p>
        {errors.phone && (
          <p
            className="mt-2 text-sm leading-relaxed text-red-800"
            id="phone-error"
            role="alert"
          >
            {errors.phone}
          </p>
        )}
      </div>
      {claim.status === "error" && (
        <p
          className="border-l-2 border-red-800 bg-red-50 p-4 text-base leading-relaxed text-red-800"
          role="alert"
        >
          {claim.message}
        </p>
      )}
      <div>
        <Button
          className="w-full"
          type="submit"
          contentAlign="between"
          disabled={claim.status === "submitting"}
          endAdornment={claim.status === "submitting" ? (
            <span
              aria-hidden="true"
              className="h-5 w-5 shrink-0 rounded-full border-2 border-contrast/40 border-t-contrast motion-safe:animate-spin"
            />
          ) : (
            <ChevronRight className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
          )}
        >
          <span role="status">
            {claim.status === "submitting"
              ? "Claiming your offer…"
              : "Claim ₹150 OFF"}
          </span>
        </Button>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Your code appears here. Save it for your next visit.
        </p>
      </div>
    </form>
  );
}
