import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- DATA STRUCTURE WITH NATIVE BLUEPRINT DOODLES ---
const MAP_DATA = {
  center: "CURRENT FOUNDATIONS",
  nodes: [
    {
      id: 'design',
      title: 'DESIGN',
      pos: { top: '1%', left: '50%' }, // Perfectly symmetrical top
      color: '#f59e0b', // warm yellow
      items: ['Interface Design','Wireframing','Visual Hierarchy','Design Systems','Figma'],
      description: 'Creating clarity through structure, hierarchy, and intentional interfaces.',
      doodle: (
        <svg className="w-7 h-7 opacity-80 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M2 8h20M6 2v6M18 2v6M6 14h12M6 18h8" />
        </svg>
      )
    },
    {
      id: 'frontend',
      title: 'FRONTEND',
      pos: { top: '45%', left: '85%' }, // Perfectly symmetrical right
      color: '#3b82f6', // electric blue
      items: ['Component ArchitectureL', 'Responsive Layouts', 'JavaScript', 'React', 'Tailwind CSS', 'Vite','TypeScript','Motion & Interaction'],
      description: 'Turning ideas into responsive and interactive experiences.',
      doodle: (
        <svg className="w-7 h-7 opacity-80 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6M10 20l4-16" />
        </svg>
      )
    },
    {
      id: 'cs',
      title: 'COMPUTER SCIENCE',
      pos: { top: '89%', left: '50%' }, // Perfectly symmetrical bottom
      color: '#10b981', // mint
      items: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving'],
      description: 'Strengthening the foundations that support scalable thinking and implementation.',
      doodle: (
        <svg className="w-7 h-7 opacity-80 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
          <path d="M12 7v10M5 12h14" />
        </svg>
      )
    },
    {
      id: 'creative',
      title: 'CREATIVE',
      pos: { top: '45%', left: '15%' }, // Perfectly symmetrical left
      color: '#f97316', // orange
      items: ['Video Editing', 'Storytelling', 'Visual Exploration', 'Creative Projects'],
      description: 'Areas I enjoy exploring outside of code.',
      doodle: (
        <svg className="w-7 h-7 opacity-80 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 8 4M2 12h20M12 2v20" />
        </svg>
      )
    },
  ]
};

