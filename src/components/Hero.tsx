function Hero() {
  return (
    <section
      aria-labelledby="hero-name"
      className="bg-transparent text-slate-200 font-sans"
    >
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col gap-12 px-6 pb-16 pt-16 md:justify-center md:px-10 lg:flex-row lg:items-center lg:gap-14">

        {/* PHOTO BOOTH */}
        <section
          aria-labelledby="photo-booth-title"
          className="w-full lg:w-1/2"
        >
          <h2 id="photo-booth-title" className="text-sm font-semibold tracking-wide text-slate-300">
            Photo Booth Journey
          </h2>

          <div
            aria-label="Film strip container"
            className="mt-6 rounded-xl border border-[#20315c] bg-[#16223f] p-5 shadow-xl"
          >
            <ol
              aria-label="Photo booth film strip frames"
              className="grid grid-cols-2 gap-3 lg:grid-cols-4"
            >
              {[
                { text: 'Exploring direction', accentClass: 'border-t-2 border-t-[#3b82f6]' },
                { text: 'Learning fundamentals', accentClass: 'border-t-2 border-t-[#fb7185]' },
                { text: 'Designing interfaces', accentClass: 'border-t-2 border-t-[#f59e0b]' },
                { text: 'Building systems', accentClass: 'border-t-2 border-t-[#34d399]' },
              ].map((frame) => (
                <li key={frame.text}>
                  <div
                    className={`rounded-lg border border-[#20315c] bg-[#0b132b] px-4 py-5 text-center ${frame.accentClass}`}
                  >
                    <span className="text-xs font-medium text-slate-300 leading-snug">
                      {frame.text}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* HERO INTRO */}
        <section
          aria-labelledby="hero-intro-title"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 id="hero-intro-title" className="sr-only">
            Introduction
          </h2>

          <header>
            <h1 id="hero-name" className="text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl lg:text-6xl font-heading leading-tight">
              Your Name
            </h1>

            <p className="mt-3 text-lg text-slate-400">
              developer &amp; builder
            </p>
          </header>

          <p className="mt-6 max-w-prose text-base text-slate-300 leading-relaxed">
            Short introduction about current focus, ongoing exploration, and the
            work being built right now.
          </p>

          <nav
            aria-label="Hero call to action"
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex justify-center items-center rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex justify-center items-center rounded-lg border-2 border-[#20315c] hover:border-slate-500 text-slate-200 px-6 py-3 font-semibold text-sm hover:bg-[#16223f] transition-all duration-200 cursor-pointer active:scale-98"
            >
              Contact Me
            </a>
          </nav>
        </section>

      </div>
    </section>
  )
}

export default Hero