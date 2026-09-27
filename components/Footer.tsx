
const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 border-t border-ink/20 px-5 py-8 sm:px-8 lg:px-12">
      <a
        href="/"
        className="text-3xl font-black tracking-[-0.07em] outline-offset-4 focus-visible:outline-2 focus-visible:outline-olive"
        aria-label="Morrow Café home"
      >
        morrow.
      </a>
      <p className="text-sm text-muted sm:text-base">
        Good coffee. Better company.{" "}
        <span className="block sm:inline">Sector 104, Noida.</span>
      </p>
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} Morrow Café
      </p>
    </footer>
  );
};

export default Footer;
