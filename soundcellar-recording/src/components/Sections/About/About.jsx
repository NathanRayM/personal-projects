import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__left--image"></div>
      <div className="about__left--content">
        <div className="about__header--container">
          <p className="about__title">ABOUT US</p>
          <div className="about__decorative--line"></div>
        </div>
        <div className="about__left--description">
          <p>EXPERIENCE.</p>
          <p>QUALITY.</p>
          <p>RESULTS.</p>
        </div>
      </div>
      <div className="about__right--content">
        <div className="about__right--info">
          <p className="about__right--description">
            With years of industry experience and a deep passion for sound, we
            deliver professional recordings that connect. Whether you're an
            emerging artist or an established name, we treat every project with
            focus, creativity, and the highest standard of care.
          </p>
          <a href="#contact" className="about__info--button">
            Learn More →
          </a>
        </div>
      </div>
      <div className="about__right--image"></div>
    </section>
  );
}

export default About;
