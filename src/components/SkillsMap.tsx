import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- DATA STRUCTURE WITH UPDATED SYSTEM COLORS ---
const MAP_DATA = {
  center: "CURRENT FOUNDATIONS",
  nodes: [
    {
      id: "design",
      title: "DESIGN",
      pos: { top: "15%", left: "20%" },
      color: "#95BBEA", // Accent Blue
      items: [
        "Interface Design",
        "Wireframing",
        "Visual Hierarchy",
        "Design Systems",
        "Figma",
      ],
      description:
        "Understanding how interfaces communicate through structure, hierarchy, and visual systems.",
      doodle: (
        <svg
          className="w-7 h-7 opacity-80 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M2 8h20M6 2v6M18 2v6M6 14h12M6 18h8" />
        </svg>
      ),
    },
    {
      id: "frontend",
      title: "FRONTEND",
      pos: { top: "12%", left: "80%" },
      color: "#FFA62B", // Orange/Yellow
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
        "Motion & Interaction",
      ],
      description:
        "Building responsive and interactive user interfaces for the web.",
      doodle: (
        <svg
          className="w-7 h-7 opacity-80 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6M10 20l4-16" />
        </svg>
      ),
    },
    {
      id: "cs",
      title: "COMPUTER SCIENCE",
      pos: { top: "60%", left: "20%" },
      color: "#CCFFBC", // Mint
      items: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      description:
        "Developing problem-solving skills and core engineering fundamentals.",
      doodle: (
        <svg
          className="w-7 h-7 opacity-80 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
          <path d="M12 7v10M5 12h14" />
        </svg>
      ),
    },
    {
      id: "creative",
      title: "CREATIVE",
      pos: { top: "55%", left: "80%" },
      color: "#F8E6A0", // Warm Yellow
      items: ["Video Editing", "Storytelling", "Visual Exploration"],
      description:
        "Creative disciplines that influence how I approach design and communication.",
      doodle: (
        <svg
          className="w-7 h-7 opacity-80 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 8 4M2 12h20M12 2v20" />
        </svg>
      ),
    },
  ],
};

