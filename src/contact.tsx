import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className="bg-white pt-24 pb-30">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">

        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
          Contact Us
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Let's Build Something
          <span className="text-blue-600"> Amazing Together</span>
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Ready to start your AI journey or need a custom AI solution?
          Talk to our expert team today.
        </p>

      </div>

      {/* CONTACT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* CONTACT FORM */}
        <div data-aos="fade-right">

          {sent ? (
            <div className="bg-green-50 border border-green-200 p-10 rounded-3xl text-center">

              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Message Sent 🎉
              </h2>

              <p className="text-slate-600 mb-6">
                Thank you for contacting us. Our team will reply within 24 hours.
              </p>

              <button
                onClick={() => setSent(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full"
              >
                Send Another Message
              </button>

            </div>
          ) : (

            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-200"
            >

              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-slate-300 px-4 py-3 rounded-xl"
                />

              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-slate-300 px-4 py-3 rounded-xl mb-6"
              />

              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-slate-300 px-4 py-3 rounded-xl mb-6"
              >
                <option value="">Select Subject</option>
                <option>AI Development</option>
                <option>Machine Learning</option>
                <option>Corporate Training</option>
                <option>General Inquiry</option>
              </select>

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full border border-slate-300 px-4 py-3 rounded-xl mb-6"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-500 transition"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

            </form>

          )}

        </div>

        {/* CONTACT INFO */}
        <div data-aos="fade-left" className="space-y-6">

          <div className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-center">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <h4 className="font-bold">Our Office</h4>
              <p className="text-slate-500 text-sm">
                Logix Cyber Park, Tower C, Sector 62, Noida
              </p>
            </div>
          </div>

          <a
            href="tel:+919811263046"
            className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-center hover:shadow"
          >
            <FaPhoneAlt className="text-green-600 text-xl" />
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-slate-500 text-sm">+91 98112 63046</p>
            </div>
          </a>

          <a
            href="mailto:pradeep@aixpertslabs.com"
            className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-center hover:shadow"
          >
            <FaEnvelope className="text-pink-600 text-xl" />
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-slate-500 text-sm">
                pradeep@aixpertslabs.com
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/919811263046"
            target="_blank"
            className="bg-green-500 text-white p-6 rounded-2xl flex gap-4 items-center justify-center font-semibold"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
};

export default Contact;