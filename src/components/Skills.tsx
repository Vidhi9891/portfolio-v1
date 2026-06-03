function Skills() {
  const skillGroups = [
    {
      title: 'Programming',
      skills: [
        {
          name: 'JavaScript',
          description: 'Building basic app logic and UI behavior.',
        },
        {
          name: 'TypeScript',
          description: 'Learning safer typing for React components.',
        },
        {
          name: 'React',
          description: 'Creating reusable components and page sections.',
        },
      ],
    },
    {
      title: 'Design',
      skills: [
        { name: 'Figma', description: 'Planning layouts before writing code.' },
        {
          name: 'Wireframing',
          description: 'Mapping screen structure and user flow.',
        },
        {
          name: 'UI Basics',
          description: 'Keeping hierarchy, spacing, and contrast clear.',
        },
      ],
    },
    {
      title: 'Tools',
      skills: [
        {
          name: 'Git & GitHub',
          description: 'Managing versions and project history.',
        },
        {
          name: 'VS Code',
          description: 'Daily editor setup for development work.',
        },
        {
          name: 'Chrome DevTools',
          description: 'Checking layout, styles, and console errors.',
        },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        {
          name: 'Communication',
          description: 'Explaining decisions and asking clear questions.',
        },
        {
          name: 'Consistency',
          description: 'Maintaining a regular build-and-learn routine.',
        },
        {
          name: 'Problem Solving',
          description: 'Breaking tasks into smaller, workable steps.',
        },
      ],
    },
  ] as const

  return (
    <section
      aria-labelledby="skills-title"
      className="bg-transparent px-6 py-24 text-slate-200 md:px-10 font-sans"
      id="skills"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-14">
          <span className="text-[#34d399] font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            // 03. CAPABILITIES
          </span>
          <h2 id="skills-title" className="text-3xl font-extrabold tracking-tight text-slate-50 md:text-4xl font-heading">
            Skills & Tools
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base leading-relaxed">
            A practical mix of technical and collaborative skills I use while
            building projects and improving step by step.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-3 relative z-10">
          {/* Programming Group */}
          <article className="rounded-xl border border-[#20315c] bg-[#16223f] p-6 shadow-md w-full lg:col-start-1 lg:row-start-1 lg:place-self-end">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34d399] mb-4">
              // {skillGroups[0].title}
            </h3>
            <ul className="space-y-4">
              {skillGroups[0].skills.map((skill) => (
                <li key={skill.name} className="border-l-2 border-l-[#34d399] pl-3">
                  <p className="text-sm font-bold text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Design Group */}
          <article className="rounded-xl border border-[#20315c] bg-[#16223f] p-6 shadow-md w-full lg:col-start-3 lg:row-start-1 lg:place-self-start">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#f59e0b] mb-4">
              // {skillGroups[1].title}
            </h3>
            <ul className="space-y-4">
              {skillGroups[1].skills.map((skill) => (
                <li key={skill.name} className="border-l-2 border-l-[#f59e0b] pl-3">
                  <p className="text-sm font-bold text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Hub */}
          <section
            aria-labelledby="skills-hub-title"
            className="rounded-2xl border border-[#20315c] bg-[#16223f] px-8 py-12 text-center shadow-lg lg:col-start-2 lg:row-start-2 flex flex-col justify-center items-center relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#3b82f6] via-[#34d399] to-[#fb7185]"></div>
            <h3 id="skills-hub-title" className="text-3xl font-black tracking-widest text-slate-100 font-heading">
              SKILLS
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-xs text-slate-400 font-mono leading-relaxed uppercase">
              // CORE STACK & PRACTICE
            </p>
          </section>

          {/* Tools Group */}
          <article className="rounded-xl border border-[#20315c] bg-[#16223f] p-6 shadow-md w-full lg:col-start-1 lg:row-start-3 lg:place-self-end">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3b82f6] mb-4">
              // {skillGroups[2].title}
            </h3>
            <ul className="space-y-4">
              {skillGroups[2].skills.map((skill) => (
                <li key={skill.name} className="border-l-2 border-l-[#3b82f6] pl-3">
                  <p className="text-sm font-bold text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Soft Skills Group */}
          <article className="rounded-xl border border-[#20315c] bg-[#16223f] p-6 shadow-md w-full lg:col-start-3 lg:row-start-3 lg:place-self-start">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#fb7185] mb-4">
              // {skillGroups[3].title}
            </h3>
            <ul className="space-y-4">
              {skillGroups[3].skills.map((skill) => (
                <li key={skill.name} className="border-l-2 border-l-[#fb7185] pl-3">
                  <p className="text-sm font-bold text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Subtle grid connectors */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-0 hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 opacity-35"
        >
          <div className="col-start-1 row-start-1 place-self-center h-10 w-px bg-[#20315c]" />
          <div className="col-start-3 row-start-1 place-self-center h-10 w-px bg-[#20315c]" />
          <div className="col-start-1 row-start-3 place-self-center h-10 w-px bg-[#20315c]" />
          <div className="col-start-3 row-start-3 place-self-center h-10 w-px bg-[#20315c]" />
          <div className="col-start-2 row-start-1 place-self-center h-8 w-px bg-[#20315c]" />
          <div className="col-start-2 row-start-3 place-self-center h-8 w-px bg-[#20315c]" />
          <div className="col-start-1 row-start-2 place-self-center h-px w-12 bg-[#20315c]" />
          <div className="col-start-3 row-start-2 place-self-center h-px w-12 bg-[#20315c]" />
        </div>
      </div>
    </section>
  )
}

export default Skills