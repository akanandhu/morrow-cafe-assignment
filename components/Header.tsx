const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 min-[270px]:flex-row min-[270px]:gap-4 sm:px-8 lg:px-12">
      <a
        href="/"
        aria-label="Morrow Café home"
        className="text-4xl font-extrabold tracking-[-0.065em] outline-offset-8 focus-visible:outline-2 focus-visible:outline-olive sm:text-5xl"
      >
        morrow<span className="text-olive">.</span>
      </a>
      <p className="text-center text-sm leading-relaxed font-medium min-[270px]:text-right sm:text-base">
        <span className="hidden sm:inline">
          Coffee. Company. Morrow.
          <br />
        </span>
        <span className="text-muted">Sector 104, Noida</span>
      </p>
    </header>
  );
};

export default Header;
