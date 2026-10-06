import React, { useEffect, useMemo, useState } from "react";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiMoon, FiSun, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const resumeUrl = `${process.env.PUBLIC_URL}/Prajal_Dixit_Resume.pdf`;
const projects = [
  { id: "mfine", name: "MFine", type: "Healthcare · iOS & Android", category: "Healthcare", role: "React Native Engineer", className: "project-mfine", summary: "Making everyday healthcare journeys faster and more dependable.", detail: "At MFine, I work across patient and corporate experiences, including doctor consultations, lab-test booking, medicine checkout, payments, onboarding, and new membership journeys. I rebuilt the lab-test booking flow, removed hidden performance bottlenecks, and cut screen load time by about 30% across iOS and Android.", outcome: "~30% faster lab-test booking screen loads", tags: ["React Native", "TypeScript", "Redux", "Healthcare"] },
  { id: "nerovega", name: "Nerovega", type: "Commerce · iOS & Android", category: "Commerce", role: "Solution Engineer · Deqode", className: "project-nero", summary: "A cross-platform shopping app built and shipped from the ground up.", detail: "I established the app architecture, connected backend APIs, shaped navigation and data flow, and shipped Nerovega to the App Store and Google Play. I also improved catalogue browsing performance and added internationalization, including right-to-left language support.", outcome: "Production release on App Store and Google Play", tags: ["React Native", "E-commerce", "i18n", "RTL"] },
  { id: "uep", name: "UEP Viewer", type: "Event photography · Mobile", category: "Mobile", role: "Software Developer · iLEAD Group", className: "project-uep", summary: "An event companion for discovering and purchasing event photography.", detail: "I built UEP Viewer from the ground up, creating the app's data architecture and reusable screen components so the team could add features without destabilizing the live product. I also owned Android and iOS release processes across multiple applications.", outcome: "Reusable app architecture and end-to-end store releases", tags: ["Mobile", "Architecture", "App Store", "Play Store"] },
  { id: "zipsecure", name: "ZipSecure", type: "Security · Mobile", category: "Mobile", role: "Software Developer · iLEAD Group", className: "project-zip", summary: "Real-time security workflows for gated communities.", detail: "I developed live security workflows with data synchronization, asynchronous operations, and native device interactions across platforms. The work required careful handling of behaviors that differ between Android and iOS.", outcome: "Cross-platform, real-time security workflows", tags: ["Mobile", "Real-time", "Native integrations"] },
  { id: "ananda", name: "Ananda Wellbeing", type: "Wellness · Mobile", category: "Healthcare", role: "Software Developer · iLEAD Group", className: "project-ananda", summary: "A holistic wellbeing app for a healthier mind and body.", detail: "Ananda Wellbeing brings together wellness assessments, consultations, wellness programs, lifestyle guidance, and curated content. At iLEAD Group, I contributed to its mobile experience, working with live data, asynchronous operations, and native device capabilities across platforms.", outcome: "Wellness assessments, consultations, programs, lifestyle guidance, and curated content", tags: ["Mobile", "Wellness", "Consultations"] },
];
const experience = [
  { company: "MFine", role: "React Native Developer", period: "Nov 2025 — Present", location: "Bengaluru", note: "Healthcare SaaS · Patient, payment, and membership journeys" },
  { company: "5D Solutions", role: "React Native Developer", period: "Jul 2025 — Oct 2025", location: "Pune", note: "HomeEducation · Performance and accessibility" },
  { company: "Deqode", role: "Solution Engineer", period: "Oct 2024 — Jun 2025", location: "Indore", note: "Nerovega · E-commerce mobile app" },
  { company: "iLEAD Group", role: "Software Developer", period: "Aug 2022 — Sep 2024", location: "Indore", note: "UEP Viewer, ZipSecure, and Ananda Wellbeing" },
];
const filters = ["All work", "Healthcare", "Commerce", "Mobile"];
const skillGroups = [
  { title: "Build", items: "React Native · TypeScript · JavaScript · React" },
  { title: "Structure", items: "Redux Toolkit · Context API · React Navigation · WebView bridges" },
  { title: "Ship", items: "iOS · Android · CI/CD · OTA updates · App Store releases" },
  { title: "Find & fix", items: "Performance profiling · Production debugging · Flipper · Xcode" },
];

