// import "./Contact.css";

function ContactForm() {
  return (
    <form className="contact__form">
      <label htmlFor="name" className="form__group">
        <input type="text" placeholder="Name" id="name" required />
      </label>

      <label htmlFor="phone" className="form__group">
        <input type="tel" placeholder="Phone number" id="phone" />
      </label>

      <label htmlFor="email" className="form__group email">
        <input type="email" placeholder="Email" id="email" required />
      </label>

      <label htmlFor="message" className="form__group full">
        <textarea
          rows="6"
          placeholder="Tell us about your project"
          id="message"
          required
        ></textarea>
      </label>

      <div className="form__group">
        <button className="submit__button">SEND MESSAGE →</button>
      </div>
    </form>
  );
}

export default ContactForm;
