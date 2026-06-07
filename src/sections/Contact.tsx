function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-transparent px-6 py-24 text-slate-200 md:px-10 font-sans"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-14">
          
          <h2 id="contact-title" className="text-3xl font-extrabold tracking-tight text-slate-50 md:text-4xl font-heading">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base leading-relaxed">
            I am open to internships, junior opportunities, and collaborative
            projects where I can keep learning and contribute meaningfully.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Info Block */}
          <section
            aria-labelledby="contact-info-title"
            className="rounded-2xl border border-[#20315c] bg-[#16223f] p-8 shadow-md"
          >
            <h3 id="contact-info-title" className="text-lg font-bold text-slate-100 font-heading">
              Let&apos;s Connect
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              If you would like to discuss a project, role, or collaboration, the
              easiest way to reach me is by email.
            </p>

            <address className="mt-8 not-italic">
              <ul aria-label="Contact methods" className="space-y-6 text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#34d399] font-mono font-bold">
                    // Email
                  </span>
                  <a
                    href="mailto:hello@example.com"
                    className="text-slate-200 hover:text-[#3b82f6] font-semibold transition-colors duration-200 text-base"
                  >
                    hello@example.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#fb7185] font-mono font-bold">
                    // LinkedIn
                  </span>
                  <a
                    href="#"
                    aria-label="LinkedIn profile"
                    className="text-slate-200 hover:text-[#3b82f6] font-semibold transition-colors duration-200 text-base"
                  >
                    linkedin.com/in/your-profile
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#f59e0b] font-mono font-bold">
                    // GitHub
                  </span>
                  <a
                    href="#"
                    aria-label="GitHub profile"
                    className="text-slate-200 hover:text-[#3b82f6] font-semibold transition-colors duration-200 text-base"
                  >
                    github.com/your-username
                  </a>
                </li>
              </ul>
            </address>
          </section>

          {/* Form Block */}
          <section
            aria-labelledby="contact-form-title"
            className="rounded-2xl border border-[#20315c] bg-[#16223f] p-8 shadow-md"
          >
            <h3 id="contact-form-title" className="text-lg font-bold text-slate-100 font-heading">
              Send a Message
            </h3>

            <form className="mt-6 space-y-5" aria-label="Contact form">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-[#20315c] bg-[#0b132b] px-4 py-2.5 text-slate-100 outline-none transition-all duration-200 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-[#20315c] bg-[#0b132b] px-4 py-2.5 text-slate-100 outline-none transition-all duration-200 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-[#20315c] bg-[#0b132b] px-4 py-2.5 text-slate-100 outline-none transition-all duration-200 focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Contact
