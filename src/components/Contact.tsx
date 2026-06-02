function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-blue-950 px-6 py-20 text-slate-100 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-12">
          <h2 id="contact-title" className="text-2xl font-semibold md:text-3xl">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            I am open to internships, junior opportunities, and collaborative
            projects where I can keep learning and contribute meaningfully.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <section
            aria-labelledby="contact-info-title"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
          >
            <h3 id="contact-info-title" className="text-lg font-medium">
              Let&apos;s Connect
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              If you would like to discuss a project, role, or collaboration, the
              easiest way to reach me is by email.
            </p>

            <address className="mt-5 not-italic">
              <ul aria-label="Contact methods" className="space-y-3 text-sm">
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Email
                  </span>
                  <a
                    href="mailto:hello@example.com"
                    className="text-slate-100 underline"
                  >
                    hello@example.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    LinkedIn
                  </span>
                  <a href="#" aria-label="LinkedIn profile" className="text-slate-100 underline">
                    linkedin.com/in/your-profile
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    GitHub
                  </span>
                  <a href="#" aria-label="GitHub profile" className="text-slate-100 underline">
                    github.com/your-username
                  </a>
                </li>
              </ul>
            </address>
          </section>

          <section
            aria-labelledby="contact-form-title"
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
          >
            <h3 id="contact-form-title" className="text-lg font-medium">
              Send a Message
            </h3>

            <form className="mt-5 space-y-4" aria-label="Contact form">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm text-slate-200">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-blue-950 px-3 py-2 text-slate-100 outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm text-slate-200">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-slate-700 bg-blue-950 px-3 py-2 text-slate-100 outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm text-slate-200">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-slate-700 bg-blue-950 px-3 py-2 text-slate-100 outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-slate-100 px-5 py-2.5 font-medium text-slate-900"
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
