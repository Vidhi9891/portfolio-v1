import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { Variants } from "framer-motion";

// --- IMAGE ASSET IMPORTS ---
import tamasha from "../assets/tamasha.webp";
import bluePeriod from "../assets/blue-period.webp";
import haikyuu from "../assets/haikyuu.webp";
import stargazing from "../assets/stargazing.webp";
import frieren from "../assets/frieren.webp";


// --- DATA & TYPES ---
interface PhotoPrint {
  id: number;
  src: string;
  alt: string;
}

// Order: tamasha -> bluePeriod -> haikyuu -> stargazing -> frieren
const initialPhotosData = [
  { src: tamasha, alt: "Tamasha" },
  { src: bluePeriod, alt: "Blue Period" },
  { src: haikyuu, alt: "Haikyuu" },
  { src: stargazing, alt: "Stargazing" },
  { src: frieren, alt: "Frieren" },
];

// --- ANIMATION VARIANTS--

const ticketVariants: Variants = {

  enter: { x: -20, opacity: 0, scale: 0.95 },
  center: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  exit: { x: 50, opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

// --- SUB-COMPONENT: PHOTO CARD ---
const PhotoCard: React.FC<{ photo: PhotoPrint }> = ({ photo }) => (
  <motion.div
    layout
    variants={ticketVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="flex-shrink-0 w-72 h-[22rem]"
  >
    <img
      src={photo.src}
      alt={photo.alt}
      className="w-full h-full object-contain"
    />
  </motion.div>
);

// --- SUB-COMPONENT: PHOTO BOOTH FEED ---
// const PhotoBoothFeed: React.FC = () => {
//   const [photos, setPhotos] = useState<PhotoPrint[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(containerRef, { margin: "-50px" });

//   useEffect(() => {
//     if (!isInView) return;

//     // CHANGED: Increased the timeout delay here from 1500 to 2000 (2 seconds)
//     const timer = setTimeout(() => {
//       const dataIndex = currentIndex % initialPhotosData.length;
//       const newPhoto: PhotoPrint = {
//         id: currentIndex,
//         src: initialPhotosData[dataIndex].src,
//         alt: initialPhotosData[dataIndex].alt,
//       };
      
//       setPhotos((prev) => [newPhoto, ...prev].slice(0, 8));
//       setCurrentIndex((prev) => prev + 1);
//     }, 2000); 

//     return () => clearTimeout(timer);
//   }, [currentIndex, isInView]);

//   return (
//     <div ref={containerRef} className="w-full max-w-5xl mx-auto px-4 py-8">
//       <div className="flex flex-row items-center relative">
        
//         {/* Printer slot updated to use the system border color: rgba(255,248,231,0.15) */}
//         <div className="flex-shrink-0 w-4 h-[22rem] bg-[#021A35] rounded-full shadow-inner relative z-20 border border-[#FFF8E7]/15">
//           <div className="absolute inset-y-4 right-0 w-1 bg-black rounded-l opacity-50" />
//         </div>

//         <div className="flex-grow h-[26rem] overflow-hidden relative pl-4 flex items-center"
//              style={{ WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}>
//           <motion.div className="flex flex-row items-center gap-4 h-full">
//             <AnimatePresence mode="popLayout">
//               {photos.map((photo) => (
//                 <PhotoCard key={photo.id} photo={photo} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// };

// --- SUB-COMPONENT: PHOTO BOOTH FEED ---
const PhotoBoothFeed: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoPrint[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // 1s delay for the first photo, 2s for all subsequent photos
    const delay = currentIndex === 0 ? 1000 : 2000;

    const timer = setTimeout(() => {
      const dataIndex = currentIndex % initialPhotosData.length;
      const newPhoto: PhotoPrint = {
        id: currentIndex,
        src: initialPhotosData[dataIndex].src,
        alt: initialPhotosData[dataIndex].alt,
      };
      
      setPhotos((prev) => [newPhoto, ...prev].slice(0, 8));
      setCurrentIndex((prev) => prev + 1);
    }, delay); 

    return () => clearTimeout(timer);
  }, [currentIndex, isInView]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-row items-center relative">
        
        {/* Printer slot updated to use the system border color: rgba(255,248,231,0.15) */}
        <div className="flex-shrink-0 w-4 h-[22rem] bg-[#021A35] rounded-full shadow-inner relative z-20 border border-[#FFF8E7]/15">
          <div className="absolute inset-y-4 right-0 w-1 bg-black rounded-l opacity-50" />
        </div>

        <div className="flex-grow h-[26rem] overflow-hidden relative pl-4 flex items-center"
             style={{ WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}>
          <motion.div className="flex flex-row items-center gap-4 h-full">
            <AnimatePresence mode="popLayout">
              {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

// --- MAIN HERO ---
const Hero: React.FC = () => {
  return (
    // Background: #053264 | Default Text: #FFF8E7 | Default Font: Inter
    <section 
      id="home"
       className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#053264] text-[#FFF8E7] font-['Inter']">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6 mb-2">
        <div className="max-w-2xl">
          {/* Main heading: Space Grotesk | #FFF8E7 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFF8E7] mb-3 font-['Space_Grotesk']">
            Vidhi Tiwari
          </h1>
          {/* Subheading: Space Grotesk | Accent Blue #95BBEA */}
          <h2 className="text-lg md:text-xl text-[#95BBEA] font-semibold tracking-tight mb-6 font-['Space_Grotesk']">
            Building responsive web applications with React, TypeScript, and a growing interest in design systems.
          </h2>
          {/* Body text: Inter | Secondary Text #B8C5D6 */}
          <p className="text-base md:text-lg text-[#B8C5D6] leading-relaxed mb-8 max-w-4xl font-['Inter']">
            Computer Science student focused on frontend development and UI engineering. Currently building projects, strengthening engineering fundamentals, and exploring how thoughtful design and implementation create better user experiences.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 font-['Space_Grotesk']">
            {/* Primary Button: Accent Background, Deep Blue Text */}
            <a href="#projects" className="inline-flex justify-center items-center bg-[#95BBEA] text-[#053264] px-7 py-3 rounded-lg font-bold hover:bg-[#B8C5D6] transition-colors shadow-sm active:scale-95">
              View Projects
            </a>
            {/* Secondary Button: Transparent Background, Cream Border, Cream Text */}
            <a href="#contact" className="inline-flex justify-center items-center bg-transparent text-[#FFF8E7] border border-[#FFF8E7]/30 px-7 py-3 rounded-lg font-bold hover:bg-[#FFF8E7]/10 transition-colors active:scale-95">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <PhotoBoothFeed />
    </section>
  );
};

export default Hero;