const SkillsMap: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: "-100px 0px",
  });

  const [phase1Complete, setPhase1Complete] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setPhase1Complete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setPhase1Complete(false);
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-[#053264] text-[#FFF8E7] font-['Inter']"
      id="foundations"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <header className="mb-16 text-center md:text-left md:pl-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#FFF8E7] md:text-4xl font-['Space_Grotesk']">
            How I operate.
          </h1>
          <p className="mt-3 max-w-xl text-[#B8C5D6] leading-relaxed font-['Inter']">
            The areas I am actively developing and how they connect to one
            another.
          </p>
        </header>

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col gap-6 md:hidden relative z-10">
          {MAP_DATA.nodes.map((node) => (
            <div
              key={`mobile-${node.id}`}
              style={{ backgroundColor: node.color }}
              className="border border-[rgba(255,248,231,0.15)] p-6 rounded-none shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                {/* Mobile Heading */}
                <h3 className="text-lg font-bold tracking-widest font-['JetBrains_Mono'] !text-[#053264]">
                  {node.title}
                </h3>

                <div className="text-[#053264]">{node.doodle}</div>
              </div>
              <p className="text-sm text-[#053264]/90 mb-4 font-medium font-['Inter']">
                {node.description}
              </p>
              <div className="flex flex-wrap gap-2 font-['JetBrains_Mono']">
                {node.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] bg-[#053264]/10 text-[#053264] px-2 py-1 rounded border border-[#053264]/20 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (Architectural Network with 3D Tickets) */}
        <div className="hidden md:block relative w-full min-h-[900px] mx-auto overflow-visible pb-20">
          {/* SVG Connecting Strings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {MAP_DATA.nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id;

              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="45%"
                  x2={node.pos.left}
                  y2={node.pos.top}
                  stroke={isHovered ? "#95BBEA" : "rgba(149, 187, 234, 0.3)"}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    phase1Complete
                      ? {
                          pathLength: 1,
                          opacity: isDimmed ? 0.15 : 1,
                        }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              );
            })}
          </svg>

          {/* Center Anchor Node */}
          <motion.div
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="bg-[#FFF8E7] text-[#053264] border border-[rgba(255,248,231,0.15)] px-6 py-4 flex flex-col items-center justify-center tracking-widest font-bold font-['JetBrains_Mono'] text-center w-56 shadow-sm">
              {MAP_DATA.center}
            </div>
          </motion.div>

          {/* Ticket Nodes */}
          {MAP_DATA.nodes.map((node) => {
            const isHovered = hoveredNode === node.id;
            const isDimmed = hoveredNode !== null && hoveredNode !== node.id;

            return (
              <motion.div
                key={node.id}
                className={`absolute flex flex-col items-center ${isHovered ? "z-50" : "z-30"}`}
                style={{
                  top: node.pos.top,
                  left: node.pos.left,
                  x: "-50%",
                  y: "-50%",
                  perspective: "1200px",
                }}
                animate={
                  phase1Complete
                    ? {
                        opacity: isDimmed ? 0.4 : 1,
                        scale: isHovered ? 1.05 : 1,
                      }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* 1. TICKET TOP (Always Visible) */}
                <div
                  className={`w-56 border px-4 py-5 flex flex-col items-center justify-center relative z-20 transition-all duration-300 shadow-sm
                    ${isHovered ? "rounded-t-xl border-b-0" : "rounded-xl border-b"}
                  `}
                  style={{
                    backgroundColor: node.color,
                    borderColor: isHovered
                      ? "rgba(5, 50, 100, 0.4)"
                      : "rgba(255,248,231,0.15)",
                  }}
                >
                  <div className="text-[#053264]">{node.doodle}</div>

                  {/* Desktop Heading */}
                  <h3 className="font-['JetBrains_Mono'] text-[13px] tracking-widest font-bold uppercase mt-2 text-center !text-[#053264]">
                    {node.title}
                  </h3>
                </div>

                {/* 2. TICKET FOLD-OUT BOTTOM (Animates down from the back) */}
                <motion.div
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={
                    isHovered
                      ? { rotateX: 0, opacity: 1 }
                      : { rotateX: -90, opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                  }}
                  className="absolute top-full left-0 w-56 z-10 flex flex-col shadow-lg"
                >
                  {/* The Perforated Hinge */}
                  <div
                    className="relative h-6 border-x transition-colors duration-300 flex items-center"
                    style={{
                      backgroundColor: node.color,
                      borderColor: isHovered
                        ? "rgba(5, 50, 100, 0.4)"
                        : "rgba(255,248,231,0.15)",
                    }}
                  >
                    <div
                      className="absolute -left-[1px] w-3 h-6 bg-[#053264] rounded-r-full border-r border-y transition-colors duration-300"
                      style={{
                        borderColor: isHovered
                          ? "rgba(5, 50, 100, 0.4)"
                          : "rgba(255,248,231,0.15)",
                      }}
                    />
                    <div className="w-full border-t border-dashed mx-3 opacity-30 border-[#053264]" />
                    <div
                      className="absolute -right-[1px] w-3 h-6 bg-[#053264] rounded-l-full border-l border-y transition-colors duration-300"
                      style={{
                        borderColor: isHovered
                          ? "rgba(5, 50, 100, 0.4)"
                          : "rgba(255,248,231,0.15)",
                      }}
                    />
                  </div>

                  {/* The Long Info Rectangle */}
                  <div
                    className="border-x border-b rounded-b-xl p-5 transition-colors duration-300"
                    style={{
                      backgroundColor: node.color,
                      borderColor: isHovered
                        ? "rgba(5, 50, 100, 0.4)"
                        : "rgba(255,248,231,0.15)",
                    }}
                  >
                    <p className="font-['Inter'] text-[13px] text-[#053264]/90 font-medium mb-5 leading-relaxed text-left">
                      {node.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 justify-start font-['JetBrains_Mono']">
                      {node.items.map((item) => (
                        <li
                          key={item}
                          className="text-[10px] bg-[#053264]/10 text-[#053264] px-2 py-1 rounded-sm border border-[#053264]/20 font-semibold tracking-wide"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsMap;
