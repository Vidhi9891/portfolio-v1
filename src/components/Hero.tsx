function Hero() {
  return (
    <section
      aria-labelledby="hero-name"
      className="bg-slate-950 text-slate-100"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-6 py-16 md:justify-center md:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div
          aria-labelledby="photo-booth-title"
          role="region"
          className="w-full rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6"
        >
          <h2 id="photo-booth-title" className="text-xl font-semibold">
            Photo Booth Journey
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            A placeholder visual timeline for four growth stages.
          </p>

          <div
            aria-label="Film strip container"
            className="mt-6 rounded-xl border border-slate-700/60 bg-slate-900 p-4"
          >
            <ol
              aria-label="Photo booth film strip frames"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              <li>
                <article
                  aria-label="Photo frame: Student"
                  className="h-full rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <h3 className="text-base font-medium">Student</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Placeholder frame content.
                  </p>
                </article>
              </li>
              <li>
                <article
                  aria-label="Photo frame: Designer"
                  className="h-full rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <h3 className="text-base font-medium">Designer</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Placeholder frame content.
                  </p>
                </article>
              </li>
              <li>
                <article
                  aria-label="Photo frame: Builder"
                  className="h-full rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <h3 className="text-base font-medium">Builder</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Placeholder frame content.
                  </p>
                </article>
              </li>
              <li>
                <article
                  aria-label="Photo frame: Still Figuring It Out"
                  className="h-full rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <h3 className="text-base font-medium">Still Figuring It Out</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Placeholder frame content.
                  </p>
                </article>
              </li>
            </ol>
          </div>
        </div>

        <div
          aria-labelledby="hero-name"
          role="region"
          className="w-full rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6"
        >
          <header>
            <h1 id="hero-name" className="text-3xl font-bold md:text-4xl">
              Your Name
            </h1>
            <p className="mt-3 text-lg text-slate-300">Role Statement</p>
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
              className="rounded-md border border-slate-500 px-5 py-2.5 font-medium text-slate-100"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Hero
