import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Safely step through the 4 milestones and stop
  useEffect(() => {
    if (currentIndex < initialTicketsData.length) {
      const timer = setTimeout(() => {
        const newTicket: Ticket = {
          id: currentIndex,
          title: initialTicketsData[currentIndex].title,
        };
        // unshift adds the new ticket to the left (index 0) and slides the rest right
        setTickets((prev) => [newTicket, ...prev]);
        setCurrentIndex((prev) => prev + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
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

export default PhotoBoothFeed;