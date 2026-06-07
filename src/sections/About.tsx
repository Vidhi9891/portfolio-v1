import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="w-full max-w-5xl mx-auto px-6 py-24 border-t border-slate-200/60 text-slate-900 font-sans"
    >
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE: Visual Placeholder / Photo Container */}
        {/* Removed 'sticky top-24' so it stays in place and scrolls away naturally */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="group relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Minimal Geometric Overlay Pattern */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/30 to-transparent z-10" />
            
            {/* Photo Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-slate-400 font-mono tracking-wider">
              <svg 
                className="w-6 h-6 mb-2 text-slate-300 stroke-[1.5]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-[10px] uppercase">[ insert_photo ]</span>
            </div>

            {/* Subtle Tech Artifact Corner Borders */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-slate-300 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-slate-300 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDE: Story / Text Content */}
        <div className="md:col-span-8 flex flex-col gap-12">
          
          {/* Section A: Intro Line */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              I translate complex ideas into intuitive, high-performance digital experiences.
            </h2>
          </div>

          {/* Section B: Current State */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Current Focus
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="font-mono text-blue-500 text-sm select-none">→</span>
                <span>Deepening knowledge in data structures, algorithms, and frontend architecture.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-blue-500 text-sm select-none">→</span>
                <span>Building highly reusable, robust UI systems with micro-interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-blue-500 text-sm select-none">→</span>
                <span>Exploring the fine balance between user interface design and structural performance.</span>
              </li>
            </ul>
          </div>

          {/* Section C: Direction */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Direction
            </h3>
            <p className="text-slate-600 leading-relaxed">
              My goal is to grow into a thoroughly product-minded engineer—someone who bridges the gap between raw implementation and visual intent. I believe beautiful code means nothing if the execution doesn't treat the end-user with empathy.
            </p>
          </div>

          {/* Section D: Personal Touch */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Personal Layer
            </h3>
            <p className="text-slate-600 leading-relaxed">
              When I'm away from a compiler, I explore a mix of creative and technical pursuits. I'm driven by continuous curiosity regarding visual design principles, video editing, systems thinking, and structural storytelling in anime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;