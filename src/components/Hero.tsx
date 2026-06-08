import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// --- DATA & TYPES ---
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

// --- ANIMATION VARIANTS ---
const ticketVariants = {
  enter: { x: -20, opacity: 0, scale: 0.95 },
  center: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  exit: { x: 50, opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

// --- SUB-COMPONENT: TICKET CARD ---
const TicketCard: React.FC<{ ticket: Ticket }> = ({ ticket }) => (
  <motion.div
    layout
    variants={ticketVariants}
    initial="enter"
    animate="center"
    exit="exit"
    className="flex-shrink-0 w-60 h-72 bg-[#fdfaf3] border border-gray-300 shadow-md rounded-lg p-4 flex flex-col justify-between"
  >
    <div className="flex-grow bg-slate-100 border border-dashed border-slate-300 rounded mb-3 flex items-center justify-center text-slate-400 text-xs font-mono">
      [ Snapshot View ]
    </div>
    <p className="font-mono text-xs uppercase tracking-wider text-slate-700 break-words text-center">
      {ticket.title}
    </p>
  </motion.div>
);

// --- SUB-COMPONENT: PHOTO BOOTH FEED ---
const PhotoBoothFeed: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const dataIndex = currentIndex % initialTicketsData.length;
      const newTicket: Ticket = {
        id: currentIndex,
        title: initialTicketsData[dataIndex].title,
      };
      
      setTickets((prev) => [newTicket, ...prev].slice(0, 8));
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex, isInView]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-row items-center relative">
        <div className="flex-shrink-0 w-4 h-72 bg-slate-800 rounded-full shadow-inner relative z-20 border border-slate-700">
          <div className="absolute inset-y-4 right-0 w-1 bg-black rounded-l opacity-50" />
        </div>

        <div className="flex-grow h-80 overflow-hidden relative pl-4 flex items-center" 
             style={{ WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}>
          <motion.div className="flex flex-row items-center gap-4 h-full">
            <AnimatePresence mode="popLayout">
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

// --- MAIN HERO ---
const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-white text-slate-900 font-sans">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6 mb-2">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight !text-slate-900 mb-3">
            Vidhi Tiwari
          </h1>
          <h2 className="text-lg md:text-xl !text-slate-700 font-mono font-semibold tracking-tight mb-6">
            Frontend. Design. Systems.
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl">
            Exploring frontend development, design, and the craft of creating things people enjoy using. Every project is another step toward becoming a better builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex justify-center items-center bg-slate-900 text-white px-7 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm active:scale-95">
              View Projects
            </a>
            <a href="#about" className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-300 px-7 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors active:scale-95">
              About Me
            </a>
          </div>
        </div>
      </div>
      <PhotoBoothFeed />
    </section>
  );
};

export default Hero;