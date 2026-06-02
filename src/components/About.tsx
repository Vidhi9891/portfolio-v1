function About() {
  return (
    <section aria-labelledby="about-title">
      <h2 id="about-title">About</h2>

      <div>
        <figure>
          <img src="" alt="Placeholder portrait illustration" />
          <figcaption>Portrait or illustration area.</figcaption>
        </figure>

        <div>
          <article aria-labelledby="who-i-am-title">
            <h3 id="who-i-am-title">Who I Am</h3>
            <p>Placeholder content describing personal background and values.</p>
          </article>

          <article aria-labelledby="current-focus-title">
            <h3 id="current-focus-title">Current Focus</h3>
            <p>
              Placeholder content about what is currently being learned and
              built.
            </p>
          </article>

          <article aria-labelledby="design-interests-title">
            <h3 id="design-interests-title">Design Interests</h3>
            <p>
              Placeholder content about visual language, interaction ideas, and
              user experience interests.
            </p>
          </article>

          <article aria-labelledby="development-interests-title">
            <h3 id="development-interests-title">Development Interests</h3>
            <p>
              Placeholder content about frontend engineering, architecture, and
              implementation interests.
            </p>
          </article>

          <article aria-labelledby="future-aspirations-title">
            <h3 id="future-aspirations-title">Future Aspirations</h3>
            <p>
              Placeholder content about long-term goals and the direction ahead.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
