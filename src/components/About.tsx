function About() {
  return (
    <section aria-labelledby="about-title" className="bg-blue-950 text-slate-100">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <header className="mb-8 md:mb-10">
          <h2 id="about-title" className="text-2xl font-semibold md:text-3xl">
            About
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            A quick look at who I am, what I am building now, and where I want
            to grow next.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <figure className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6">
            <div className="flex min-h-80 items-center justify-center rounded-xl border border-dashed border-slate-600 bg-slate-900 text-slate-300">
              Portrait / Illustration Placeholder
            </div>
            <figcaption className="mt-4 text-sm text-slate-400">
              Container reserved for a future portrait or custom illustration.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <article
              aria-labelledby="who-i-am-title"
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"
            >
              <h3 id="who-i-am-title" className="text-lg font-medium">
                Who I Am
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                I am a design-minded developer who enjoys turning early ideas
                into thoughtful digital experiences that feel clear, useful, and
                human.
              </p>
            </article>

            <article
              aria-labelledby="current-focus-title"
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"
            >
              <h3 id="current-focus-title" className="text-lg font-medium">
                Current Focus
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Right now I am strengthening full-stack fundamentals, refining
                component architecture, and shipping portfolio projects with
                cleaner structure and better usability.
              </p>
            </article>

            <article
              aria-labelledby="design-interests-title"
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"
            >
              <h3 id="design-interests-title" className="text-lg font-medium">
                Design Interests
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                I am drawn to interaction design, visual storytelling, and
                layout systems that balance personality with clarity across
                different screen sizes.
              </p>
            </article>

            <article
              aria-labelledby="development-interests-title"
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"
            >
              <h3
                id="development-interests-title"
                className="text-lg font-medium"
              >
                Development Interests
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                I enjoy building with React and TypeScript, improving code
                quality through reusable patterns, and translating interface
                concepts into maintainable production code.
              </p>
            </article>

            <article
              aria-labelledby="future-aspirations-title"
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-5"
            >
              <h3 id="future-aspirations-title" className="text-lg font-medium">
                Future Aspirations
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                My goal is to grow into a product engineer who can bridge design
                and development, lead end-to-end execution, and build digital
                products with long-term impact.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
