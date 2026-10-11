import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./sections/Header";
import Hero, { ImpactBand } from "./sections/Hero";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact, { Footer } from "./sections/Contact";
import CaseModal from "./sections/CaseModal";
import useReveal from "./hooks/useReveal";

const THEME_KEY = "prajal-theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function readStoredTheme() {
  try { return window.localStorage.getItem(THEME_KEY); } catch { return null; }
}

function App() {
  // Follow the OS setting until the visitor picks a theme explicitly.
  const [theme, setTheme] = useState(() => readStoredTheme() || (darkQuery.matches ? "dark" : "light"));
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useReveal();

  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);

  useEffect(() => {
    const onSystemChange = (event) => { if (!readStoredTheme()) setTheme(event.matches ? "dark" : "light"); };
    darkQuery.addEventListener("change", onSystemChange);
    return () => darkQuery.removeEventListener("change", onSystemChange);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try { window.localStorage.setItem(THEME_KEY, next); } catch { /* storage unavailable; theme still applies for this visit */ }
  };
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <div className="reading-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ImpactBand />
        <Work onOpenProject={setSelectedProject} />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      {selectedProject && <CaseModal project={selectedProject} onClose={closeProject} />}
    </>
  );
}

export default App;