function ProjectArtwork({ project, index, modal = false }) {
  const monograms = { mfine: "MF", nerovega: "N", uep: "UEP", zipsecure: "ZS", ananda: "AW" };
  return (
    <div className={`project-artwork artwork-${project.id}${modal ? " modal-artwork" : ""}`} aria-hidden="true">
      <span className="artwork-orbit" />
      <span className="artwork-index">0{index + 1} / MOBILE PRODUCT</span>
      <div className="artwork-panel">
        <span className="artwork-category">{project.category}</span>
        <span className="artwork-monogram">{monograms[project.id]}</span>
        <strong>{project.name}</strong>
        <span className="artwork-type">{project.type}</span>
        <span className="artwork-tags">{project.tags.slice(0, 2).join(" · ")}</span>
      </div>
      <span className="artwork-caption">PRODUCT ENGINEERING / {project.role.split(" · ")[0].toUpperCase()}</span>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem("prajal-theme") || "light");
  const [activeFilter, setActiveFilter] = useState("All work");
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const visibleProjects = useMemo(() => activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("prajal-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKeyDown = (event) => { if (event.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [selectedProject]);

  const closeProject = () => setSelectedProject(null);

  return (
    <div className="portfolio-shell">
      <div className="reading-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <header className="site-header">
        <a href="#home" className="wordmark" aria-label="Prajal Dixit, home">pd<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work <span>01</span></a><a href="#about">About <span>02</span></a><a href="#experience">Experience <span>03</span></a>
        </nav>
        <div className="header-actions">
          <a className="header-contact" href="mailto:vkdixit46@gmail.com">Let’s Connect <FiArrowUpRight /></a>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <FiMoon /> : <FiSun />}</button>
        </div>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="availability-dot" /> REACT NATIVE ENGINEER <span className="eyebrow-divider">/</span> BHOPAL, INDIA</div>
            <h1>I build mobile<br />experiences that <span className="serif-italic">move people.</span></h1>
            <p className="hero-summary">Four years building and shipping cross-platform apps across healthcare, commerce, and wellness. Thoughtful engineering, from the first API call to the app-store release.</p>
            <div className="hero-actions"><a href="#work" className="button button-dark">Explore selected work <FiArrowDownRight /></a><a href={resumeUrl} className="text-link" target="_blank" rel="noreferrer">View résumé <FiArrowUpRight /></a></div>
            <div className="hero-foot"><span><FiMapPin /> Currently building at MFine</span><span>Scroll to explore <FiArrowDownRight /></span></div>
          </div>
          <div className="hero-art reveal" aria-label="Abstract composition celebrating thoughtful mobile engineering">
            <div className="hero-art-orbit orbit-one" /><div className="hero-art-orbit orbit-two" />
            <div className="hero-stamp"><HiOutlineSparkles /><span>DESIGNED<br />TO BE USED</span></div>
            <div className="hero-phone"><div className="phone-speaker" /><div className="phone-screen"><span className="phone-kicker">MFINE · TODAY</span><span className="phone-big">Care,<br /><em>in motion.</em></span><div className="phone-chip">Your health, made simpler <FiArrowUpRight /></div><div className="phone-bars"><i /><i /><i /><i /><i /><i /><i /></div><span className="phone-caption">A little better, every day.</span></div></div>
            <div className="art-caption"><span>01 — 04</span><span>PEOPLE FIRST. PIXEL BY PIXEL.</span></div>
          </div>
        </section>

        <section className="proof-strip"><div><strong>4<span>+</span></strong><p>years building<br />mobile products</p></div><div><strong>~30<span>%</span></strong><p>faster lab booking<br />screen loads</p></div><div><strong>02</strong><p>platforms shipped<br />iOS + Android</p></div><div><strong>04</strong><p>industries worked<br />health · commerce · more</p></div></section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading reveal"><div><span className="section-index">01 / SELECTED WORK</span><h2>Good work,<br /><span className="serif-italic">built for real life.</span></h2></div><p>Mobile products shaped by the people who depend on them. A few things I’ve had the chance to build, improve, and ship.</p></div>
          <div className="filter-row reveal" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={`filter-pill ${activeFilter === filter ? "active" : ""}`} type="button" onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === "All work" ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}</div>
          <div className="project-grid">{visibleProjects.map((project, index) => <article key={project.id} className={`project-card ${project.className} reveal`} style={{ "--reveal-delay": `${(index % 2) * 90}ms` }}>
            <button className="project-visual" type="button" onClick={() => setSelectedProject(project)} aria-label={`Open ${project.name} case study`}><ProjectArtwork project={project} index={index} /><span className="visual-kicker">{project.type}</span><span className="visual-arrow"><FiArrowUpRight /></span><span className="visual-number">0{index + 1}</span></button>
            <div className="project-info"><div><span className="project-role">{project.role}</span><h3>{project.name}</h3><p>{project.summary}</p></div><button className="case-link" type="button" onClick={() => setSelectedProject(project)} aria-label={`Read ${project.name} case study`}><FiArrowRight /></button></div>
            <div className="project-tags">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>)}</div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-top reveal"><div><span className="section-index">02 / A LITTLE ABOUT ME</span><h2>Engineering with<br /><span className="serif-italic">the human in mind.</span></h2></div><div className="about-intro"><p>I’m Prajal, a React Native engineer based in Bhopal, India. I care about the everyday moments in an app: the page that loads without a wait, the checkout that just works, the details that make a product feel easy.</p><p>From healthcare to commerce, I’ve worked across the whole product journey—building features, untangling production issues, improving performance, and getting releases into people’s hands.</p><a href="mailto:vkdixit46@gmail.com" className="text-link">Interested in working together? Get in touch. <FiArrowUpRight /></a></div></div>
          <div className="skill-grid">{skillGroups.map((group, i) => <div className="skill-card reveal" key={group.title} style={{ "--reveal-delay": `${i * 70}ms` }}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><p>{group.items}</p></div>)}</div>
          <div className="education-card reveal"><span className="section-index">ALWAYS LEARNING</span><div><h3>B.Tech, Information Technology</h3><p>Shri Vaishnav Vidyapeeth Vishwavidyalaya · Indore · 2018–2022</p></div><span className="education-mark">SVVV</span></div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading experience-heading reveal"><div><span className="section-index">03 / THE JOURNEY SO FAR</span><h2>Where I’ve<br /><span className="serif-italic">made an impact.</span></h2></div><p>Good products come from good teams. Here’s where I’ve had the opportunity to contribute.</p></div>
          <div className="timeline">{experience.map((item, i) => <article className="timeline-item reveal" key={item.company} style={{ "--reveal-delay": `${i * 60}ms` }}><div className="timeline-date">{item.period}</div><div className="timeline-marker"><span /></div><div className="timeline-content"><div><h3>{item.company}</h3><span className="timeline-role">{item.role}</span></div><p>{item.note}</p><span className="timeline-location">{item.location}, India</span></div></article>)}</div>
          <p className="honor-note reveal"><HiOutlineSparkles /> Recognized as Employee of the Month at iLEAD Group in January and March 2024.</p>
        </section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-card reveal"><div className="contact-topline"><span className="section-index">04 / YOUR NEXT BUILD?</span><span><span className="availability-dot" /> AVAILABLE FOR A GOOD CONVERSATION</span></div><h2>Let’s make<br /><span className="serif-italic">something useful.</span></h2><p>Have a product challenge, an idea, or just want to talk mobile? I’d love to hear about it.</p><div className="contact-actions"><a className="button button-light" href="mailto:vkdixit46@gmail.com">Say hello <FiArrowUpRight /></a><a className="contact-email" href="mailto:vkdixit46@gmail.com">vkdixit46@gmail.com <FiArrowUpRight /></a></div><div className="contact-scribble" aria-hidden="true">✳</div></div></section>
      </main>

      <footer className="site-footer"><a href="#home" className="wordmark">pd<span>.</span></a><span>Built with care by Prajal Dixit · {new Date().getFullYear()}</span><div><a href="https://www.linkedin.com/in/prajaldixit/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="https://github.com/prajaldixit" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href="mailto:vkdixit46@gmail.com" aria-label="Email Prajal"><FiMail /></a><a href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Download résumé"><FiDownload /></a></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeProject(); }}><section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title"><button className="modal-close" type="button" onClick={closeProject} aria-label="Close case study"><FiX /></button><ProjectArtwork project={selectedProject} index={projects.indexOf(selectedProject)} modal /><span className="section-index">CASE STUDY / {selectedProject.type.toUpperCase()}</span><h2 id="case-title">{selectedProject.name}</h2><p className="modal-role">{selectedProject.role}</p><p className="modal-detail">{selectedProject.detail}</p><div className="modal-outcome"><span>THE OUTCOME</span><strong>{selectedProject.outcome}</strong></div><div className="project-tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section></div>}
    </div>
  );
}

export default App;
