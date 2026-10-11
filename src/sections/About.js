import React from "react";
import { FiAward, FiBookOpen, FiBriefcase, FiMapPin } from "react-icons/fi";
import { faqs, profile } from "../data/content";
import { Avatar } from "./Hero";
import { toneAt } from "../data/tones";

const details = [
  { icon: <FiBriefcase />, label: "Now", value: profile.current },
  { icon: <FiMapPin />, label: "Location", value: profile.location },
  { icon: <FiBookOpen />, label: "Education", value: "B.Tech, Information Technology · SVVV Indore · 2018–2022" },
  { icon: <FiAward />, label: "Recognition", value: "Employee of the Month, iLEAD Group · Jan & Mar 2024" },
];

function About() {
  return (
    <section className="section container" id="about">
      <div className="about-grid">
        <div className="about-photo reveal"><Avatar size="xl" /></div>
        <div className="about-copy reveal">
          <span className="kicker">About me</span>
          <h2>Hi, I’m Prajal.</h2>
          <p>I started at iLEAD Group in 2022, building apps from an empty folder and learning to own every step of a store release. Since then I’ve shipped an e-commerce app from scratch at Deqode, made an edtech app faster and more accessible at 5D Solutions, and now work on patient, payment and membership journeys at MFine.</p>
          <p>What I enjoy most is the unglamorous part: finding the reason a screen is slow, or why a checkout fails for one user in a thousand, and fixing it properly.</p>
          <ul className="about-details">
            {details.map((item, i) => (
              <li key={item.label} className={`tone-${toneAt(i)}`}>{item.icon}<div><span>{item.label}</span><strong>{item.value}</strong></div></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="faq reveal" id="faq">
        <h2 className="faq-title">Questions recruiters ask</h2>
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default About;
