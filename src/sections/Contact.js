import React, { useState } from "react";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { links, resumeUrl } from "../data/content";

// The site is static (GitHub Pages), so the form composes an email in the visitor's mail app.
function buildMailto({ name, email, company, message }) {
  const subject = `Opportunity for Prajal${company ? ` at ${company}` : ""}`;
  const body = `${message}\n\n${name}${company ? `, ${company}` : ""}\n${email}`;
  return `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value });
  const onSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailto(form);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <span className="kicker kicker-dark">Contact</span>
          <h2>Hiring a React Native engineer?</h2>
          <p>I’m looking for a full-time role on a product team. Send a note about the role and I’ll get back to you.</p>
          <ul className="contact-links">
            <li><a href={`mailto:${links.email}`}><FiMail /> {links.email}</a></li>
            <li><a href={links.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> linkedin.com/in/prajaldixit <FiArrowUpRight /></a></li>
            <li><a href={links.github} target="_blank" rel="noreferrer"><FiGithub /> github.com/PrajalDixit <FiArrowUpRight /></a></li>
            <li><a href={resumeUrl} download="Prajal_Dixit_Resume.pdf"><FiDownload /> Download resume (PDF)</a></li>
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit}>
          <div className="form-row">
            <label>Your name<input required value={form.name} onChange={update("name")} autoComplete="name" /></label>
            <label>Work email<input required type="email" value={form.email} onChange={update("email")} autoComplete="email" /></label>
          </div>
          <label>Company<input value={form.company} onChange={update("company")} autoComplete="organization" /></label>
          <label>Message<textarea required rows={4} value={form.message} onChange={update("message")} placeholder="Tell me about the role and the team" /></label>
          <button className="btn btn-primary" type="submit"><FiSend /> Send message</button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer container">
      <span>© {new Date().getFullYear()} Prajal Dixit</span>
      <div>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
        <a href={`mailto:${links.email}`} aria-label="Email"><FiMail /></a>
      </div>
    </footer>
  );
}

export default Contact;
