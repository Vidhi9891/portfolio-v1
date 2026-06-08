import React from 'react';

// Minimal monochrome SVG icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="w-full py-40 md:py-48 px-6 md:px-10 font-sans text-slate-200 flex flex-col items-center justify-center min-h-[80vh] border-t border-white/5"
    >
      {/* Container uses gap-y-16 to control spacing between headline, paragraph, buttons, and icons */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-y-16">

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-50 drop-shadow-sm">
          Let's Connect.
        </h1>

        {/* SUPPORTING PARAGRAPH */}
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl">
          Whether it's frontend development, design systems, UI engineering, or simply exchanging ideas, I'm always open to thoughtful conversations and opportunities to learn. Currently exploring the intersection of frontend development, UI engineering, and product design through hands-on projects.
        </p>

        {/* CALL TO ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:hello@example.com"
            className="inline-flex justify-center items-center px-10 py-4 rounded-lg bg-slate-50 text-slate-900 font-bold text-sm tracking-wide hover:bg-slate-200 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-10 py-4 rounded-lg border border-slate-700 bg-transparent text-slate-200 font-bold text-sm tracking-wide hover:bg-white/5 hover:border-slate-500 transition-all duration-300 active:scale-95"
          >
            View Resume
          </a>
        </div>

        {/* MINIMAL CONTACT LINKS */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {[
            { label: 'GitHub', url: '#', icon: <GithubIcon /> },
            { label: 'LinkedIn', url: '#', icon: <LinkedInIcon /> },
            { label: 'Email', url: 'mailto:hello@example.com', icon: <EmailIcon /> },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              aria-label={`Visit my ${link.label}`}
              className="text-slate-500 hover:text-slate-50 transition-colors duration-300 transform hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}