const SkillsMap: React.FC = () => {
  const containerRef = useRef(null);
  // Setting once: false allows the animation to re-trigger
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });
  
  const [phase1Complete, setPhase1Complete] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setPhase1Complete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Reset animation state when user scrolls away
      setPhase1Complete(false);
    }
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 bg-transparent text-slate-200 font-sans"
      id="foundations"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <header className="mb-16 text-center md:text-left md:pl-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
            How I operate.
          </h1>
          <p className="mt-3 max-w-xl text-slate-400 leading-relaxed">
            The areas I am actively developing and how they connect to one another.
          </p>
        </header>

        {/* MOBILE LAYOUT */}
        <div className="flex flex-col gap-6 md:hidden relative z-10">
          {MAP_DATA.nodes.map((node) => (
            <div key={`mobile-${node.id}`} className="bg-[#131d3b] border border-slate-700/50 p-6 rounded-none ">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-mono tracking-widest" style={{ color: node.color }}>
                  {node.title}
                </h3>
                <div style={{ color: node.color }}>{node.doodle}</div>
              </div>
              <p className="text-sm text-slate-400 mb-4">{node.description}</p>
              <div className="flex flex-wrap gap-2">
                {node.items.map(item => (
                  <span key={item} className="text-[11px] font-mono bg-[#1a274a] text-slate-300 px-2 py-1 rounded border border-slate-700/50">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (Architectural Network with 3D Tickets) */}
        {/* Increased height to 900px to ensure the unfold animation never clips */}
        <div 
          className="hidden md:block relative w-full h-[900px] mx-auto bg-[#0b132b] border border-slate-800 rounded-xl overflow-visible "
        >
          
          {/* SVG Connecting Strings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {MAP_DATA.nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id;
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="45%" // Anchored to the new 45% center
                  x2={node.pos.left}
                  y2={node.pos.top}
                  stroke={isHovered ? node.color : '#334155'}
                  strokeWidth={isHovered ? 2 : 1.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase1Complete ? { 
                    pathLength: 1, 
                    opacity: isDimmed ? 0.15 : 1 
                  } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              );
            })}
          </svg>

          {/* Center Anchor Node */}
          <motion.div
            // Moved to top-[45%] to perfectly balance the layout
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="bg-[#131d3b] text-slate-100 border border-slate-600 px-6 py-4 flex flex-col items-center justify-center tracking-widest font-bold font-mono text-center w-56">
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
                // When hovered, bring to the absolute front so it never goes behind other lines
                className={`absolute flex flex-col items-center ${isHovered ? 'z-50' : 'z-30'}`}
                style={{ top: node.pos.top, left: node.pos.left, x: '-50%', y: '-50%', perspective: '1200px' }}
                animate={phase1Complete ? { 
                  opacity: isDimmed ? 0.4 : 1,
                  scale: isHovered ? 1.05 : 1
                } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                
                {/* 1. TICKET TOP (Always Visible) */}
                {/* Dynamically switches from fully rounded to top-rounded on hover */}
                <div 
                  className={`w-56 bg-[#0f172a] border px-4 py-5 flex flex-col items-center justify-center relative z-20 transition-all duration-300
                    ${isHovered ? 'rounded-t-xl border-b-0' : 'rounded-xl border-b'}
                  `}
                  style={{ 
                    borderColor: isHovered ? node.color : '#334155',
                    
                  }}
                >
                  <div style={{ color: node.color }}>{node.doodle}</div>
                  <h3 className="font-mono text-[13px] tracking-widest font-bold uppercase mt-2 text-center" style={{ color: node.color }}>
                    {node.title}
                  </h3>
                </div>

                {/* 2. TICKET FOLD-OUT BOTTOM (Animates down from the back) */}
                <motion.div
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={isHovered ? { rotateX: 0, opacity: 1 } : { rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                  className="absolute top-full left-0 w-56 z-10 flex flex-col "
                >
                  
                  {/* The Perforated Hinge (Perfect semi-circle cutouts) */}
                  <div 
                    className="relative h-6 bg-[#0f172a] border-x transition-colors duration-300 flex items-center"
                    style={{ borderColor: isHovered ? node.color : '#334155' }}
                  >
                    {/* Left Arc Cutout (Uses page bg color to look like a hole) */}
                    <div 
                      className="absolute -left-[1px] w-3 h-6 bg-[#0b132b] rounded-r-full border-r border-y transition-colors duration-300" 
                      style={{ borderColor: isHovered ? node.color : '#334155' }}
                    />
                    
                    {/* Faint Dashed Perforation Line connecting the arcs */}
                    <div className="w-full border-t border-dashed mx-3 opacity-30" style={{ borderColor: isHovered ? node.color : '#334155' }} />
                    
                    {/* Right Arc Cutout */}
                    <div 
                      className="absolute -right-[1px] w-3 h-6 bg-[#0b132b] rounded-l-full border-l border-y transition-colors duration-300" 
                      style={{ borderColor: isHovered ? node.color : '#334155' }}
                    />
                  </div>

                  {/* The Long Info Rectangle */}
                  <div 
                    className="bg-[#0f172a] border-x border-b rounded-b-xl p-5 transition-colors duration-300"
                    style={{ borderColor: isHovered ? node.color : '#334155' }}
                  >
                    <p className="text-[13px] text-slate-300 mb-5 leading-relaxed text-left">
                      {node.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 justify-start">
                      {node.items.map(item => (
                        <li 
                          key={item} 
                          className="text-[10px] font-mono bg-[#131d3b] text-slate-300 px-2 py-1 rounded-sm border border-slate-700/60"
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