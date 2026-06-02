import { useEffect, useRef, useState } from 'react'

function Projects() {
  const projects = [
    {
      name: 'Portfolio Landing Page',
      description:
        'A personal portfolio homepage focused on semantic sections and responsive layout foundations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      liveDemo: '#',
      accent: 'border-indigo-500/40',
    },
    {
      name: 'Task Tracker UI',
      description:
        'A beginner-friendly task manager interface with reusable cards, status groups, and clean structure.',
      techStack: ['React', 'JavaScript', 'CSS'],
      github: '#',
      liveDemo: '#',
      accent: 'border-cyan-500/40',
    },
    {
      name: 'Weather Snapshot App',
      description:
        'A small weather app concept for practicing API data mapping and simple condition-based rendering.',
      techStack: ['React', 'TypeScript', 'REST API'],
      github: '#',
      liveDemo: '#',
      accent: 'border-emerald-500/40',
    },
    {
      name: 'Component Practice Library',
      description:
        'A growing set of UI components built to improve consistency, spacing systems, and code reuse.',
      techStack: ['React', 'Tailwind CSS', 'Storybook'],
      github: '#',
      liveDemo: '#',
      accent: 'border-fuchsia-500/40',
    },
    {
      name: 'Blog Layout Prototype',
      description:
        'A simple content layout prototype to learn typography hierarchy and mobile-first page composition.',
      techStack: ['HTML', 'Tailwind CSS', 'Vite'],
      github: '#',
      liveDemo: '#',
      accent: 'border-amber-500/40',
    },
    {
      name: 'Form Validation Practice',
      description:
        'A form-focused mini project for handling validation states, error feedback, and user-friendly messages.',
      techStack: ['React', 'TypeScript', 'Zod'],
      github: '#',
      liveDemo: '#',
      accent: 'border-rose-500/40',
    },
  ] as const

  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    () => projects.map(() => false),
  )
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const indexValue = entry.target.getAttribute('data-project-index')
          const index = Number(indexValue)
          if (Number.isNaN(index)) return

          setVisibleCards((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })

          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      aria-labelledby="projects-title"
      className="bg-blue-950 px-6 py-16 text-slate-100 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-12">
          <h2 id="projects-title" className="text-2xl font-semibold md:text-3xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            A collection of projects and learning experiments that show how I
            approach interface design, structure, and implementation.
          </p>
        </header>

        <div aria-label="Project list area" role="region">
          <ul
            aria-label="Project explorer folders"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <li key={project.name}>
                <article
                  ref={(element) => {
                    cardRefs.current[index] = element
                  }}
                  data-project-index={index}
                  aria-label={`${project.name} folder card`}
                  className={`rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-sm transform-gpu transition duration-700 ease-out ${project.accent} ${
                    visibleCards[index]
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  <header className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Folder
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-slate-100">
                      {project.name}
                    </h3>
                  </header>

                  <p className="text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Tech Stack
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <nav aria-label={`${project.name} links`} className="mt-5 flex gap-4">
                    <a href={project.github} className="text-sm text-slate-200 underline">
                      GitHub
                    </a>
                    <a href={project.liveDemo} className="text-sm text-slate-200 underline">
                      Live Demo
                    </a>
                  </nav>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
