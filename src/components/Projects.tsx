import { useState } from 'react'

function Projects() {
  const projects = [
    {
      num: '01',
      name: 'Portfolio Website',
      description:
        'A personal portfolio homepage focused on semantic sections and responsive layout foundations.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      liveDemo: '#',
      theme: 'from-blue-600 to-sky-600',
      placeholder: 'from-blue-500 to-sky-500',
      text: 'text-white',
      badgeText: 'text-blue-100 bg-white/20',
      btnPrimary: 'bg-white text-blue-900 hover:bg-blue-50',
      btnSecondary: 'border-white/30 bg-white/10 hover:bg-white/20 text-white',
    },
    {
      num: '02',
      name: 'AI Resume Analyzer',
      description:
        'A smart analyzer tool that reviews resume text against job descriptions and provides optimization scores.',
      techStack: ['React', 'Python', 'Tailwind CSS'],
      github: '#',
      liveDemo: '#',
      theme: 'from-rose-500 to-orange-500',
      placeholder: 'from-rose-450 to-orange-450',
      text: 'text-white',
      badgeText: 'text-rose-100 bg-white/20',
      btnPrimary: 'bg-white text-rose-900 hover:bg-rose-50',
      btnSecondary: 'border-white/30 bg-white/10 hover:bg-white/20 text-white',
    },
    {
      num: '03',
      name: 'Study Together',
      description:
        'A collaborative learning platform that lets students create shared flashcards and virtual study rooms.',
      techStack: ['React', 'Node.js', 'WebSockets'],
      github: '#',
      liveDemo: '#',
      theme: 'from-emerald-500 to-teal-600',
      placeholder: 'from-emerald-400 to-teal-500',
      text: 'text-white',
      badgeText: 'text-emerald-100 bg-white/20',
      btnPrimary: 'bg-white text-emerald-900 hover:bg-emerald-50',
      btnSecondary: 'border-white/30 bg-white/10 hover:bg-white/20 text-white',
    },
    {
      num: '04',
      name: 'Habit Tracker',
      description:
        'A gamified tracking interface for building daily habits with custom streaks and achievements.',
      techStack: ['React', 'TypeScript', 'Zustand'],
      github: '#',
      liveDemo: '#',
      theme: 'from-amber-400 to-yellow-500',
      placeholder: 'from-amber-350 to-yellow-450',
      text: 'text-slate-950',
      badgeText: 'text-amber-950 bg-black/10',
      btnPrimary: 'bg-slate-950 text-white hover:bg-slate-900',
      btnSecondary: 'border-slate-950/20 bg-black/5 hover:bg-black/10 text-slate-950',
    },
    {
      num: '05',
      name: 'Component Library',
      description:
        'A modular, accessible library of UI components built for custom animations and layout grids.',
      techStack: ['React', 'Tailwind CSS', 'Storybook'],
      github: '#',
      liveDemo: '#',
      theme: 'from-indigo-500 to-purple-600',
      placeholder: 'from-indigo-400 to-purple-500',
      text: 'text-white',
      badgeText: 'text-indigo-100 bg-white/20',
      btnPrimary: 'bg-white text-indigo-900 hover:bg-indigo-50',
      btnSecondary: 'border-white/30 bg-white/10 hover:bg-white/20 text-white',
    },
    {
      num: '06',
      name: 'Form Validation Practice',
      description:
        'A playground for testing complex multi-step forms, real-time validations, and clean error states.',
      techStack: ['React', 'TypeScript', 'Zod'],
      github: '#',
      liveDemo: '#',
      theme: 'from-pink-500 to-fuchsia-600',
      placeholder: 'from-pink-400 to-fuchsia-500',
      text: 'text-white',
      badgeText: 'text-pink-100 bg-white/20',
      btnPrimary: 'bg-white text-pink-900 hover:bg-pink-50',
      btnSecondary: 'border-white/30 bg-white/10 hover:bg-white/20 text-white',
    },
  ] as const

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [todoMessage, setTodoMessage] = useState<string | null>(null)

  const handleCardClick = (index: number) => {
    if (expandedIndex === index) {
      // Second click on active elements: prepare navigation hook for future project detail pages
      console.log(`Navigation Hook Triggered: /project/${projects[index].name.toLowerCase().replace(/\s+/g, '-')}`)
      setTodoMessage(`Navigation Hook Triggered: Loading Case Study for "${projects[index].name}"...`)
      setTimeout(() => setTodoMessage(null), 3000)
    } else {
      setExpandedIndex(index)
      setTodoMessage(null)
    }
  }

  const getCardMargin = (index: number) => {
    if (expandedIndex === null) {
      return index === 0 ? 'mt-0' : '-mt-2'
    }
    if (index === expandedIndex) {
      return index === 0 ? 'mt-0 mb-6 md:mb-8' : 'mt-6 md:mt-8 mb-6 md:mb-8'
    }
    if (index === expandedIndex + 1) {
      return 'mt-0'
    }
    return index === 0 ? 'mt-0' : '-mt-2'
  }

  const getCardOpacity = (index: number) => {
    if (expandedIndex === null) return 'opacity-100'
    return index === expandedIndex ? 'opacity-100 scale-[1.015]' : 'opacity-45 hover:opacity-75'
  }

  return (
    <section
      aria-labelledby="projects-title"
      className="bg-transparent px-6 py-24 text-slate-200 md:px-10 font-sans"
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-14 text-center md:mb-20">
          <span className="text-[#fb7185] font-mono text-xs font-bold tracking-widest uppercase block mb-2">
            // 04. SELECTION
          </span>
          <h2 id="projects-title" className="text-3xl font-extrabold tracking-tight text-slate-50 md:text-4xl font-heading">
            Projects Explorer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base leading-relaxed">
            Click on a folder tab to open it. Click again or select "Explore Case Study" to navigate.
          </p>
        </header>

        <div className="mx-auto max-w-3xl" aria-label="Project list area" role="region">
          <ul className="flex flex-col pb-16">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index
              return (
                <li
                  key={project.name}
                  className={`w-full transition-all duration-500 ease-in-out transform-gpu flex flex-col ${getCardMargin(
                    index,
                  )} ${getCardOpacity(index)} ${isExpanded ? 'max-h-[950px]' : 'max-h-16 overflow-hidden'}`}
                  style={{
                    zIndex: isExpanded ? 50 : index,
                    // Use drop-shadow filter to automatically outline both the tab and the body perfectly
                    filter: isExpanded
                      ? 'drop-shadow(0 25px 30px rgba(0, 0, 0, 0.5))'
                      : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))',
                  }}
                  // Click anywhere on the collapsed card to expand
                  onClick={!isExpanded ? () => handleCardClick(index) : undefined}
                >
                  {/* Folder Tab */}
                  <div
                    onClick={
                      isExpanded
                        ? (e) => {
                            e.stopPropagation()
                            handleCardClick(index) // Click tab of active folder to trigger case study
                          }
                        : undefined
                    }
                    className={`w-52 sm:w-64 h-12 flex items-center px-6 bg-gradient-to-br ${
                      project.theme
                    } text-xs sm:text-sm font-bold tracking-tight rounded-t-xl transition-all duration-500 ease-in-out cursor-pointer relative z-10`}
                    style={{
                      clipPath: 'polygon(0% 0%, 72% 0%, 76% 4%, 80% 15%, 86% 65%, 90% 88%, 95% 98%, 100% 100%, 0% 100%)',
                    }}
                  >
                    <span className={`mr-2.5 opacity-60 font-mono ${project.text}`}>
                      {project.num}
                    </span>
                    <span className={`truncate ${project.text}`}>
                      {project.name}
                    </span>
                  </div>

                  {/* Folder Body */}
                  <div
                    className={`w-full bg-gradient-to-br ${
                      project.theme
                    } rounded-tr-2xl rounded-b-2xl border-t border-white/10 transition-all duration-500 ease-in-out flex-1 relative`}
                    // Click inside body does nothing (isolates clicks from parent li when expanded)
                    onClick={isExpanded ? (e) => e.stopPropagation() : undefined}
                  >
                    {/* Collapse Button (Only visible when expanded) */}
                    {isExpanded && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedIndex(null)
                        }}
                        aria-label="Collapse project folder"
                        className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-black/10 hover:bg-black/25 opacity-70 hover:opacity-100 cursor-pointer"
                      >
                        <svg
                          className={`w-4 h-4 ${project.text}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>
                    )}

                    {/* Folder Body Content */}
                    <div className="px-6 py-8 md:px-8 md:py-10">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Left Side: Metadata & Links */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3
                              className={`text-xl md:text-2xl font-extrabold tracking-tight mb-4 ${project.text}`}
                            >
                              {project.name}
                            </h3>
                            <p
                              className={`text-sm md:text-base leading-relaxed opacity-95 ${project.text}`}
                            >
                              {project.description}
                            </p>
                            <div className="mt-6">
                              <h4
                                className={`text-xs uppercase tracking-wider font-bold opacity-60 mb-2.5 ${project.text}`}
                              >
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className={`text-xs px-2.5 py-1 rounded-md font-medium ${project.badgeText}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Links */}
                          <div className="mt-8 flex flex-wrap gap-3">
                            <a
                              href={project.github}
                              onClick={(e) => e.stopPropagation()}
                              className={`px-4.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm ${project.btnPrimary}`}
                            >
                              GitHub
                            </a>
                            <a
                              href={project.liveDemo}
                              onClick={(e) => e.stopPropagation()}
                              className={`px-4.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${project.btnSecondary}`}
                            >
                              Live Demo
                            </a>
                          </div>
                        </div>

                        {/* Right Side: Preview & Explore Action */}
                        <div className="flex flex-col justify-between gap-4">
                          {/* Visual Gradient Block Placeholder */}
                          <div
                            className={`w-full h-44 bg-gradient-to-br ${project.placeholder} rounded-xl shadow-inner border border-white/10 flex flex-col items-center justify-center p-4 text-center`}
                          >
                            <span
                              className={`text-xs font-bold uppercase tracking-wider opacity-50 ${project.text}`}
                            >
                              Visual Preview
                            </span>
                            <span className={`text-[10px] mt-1 opacity-40 ${project.text}`}>
                              Case Study & Mockups Coming Soon
                            </span>
                          </div>

                          {/* Case study trigger */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCardClick(index)
                            }}
                            className={`w-full py-3 px-4 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 bg-black/15 hover:bg-black/30 text-center cursor-pointer border border-white/5 ${project.text}`}
                          >
                            Explore Case Study →
                          </button>
                        </div>
                      </div>

                      {/* Simple Inline TODO Navigation Notification */}
                      {todoMessage && (
                        <div className="mt-6 p-3.5 rounded-xl bg-black/25 border border-white/10 text-xs text-amber-300 font-bold text-center animate-pulse">
                          {todoMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
