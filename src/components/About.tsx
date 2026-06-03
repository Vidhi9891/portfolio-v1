function About() {
  return (
    <section aria-labelledby="about-title" className="bg-transparent text-slate-200 py-24 font-sans" id="about">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <span className="text-[#fb7185] font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            // 02. PROFILE
          </span>
          <h2 id="about-title" className="text-3xl font-extrabold tracking-tight text-slate-50 md:text-4xl font-heading">
            About Me
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base leading-relaxed">
            A quick look at who I am, what I am building now, and where I want
            to grow next.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <figure className="p-0">
            <div className="flex min-h-80 items-center justify-center rounded-2xl border border-[#20315c] bg-[#16223f] text-slate-300 shadow-md relative overflow-hidden group">
              <div className="absolute -inset-px bg-gradient-to-br from-[#fb7185]/10 to-transparent opacity-50"></div>
              <span className="relative font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                [ Portrait / Illustration Placeholder ]
              </span>
            </div>
            <figcaption className="mt-4 text-xs text-slate-500 font-mono">
              // Container reserved for a future portrait or custom illustration.
            </figcaption>
          </figure>

          <div className="max-w-2xl space-y-8">
            <article aria-labelledby="who-i-am-title" className="border-l-2 border-l-[#3b82f6] pl-4">
              <h3 id="who-i-am-title" className="text-base font-bold text-slate-100 tracking-tight font-heading">
                Who I Am
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                I am a design-minded developer who enjoys turning early ideas
                into thoughtful digital experiences that feel clear, useful, and
                human.
              </p>
            </article>

            <article aria-labelledby="current-focus-title" className="border-l-2 border-l-[#fb7185] pl-4">
              <h3 id="current-focus-title" className="text-base font-bold text-slate-100 tracking-tight font-heading">
                Current Focus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Right now I am strengthening full-stack fundamentals, refining
                component architecture, and shipping portfolio projects with
                cleaner structure and better usability.
              </p>
            </article>

            <article aria-labelledby="design-interests-title" className="border-l-2 border-l-[#f59e0b] pl-4">
              <h3 id="design-interests-title" className="text-base font-bold text-slate-100 tracking-tight font-heading">
                Design Interests
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                I am drawn to interaction design, visual storytelling, and
                layout systems that balance personality with clarity across
                different screen sizes.
              </p>
            </article>

            <article aria-labelledby="development-interests-title" className="border-l-2 border-l-[#34d399] pl-4">
              <h3
                id="development-interests-title"
                className="text-base font-bold text-slate-100 tracking-tight font-heading"
              >
                Development Interests
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                I enjoy building with React and TypeScript, improving code
                quality through reusable patterns, and translating interface
                concepts into maintainable production code.
              </p>
            </article>

            <article aria-labelledby="future-aspirations-title" className="border-l-2 border-l-[#3b82f6] pl-4">
              <h3 id="future-aspirations-title" className="text-base font-bold text-slate-100 tracking-tight font-heading">
                Future Aspirations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
