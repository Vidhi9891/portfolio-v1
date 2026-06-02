function Contact() {
  return (
    <section aria-labelledby="contact-title">
      <header>
        <h2 id="contact-title">Contact</h2>
        <p>Placeholder message inviting communication and collaboration.</p>
      </header>

      <address>
        <ul aria-label="Contact links">
          <li>
            <a href="mailto:placeholder@example.com">Email</a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn profile">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" aria-label="GitHub profile">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" aria-label="Resume document">
              Resume
            </a>
          </li>
        </ul>
      </address>
    </section>
  )
}

export default Contact
