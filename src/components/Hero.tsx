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
          <div className="flex items-center gap-2">
            <span className="text-[#fb7185] font-mono text-xs font-bold uppercase tracking-wider">// 01. HISTORY</span>
            <h2 id="photo-booth-title" className="text-sm font-bold tracking-widest uppercase text-slate-100 font-mono">
              Photo Booth Journey
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            A visual growth timeline showing active learning and building stages.
          </p>

          <div
            aria-label="Film strip container"
            className="mt-6 rounded-xl border border-[#20315c] bg-[#16223f] p-5 shadow-xl"
          >
            <ol
              aria-label="Photo booth film strip frames"
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {[
                { title: 'Still Figuring It Out', description: 'Exploring code fundamentals, syntax, and finding the joy of building.', accentClass: 'border-t-2 border-t-[#3b82f6]' },
                { title: 'Builder', description: 'Translating visual mockups into clean, semantic, and interactive web layouts.', accentClass: 'border-t-2 border-t-[#fb7185]' },
                { title: 'Designer', description: 'Striving for visual balance, consistent typography, and clean spacing.', accentClass: 'border-t-2 border-t-[#f59e0b]' },
                { title: 'Student', description: 'Continuously reading docs, testing systems, and growing step-by-step.', accentClass: 'border-t-2 border-t-[#34d399]' },
              ].map((frame) => (
                <li key={frame.title}>
                  <article
                    aria-label={`Photo frame: ${frame.title}`}
                    className={`h-full rounded-lg border border-[#20315c] bg-[#0b132b] p-5 transition-all duration-300 hover:border-slate-500 ${frame.accentClass}`}
                  >
                    <h3 className="text-sm font-bold text-slate-100 tracking-tight">
                      {frame.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {frame.description}
                    </p>
                  </article>
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
            Hero Intro
          </h2>

          <header>
            <span className="text-[#3b82f6] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
              // HELLO WORLD
            </span>
            <h1 id="hero-name" className="text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl lg:text-6xl font-heading leading-tight">
              Your Name
            </h1>

            <p className="mt-3 text-lg font-medium text-[#34d399] font-mono">
              Creative Developer & Builder
            </p>
          </header>

          <p className="mt-6 max-w-prose text-base text-slate-300 leading-relaxed">
            I am a design-focused developer building web projects that pair structural clean code with custom interactive details. Actively learning and improving my craft daily.
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