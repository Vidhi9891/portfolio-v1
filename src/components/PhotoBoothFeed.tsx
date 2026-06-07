import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// 1. HERO WRAPPER
// ==========================================
const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-white text-slate-900 font-sans">
      
      {/* Identity & Intro Block */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6 mb-2">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight !text-slate-900 !opacity-100 mb-3">
            Vidhi Tiwari
          </h1>
          
          {/* Updated Small Header */}
          <h2 className="text-lg md:text-xl !text-slate-700 font-mono font-semibold tracking-tight mb-6">
            Frontend. Design. Systems.
          </h2>
          
          {/* Updated Small Paragraph */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            Exploring frontend development, design, and the craft of creating things people enjoy using. Every project is another step toward becoming a better builder.
          </p>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex justify-center items-center bg-slate-900 text-white px-7 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm active:scale-95"
            >
              View Projects
            </a>
            <a 
              href="#about" 
              className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-300 px-7 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors active:scale-95"
            >
              About Me
            </a>
          </div>

        </div>
      </div>

      {/* The Photo Booth Feed Component */}
      <PhotoBoothFeed />
      
    </section>
  );
};

// ==========================================
// 2.  PHOTO BOOTH COMPONENTS
// ==========================================

// --- Data Structure ---
interface Ticket {
  id: number;
  title: string;
}

const initialTicketsData = [
  { title: "Learning fundamentals" },
  { title: "Designing interfaces" },
  { title: "Building systems" },
  { title: "Exploring direction" },
];

// --- Animation Variants ---
const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 14,
};

const ticketVariants = {
  enter: {
    x: -50,
    opacity: 0,
    scale: 0.95,
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
  exit: {
    x: 50,
    opacity: 0,
    scale: 0.95,
    transition: springTransition,
  },
};

// --- Ticket Component ---
const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <motion.div
      layout
      variants={ticketVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="flex-shrink-0 w-60 h-72 bg-[#fdfaf3] border border-gray-300 shadow-md rounded-lg p-4 flex flex-col justify-between"
    >
      {/* Doodle/Image Placeholder */}
      <div className="flex-grow bg-slate-100 border border-dashed border-slate-300 rounded mb-3 flex items-center justify-center text-slate-400 text-xs font-mono">
        [ Snapshot View ]
      </div>
      {/* Caption Text */}
      <p className="font-mono text-xs uppercase tracking-wider text-slate-700 break-words text-center">
        {ticket.title}
      </p>
    </motion.div>
  );
};
// --- PhotoBoothFeed Component ---
const PhotoBoothFeed: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Endless loop that cycles through the data
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use modulo to loop back to 0 after reaching the end of the initial data
      const dataIndex = currentIndex % initialTicketsData.length;
      
      const newTicket: Ticket = {
        id: currentIndex, // Keep ID strictly increasing so Framer Motion knows it's a new item
        title: initialTicketsData[dataIndex].title,
      };
      
      // Add new ticket and slice the array to keep only the latest 8 items in the DOM (prevents lag)
      setTickets((prev) => [newTicket, ...prev].slice(0, 8));
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Gradient mask to smoothly fade overflow items on the right side
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: 'linear-gradient(to right, black 75%, transparent 100%)',
    maskImage: 'linear-gradient(to right, black 75%, transparent 100%)',
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-row items-center relative">
        
        {/* 1. Feed Slot (Printer mechanical source on the Left) */}
        <div className="flex-shrink-0 w-4 h-72 bg-slate-800 rounded-full shadow-inner relative z-20 border border-slate-700">
          <div className="absolute inset-y-4 right-0 w-1 bg-black rounded-l opacity-50" />
        </div>

        {/* 2. Conveyor Strip Layout (Handles horizontal overflow safely) */}
        <div
          className="flex-grow h-80 overflow-hidden relative pl-4 flex items-center"
          style={maskStyle}
        >
          <motion.div
            layout
            className="flex flex-row items-center gap-4 h-full"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;