import React, { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { StoreLinks } from "./Work";
import { categoryTone } from "../data/tones";

function CaseModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className={`case-modal tone-${categoryTone[project.category]}`} role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button ref={closeRef} className="icon-btn modal-close" type="button" onClick={onClose} aria-label="Close case study"><FiX /></button>
        <span className="kicker">{project.company} · {project.year}</span>
        <h2 id="case-title">{project.name}</h2>
        <p className="case-tagline">{project.tagline}</p>

        <div className="case-block">
          <h3>The problem</h3>
          <p>{project.problem}</p>
        </div>
        <div className="case-block">
          <h3>What I did</h3>
          <ul>{project.contribution.map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
        <div className="case-result">
          <span>Result</span>
          <p>{project.impact}</p>
        </div>

        <ul className="tag-list">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <StoreLinks items={project.links} />
      </section>
    </div>
  );
}

export default CaseModal;
