import React, { useMemo, useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";
import { categoryTone } from "../data/tones";

const filters = ["All", ...new Set(projects.map((project) => project.category))];

export function StoreLinks({ items }) {
  if (!items.length) return null;
  return (
    <div className="store-links">
      {items.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <FiArrowUpRight /></a>)}
    </div>
  );
}

function Work({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);
  useReveal([activeFilter]);
  // The first card always spans the full row. If the cards after it are an odd
  // number, the last one spans too, so the two-column grid never leaves a gap.
  const lastIndex = visibleProjects.length - 1;
  const isFeatured = (index) => index === 0 || (index === lastIndex && lastIndex % 2 === 1);

  return (
    <section className="section container" id="work">
      <div className="section-head reveal">
        <span className="kicker">Selected work</span>
        <h2>Apps I’ve built, fixed and shipped</h2>
        <p>Production apps across healthcare, commerce and edtech, plus two side projects with public code.</p>
      </div>

      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button key={filter} type="button" className={`chip-btn${filter !== "All" ? ` tone-${categoryTone[filter]}` : ""}${activeFilter === filter ? " is-active" : ""}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article key={project.id} className={`project-card tone-${categoryTone[project.category]} reveal${isFeatured(index) ? " is-featured" : ""}`}>
            <div className="project-metric">
              <strong>{project.metric.value}</strong>
              <span>{project.metric.label}</span>
            </div>
            <div className="project-body">
              <span className="project-meta"><span className="cat-dot" />{project.category} · {project.company} · {project.year}</span>
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
              <ul className="tag-list">{project.stack.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div className="project-foot">
              <button type="button" className="text-btn" onClick={() => onOpenProject(project)} aria-label={`Read the ${project.name} case study`}>Case study <FiArrowRight /></button>
              <StoreLinks items={project.links} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
