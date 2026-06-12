import { useState, useEffect } from "react";

function Projects() {
  const projects = [
    // {
    //   num: '01',
    //   name: 'Portfolio Website',
    //   description:
    //     'A responsive portfolio designed and developed from scratch to showcase projects, technical growth, and frontend development skills. Built with reusable components, TypeScript, and a focus on clean user experience.',
    //   techStack: [
    //     'React',
    //     'TypeScript',
    //     'Tailwind CSS',
    //     'Vite'
    //   ],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#0D5C9D]',
    // },

    {
      num: "01",
      name: "Portfolio Website",
      description:
        "A custom-built, responsive portfolio designed to showcase technical projects and design system expertise. Engineered for performance and maintainability.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Vidhi9891/portfolio-v1",
      liveDemo: "https://portfolio-v1-eight-ebon.vercel.app",
      tabColor: "bg-[#0D5C9D]",
    },
    {
      num: "02",
      name: "Currently Exploring",
      description:
        "I am currently focused on building tools that improve my frontend engineering skills and understanding of product development. These areas represent my current development roadmap.",
      techStack: ["React", "TypeScript", "APIs", "Accessibility"],
      github: "",
      liveDemo: "",
      tabColor: "bg-[#ECC412]",
    },

    // {
    //   num: '02',
    //   name: 'AI Resume Analyzer',
    //   description:
    //     'A smart analyzer tool that reviews resume text against job descriptions and provides optimization scores.',
    //   techStack: ['React', 'Python', 'Tailwind CSS'],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#ECC412]',
    // },
    // {
    //   num: '03',
    //   name: 'Project 1',
    //   description:
    //     'frontend project: Expense Tracker, Movie Discovery App, Habit Tracker, AI Study Assistant, Weather Dashboard',
    //   techStack: ['React', 'Tailwind', 'Context API'],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#1C7F46]',
    // },
    // {
    //   num: '04',
    //   name: 'Project 2',
    //   description:
    //     'Frontend + backend: Student Notes App, Task Manager, Study Group Platform',
    //   techStack: ['Node.js', 'Express', 'MongoDB'],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#B0232B]',
    // },
    // {
    //   num: '05',
    //   name: 'Project 3',
    //   description:
    //     'One project solving an actual problem.',
    //   techStack: ['Next.js', 'PostgreSQL', 'Storybook'],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#E5D5C1]',
    // },
    // {
    //   num: '06',
    //   name: 'Project 4',
    //   description:
    //     'A playground for testing complex multi-step forms, real-time validations, and clean error states.',
    //   techStack: ['React', 'TypeScript', 'Zod'],
    //   github: '#',
    //   liveDemo: '#',
    //   tabColor: 'bg-[#95BBEA]', // Reusing Accent Blue for the 6th project
    // },
  ] as const;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [todoMessage, setTodoMessage] = useState<string | null>(null);

  // --- NEW: Click Outside Listener ---
  useEffect(() => {
    const handleOutsideClick = () => {
      // If a click reaches the document body, close the expanded folder
      setExpandedIndex(null);
    };

    if (expandedIndex !== null) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [expandedIndex]);
  // -----------------------------------

  const handleCardClick = (index: number) => {
    if (expandedIndex === index) {
      console.log(
        `Navigation Hook Triggered: /project/${projects[index].name.toLowerCase().replace(/\s+/g, "-")}`,
      );
      setTodoMessage(
        `Navigation Hook Triggered: Loading Case Study for "${projects[index].name}"...`,
      );
      setTimeout(() => setTodoMessage(null), 3000);
    } else {
      setExpandedIndex(index);
      setTodoMessage(null);
    }
  };

  const getCardMargin = (index: number) => {
    if (expandedIndex === null) {
      return index === 0 ? "mt-0" : "-mt-4";
    }
    if (index === expandedIndex) {
      return index === 0 ? "mt-0 mb-6 md:mb-8" : "mt-6 md:mt-8 mb-6 md:mb-8";
    }
    if (index === expandedIndex + 1) {
      return "mt-0";
    }
    return index === 0 ? "mt-0" : "-mt-4";
  };

  const getCardOpacity = (index: number) => {
    if (expandedIndex === null) return "opacity-100";
    return index === expandedIndex
      ? "opacity-100 scale-[1.015]"
      : "opacity-45 hover:opacity-75";
  };

  // const getHeightClass = (index: number, isExpanded: boolean) => {
  //   if (isExpanded) {
  //     return "max-h-[650px]";
  //   }
  //   if (index === projects.length - 1 && expandedIndex === null) {
  //     return "max-h-[120px]";
  //   }
  //   return "max-h-20 overflow-hidden";
  // };
  const getHeightClass = (isExpanded: boolean) => {
    return isExpanded ? "max-h-[650px]" : "max-h-20 overflow-hidden";
  };

  return (
    <section
      aria-labelledby="projects-title"
      // Global Background
      className="relative bg-[#053264] px-6 py-24  text-[#FFF8E7] md:px-10 font-['Inter']"
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-14 text-center md:mb-20">
          <h1
            id="projects-title"
            className="text-3xl font-extrabold tracking-tight text-[#FFF8E7] md:text-4xl font-['Space_Grotesk']"
          >
            Projects Explorer
          </h1>
        </header>

        <div
          className="mx-auto max-w-3xl"
          aria-label="Project list area"
          role="region"
        >
          <ul className="flex flex-col pb-16">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <li
                  key={project.name}
                  className={`w-full transition-all duration-500 ease-in-out transform-gpu flex flex-col ${getCardMargin(
                    index,
                  )} ${getCardOpacity(index)} ${getHeightClass(isExpanded)}`}
                  style={{
                    zIndex: isExpanded ? 50 : index,
                    filter: isExpanded
                      ? "drop-shadow(0 25px 30px rgba(0, 0, 0, 0.5))"
                      : "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))",
                  }}
                  // NEW: Stop propagation here to prevent clicks on folders from bubbling up to the document listener
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isExpanded) {
                      handleCardClick(index);
                    }
                  }}
                >
                  {/* Folder Tab */}
                  <div
                    onClick={
                      isExpanded
                        ? (e) => {
                            e.stopPropagation();
                            handleCardClick(index);
                          }
                        : undefined
                    }
                    // Folder Tab Color mapping & specific JetBrains Mono typography
                    className={`w-52 sm:w-64 h-12 flex items-center px-6 ${
                      project.tabColor
                    } text-[#053264] text-xs sm:text-sm font-bold tracking-widest rounded-t-xl transition-all duration-500 ease-in-out cursor-pointer relative z-10 font-['JetBrains_Mono']`}
                    style={{
                      clipPath:
                        "polygon(0% 0%, 72% 0%, 76% 4%, 80% 15%, 86% 65%, 90% 88%, 95% 98%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <span className="mr-2.5 opacity-70">{project.num}</span>
                    <span className="truncate">{project.name}</span>
                  </div>

                  {/* Folder Body */}
                  <div
                    // Open Panel styling: Cream background, subtle white/cream border
                    className={`w-full bg-[#FFF8E7] text-[#053264] rounded-tr-2xl rounded-b-2xl border-t border-[#FFF8E7]/[0.15] transition-all duration-500 ease-in-out flex flex-col relative overflow-hidden`}
                    onClick={
                      isExpanded ? (e) => e.stopPropagation() : undefined
                    }
                  >
                    {/* Collapse Button (Cross) */}
                    {isExpanded && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Folder Body Content */}
                    <div
                      className={`px-6 py-8 md:px-8 md:py-10 transition-opacity duration-300 ${
                        isExpanded ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 font-['Space_Grotesk'] !text-[#053264]">
                          {project.name}
                        </h3>

                        {project.num === "01" ? (
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                Challenge
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                Create a personal platform that showcases
                                projects, technical growth, and frontend
                                development skills in a clear and engaging way.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                Solution
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                Designed and developed a responsive portfolio
                                using React, TypeScript, reusable components,
                                and a consistent design system.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                What I Learned
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                Improved component architecture, responsive
                                design implementation, TypeScript workflows, and
                                project organization.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                Currently Working On
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                Building stronger frontend engineering
                                fundamentals through hands-on projects and
                                practical problem solving.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                Exploring
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                React patterns, TypeScript, API integration,
                                accessibility, responsive design, and complete
                                user-facing applications.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2 font-['JetBrains_Mono'] !text-[#053264]">
                                Goal
                              </h4>
                              <p className="text-sm md:text-base leading-relaxed text-[#053264]/90">
                                Move beyond interfaces and develop the skills
                                needed to build reliable, scalable, and
                                maintainable frontend products.
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="mt-8">
                          <h4 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-3 font-['JetBrains_Mono'] !text-[#053264]">
                            Tech Stack
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-[#053264]/10 border border-[#053264]/20 text-[#053264] font-['JetBrains_Mono'] tracking-wide"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3 font-['JetBrains_Mono']">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-sm bg-[#053264] text-[#FFF8E7] hover:bg-[#053264]/90"
                            >
                              GitHub
                            </a>
                          )}

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 border border-[#053264]/30 bg-transparent text-[#053264] hover:bg-[#053264]/10"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>

                        {todoMessage && (
                          <div className="mt-6 p-3.5 rounded-xl bg-[#95BBEA]/20 border border-[#95BBEA]/40 text-xs text-[#053264] font-bold text-center animate-pulse font-['JetBrains_Mono']">
                            {todoMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
