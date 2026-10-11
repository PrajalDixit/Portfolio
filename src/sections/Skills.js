import React from "react";
import { principles, skills } from "../data/content";
import { toneAt } from "../data/tones";

function Skills() {
  return (
    <>
      <section className="section container" id="skills">
        <div className="section-head reveal">
          <span className="kicker">Toolbox</span>
          <h2>What I work with every day</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group, i) => (
            <div className={`skill-group tone-${toneAt(i)} reveal`} key={group.group}>
              <h3>{group.group}</h3>
              <ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section principles-section" id="how-i-work">
        <div className="container">
          <div className="section-head reveal">
            <span className="kicker">How I work</span>
            <h2>Habits that keep apps fast and releases calm</h2>
          </div>
          <ol className="principle-grid">
            {principles.map((item, i) => (
              <li className={`principle tone-${toneAt(i)} reveal`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Skills;
