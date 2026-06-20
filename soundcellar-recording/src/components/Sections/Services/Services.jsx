import { services } from "../../../data/services";
import "./Services.css";

function ServiceCard({ title, description, icon, rate }) {
  return (
    <article className="services__card">
      <img className="services__icon" src={icon} alt="" />
      <div className="services__card--info">
        <h3 className="services__title">{title}</h3>
        <p className="services__description">{description}</p>
        <p className="services__rate">{rate}</p>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__top">
          <div className="services___header--container">
            <div className="services__decorative--line"></div>
            <h2 className="services__label">SERVICES</h2>
            <div className="services__decorative--line"></div>
          </div>
          <p className="services__info">WHAT WE DO</p>
          <div className="services__divider"></div>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              rate={service.rate}
            />
          ))}
        </div>
        <div className="services__deposit--container">
          <img
            className="services__deposit--image"
            src="/src/assets/images/headphones-icon.png"
            alt=""
          />
          <p className="services__deposit--info">
            All studio bookings require a deposit. Contact us for details.
          </p>
          <a className="services__contact--button" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
