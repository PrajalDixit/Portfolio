import React from "react";
import { FiDownload, FiMapPin } from "react-icons/fi";
import { experience, resumeUrl } from "../data/content";
import { toneAt } from "../data/tones";

function Experience() {
  return (
    <section className="section container experience" id="experience">
      <div className="section-head experience-head reveal">
        <span className="kicker">Experience</span>
        <h2>Four years of building for mobile</h2>
        <p>From building apps from scratch to owning store releases and keeping a revenue-critical app stable, every step has been React Native.</p>
        <a className="btn btn-primary" href={resumeUrl} download="Prajal_Dixit_Resume.pdf"><FiDownload /> Full resume (PDF)</a>
      </div>

      <ol className="job-list">
        {experience.map((job, i) => (
          <li className={`job tone-${toneAt(i)} reveal`} key={job.company}>
            <div className="job-top">
              <div>
                <h3>{job.role} <span>@ {job.company}</span></h3>
                <p className="job-context">{job.context}</p>
              </div>
              <div className="job-when">
                <span>{job.period}</span>
                <span><FiMapPin /> {job.location}</span>
              </div>
            </div>
            <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
