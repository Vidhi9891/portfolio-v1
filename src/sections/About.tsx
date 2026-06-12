import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"
import postcardPhoto from "../assets/postcard.png";
import photo from "../assets/vidhi.png";

// --- ANIMATION VARIANTS ---
// This handles the "Queue / FIFO" staggering effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each card appearing
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <>
      <section id="about" className="w-full py-24 bg-[#053264] text-[#FFF8E7]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Bento Grid Container - Wrapped in motion.div for scroll animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // "once: false" ensures they disappear when you scroll away and reappear when you scroll back
            viewport={{ once: false, margin: "-100px" }}
            className="
  grid
  grid-cols-1
  md:grid-cols-4
  gap-6
  items-stretch
  overflow-visible
"
          >
            {/* --- ROW 1 --- */}
{/* 2. Scrapbook Image Stack */}
            <motion.div
  variants={cardVariants}
  className="
    md:col-span-2
    md:row-span-2
     relative
    min-h-[500px]
    overflow-visible
    flex
    items-center
    justify-center
    
  "
>
  {/* Top Photo */}
  <img
    src={photo}
    alt="Vidhi"
    onClick={() => setExpandedImage(photo)}
    className="
      absolute
      top-6
      right-4
      w-[62%]
      rotate-3
      drop-shadow-xl
      hover:rotate-0
      hover:scale-105
      transition-all
      duration-300
      cursor-zoom-in
      z-10
    "
  />

  {/* Postcard */}
  <img
    src={postcardPhoto}
    alt="Postcard"
    onClick={() => setExpandedImage(postcardPhoto)}
    className="
      absolute
      bottom-4
      left-2
      w-[70%]
      -rotate-3
      drop-shadow-2xl
      hover:rotate-0
      hover:scale-105
      transition-all
      duration-300
      cursor-zoom-in
      z-20
    "
  />
</motion.div>

            {/* 1. Main About Card */}
            <motion.div
  variants={cardVariants}
  whileHover={{ y: -5 }}
  className="
    md:col-span-2
      md:row-span-2
    bg-[#95BBEA]
    rounded-2xl
    border border-[rgba(255,248,231,0.15)]
    p-8 sm:p-10
    flex flex-col justify-center
    shadow-lg
  "
>
              <h3 className="font-['JetBrains_Mono'] text-xl uppercase tracking-widest font-extrabold !text-[#053264] mb-6 drop-shadow-sm">
                About
              </h3>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-6 text-[#053264]">
                Learning to bridge design, frontend development, and computer
                science.
              </h2>
              <p className="font-['Inter'] text-base sm:text-lg leading-relaxed font-semibold text-[#053264]">
                I'm interested in understanding how products are designed,
                built, and experienced. Through projects and continuous
                learning, I'm exploring the intersection of interface design,
                frontend engineering, and problem-solving.
              </p>
            </motion.div>
            
            {/* 3. Direction Card */}
<motion.div
  variants={cardVariants}
  whileHover={{ y: -5 }}
  className="
  md:col-span-2
    bg-[#FFA62B]
    rounded-2xl
    border border-[rgba(255,248,231,0.15)]
    p-8
    shadow-lg
  "
>
              <h3 className="font-['JetBrains_Mono'] text-xl uppercase tracking-widest font-extrabold !text-[#053264] mb-6 drop-shadow-sm">
                Direction
              </h3>
              <p className="font-['Inter'] text-sm leading-relaxed font-semibold text-[#053264]">
                Working toward becoming a frontend engineer who combines strong
                technical foundations with thoughtful design thinking. My goal
                is to build products that are both reliable and enjoyable to
                use.
              </p>
            </motion.div>

            {/* 4. Current Focus Card */}
<motion.div
  variants={cardVariants}
  whileHover={{ y: -5 }}
  className="
  md:col-span-2
  md:col-row-2
    bg-[#FFEBAF]
    rounded-2xl
    border border-[rgba(255,248,231,0.15)]
    p-8
    shadow-lg
  "
>
              <h3 className="font-['JetBrains_Mono'] text-xl uppercase tracking-widest font-extrabold !text-[#053264] mb-6 drop-shadow-sm">
                Current Focus
              </h3>
              <ul className="font-['Inter'] flex flex-col gap-4 text-sm leading-relaxed font-semibold text-[#053264]">
                <li className="flex items-start gap-3">
                  <span className="font-['JetBrains_Mono'] text-[#FFEBAF] font-bold bg-[#053264] px-1.5 rounded-sm select-none">
                    01
                  </span>
                  <span>
                    Building frontend projects with React, TypeScript, and
                    Tailwind CSS.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-['JetBrains_Mono'] text-[#FFEBAF] font-bold bg-[#053264] px-1.5 rounded-sm select-none">
                    02
                  </span>
                  <span>
                    Strengthening foundations in data structures and algorithms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-['JetBrains_Mono'] text-[#FFEBAF] font-bold bg-[#053264] px-1.5 rounded-sm select-none">
                    03
                  </span>
                  <span>
                    Improving accessibility, responsiveness, and UI
                    implementation skills.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* --- ROW 2 --- */}

            {/* 5. Approach Card
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="md:col-span-1 bg-[#CCFFBC] rounded-2xl border border-[rgba(255,248,231,0.15)] p-8 flex flex-col shadow-lg"
            >
              <h3 className="font-['JetBrains_Mono'] text-xl uppercase tracking-widest font-extrabold !text-[#053264] mb-6 drop-shadow-sm">
                Approach
              </h3>
              <p className="font-['Inter'] text-sm leading-relaxed font-semibold text-[#053264]">
                I learn best by building. Every project is an opportunity to improve problem-solving, refine technical skills, and better understand how products are created and experienced.
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#053264]/95 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={expandedImage}
              alt="Expanded View"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl rounded-sm cursor-default"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
