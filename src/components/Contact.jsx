import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>
          Have questions about AI courses, mentorship, or career guidance?
          Fill the form and our team will contact you shortly.
        </p>

        <div className="contact-info">
          <p>📧 support@myaicademy.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 India</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
