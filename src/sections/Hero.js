import React from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { impact, links, profile, resumeUrl } from "../data/content";
import { toneAt } from "../data/tones";

export function Avatar({ size = "md" }) {
  return profile.photo
    ? <img className={`avatar avatar-${size}`} src={profile.photo} alt={profile.name} />
    : <span className={`avatar avatar-${size}`} aria-hidden="true">PD</span>;
}

// Rendered as tokens rather than a raw string so the highlighting stays in CSS.
const codeLines = [
  [["kw", "const "], ["var", "prajal"], ["punct", ": "], ["type", "Engineer"], ["punct", " = {"]],
  [["key", "  role"], ["punct", ": "], ["str", `"${profile.role}"`], ["punct", ","]],
  [["key", "  experience"], ["punct", ": "], ["str", `"${profile.years} years"`], ["punct", ","]],
  [["key", "  platforms"], ["punct", ": ["], ["str", '"iOS"'], ["punct", ", "], ["str", '"Android"'], ["punct", "],"]],
  [["key", "  stack"], ["punct", ": ["], ["str", '"React Native"'], ["punct", ", "], ["str", '"Redux"'], ["punct", "],"]],
  [["key", "  languages"], ["punct", ": ["], ["str", '"TypeScript"'], ["punct", ", "], ["str", '"JavaScript"'], ["punct", "],"]],
  [["key", "  currently"], ["punct", ": "], ["str", '"MFine"'], ["punct", ","]],
  [["key", "  basedIn"], ["punct", ": "], ["str", '"Bengaluru"'], ["punct", ","]],
  [["key", "  openTo"], ["punct", ": "], ["str", '"Full-time roles"'], ["punct", ","]],
  [["punct", "};"]],
];

function CodeCard() {
  return (
    <figure className="code-card" aria-label={`${profile.name}, ${profile.role}, ${profile.years} years, based in Bengaluru, open to full-time roles`}>
      <div className="code-bar" aria-hidden="true">
        <span /><span /><span />
        <em>profile.ts</em>
      </div>
      <pre aria-hidden="true">
        {codeLines.map((line, i) => (
          <code key={i}>
            <span className="ln">{i + 1}</span>
            {line.map(([kind, text], j) => <span key={j} className={`tk-${kind}`}>{text}</span>)}
          </code>
        ))}
      </pre>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="status-pill"><span className="status-dot" /> Open to full-time React Native roles</span>
          <h1>I build React Native apps that <span className="hero-accent">hold up in production.</span></h1>
          <p className="hero-lead">I’m Prajal, a mobile engineer with {profile.years} years of shipping cross-platform apps used by patients, shoppers and students. I care about fast screens, checkouts that don’t break, and releases that go out on time.</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">See my work <FiArrowRight /></a>
            <a href={resumeUrl} className="btn btn-ghost" download="Prajal_Dixit_Resume.pdf"><FiDownload /> Download resume</a>
          </div>
          <div className="hero-social">
            <a href={links.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href={`mailto:${links.email}`}><FiMail /> {links.email}</a>
          </div>
        </div>
        <div className="hero-visual reveal">
          <CodeCard />
          <span className="float-chip tone-amber chip-bottom">Shipped to App Store + Play</span>
        </div>
      </div>
    </section>
  );
}

export function ImpactBand() {
  return (
    <section className="impact container" aria-label="Impact in numbers">
      {impact.map((item, i) => (
        <div className={`impact-card tone-${toneAt(i)}`} key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

export default Hero;
