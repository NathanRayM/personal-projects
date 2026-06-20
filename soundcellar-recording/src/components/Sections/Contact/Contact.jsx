import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__left">
        <div className="contact__left--top">
          <div className="contact__info--left">
            <div className="contact__header--container ">
              <h3 className="contact__title">CONTACT</h3>
              <div className="contact__decorative--line"></div>
            </div>
            <p className="contact__description">
              LET'S TALK ABOUT YOUR NEXT PROJECT.
            </p>
          </div>
          <ul className="contact__info--right">
            <li className="contact__info--card">
              <Mail className="contact__icon" size={24} />
              <p className="contact__info">soundcellarrecording@yahoo.com</p>
            </li>
            <li className="contact__info--card">
              <Phone className="contact__icon" size={24} />
              <p className="contact__info">614-350-1640</p>
            </li>
            <li className="contact__info--card">
              <MapPin className="contact__icon" size={24} />
              <p className="contact__info">Grove City, Ohio</p>
            </li>
          </ul>
        </div>
        <div className="contact__decorative--line-bottom"></div>
        <div className="contact__left--bottom">
          <p className="contact__tagline">
            Wether you're and emerging artist or an established name, we're here
            to help you bring your sound to life
          </p>
        </div>
      </div>
      <div className="contact__right">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
