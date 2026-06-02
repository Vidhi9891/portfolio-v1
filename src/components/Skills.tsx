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
      className="bg-blue-950 px-6 py-16 text-slate-100 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h2 id="skills-title" className="text-2xl font-semibold md:text-3xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            A practical mix of technical and collaborative skills I use while
            building projects and improving step by step.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-3">
          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 lg:col-start-1 lg:row-start-1 lg:place-self-end">
            <h3 className="text-lg font-medium">{skillGroups[0].title}</h3>
            <ul className="mt-4 space-y-3">
              {skillGroups[0].skills.map((skill) => (
                <li key={skill.name} className="border-l border-slate-700 pl-3">
                  <p className="text-sm font-medium text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-sm text-slate-300">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 lg:col-start-3 lg:row-start-1 lg:place-self-start">
            <h3 className="text-lg font-medium">{skillGroups[1].title}</h3>
            <ul className="mt-4 space-y-3">
              {skillGroups[1].skills.map((skill) => (
                <li key={skill.name} className="border-l border-slate-700 pl-3">
                  <p className="text-sm font-medium text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-sm text-slate-300">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <section
            aria-labelledby="skills-hub-title"
            className="rounded-2xl border-2 border-slate-600 bg-slate-900 px-8 py-10 text-center shadow-sm lg:col-start-2 lg:row-start-2"
          >
            <h3 id="skills-hub-title" className="text-2xl font-bold tracking-wide">
              SKILLS
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-sm text-slate-300">
              Core areas connected through ongoing project work and regular
              practice.
            </p>
          </section>

          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 lg:col-start-1 lg:row-start-3 lg:place-self-end">
            <h3 className="text-lg font-medium">{skillGroups[2].title}</h3>
            <ul className="mt-4 space-y-3">
              {skillGroups[2].skills.map((skill) => (
                <li key={skill.name} className="border-l border-slate-700 pl-3">
                  <p className="text-sm font-medium text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-sm text-slate-300">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-700 bg-slate-900/70 p-5 lg:col-start-3 lg:row-start-3 lg:place-self-start">
            <h3 className="text-lg font-medium">{skillGroups[3].title}</h3>
            <ul className="mt-4 space-y-3">
              {skillGroups[3].skills.map((skill) => (
                <li key={skill.name} className="border-l border-slate-700 pl-3">
                  <p className="text-sm font-medium text-slate-100">
                    {skill.name}
                  </p>
                  <p className="text-sm text-slate-300">{skill.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-0 hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6"
        >
          <div className="col-start-1 row-start-1 place-self-center h-10 w-px bg-slate-700/70" />
          <div className="col-start-3 row-start-1 place-self-center h-10 w-px bg-slate-700/70" />
          <div className="col-start-1 row-start-3 place-self-center h-10 w-px bg-slate-700/70" />
          <div className="col-start-3 row-start-3 place-self-center h-10 w-px bg-slate-700/70" />
          <div className="col-start-2 row-start-1 place-self-center h-8 w-px bg-slate-700/70" />
          <div className="col-start-2 row-start-3 place-self-center h-8 w-px bg-slate-700/70" />
          <div className="col-start-1 row-start-2 place-self-center h-px w-12 bg-slate-700/70" />
          <div className="col-start-3 row-start-2 place-self-center h-px w-12 bg-slate-700/70" />
        </div>
      </div>
    </section>
  )
}

export default Skills