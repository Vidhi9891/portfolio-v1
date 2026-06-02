function Hero() {
  return (
    <section
      aria-labelledby="hero-name"
      className="bg-blue-950 text-slate-100"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-6 pb-10 pt-20 md:justify-center md:px-10 lg:flex-row lg:items-center lg:gap-14">

        {/* PHOTO BOOTH */}
        <section
          aria-labelledby="photo-booth-title"
          className="w-full"
        >
          <h2 id="photo-booth-title" className="text-xl font-semibold text-slate-100">
            Photo Booth Journey
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            A placeholder visual timeline for four growth stages.
          </p>

          <div
            aria-label="Film strip container"
            className="mt-6 rounded-xl border border-slate-700/70 bg-blue-950 p-4"
          >
            <ol
              aria-label="Photo booth film strip frames"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { title: 'Still Figuring It Out', description: 'Placeholder frame content.' },
                { title: 'Builder', description: 'Placeholder frame content.' },
                { title: 'Designer', description: 'Placeholder frame content.' },
                { title: 'Student', description: 'Placeholder frame content.' },
              ].map((frame) => (
                <li key={frame.title}>
                  <article
                    aria-label={`Photo frame: ${frame.title}`}
                    className="h-full rounded-lg border border-slate-700/80 bg-slate-900 p-4"
                  >
                    <h3 className="text-base font-medium">
                      {frame.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
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
          className="w-full"
        >
          <h2 id="hero-intro-title" className="sr-only">
            Hero Intro
          </h2>

          <header>
            <h1 id="hero-name" className="text-4xl font-bold tracking-tight md:text-5xl">
              Your Name
            </h1>

            <p className="mt-3 text-lg text-slate-300">
              Role Statement
            </p>
          </header>

          <p className="mt-6 max-w-prose text-base text-slate-200">
            Short introduction about current focus, ongoing exploration, and the
            work being built right now.
          </p>

          <nav
            aria-label="Hero call to action"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              className="rounded-md bg-slate-100 px-5 py-2.5 font-medium text-slate-900"
            >
              View Projects
            </button>

            <button
              type="button"
              className="rounded-md border border-slate-600 px-5 py-2.5 font-medium text-slate-100"
            >
              Contact
            </button>
          </nav>
        </section>

      </div>
    </section>
  )
}

export default Hero