import { useState, useEffect } from 'react'

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
      tabColor: 'bg-[#0D5C9D]',
    },
    {
      num: '02',
      name: 'AI Resume Analyzer',
      description:
        'A smart analyzer tool that reviews resume text against job descriptions and provides optimization scores.',
      techStack: ['React', 'Python', 'Tailwind CSS'],
      github: '#',
      liveDemo: '#',
      tabColor: 'bg-[#ECC412]',
    },
    {
      num: '03',
      name: 'Project 1',
      description:
        'frontend project: Expense Tracker, Movie Discovery App, Habit Tracker, AI Study Assistant, Weather Dashboard',
      techStack: ['React', 'Tailwind', 'Context API'],
      github: '#',
      liveDemo: '#',
      tabColor: 'bg-[#1C7F46]',
    },
    {
      num: '04',
      name: 'Project 2',
      description:
        'Frontend + backend: Student Notes App, Task Manager, Study Group Platform',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      github: '#',
      liveDemo: '#',
      tabColor: 'bg-[#B0232B]',
    },
    {
      num: '05',
      name: 'Project 3',
      description:
        'One project solving an actual problem.',
      techStack: ['Next.js', 'PostgreSQL', 'Storybook'],
      github: '#',
      liveDemo: '#',
      tabColor: 'bg-[#E5D5C1]',
    },
    {
      num: '06',
      name: 'Project 4',
      description:
        'A playground for testing complex multi-step forms, real-time validations, and clean error states.',
      techStack: ['React', 'TypeScript', 'Zod'],
      github: '#',
      liveDemo: '#',
      tabColor: 'bg-[#95BBEA]', // Reusing Accent Blue for the 6th project
    },
  ] as const

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [todoMessage, setTodoMessage] = useState<string | null>(null)

  // --- NEW: Click Outside Listener ---
  useEffect(() => {
    const handleOutsideClick = () => {
      // If a click reaches the document body, close the expanded folder
      setExpandedIndex(null)
    }

    if (expandedIndex !== null) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [expandedIndex])
  // -----------------------------------

  const handleCardClick = (index: number) => {
    if (expandedIndex === index) {
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
      return index === 0 ? 'mt-0' : '-mt-4'
    }
    if (index === expandedIndex) {
      return index === 0 ? 'mt-0 mb-6 md:mb-8' : 'mt-6 md:mt-8 mb-6 md:mb-8'
    }
    if (index === expandedIndex + 1) {
      return 'mt-0'
    }
    return index === 0 ? 'mt-0' : '-mt-4'
  }

  const getCardOpacity = (index: number) => {
    if (expandedIndex === null) return 'opacity-100'
    return index === expandedIndex ? 'opacity-100 scale-[1.015]' : 'opacity-45 hover:opacity-75'
  }

  const getHeightClass = (index: number, isExpanded: boolean) => {
    if (isExpanded) {
      return 'max-h-[950px]'
    }
    if (index === projects.length - 1 && expandedIndex === null) {
      return 'max-h-[120px]'
    }
    return 'max-h-20 overflow-hidden'
  }

  return (
    <section
      aria-labelledby="projects-title"
      // Global Background
      className="bg-[#053264] px-6 py-24 text-[#FFF8E7] md:px-10 font-['Inter']"
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-14 text-center md:mb-20">
          <h1 id="projects-title" className="text-3xl font-extrabold tracking-tight text-[#FFF8E7] md:text-4xl font-['Space_Grotesk']">
            Projects Explorer
          </h1>
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
                  )} ${getCardOpacity(index)} ${getHeightClass(index, isExpanded)}`}
                  style={{
                    zIndex: isExpanded ? 50 : index,
                    filter: isExpanded
                      ? 'drop-shadow(0 25px 30px rgba(0, 0, 0, 0.5))'
                      : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))',
                  }}
                  // NEW: Stop propagation here to prevent clicks on folders from bubbling up to the document listener
                  onClick={(e) => {
                    e.stopPropagation() 
                    if (!isExpanded) {
                      handleCardClick(index)
                    }
                  }}
                >
                  {/* Folder Tab */}
                  <div
                    onClick={
                      isExpanded
                        ? (e) => {
                            e.stopPropagation()
                            handleCardClick(index)
                          }
                        : undefined
                    }
                    // Folder Tab Color mapping & specific JetBrains Mono typography
                    className={`w-52 sm:w-64 h-12 flex items-center px-6 ${
                      project.tabColor
                    } text-[#053264] text-xs sm:text-sm font-bold tracking-widest rounded-t-xl transition-all duration-500 ease-in-out cursor-pointer relative z-10 font-['JetBrains_Mono']`}
                    style={{
                      clipPath: 'polygon(0% 0%, 72% 0%, 76% 4%, 80% 15%, 86% 65%, 90% 88%, 95% 98%, 100% 100%, 0% 100%)',
                    }}
                  >
                    <span className="mr-2.5 opacity-70">
                      {project.num}
                    </span>
                    <span className="truncate">
                      {project.name}
                    </span>
                  </div>

                  {/* Folder Body */}
                  <div
                    // Open Panel styling: Cream background, subtle white/cream border
                    className={`w-full bg-[#FFF8E7] text-[#053264] rounded-tr-2xl rounded-b-2xl border-t border-[#FFF8E7]/[0.15] transition-all duration-500 ease-in-out flex-1 relative`}
                    onClick={isExpanded ? (e) => e.stopPropagation() : undefined}
                  >
                    {/* Collapse Button (Cross) */}
                    {isExpanded && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedIndex(null)
                        }}
                        aria-label="Collapse project folder"
                        className="absolute top-5 right-5 md:top-7 md:right-7 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-[#053264]/5 hover:bg-[#053264]/15 text-[#053264] cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          {/* Cross / X Path */}
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}

                    {/* Folder Body Content */}
                    <div className={`px-6 py-8 md:px-8 md:py-10 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        
                        {/* Left Side */}
                        <div className="flex flex-col justify-between">
                          <div>
                            {/* Project Heading: Space Grotesk */}
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 font-['Space_Grotesk'] text-[#053264]">
                              {project.name}
                            </h3>
                            {/* Description: Inter */}
                            <p className="text-sm md:text-base leading-relaxed opacity-90 font-['Inter'] text-[#053264]">
                              {project.description}
                            </p>
                            <div className="mt-6">
                              {/* Metadata Heading: JetBrains Mono */}
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2.5 font-['JetBrains_Mono'] text-[#053264]">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    // Labels: JetBrains Mono
                                    className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#053264]/10 border border-[#053264]/20 text-[#053264] font-['JetBrains_Mono'] tracking-wide"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Links */}
                          <div className="mt-8 flex flex-wrap gap-3 font-['JetBrains_Mono']">
                            <a
                              href={project.github}
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm bg-[#053264] text-[#FFF8E7] hover:bg-[#053264]/90"
                            >
                              GitHub
                            </a>
                            <a
                              href={project.liveDemo}
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-[#053264]/30 bg-transparent text-[#053264] hover:bg-[#053264]/10"
                            >
                              Live Demo
                            </a>
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col justify-between gap-4">
                          <div className="w-full h-44 bg-[#053264]/5 rounded-xl shadow-inner border border-[#053264]/10 flex flex-col items-center justify-center p-4 text-center">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-50 text-[#053264] font-['Space_Grotesk']">
                              Visual Preview
                            </span>
                            <span className="text-[10px] mt-1 opacity-50 text-[#053264] font-['Inter']">
                              Case Study & Mockups Coming Soon
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleCardClick(index)
                            }}
                            className="w-full py-3.5 px-4 rounded-xl text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-200 bg-[#053264]/10 hover:bg-[#053264]/20 text-center cursor-pointer border border-[#053264]/15 text-[#053264] font-['Space_Grotesk']"
                          >
                            Explore Case Study →
                          </button>
                        </div>
                      </div>

                      {todoMessage && (
                        <div className="mt-6 p-3.5 rounded-xl bg-[#95BBEA]/20 border border-[#95BBEA]/40 text-xs text-[#053264] font-bold text-center animate-pulse font-['JetBrains_Mono']">
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