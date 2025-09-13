"use client";
import { useState } from "react";
import styles from "./contact.module.css"; // 

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/mandvnae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(" Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus(" Error: " + error.message);
    }
  };

  return (
    <div id="contact" className={styles.wrap}>
      <div className={styles.card}>
        {/* Left Side Text */}
        <div className={styles.left}>
          <h3>Get in Touch</h3>
          <p>
            Have a project in mind or just want to say hi?<br></br> Fill the form and
            I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Side Form */}
        <div className={styles.right}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            />

            <button type="submit" className={styles.btn}>
              Send Message
            </button>

            {status && (
              <p style={{ color: "white", marginTop: "10px" }}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
