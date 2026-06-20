import "./Hero.css";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <h1 className="hero__heading">SOUND CELLAR RECORDING</h1>
        <p className="hero__info">
          Production <span>•</span> Recording <span>•</span> Mixing{" "}
          <span>•</span> Mastering
        </p>
      </div>

      <div className="hero__bottom">
        <a href="#contact" className="hero__cta">
          Book a Session →
        </a>
        <a href="#audio" className="hero__link">
          Hear Examples →
        </a>
      </div>
      {/* <ChevronDown className="hero__scroll" /> */}
    </section>
  );
}

export default Hero;
