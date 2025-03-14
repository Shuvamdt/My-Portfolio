import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(form.email);
      await emailjs.send(
        "service_ygrny0h",
        "template_j2crqqm",
        {
          from_name: form.name,
          to_name: "Shuvam",
          from_email: form.email,
          to_email: "shuvamdt1230@gmail.com",
          message: form.message,
        },
        "59z0DYF7zS_gRro4D"
      );
      setLoading(false);
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (e) {
      setLoading(false);
      alert("Failed to send message. Please try again later.");
      console.error("Error sending email", e);
    }
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex justify-center items-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Contact me</h3>
          <p className="text-lg text-white-600 mt-3">
            I am here to help you with website building
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Ex: John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Ex: johndoe@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Write your message here..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending ..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
