import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const { scrollY } = useScroll();
  const [isCompact, setIsCompact] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. If at the very top, always expand
    if (latest < 20) {
      setIsCompact(false);
    } 
    // 2. If scrolling down and passed a small buffer
    else if (latest > lastScrollY && latest > 50) {
      setIsCompact(true);
    } 
    // 3. If scrolling up, expand
    else if (latest < lastScrollY) {
      setIsCompact(false);
    }
    
    setLastScrollY(latest);
  });

  return (
    <motion.header 
      className="fixed top-6 left-0 right-0 z-[1000] flex justify-center w-full"
    >
      <motion.nav 
        animate={{ 
          width: isCompact ? '50%' : '95%',
          padding: isCompact ? '0.75rem 1rem' : '1.5rem 2rem'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={`
          flex flex-row items-center justify-between rounded-full shadow-lg
          ${isCompact 
            ? 'bg-slate-900/80 backdrop-blur-md border border-white/10' 
            : 'bg-transparent border-none'
          }
        `}
      >
        <a href="#home" className="px-2">
          <span className="text-sm font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors">
            <a href="#home" className="hover:text-blue-400 transition-colors">Vidhi Tiwari</a>
          </span>
        </a>
        
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-slate-300 px-2">
         <a href="#about" className="hover:text-[#95BBEA] transition-colors">About</a>
          <a href="#foundations" className="hover:text-[#95BBEA] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#95BBEA] transition-colors">Work</a>
          <a href="#contact" className="hover:text-[#95BBEA] transition-colors">Contact</a>
        </div>
      </motion.nav>
    </motion.header>
  )
}

export default Navbar